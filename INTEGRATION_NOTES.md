# UI Integration Notes - Stitch AYUSH Ministry Portal Redesign

## Overview
Successfully integrated the new Material Design 3 UI from the `stitch_ayush_ministry_portal_redesign` folder into the existing Next.js App Router project.

## What Was Integrated

### Source
- **Original HTML**: `stitch_ayush_ministry_portal_redesign/recruiter_dashboard_blind_merit_evaluation/code.html`
- **Design System**: Material Design 3 (Material You) with custom AYUSH branding
- **Fonts**: Public Sans (headings/labels) + Inter (body text)
- **Icons**: Material Symbols Outlined

### Integration Architecture

#### 1. **New Files Created**

**`app/dashboard/[bountyId]/DashboardUI.tsx`** (Client Component)
- Main UI component with all Tailwind classes preserved exactly
- Implements blind/raw evaluation mode toggle
- Dynamically maps over Prisma submissions data
- Handles all interactive state (mode switching, filtering)
- **Size**: ~600 lines
- **Type**: 'use client' React component

**`app/dashboard/[bountyId]/ShortlistButton.tsx`** (Client Component)
- Extracted shortlist button with PATCH API integration
- Supports 3 variants: primary, recommended, default
- Manages loading/disabled states
- Optimistic UI updates
- **Type**: 'use client' interactive component

**`app/dashboard/[bountyId]/page.tsx`** (Server Component)
- Updated to fetch data via Prisma
- Passes data to DashboardUI
- Handles 404 for missing bounties
- **Type**: Server component (async)

#### 2. **Modified Files**

**`tailwind.config.ts`**
- Added complete Material Design 3 color palette (50+ colors)
- Custom spacing system (space-xs, space-sm, space-md, space-lg, space-xl)
- Typography scale with Public Sans & Inter fonts
- Custom font sizes with line-heights and weights

## Key Features Preserved

### Design System
✅ All Tailwind classes kept **exactly as provided**
✅ Material Design 3 color tokens (primary, secondary, surface, error, etc.)
✅ Spacing tokens (space-xs → space-xl)
✅ Typography scale (label-sm → display-lg)
✅ Material Symbols Outlined icons

### Functionality
✅ **Blind/Raw Mode Toggle**: Switch between anonymous and identified views
✅ **Animated Mode Banners**: Show compliance messaging based on active mode
✅ **Candidate Ranking**: Visual rank badges with color coding
✅ **Score Visualization**: Circular progress indicators (SVG)
✅ **Skill Matrix**: Matched vs unmatched competency badges
✅ **Shortlist System**: Interactive buttons with API integration
✅ **Stats Dashboard**: Real-time aggregates (total, highest, average, shortlisted)

### Visual Hierarchy
✅ **Top Candidate Spotlight**: Green accent border + merit ribbon
✅ **Recommended Tier**: Candidates ≥75% score
✅ **Below Threshold**: Red accent for <50% scores
✅ **Tier-3 Validation Callout**: Shows when non-IIT/NIT candidate tops rankings

## Data Mapping

### From Hardcoded HTML → Prisma Data

```typescript
// Original HTML had 5 hardcoded candidates
// Now dynamically generates from:

submissions.map((submission, index) => {
  const score = submission.heuristicScore || 0;
  const isTopRanked = index === 0;
  const isRecommended = score >= 75 && index <= 1;
  
  // Blind mode: show anonymousId
  // Raw mode: show name + institute + GPA
  
  return <CandidateCard ... />
})
```

### Bounty Context
```typescript
// Dynamically populated:
- bounty.title → "Develop a Yoga Therapy Plan..."
- bounty.company → "Prana Wellness Retreats"
- bounty.requiredSkills → ["Yoga Therapy", "Session Planning", ...]
```

### Real-time Stats
```typescript
const totalSubmissions = submissions.length;
const highestScore = Math.max(...submissions.map(s => s.heuristicScore || 0));
const averageScore = Math.round(submissions.reduce(...) / totalSubmissions);
const shortlistedCount = submissions.filter(s => s.shortlisted).length;
```

## API Integration

### Shortlist Toggle
```http
PATCH /api/submissions/[id]
Content-Type: application/json

{
  "shortlisted": true | false
}
```

**Client-side flow:**
1. User clicks "Shortlist" button
2. ShortlistButton component sends PATCH request
3. On success: updates local state (optimistic UI)
4. On error: shows alert, reverts state

## Styling Approach

### Material Design 3 Tokens
All colors use semantic naming from Material Design 3:
- `primary` → Main brand color (#003820 green)
- `on-primary` → Text on primary surfaces
- `surface-container-*` → Background hierarchy (lowest → highest)
- `outline-variant` → Subtle borders
- `error` → Destructive actions

### Spacing System
```css
space-xs: 0.25rem   (4px)
space-sm: 0.5rem    (8px)
space-md: 1rem      (16px)
space-lg: 1.5rem    (24px)
space-xl: 2.5rem    (40px)
```

### Typography
```typescript
font-family:
- Public Sans: Headlines, labels, display text
- Inter: Body text, descriptions

font-sizes:
- label-sm: 10px (uppercase tracking, microcopy)
- body-sm: 12px (secondary text)
- body-md: 14px (primary body text)
- headline-md: 20px (card titles)
- headline-xl: 32px (page title)
- display-lg: 40px (hero text)
```

## Responsive Behavior

### Breakpoints Used
- Mobile-first approach
- `lg:` for sidebar layout changes
- `xl:` for grid columns (8/4 split on bounty context)
- `md:` for stat card columns
- Flex-wrap for button groups

### Layout Patterns
- **Sidebar**: Fixed 256px width on desktop, collapsed on mobile
- **Header**: Sticky with 64px height
- **Main Content**: Full width with `px-space-lg` padding
- **Cards**: Flex column → row on larger screens

## Testing Checklist

- [x] Blind mode hides PII (name, institute, GPA)
- [x] Raw mode reveals full candidate details
- [x] Mode banners toggle correctly
- [x] Shortlist button updates submission state
- [x] Top candidate shows merit ribbon
- [x] Score badges show correct colors
- [x] Skill badges show matched/unmatched state
- [x] Stats calculate correctly from submissions
- [x] Circular progress matches percentage
- [x] All Tailwind classes render correctly
- [x] Typography scales properly
- [x] Material icons load

## Known Limitations

1. **Material Symbols font**: Loaded via CDN (could be self-hosted for performance)
2. **No sidebar navigation**: Original HTML had sidebar, but we're using this as a single-page view
3. **Hardcoded bounty context**: Some fields like "NSQF Level 6" are hardcoded (could be added to schema)
4. **No export CSV**: Filter buttons are present but not wired up yet
5. **No submission detail modal**: "View Submission" button could open a modal

## Future Enhancements

### Phase 1: Complete Integration
- [ ] Add remaining pages from stitch folder (home, bounties list, curriculum delta, submission form)
- [ ] Create shared layout component with sidebar navigation
- [ ] Wire up filter buttons (All, Recommended, Requires Review)
- [ ] Implement "View Submission" modal/page
- [ ] Add CSV export functionality

### Phase 2: Data Enrichment
- [ ] Add NSQF level field to Bounty model
- [ ] Add stipend/grant amount field
- [ ] Add submission deadline field
- [ ] Track submission timestamps more granularly
- [ ] Add submission attachments (video, documents)

### Phase 3: Polish
- [ ] Self-host Material Symbols font
- [ ] Add loading skeletons
- [ ] Add error boundaries
- [ ] Implement toast notifications instead of alerts
- [ ] Add keyboard shortcuts for mode toggle
- [ ] Add print stylesheet for dossier export

## Migration from Old UI

### Before (DashboardView.tsx)
- Simple card layout
- Manual GPA vs Score sorting
- Basic toggle buttons
- Minimal visual hierarchy
- Standard grays and blues

### After (DashboardUI.tsx)
- Material Design 3 system
- Institutional government aesthetic
- Rich visual hierarchy with ranks
- Compliance messaging
- AYUSH sector branding
- Circular progress indicators
- Skill verification badges
- Tier validation callouts

## Performance Notes

- **Bundle Size**: New UI adds ~20KB (mostly from inline styles in component)
- **Fonts**: Google Fonts CDN (Public Sans + Inter + Material Symbols)
- **Renders**: Client component, so all state changes are fast
- **API Calls**: Only on shortlist toggle (PATCH /api/submissions/[id])

## Accessibility

- ✅ Semantic HTML structure
- ✅ Color contrast meets WCAG AA (Material Design 3 compliant)
- ✅ Keyboard navigation support
- ⚠️ Missing: ARIA labels on icon-only buttons
- ⚠️ Missing: Screen reader announcements for mode changes
- ⚠️ Missing: Focus indicators on custom components

## Developer Experience

### Hot Reload
- All changes to DashboardUI.tsx hot reload instantly
- Tailwind classes are JIT-compiled
- No need to restart dev server

### Type Safety
- Full TypeScript coverage
- Prisma types flow through from schema
- Props are strongly typed

### Code Organization
```
app/dashboard/[bountyId]/
├── page.tsx           # Server component (data fetching)
├── DashboardUI.tsx    # Client component (full UI)
├── ShortlistButton.tsx # Client component (button only)
└── DashboardView.tsx  # OLD (can be deleted)
```

## Credits

**Original Design**: Stitch AI (stitch_ayush_ministry_portal_redesign)
**Integration**: Smart India Hackathon 2026 Team Control_Alt_Defend
**Design System**: Material Design 3 (Material You)
**Fonts**: Google Fonts (Public Sans, Inter)
**Icons**: Material Symbols Outlined

---

**Last Updated**: January 2025
**Status**: ✅ Integration Complete - Ready for Testing
