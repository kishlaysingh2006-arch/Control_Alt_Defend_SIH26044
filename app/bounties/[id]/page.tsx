import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import SubmissionForm from './SubmissionForm';

export default async function BountyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const bounty = await prisma.bounty.findUnique({
    where: { id },
  });

  if (!bounty) {
    notFound();
  }

  // Get all users for the demo student picker
  const users = await prisma.user.findMany({
    orderBy: { name: 'asc' },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {bounty.title}
            </h1>
            <p className="text-lg text-gray-500">{bounty.company}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{bounty.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Required Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {bounty.requiredSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Submit Your Work
            </h2>
            <SubmissionForm bounty={bounty} users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}
