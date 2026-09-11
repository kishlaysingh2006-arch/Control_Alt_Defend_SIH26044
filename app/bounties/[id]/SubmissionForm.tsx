'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Bounty = {
  id: string;
  title: string;
  company: string;
  description: string;
  requiredSkills: string[];
};

type User = {
  id: string;
  name: string;
  institute: string;
};

export default function SubmissionForm({
  bounty,
  users,
}: {
  bounty: Bounty;
  users: User[];
}) {
  const router = useRouter();
  const [submissionText, setSubmissionText] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(users[0]?.id || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!submissionText.trim()) {
      setError('Please enter your submission text');
      return;
    }

    if (!selectedUserId) {
      setError('Please select a student');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bountyId: bounty.id,
          studentId: selectedUserId,
          submissionText: submissionText.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }

      const result = await response.json();
      
      // Show success message and redirect
      alert(
        `Submission successful!\n\nScore: ${result.heuristicScore}%\nMatched Skills: ${result.matchedSkills.join(', ')}`
      );
      router.push('/bounties');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="student"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Submit as (Student)
        </label>
        <select
          id="student"
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isSubmitting}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.institute})
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-gray-500">
          Demo: select which student is making this submission
        </p>
      </div>

      <div>
        <label
          htmlFor="submission"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Your Submission
        </label>
        <textarea
          id="submission"
          value={submissionText}
          onChange={(e) => setSubmissionText(e.target.value)}
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Describe your work, the technologies you used, and how you approached the problem..."
          disabled={isSubmitting}
        />
        <p className="mt-2 text-sm text-gray-500">
          Tip: Mention the required skills in your submission to improve your score
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Work'}
      </button>
    </form>
  );
}
