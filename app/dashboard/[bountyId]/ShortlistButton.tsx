'use client';

import { useState } from 'react';

interface ShortlistButtonProps {
  submissionId: string;
  initialShortlisted: boolean;
  variant?: 'primary' | 'recommended' | 'default';
}

export default function ShortlistButton({
  submissionId,
  initialShortlisted,
  variant = 'default',
}: ShortlistButtonProps) {
  const [isShortlisted, setIsShortlisted] = useState(initialShortlisted);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggleShortlist = async () => {
    setIsUpdating(true);

    try {
      const response = await fetch(`/api/submissions/${submissionId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shortlisted: !isShortlisted }),
      });

      if (!response.ok) throw new Error('Failed to update shortlist');

      setIsShortlisted(!isShortlisted);
    } catch (error) {
      console.error('Error toggling shortlist:', error);
      alert('Failed to update shortlist');
    } finally {
      setIsUpdating(false);
    }
  };

  // Determine button styling based on variant and state
  const getButtonClasses = () => {
    if (isShortlisted) {
      return 'px-space-md py-space-sm rounded bg-primary text-on-primary hover:opacity-90 font-label-sm text-label-sm uppercase transition-all flex items-center gap-1 shadow-sm';
    }

    if (variant === 'primary') {
      return 'px-space-md py-space-sm rounded bg-primary text-on-primary hover:opacity-90 font-label-sm text-label-sm uppercase transition-all flex items-center gap-1 shadow-sm';
    }

    if (variant === 'recommended') {
      return 'px-space-md py-space-sm rounded bg-primary-container text-on-primary-container hover:opacity-90 font-label-sm text-label-sm uppercase transition-all';
    }

    return 'px-space-md py-space-sm rounded bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-sm text-label-sm uppercase transition-all';
  };

  const getButtonText = () => {
    if (isUpdating) return 'Updating...';
    if (isShortlisted) {
      return variant === 'primary' ? 'Primary Shortlist' : 'Shortlisted';
    }
    if (variant === 'recommended') return 'Shortlist (Recommended)';
    return 'Shortlist';
  };

  const getButtonIcon = () => {
    if (isShortlisted) return 'how_to_reg';
    return 'bookmark_add';
  };

  return (
    <button
      onClick={handleToggleShortlist}
      disabled={isUpdating}
      className={getButtonClasses()}
    >
      <span className="material-symbols-outlined text-[16px]">{getButtonIcon()}</span>
      {getButtonText()}
    </button>
  );
}
