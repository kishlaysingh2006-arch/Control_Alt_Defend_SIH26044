# Agentic Build Prompts — Corrected Sequence (v2)

Feed these to your coding agent one at a time. Do not move to the next
prompt until the current one runs and is committed. This version fixes six
gaps found in the original sequence — see the note at the bottom of each
prompt marked `FIX:` for what changed and why.

Scope lock this sequence assumes: Next.js (App Router) + Tailwind + Prisma +
PostgreSQL, no auth (role-switcher UI only), bounties/submissions are
domain-neutral tech skills, and the Skill Trends panel (Phase 6) uses the
real `skill_trends.json` (AYUSH-themed) you already built.

---

## Phase 1: Foundation & Data Layer

### Prompt 1: Project Init & Schema

> "We are building a Next.js (App Router) application with Tailwind CSS and
> Prisma ORM connected to a PostgreSQL database. Initialize the project and
> set up the Prisma schema. We need exactly three models, no more:
>
> ```prisma
> model User {
>   id          String       @id @default(cuid())
>   name        String
>   institute   String
>   gpa         Float
>   anonymousId String       @unique
>   submissions Submission[]
> }
>
> model Bounty {
>   id             String       @id @default(cuid())
>   title          String
>   company        String
>   description    String
>   requiredSkills String[]
>   submissions    Submission[]
> }
>
> model Submission {
>   id             String   @id @default(cuid())
>   bountyId       String
>   bounty         Bounty   @relation(fields: [bountyId], references: [id])
>   studentId      String
>   student        User     @relation(fields: [studentId], references: [id])
>   submissionText String
>   matchedSkills  String[] @default([])
>   heuristicScore Float?
>   shortlisted    Boolean  @default(false)
>   createdAt      DateTime @default(now())
> }
> ```
>
> Do not add a `role` field or a separate Recruiter model — recruiters are a
> UI view-mode, not a database record, in this app. Do not add an `age`
> field. Run the migration and confirm it applies cleanly."

**FIX:** original schema had a `role` enum and no `matchedSkills` or
`shortlisted` fields — meaning the Shortlist button in Phase 3 would have
had nothing to write to, and the "verified skill badges" UI would have had
no data to render.

---

### Prompt 2: Seeding Students & Bounties (no submissions yet)

> "Create a Prisma seed script. Do NOT create any Submission records in this
> step. Create exactly these 5 Users, verbatim:
>
> | name | institute | gpa | anonymousId |
> |---|---|---|---|
> | Aditi Sharma | IIT Bombay | 9.1 | K7X2P |
> | Karan Verma | Delhi Technological University | 8.6 | M4Q9L |
> | Meera Iyer | NIT Trichy | 8.0 | R1T6W |
> | Sana Sheikh | Private Engineering College, Indore | 7.2 | V8D3Z |
> | Ravi Kumar | Government Polytechnic, Bhopal | 6.4 | N5H0C |
>
> Create exactly these 3 Bounties, verbatim:
>
> 1. title: 'Build a REST API for a Task Tracker', company: 'Northwind
>    Labs', requiredSkills: ['Node', 'Express', 'PostgreSQL', 'REST API
>    design']
> 2. title: 'Build a Data Visualization Dashboard', company: 'Vertex
>    Analytics', requiredSkills: ['React', 'D3.js', 'Data Visualization']
> 3. title: 'Write Automated Tests for a Checkout Flow', company: 'BluePeak
>    Systems', requiredSkills: ['JavaScript', 'Jest', 'Test Automation']
>
> Execute the seed script and confirm all 5 users and 3 bounties exist."

**FIX:** original seeded 3 students plus a persisted Recruiter user. We
locked 4-5 students specifically so the blind-view reorder moves multiple
cards, not two — and Recruiter isn't a real account in this design, so
seeding one contradicts the no-auth decision.

---

## Phase 2: Scoring Engine (built once, used twice)

### Prompt 3: Shared Scoring Utility

> "Create a standalone, pure utility function at `lib/scoring.ts`:
>
> ```ts
> function scoreSubmission(submissionText: string, requiredSkills: string[]):
>   { matchedSkills: string[]; heuristicScore: number }
> ```
>
> For each skill in `requiredSkills`, check (case-insensitive) whether it
> appears as a substring anywhere in `submissionText`. Return the list of
> matched skills and a `heuristicScore` = (matchedSkills.length /
> requiredSkills.length) * 100, rounded to the nearest integer. Add a
> comment explaining this is a hackathon placeholder for an NLP/vector
> embedding pipeline — the interface (text + skill list in, score + matches
> out) is designed to stay valid if that function is swapped in later.
> This function must not touch the database — it's pure logic so it can be
> called from both the live submission API route and the seed script
> without duplicating the matching logic in two places."

**FIX:** the original sequence buried this logic inline inside the API
route (Prompt 4), which meant there was no way to compute consistent scores
for seeded submissions without copy-pasting the same logic twice. Pulling
it out as a shared function is what makes Prompt 5 (below) possible.

---

## Phase 3: The Core Loop (Student Side)

### Prompt 4: Bounty Board, Submission Page, API Route

> "Create a server-rendered page at `/bounties` that fetches all Bounties
> via Prisma and displays them as cards in a clean Tailwind grid, each
> showing title, company, and requiredSkills as tags. Each card links to a
> dynamic route `/bounties/[id]` with a text area for submission text and a
> submit button. Create `POST /api/submissions` that accepts `bountyId`,
> `studentId`, and `submissionText`; calls `scoreSubmission()` from
> `lib/scoring.ts` against the bounty's `requiredSkills`; and saves the
> submission with the resulting `matchedSkills` and `heuristicScore`. For
> now, hardcode `studentId` to Ravi Kumar's seeded id — we'll swap this for
> a real student picker later if there's time, but it's not required for
> the demo."

**FIX:** same as original, but now calls the shared function instead of
reimplementing scoring inline.

---

## Phase 4: Seeding the Demo's Punchline

### Prompt 5: Seed the Engineered Submissions

> "Extend the seed script to insert exactly these 5 Submission records
> against the 'Build a REST API for a Task Tracker' bounty. For each, call
> `scoreSubmission()` from `lib/scoring.ts` to compute `matchedSkills` and
> `heuristicScore` at seed time — do not hardcode the scores, compute them,
> so we can verify the function behaves as expected:
>
> | student | submissionText |
> |---|---|
> | Ravi Kumar | 'Built a full REST API design using Node and Express, connected to a PostgreSQL database for persistent storage. Implemented CRUD endpoints with proper REST API design conventions, used Express middleware for validation, and Node async patterns for database calls to PostgreSQL.' |
> | Sana Sheikh | 'Developed a Node backend using Express with clean REST API design principles for routing. The persistence layer was planned for a relational database but not fully implemented.' |
> | Karan Verma | 'Implemented database queries directly against PostgreSQL and designed the response formats to follow REST API design best practices.' |
> | Meera Iyer | 'Used Node for backend scripting, and structured the project using Express-inspired middleware patterns for clarity.' |
> | Aditi Sharma | 'Focused primarily on the frontend React interface, with backend integration using PostgreSQL for storage via an ORM abstraction.' |
>
> After seeding, print each submission's computed heuristicScore to the
> console. Expected results (verify the agent's output matches): Ravi 100
> (4/4), Sana 75 (3/4), Karan 50 (2/4), Meera 50 (2/4), Aditi 25 (1/4). If
> the printed scores don't match, do not proceed — the matching logic has a
> bug that needs fixing before the demo, since this exact reorder (Ravi
> jumps from last-by-pedigree to first-by-score, Aditi drops from
> first-by-pedigree to last-by-score) is the core demo moment."

**FIX:** this step didn't exist at all in the original sequence. Without
it, the blind-view toggle would have nothing meaningful to reorder — the
demo's single most important visual moment was left to chance.

---

## Phase 5: The Crown Jewel (Recruiter View)

### Prompt 6: Blind Merit Engine Dashboard

> "Create a page at `/dashboard/[bountyId]` (default to the 'Build a REST
> API for a Task Tracker' bounty's id). Fetch all Submissions for that
> bounty only, including related Student and Bounty data — do not mix
> submissions from different bounties in one ranked list, since they're
> scored against different requiredSkills and aren't comparable. Add a
> state toggle: 'Raw View' vs 'Blind Merit View'.
>
> Raw View: table showing real Name, Institute, GPA, submissionText, and
> heuristicScore, in default (unsorted or by submission date) order.
>
> Blind Merit View: hide Name, Institute, GPA entirely. Show `anonymousId`
> instead of Name. Sort strictly descending by `heuristicScore`. Show
> `matchedSkills` as small badges (e.g. 'Node ✓', 'Express ✓') next to the
> score. Add a 'Shortlist' button per row that calls a new
> `PATCH /api/submissions/[id]` route toggling the `shortlisted` boolean,
> and reflect the shortlisted state visually (e.g. a highlighted row or a
> filled-in badge). Make the transition between Raw and Blind view
> instantaneous and visually distinct."

**FIX:** original dashboard queried all submissions globally (not scoped to
one bounty, making cross-bounty score comparison meaningless) and had a
Shortlist button wired to nothing, since `shortlisted` didn't exist on the
schema yet.

---

## Phase 6: The Simulated Vision

### Prompt 7: Predictive Curriculum Delta Dashboard

> "Create a standalone page at `/curriculum-delta`. Do not connect this to
> the database. Import the JSON file at [give the agent the actual path
> you place `skill_trends.json` at, e.g. `/data/skill_trends.json`] and
> render its real fields: `skill`, `category`, `nsqf_level`,
> `demand_trend_pct`, and `note`, per entry — one bar or progress indicator
> per skill sized by `demand_trend_pct`, grouped by `category`. Render the
> `_note` field from the JSON as a visible disclaimer banner at the top of
> the page verbatim, since it already states this is illustrative sample
> data. Do not invent placeholder data — use only what's in the file."

**FIX:** original told the agent to invent its own mock JSON array from
scratch, meaning it would never have used the AYUSH-grounded dataset you
already built and cited — you'd have ended up with two different,
disconnected 'skill trends' datasets.

---

## Quick pre-flight check before Prompt 5

Before you run Prompt 5, do the multiplication by hand once, so you'd catch
a scoring bug even if the agent's printed output looked plausible but wrong:
Ravi mentions all 4 required terms -> 4/4 -> 100. Sana mentions 3 (Node,
Express, REST API design) -> 75. Karan mentions 2 (PostgreSQL, REST API
design) -> 50. Meera mentions 2 (Node, Express) -> 50. Aditi mentions 1
(PostgreSQL) -> 25. If the agent's console output doesn't match this, stop
and debug the matching function — don't build the dashboard on top of a
broken score.
