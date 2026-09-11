'use client';

import { useState } from 'react';

type Submission = {
  id: string;
  submissionText: string;
  matchedSkills: string[];
  heuristicScore: number | null;
  shortlisted: boolean;
  createdAt: Date;
  student: {
    id: string;
    name: string;
    institute: string;
    gpa: number;
    anonymousId: string;
  };
};

type Bounty = {
  id: string;
  title: string;
  company: string;
  requiredSkills: string[];
};

export default function DashboardView({
  submissions,
  bounty,
}: {
  submissions: Submission[];
  bounty: Bounty;
}) {
  const [viewMode, setViewMode] = useState<'raw' | 'blind'>('raw');
  const [shortlistedIds, setShortlistedIds] = useState<Set<string>>(
    new Set(submissions.filter((s) => s.shortlisted).map((s) => s.id))
  );
  const [updatingIds, setUpdatingIds] = useState<Set<string>>(new Set());

  // Sort submissions based on view mode
  const sortedSubmissions = [...submissions].sort((a, b) => {
    if (viewMode === 'raw') {
      // Raw view: sort by GPA descending (pedigree)
      return b.student.gpa - a.student.gpa;
    } else {
      // Blind view: sort by score descending
      const scoreA = a.heuristicScore ?? 0;
      const scoreB = b.heuristicScore ?? 0;
      return scoreB - scoreA;
    }
  });

  const toggleShortlist = async (submissionId: string) => {
    setUpdatingIds((prev) => new Set(prev).add(submissionId));

    try {
      const isCurrentlyShortlisted = shortlistedIds.has(submissionId);
      const response = await fetch(`/api/submissions/${submissionId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shortlisted: !isCurrentlyShortlisted }),
      });

      if (!response.ok) throw new Error('Failed to update shortlist');

      setShortlistedIds((prev) => {
        const next = new Set(prev);
        if (isCurrentlyShortlisted) {
          next.delete(submissionId);
        } else {
          next.add(submissionId);
        }
        return next;
      });
    } catch (error) {
      console.error('Error toggling shortlist:', error);
      alert('Failed to update shortlist');
    } finally {
      setUpdatingIds((prev) => {
        const next = new Set(prev);
        next.delete(submissionId);
        return next;
      });
    }
  };

  return (
    <div>
      {/* View Mode Toggle */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">View Mode</h2>
            <p className="text-sm text-gray-600">
              {viewMode === 'raw'
                ? 'Showing full candidate information (name, institute, GPA)'
                : 'Showing only anonymous IDs and skill scores'}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setViewMode('raw')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'raw'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Raw View
            </button>
            <button
              onClick={() => setViewMode('blind')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'blind'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Blind Merit View
            </button>
          </div>
        </div>
      </div>

      {/* Submissions List */}
      <div className="space-y-4">
        {sortedSubmissions.map((submission, index) => {
          const isShortlisted = shortlistedIds.has(submission.id);
          const isUpdating = updatingIds.has(submission.id);

          return (
            <div
              key={submission.id}
              className={`bg-white rounded-lg shadow-md p-6 transition-all ${
                isShortlisted ? 'ring-2 ring-green-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-gray-400">
                      #{index + 1}
                    </span>
                    {viewMode === 'raw' ? (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {submission.student.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {submission.student.institute} • GPA: {submission.student.gpa}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Candidate {submission.student.anonymousId}
                        </h3>
                        <p className="text-sm text-gray-500">Anonymous submission</p>
                      </div>
                    )}
                  </div>

                  {/* Score and Matched Skills */}
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-blue-600">
                        {submission.heuristicScore ?? 0}%
                      </span>
                      <span className="text-sm text-gray-500">
                        ({submission.matchedSkills.length}/{bounty.requiredSkills.length} skills)
                      </span>
                    </div>
                  </div>

                  {/* Matched Skills Badges */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {bounty.requiredSkills.map((skill) => {
                      const isMatched = submission.matchedSkills.includes(skill);
                      return (
                        <span
                          key={skill}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            isMatched
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {isMatched && '✓ '}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Shortlist Button */}
                <button
                  onClick={() => toggleShortlist(submission.id)}
                  disabled={isUpdating}
                  className={`px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 ${
                    isShortlisted
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {isUpdating ? 'Updating...' : isShortlisted ? 'Shortlisted ✓' : 'Shortlist'}
                </button>
              </div>

              {/* Submission Text */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Submission
                </h4>
                <p className="text-gray-700 leading-relaxed">{submission.submissionText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
