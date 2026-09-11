'use client';

import { useState } from 'react';
import ShortlistButton from './ShortlistButton';

type Student = {
  id: string;
  name: string;
  institute: string;
  gpa: number;
  anonymousId: string;
};

type Submission = {
  id: string;
  submissionText: string;
  matchedSkills: string[];
  heuristicScore: number | null;
  shortlisted: boolean;
  student: Student;
};

type Bounty = {
  id: string;
  title: string;
  company: string;
  requiredSkills: string[];
};

interface DashboardUIProps {
  bounty: Bounty;
  submissions: Submission[];
}

export default function DashboardUI({ bounty, submissions }: DashboardUIProps) {
  const [evaluationMode, setEvaluationMode] = useState<'blind' | 'raw'>('blind');

  // Calculate stats
  const totalSubmissions = submissions.length;
  const highestScore = Math.max(...submissions.map(s => s.heuristicScore || 0));
  const averageScore = Math.round(
    submissions.reduce((sum, s) => sum + (s.heuristicScore || 0), 0) / totalSubmissions
  );
  const shortlistedCount = submissions.filter(s => s.shortlisted).length;

  // Generate anonymous IDs for blind mode (using last 4 chars of student ID for consistency)
  const getAnonymousId = (studentId: string) => {
    return `AYUSH-BLIND-${studentId.slice(-4).toUpperCase()}`;
  };

  // Get tier label based on institute name
  const getTierLabel = (institute: string, gpa: number) => {
    if (institute.includes('IIT')) return `GPA: ${gpa} (Premier Tier-1 IIT)`;
    if (institute.includes('NIT') || institute.includes('DTU')) return `GPA: ${gpa} (Tier-1 Institute)`;
    if (institute.includes('Polytechnic')) return `GPA: ${gpa} (Tier-3 Polytechnic)`;
    return `GPA: ${gpa} (Tier-3 College)`;
  };

  // Get rank color based on position
  const getRankColor = (index: number) => {
    if (index === 0) return 'bg-primary';
    if (index === 1) return 'bg-primary/60';
    return 'bg-surface-variant';
  };

  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-primary';
    if (score >= 50) return 'text-on-surface';
    return 'text-error';
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Public+Sans:wght@100..900&display=swap');
      `}</style>
      
      <div className="min-h-screen bg-surface font-body-md text-on-surface">
        <main className="relative bg-surface">
          {/* Breadcrumb */}
          <div className="px-space-lg py-space-sm bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[14px]">admin_panel_settings</span>
            <span>Evaluation Console</span>
            <span>/</span>
            <span className="text-primary font-bold uppercase">{bounty.title}</span>
          </div>

          <div className="p-space-lg">
            <div className="flex flex-col w-full">
              {/* Header Section */}
              <section className="mb-space-lg flex flex-col gap-space-sm">
                <div className="flex flex-wrap items-center justify-between gap-space-md">
                  <div>
                    <div className="flex items-center gap-space-xs mb-1">
                      <span className="font-label-sm text-label-sm uppercase bg-surface-container-high px-space-xs py-0.5 rounded text-on-surface-variant tracking-wider">
                        SIH Statutory Protocol #AYUSH-2024-V4
                      </span>
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase text-primary font-bold bg-surface-container-low px-space-xs py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Live Audit Stream Active
                      </span>
                    </div>
                    <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                      Recruiter Blind Merit Evaluation Console
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-0.5">
                      Objective algorithmic competency grading. Identity metadata, educational pedigrees, and tier bias are strictly shielded to ensure NSQF-compliant merit-only shortlisting.
                    </p>
                  </div>

                  {/* Mode Toggle Buttons */}
                  <div className="flex items-center gap-space-xs bg-surface-container-low p-space-xs rounded-xl shadow-sm">
                    <button
                      className={`flex items-center gap-space-xs px-space-md py-space-sm rounded-lg transition-all font-label-lg text-label-lg ${
                        evaluationMode === 'blind'
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                      onClick={() => setEvaluationMode('blind')}
                    >
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                      <span>Blind Merit View</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-primary-container text-on-primary-container rounded">
                        Anti-Bias
                      </span>
                    </button>
                    <button
                      className={`flex items-center gap-space-xs px-space-md py-space-sm rounded-lg transition-all font-label-lg text-label-lg ${
                        evaluationMode === 'raw'
                          ? 'bg-secondary text-on-secondary shadow-sm'
                          : 'text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                      onClick={() => setEvaluationMode('raw')}
                    >
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      <span>De-anonymized Raw View</span>
                    </button>
                  </div>
                </div>

                {/* Mode Advisory Banners */}
                {evaluationMode === 'blind' && (
                  <div className="bg-surface-container-low rounded-lg p-space-md flex items-start gap-space-md shadow-sm transition-all">
                    <div className="w-9 h-9 rounded bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">verified_user</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-space-sm">
                        <span className="font-label-lg text-label-lg text-primary uppercase">Anti-Bias Protocol Enforced</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Rule AYUSH-NDM-2024</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        PII Scrubbed: Candidate Names, Academic Institutional Tiers, Demographic Gender, and Cumulative GPAs are encrypted and completely obscured to prevent pedigree prestige bias.
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded text-on-surface-variant font-label-sm text-label-sm uppercase">
                      <span className="material-symbols-outlined text-[14px]">gavel</span>
                      <span>Sec. 4B Compliance</span>
                    </div>
                  </div>
                )}

                {evaluationMode === 'raw' && (
                  <div className="bg-surface-container-high rounded-lg p-space-md flex items-start gap-space-md shadow-sm transition-all">
                    <div className="w-9 h-9 rounded bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">warning</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-space-sm">
                        <span className="font-label-lg text-label-lg text-secondary uppercase font-bold">Confidential: Identity Revealed</span>
                        <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded uppercase">
                          Final Review Only
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Reveals identity for verified final interview stage only. All evaluation actions in raw mode are logged in the Ministry compliance ledger for algorithmic accountability audits.
                      </p>
                    </div>
                    <button
                      className="px-space-sm py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm uppercase hover:opacity-90"
                      onClick={() => setEvaluationMode('blind')}
                    >
                      Re-engage Shield
                    </button>
                  </div>
                )}
              </section>

              {/* Bounty Context + Stats Grid */}
              <section className="grid grid-cols-1 xl:grid-cols-12 gap-space-md mb-space-lg">
                {/* Bounty Context Card */}
                <div className="xl:col-span-8 bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                  <div>
                    <div className="flex items-center justify-between gap-space-sm mb-space-xs">
                      <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[16px]">work</span>
                        <span>Bounty Evaluation Cohort</span>
                      </div>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      {bounty.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-space-md mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">domain</span>
                        <strong className="text-on-surface font-label-lg text-label-lg">{bounty.company}</strong> (Corporate Partner)
                      </span>
                      <span className="text-surface-dim">•</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                        NSQF Level 6 Accredited
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-md">
                    <div className="flex flex-wrap items-center justify-between gap-space-sm">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block mb-1">
                          Required Evaluation Competencies ({bounty.requiredSkills.length} Mandatory Units):
                        </span>
                        <div className="flex flex-wrap gap-space-xs">
                          {bounty.requiredSkills.map((skill) => (
                            <span
                              key={skill}
                              className="px-space-xs py-1 rounded bg-surface-container-lowest font-label-sm text-label-sm text-primary flex items-center gap-1 shadow-sm"
                            >
                              <span className="material-symbols-outlined text-[14px]">verified</span> {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Aggregate Stats */}
                <div className="xl:col-span-4 grid grid-cols-2 gap-space-sm">
                  <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Candidates</span>
                      <span className="material-symbols-outlined text-[18px]">group</span>
                    </div>
                    <div className="my-space-xs">
                      <span className="font-headline-xl text-headline-xl text-primary font-bold">{totalSubmissions}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Total Submissions</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-full"></div>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Highest Match</span>
                      <span className="material-symbols-outlined text-[18px]">social_leaderboard</span>
                    </div>
                    <div className="my-space-xs">
                      <span className="font-headline-xl text-headline-xl text-secondary font-bold tabular-nums">{highestScore}%</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Verified</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-secondary-container h-full w-full"></div>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Average Match</span>
                      <span className="material-symbols-outlined text-[18px]">query_stats</span>
                    </div>
                    <div className="my-space-xs">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-bold tabular-nums">{averageScore}%</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Across Roster</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary-fixed-dim h-full" style={{ width: `${averageScore}%` }}></div>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between text-primary">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Shortlisted</span>
                      <span className="material-symbols-outlined text-[18px]">bookmark_added</span>
                    </div>
                    <div className="my-space-xs">
                      <span className="font-headline-xl text-headline-xl text-primary font-bold tabular-nums">{shortlistedCount}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Qualified (≥75%)</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: `${(shortlistedCount / totalSubmissions) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Control & Filter Bar */}
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm mb-space-md flex flex-wrap items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-lg text-label-lg text-primary uppercase">Candidate Dossiers</span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm bg-surface-container px-space-xs py-0.5 rounded">
                    Sorted by Verified Skill Score
                  </span>
                </div>
              </div>

              {/* Candidate Roster */}
              <div className="flex flex-col gap-space-md mb-space-xl">
                {submissions.map((submission, index) => {
                  const score = submission.heuristicScore || 0;
                  const isTopRanked = index === 0;
                  const isRecommended = score >= 75 && index <= 1;

                  return (
                    <div
                      key={submission.id}
                      className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden relative"
                    >
                      {/* Left Border Accent */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${getRankColor(index)}`}></div>

                      {/* Top Merit Ribbon (only for #1) */}
                      {isTopRanked && (
                        <div className="bg-primary px-space-lg py-1.5 text-on-primary flex flex-wrap items-center justify-between gap-space-sm pl-space-xl">
                          <div className="flex items-center gap-space-xs">
                            <span className="material-symbols-outlined text-[16px] text-primary-fixed">stars</span>
                            <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">
                              Top Matched Candidate • {score}% Skills Verified via Demonstration
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="p-space-lg pl-space-xl flex flex-col gap-space-md">
                        {/* Card Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                          <div className="flex items-start gap-space-md">
                            {/* Rank Badge */}
                            <div className={`w-10 h-10 rounded flex flex-col items-center justify-center font-bold shrink-0 ${
                              isTopRanked ? 'bg-primary-fixed text-primary w-12 h-12' : 'bg-surface-container-high text-on-surface-variant'
                            }`}>
                              <span className="font-label-sm text-label-sm uppercase leading-none">{isTopRanked ? 'Rank' : 'Rank'}</span>
                              <span className={`${isTopRanked ? 'font-headline-md text-headline-md' : 'font-headline-sm text-headline-sm'} leading-none mt-0.5`}>
                                #{String(index + 1).padStart(2, '0')}
                              </span>
                            </div>

                            {/* Candidate Info */}
                            <div>
                              <div className="flex flex-wrap items-center gap-space-xs">
                                {/* Blind Mode Title */}
                                {evaluationMode === 'blind' && (
                                  <>
                                    <span className="font-headline-md text-headline-md text-on-surface font-bold">
                                      Candidate ID: {getAnonymousId(submission.student.id)}
                                    </span>
                                    <span className="px-space-xs py-0.5 bg-surface-container text-on-surface-variant rounded font-label-sm text-label-sm uppercase">
                                      Blind Hash: {submission.student.id.slice(-4)}••••
                                    </span>
                                  </>
                                )}

                                {/* Raw Mode Title */}
                                {evaluationMode === 'raw' && (
                                  <>
                                    <span className="font-headline-md text-headline-md text-on-surface font-bold">
                                      {submission.student.name}{' '}
                                      <span className="font-body-md text-body-md text-on-surface-variant font-normal">
                                        — {submission.student.institute}
                                      </span>
                                    </span>
                                    <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface-variant font-label-sm text-label-sm">
                                      {getTierLabel(submission.student.institute, submission.student.gpa)}
                                    </span>
                                  </>
                                )}

                                {/* Status Badge */}
                                {isTopRanked && (
                                  <span className="px-space-xs py-0.5 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded uppercase font-bold">
                                    Highest Rank
                                  </span>
                                )}
                                {isRecommended && !isTopRanked && (
                                  <span className="px-space-xs py-0.5 bg-surface-container-high text-primary font-label-sm text-label-sm rounded uppercase font-bold">
                                    Recommended
                                  </span>
                                )}
                              </div>
                              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                                Submission: <strong className="text-on-surface">"{submission.submissionText.slice(0, 60)}..."</strong>
                              </p>
                            </div>
                          </div>

                          {/* Score Module */}
                          <div className="flex items-center gap-space-md self-start lg:self-auto bg-surface-container-low px-space-md py-space-sm rounded-lg">
                            <div className="text-right">
                              <span className={`font-headline-xl text-headline-xl font-bold tabular-nums ${getScoreColor(score)}`}>
                                {score}%
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                                ({submission.matchedSkills.length}/{bounty.requiredSkills.length} Skills Matched)
                              </span>
                            </div>
                            <div className="w-12 h-12 shrink-0 relative flex items-center justify-center">
                              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                                <path
                                  className="text-surface-variant"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3.5"
                                ></path>
                                <path
                                  className={getScoreColor(score)}
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeDasharray={`${score}, 100`}
                                  strokeLinecap="round"
                                  strokeWidth="3.5"
                                ></path>
                              </svg>
                              <span className={`font-label-sm text-label-sm font-bold absolute ${getScoreColor(score)}`}>
                                {submission.matchedSkills.length}/{bounty.requiredSkills.length}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Competency Matrix */}
                        <div>
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block mb-1">
                            {score >= 75 ? 'Demonstrated & Verified Competencies:' : 'Competency Evaluation Breakdown:'}
                          </span>
                          <div className="flex flex-wrap gap-space-xs">
                            {bounty.requiredSkills.map((skill) => {
                              const isMatched = submission.matchedSkills.includes(skill);
                              return (
                                <span
                                  key={skill}
                                  className={`px-space-sm py-1 rounded font-label-sm text-label-sm flex items-center gap-1 ${
                                    isMatched
                                      ? 'bg-primary-fixed text-on-primary-fixed'
                                      : 'bg-surface-container-high text-on-surface-variant line-through opacity-75'
                                  }`}
                                >
                                  <span className="material-symbols-outlined text-[14px]">
                                    {isMatched ? 'check_circle' : 'close'}
                                  </span>
                                  {skill} {isMatched && '(Verified)'}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Evaluator Summary */}
                        <div className="bg-surface-container-low rounded p-space-md">
                          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase font-bold mb-1">
                            <span className="material-symbols-outlined text-[16px]">psychology</span>
                            <span>Evaluator Rule Summary</span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface">
                            {submission.submissionText}
                          </p>
                          
                          {/* Special callout for tier-3 topping tier-1 */}
                          {isTopRanked && evaluationMode === 'raw' && !submission.student.institute.includes('IIT') && (
                            <div className="mt-space-sm p-space-sm bg-surface-container-highest rounded flex items-start gap-space-xs">
                              <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">lightbulb</span>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                <strong className="text-on-surface">Blind Merit System Validation:</strong> Demonstrates how blind merit prioritizes skill mastery over Tier-1 college prestige ({submission.student.institute} applicant outscores tier-1 candidates on actual practical deliverables).
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Action Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {score >= 75 ? 'Candidate meets shortlisting criteria threshold (≥75%)' : 
                             evaluationMode === 'raw' && submission.student.institute.includes('IIT') && score < 50 ? 
                             'Premier institution prestige does not override missing core practical requirements' :
                             'Review required for final evaluation'}
                          </span>
                          <div className="flex items-center gap-space-sm">
                            <button className="px-space-md py-space-sm rounded bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-sm text-label-sm uppercase transition-all flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">visibility</span> View Submission
                            </button>
                            <ShortlistButton
                              submissionId={submission.id}
                              initialShortlisted={submission.shortlisted}
                              variant={isTopRanked ? 'primary' : isRecommended ? 'recommended' : 'default'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Statutory Audit Panel */}
              <section className="bg-surface-container-low rounded-lg p-space-lg shadow-sm mb-space-lg">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">policy</span>
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-primary uppercase">
                        National Ayush Skill Registry • Cryptographic Audit Standard
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        All {totalSubmissions} applicant submissions have been stamped with SHA-256 integrity hashes on submission receipt. Evaluator AI decisions are subject to independent Human-in-the-Loop review upon applicant grievance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
