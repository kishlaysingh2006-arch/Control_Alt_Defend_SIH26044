/**
 * Shared scoring utility for submission evaluation.
 * 
 * HACKATHON PLACEHOLDER: This is a simple substring matching function.
 * In production, this would be replaced with an NLP/vector embedding pipeline
 * (e.g., using sentence transformers, OpenAI embeddings, or a fine-tuned model).
 * 
 * The interface (text + skill list in, score + matches out) is designed to remain
 * valid when swapping in a more sophisticated scoring function.
 * 
 * This function is pure (no database access) so it can be called from both:
 * 1. The live submission API route (POST /api/submissions)
 * 2. The seed script (to generate consistent scores for demo data)
 */

export interface ScoringResult {
  matchedSkills: string[];
  heuristicScore: number;
}

/**
 * Score a submission against required skills using case-insensitive substring matching.
 * 
 * @param submissionText - The text content of the submission
 * @param requiredSkills - Array of skills to check for
 * @returns Object containing matched skills and a percentage score (0-100)
 */
export function scoreSubmission(
  submissionText: string,
  requiredSkills: string[]
): ScoringResult {
  // Normalize submission text for case-insensitive matching
  const normalizedText = submissionText.toLowerCase();
  
  // Find all skills that appear as substrings in the submission
  const matchedSkills = requiredSkills.filter((skill) =>
    normalizedText.includes(skill.toLowerCase())
  );
  
  // Calculate score as percentage: (matched / total) * 100, rounded to nearest integer
  const heuristicScore = requiredSkills.length > 0
    ? Math.round((matchedSkills.length / requiredSkills.length) * 100)
    : 0;
  
  return {
    matchedSkills,
    heuristicScore,
  };
}
