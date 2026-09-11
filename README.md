# Blind Merit Engine

> A skill-based merit evaluation platform that removes bias from recruitment by focusing on demonstrated competency rather than institutional pedigree.

## Problem Statement (SIH-95)

**The Challenge:** Traditional recruitment systems in India suffer from systematic bias, where candidates from tier-1 institutions (IITs, NITs) are automatically prioritized over those from tier-2/3 colleges, regardless of actual skill level. This creates a "pedigree trap" where:

- Students from tier-2/3 institutions struggle to get opportunities despite having strong skills
- Recruiters miss out on talented candidates due to institutional bias
- The focus shifts from "what can you do" to "where did you study"
- Educational background becomes a barrier rather than a signal of competency

## The Solution

The Blind Merit Engine solves this by implementing a **two-view evaluation system**:

### 1. **Blind Merit View** (Skill-First Evaluation)
- Recruiters see only **anonymous candidate IDs** (e.g., "K7X2P", "M4Q9L")
- Submissions are ranked purely by **skill match scores** (0-100%)
- All identifying information (name, institute, GPA) is hidden
- Forces evaluation based on demonstrated competency in actual work

### 2. **Raw View** (Traditional View)
- Full candidate information visible (name, institute, GPA)
- Sorted by GPA (traditional pedigree-based ranking)
- Allows comparison with traditional hiring methods
- Demonstrates the contrast between bias-driven and skill-driven evaluation

### Why This Works

By making **blind evaluation the default** and skill scores the primary metric, recruiters are forced to:
1. Read and evaluate actual work submissions
2. Judge candidates on demonstrated skills, not institutional prestige
3. Shortlist based on competency matches, not academic pedigree
4. Only reveal identity after skill-based filtering

This approach ensures that a 7.2 GPA student from a private college who demonstrates strong Panchakarma Protocol knowledge gets prioritized over a 9.1 GPA IIT student who doesn't show those skills.

## 🏗️ Architecture & Tech Stack

### Core Technologies

#### **Next.js 15 (React 19)** — Full-Stack Framework
- **Why:** Unified frontend and backend in a single codebase
- **What:** Handles both UI rendering (React Server Components) and API routes
- **Use Case:** 
  - Server-side rendering for fast page loads
  - Built-in API routes (`/api/submissions`) for database operations
  - File-based routing for intuitive navigation structure
  - Automatic code splitting for optimal performance

#### **TypeScript** — Type-Safe Development
- **Why:** Catch errors at compile time, not runtime
- **What:** Adds static typing to JavaScript
- **Use Case:**
  - Type-safe database operations with Prisma
  - Prevents prop mismatches in React components
  - IntelliSense support for better developer experience
  - Enforces data structure consistency across the stack

#### **PostgreSQL** — Relational Database
- **Why:** Robust, scalable, and supports complex relationships
- **What:** Industry-standard SQL database
- **Use Case:**
  - Stores users, bounties, and submissions with foreign key relationships
  - Handles concurrent read/write operations safely
  - Supports array fields (requiredSkills, matchedSkills)
  - Enables complex queries for dashboard analytics

#### **Prisma ORM** — Database Abstraction Layer
- **Why:** Type-safe database access without writing raw SQL
- **What:** Modern ORM with schema-first approach
- **Use Case:**
  - Schema definition in `prisma/schema.prisma`
  - Auto-generated TypeScript types from database schema
  - Database migrations (`prisma migrate`)
  - Seed scripts for demo data generation
  - Query builder with type safety

#### **Tailwind CSS** — Utility-First Styling
- **Why:** Rapid UI development without leaving HTML
- **What:** CSS framework with pre-defined utility classes
- **Use Case:**
  - Responsive design with mobile-first approach
  - Consistent spacing, colors, and typography
  - Component styling without CSS files
  - Dark mode support (if needed)
  - Fast prototyping and iteration

### Data Flow

```
User Browser → Next.js Frontend (React Components)
                      ↓
              Next.js API Routes (/api/submissions)
                      ↓
              Prisma Client (ORM)
                      ↓
              PostgreSQL Database
```

## Project Structure

```
Control_Alt_Defend_SIH26044/
├── app/                          # Next.js 15 App Router
│   ├── page.tsx                  # Home page (landing)
│   ├── layout.tsx                # Root layout with global styles
│   ├── globals.css               # Global CSS and Tailwind imports
│   ├── bounties/                 # Bounty listing and detail pages
│   │   ├── page.tsx              # List of available bounties
│   │   └── [id]/                 # Dynamic route for bounty details
│   │       ├── page.tsx          # Bounty detail page
│   │       └── SubmissionForm.tsx # Form for submitting work
│   ├── dashboard/                # Recruiter evaluation interface
│   │   ├── page.tsx              # Dashboard home (bounty selector)
│   │   └── [bountyId]/           # Dynamic route for per-bounty dashboard
│   │       ├── page.tsx          # Server component (data fetching)
│   │       └── DashboardView.tsx # Client component (view toggle, shortlist)
│   ├── curriculum-delta/         # Predictive skill trends page
│   │   └── page.tsx              # AYUSH sector skill demand visualization
│   └── api/                      # Backend API routes
│       └── submissions/
│           ├── route.ts          # POST: create submission
│           └── [id]/
│               └── route.ts      # PATCH: update shortlist status
├── lib/                          # Shared utilities
│   ├── prisma.ts                 # Prisma client singleton
│   └── scoring.ts                # Skill matching algorithm
├── prisma/                       # Database schema and migrations
│   ├── schema.prisma             # Database schema definition
│   ├── migrations/               # Auto-generated migration files
│   ├── seed.ts                   # Creates users and bounties
│   └── seed-submissions.ts       # Creates demo submissions
├── skill_trends (1).json         # AYUSH sector skill demand data
└── package.json                  # Dependencies and scripts
```

### Key File Purposes

- **`app/dashboard/[bountyId]/DashboardView.tsx`**: Implements the core blind merit vs. raw view toggle
- **`lib/scoring.ts`**: Contains the skill matching algorithm (currently substring matching, designed to be swapped with NLP/AI)
- **`prisma/schema.prisma`**: Defines the data model (User, Bounty, Submission relationships)
- **`app/api/submissions/route.ts`**: Handles submission creation and scoring
- **`skill_trends (1).json`**: Real AYUSH sector market data from NSDC/HSSC for curriculum planning

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v20 or higher)
- **PostgreSQL** (running locally or via Docker)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Control_Alt_Defend_SIH26044
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   
   Create a PostgreSQL database:
   ```bash
   createdb blind_merit_mvp
   ```
   
   Update the `.env` file with your database connection string:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/blind_merit_mvp?schema=public"
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Seed the database**
   ```bash
   npm run seed        # Creates 5 users and 3 AYUSH bounties
   npm run seed:submissions # Creates 15 demo submissions
   # OR run both:
   npm run seed:all
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open the application**
   
   Visit [http://localhost:3000](http://localhost:3000) in your browser

## 🎮 Usage Guide

### For Students (Candidates)

1. **Browse Bounties**: Navigate to `/bounties` to see available skill challenges
2. **Select a Bounty**: Click on a bounty to view requirements and details
3. **Submit Work**: Fill out the submission form with your:
   - Name, Institute, GPA (stored for recruiter's raw view)
   - Submission text demonstrating your skills
4. **Automatic Scoring**: System automatically matches your submission against required skills

### For Recruiters

1. **Access Dashboard**: Navigate to `/dashboard`
2. **Select a Bounty**: Click on a bounty to review submissions
3. **Toggle View Modes**:
   - **Blind Merit View**: See only anonymous IDs and skill scores (sorted by skill match)
   - **Raw View**: See full candidate details (sorted by GPA/pedigree)
4. **Evaluate Submissions**: Read actual work and see which skills matched
5. **Shortlist Candidates**: Click "Shortlist" to mark promising candidates
6. **Compare Rankings**: Notice how blind merit vs. pedigree sorting changes the order

### For Curriculum Planners

1. **View Skill Trends**: Navigate to `/curriculum-delta`
2. **Explore AYUSH Sector Data**: See real market projections and skill demand
3. **Identify Curriculum Gaps**: Skills with high demand trends indicate training priorities
4. **Plan Training Programs**: Use NSQF level and training hours for program design

## How Skill Scoring Works

### Current Implementation (MVP)

The scoring system uses **case-insensitive substring matching**:

```typescript
// lib/scoring.ts (simplified)
function scoreSubmission(submissionText: string, requiredSkills: string[]) {
  const normalizedText = submissionText.toLowerCase();
  
  const matchedSkills = requiredSkills.filter(skill =>
    normalizedText.includes(skill.toLowerCase())
  );
  
  const score = (matchedSkills.length / requiredSkills.length) * 100;
  
  return { matchedSkills, heuristicScore: score };
}
```

**Example:**
- Bounty requires: `["Panchakarma Protocol", "Patient Documentation", "Wellness Tracking"]`
- Submission mentions: "I have experience with Panchakarma Protocol and Patient Documentation..."
- Result: 2/3 skills matched = **67% score**

### Future Enhancement (Production-Ready)

Replace with **NLP/AI-based semantic matching**:

```typescript
// Future implementation
async function scoreSubmission(submissionText: string, requiredSkills: string[]) {
  // Option 1: Vector embeddings (OpenAI, Sentence Transformers)
  const submissionEmbedding = await getEmbedding(submissionText);
  const skillEmbeddings = await Promise.all(requiredSkills.map(getEmbedding));
  
  // Calculate cosine similarity
  const matchedSkills = skillEmbeddings
    .map((skillEmb, idx) => ({
      skill: requiredSkills[idx],
      similarity: cosineSimilarity(submissionEmbedding, skillEmb)
    }))
    .filter(s => s.similarity > THRESHOLD);
  
  // Option 2: Fine-tuned classification model
  // Option 3: LLM-based evaluation (GPT-4, Gemini)
  
  return { matchedSkills, heuristicScore };
}
```

**Why the placeholder approach?**
- Keeps the MVP functional without external API dependencies
- Interface remains the same (text + skills → score + matches)
- Can be swapped out without changing calling code
- Demonstrates the concept for hackathon evaluation

## 🎨 Features Showcase

### 1. **Blind Merit Evaluation**
- Anonymous candidate IDs prevent name-based bias
- Skill score sorting puts competency first
- Forces recruiters to read actual work
- Levels the playing field for tier-2/3 candidates

### 2. **Dual-View Comparison**
- Toggle between blind and raw views instantly
- See how traditional pedigree bias affects rankings
- Quantify the difference bias makes in shortlisting
- Educational tool for recruiter training

### 3. **Automatic Skill Matching**
- Real-time submission scoring
- Visual skill badge indicators (matched vs. unmatched)
- Percentage scores for quick assessment
- Consistent evaluation criteria across all candidates

### 4. **Shortlist Management**
- One-click shortlisting with instant feedback
- Persistent across view mode changes
- Visual indicators (green ring) for shortlisted candidates
- PATCH API for server-side state updates

### 5. **AYUSH Sector Focus**
- Real government/NSDC market data
- Skills aligned with National Skills Qualification Framework (NSQF)
- Predictive curriculum delta page
- Addresses actual industry needs

### 6. **Curriculum Planning Tool**
- Skill demand trends (+% growth rates)
- Training hour requirements (classroom + OJT)
- NSQF level mapping
- Sector context (market size, projections, patient volumes)

## 📊 Database Schema

```prisma
model User {
  id          String       @id @default(cuid())
  name        String
  institute   String
  gpa         Float
  anonymousId String       @unique
  submissions Submission[]
}

model Bounty {
  id             String       @id @default(cuid())
  title          String
  company        String
  description    String
  requiredSkills String[]     // PostgreSQL array
  submissions    Submission[]
}

model Submission {
  id             String   @id @default(cuid())
  bountyId       String
  bounty         Bounty   @relation(fields: [bountyId], references: [id])
  studentId      String
  student        User     @relation(fields: [studentId], references: [id])
  submissionText String
  matchedSkills  String[] @default([])
  heuristicScore Float?
  shortlisted    Boolean  @default(false)
  createdAt      DateTime @default(now())
}
```

### Why This Schema?

- **`anonymousId` in User**: Pre-generated anonymous ID ensures consistency across views
- **`requiredSkills` as array**: PostgreSQL native array support avoids JOIN tables
- **`matchedSkills` stored**: Avoids re-scoring on every dashboard load
- **`heuristicScore` nullable**: Allows for future scoring algorithm updates
- **Foreign keys**: Maintains data integrity (can't delete users/bounties with submissions)

## 🔄 API Routes

### POST `/api/submissions`
**Purpose**: Create a new submission and automatically score it

**Request Body**:
```json
{
  "bountyId": "clx...",
  "studentName": "Sana Sheikh",
  "studentInstitute": "Private Engineering College, Indore",
  "studentGpa": 7.2,
  "submissionText": "I have extensive experience with Panchakarma Protocol..."
}
```

**Response**:
```json
{
  "id": "cly...",
  "matchedSkills": ["Panchakarma Protocol", "Patient Documentation"],
  "heuristicScore": 67
}
```

**Process**:
1. Create or find user by name
2. Fetch bounty's required skills
3. Score submission using `lib/scoring.ts`
4. Store submission with matched skills and score
5. Return result

### PATCH `/api/submissions/[id]`
**Purpose**: Update shortlist status

**Request Body**:
```json
{
  "shortlisted": true
}
```

**Response**:
```json
{
  "id": "cly...",
  "shortlisted": true
}
```

## 🌐 Domain Context: AYUSH Sector

### Why AYUSH?

The project focuses on the **AYUSH sector** (Ayurveda, Yoga, Unani, Siddha, Homeopathy) because it represents:

1. **Rapidly Growing Industry**:
   - Market size: $18.1B (2022) → $30.1B projected (2030)
   - 3,00,000+ foreign patients in 2024
   - Government of India priority initiative

2. **Skill Shortage Problem**:
   - Traditional knowledge meets modern healthcare
   - Requires specialized skills (Panchakarma, Yoga Therapy, Herbal Medicine)
   - Limited formal training programs
   - High demand for qualified practitioners

3. **Bias-Free Evaluation Need**:
   - AYUSH skills are competency-based, not pedigree-based
   - Practical knowledge matters more than institutional brand
   - Traditional gurukul education vs. modern universities
   - Perfect testbed for blind merit evaluation

### Skills Tracked

**Panchakarma & Therapy**:
- Panchakarma Protocol
- Patient Documentation
- Wellness Tracking
- Yoga Therapy
- Session Planning
- Breathing Techniques

**Ayurvedic Pharmacology**:
- Medicinal Plant Identification
- Ayurvedic Pharmacology
- Herbal Medicine Preparation

**Practice Management**:
- Stress Management
- Community Health Documentation

## 🎯 Impact & Outcomes

### Problem Solved

**Before Blind Merit Engine**:
```
Traditional Hiring Ranking:
1. Aditi Sharma (IIT Bombay, 9.1 GPA) - Low skill match
2. Karan Verma (DTU, 8.6 GPA) - Medium skill match
3. Meera Iyer (NIT, 8.0 GPA) - High skill match
4. Sana Sheikh (Private College, 7.2 GPA) - High skill match ❌ Ignored
5. Ravi Kumar (Govt Polytechnic, 6.4 GPA) - Medium skill match ❌ Ignored
```

**With Blind Merit Engine**:
```
Blind Merit Ranking:
1. Candidate V8D3Z (93% skill match) → Sana Sheikh ✅
2. Candidate R1T6W (87% skill match) → Meera Iyer ✅
3. Candidate M4Q9L (60% skill match) → Karan Verma
4. Candidate N5H0C (53% skill match) → Ravi Kumar ✅
5. Candidate K7X2P (33% skill match) → Aditi Sharma
```

### Real-World Value

- **For Candidates**: Merit-based opportunity regardless of institutional background
- **For Recruiters**: Access to hidden talent pool, better skill matching
- **For Employers**: Hire based on demonstrated competency, not proxies
- **For Institutions**: Tier-2/3 colleges see ROI on skill-focused training
- **For Industry**: Better skill matching reduces training costs and turnover

## 🔮 Future Enhancements

### Phase 1: MVP Improvements
- [ ] Replace substring matching with NLP-based semantic similarity
- [ ] Add video/document upload for richer work submissions
- [ ] Implement recruiter authentication and company profiles
- [ ] Add submission feedback mechanism
- [ ] Create candidate portfolio pages

### Phase 2: Advanced Features
- [ ] Machine learning model fine-tuned on AYUSH domain
- [ ] Integration with skill verification systems
- [ ] Real-time collaboration on bounties
- [ ] Peer review system for submission validation
- [ ] Blockchain-based skill certification

### Phase 3: Platform Expansion
- [ ] Expand beyond AYUSH to other sectors
- [ ] Integration with college LMS systems
- [ ] Corporate partnership program
- [ ] Mobile app for iOS/Android
- [ ] AI-powered interview scheduling

## 🛠️ Development Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Database
npx prisma migrate dev   # Create and apply migrations
npx prisma studio        # Open database GUI (http://localhost:5555)
npx prisma generate      # Regenerate Prisma Client after schema changes

# Seeding
npm run seed             # Create users and bounties
npm run seed:submissions # Create demo submissions
npm run seed:all         # Run both seed scripts

# Production
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint
```

## 🤝 Contributing

This project was developed as part of **Smart India Hackathon 2026** (SIH-95) by **Team Control_Alt_Defend**.

### Team Members
- Project lead and full-stack implementation
- Focus on blind merit evaluation systems
- AYUSH sector skill mapping
- UI/UX design for dual-view dashboard

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is developed for Smart India Hackathon 2026. All rights reserved.

## 🙏 Acknowledgments

- **Ministry of AYUSH** for sector data and skill frameworks
- **NSDC/HSSC** for National Skills Qualification Framework (NSQF) standards
- **Smart India Hackathon 2026** for the problem statement
- **AICTE** for organizing the hackathon
- All open-source contributors to Next.js, Prisma, PostgreSQL, and Tailwind CSS

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Contact the development team
- Review the [Next.js documentation](https://nextjs.org/docs)
- Review the [Prisma documentation](https://www.prisma.io/docs)

---

**Built with ❤️ for Smart India Hackathon 2026 | Problem Statement: SIH-95**

*Empowering merit over pedigree, one submission at a time.*
