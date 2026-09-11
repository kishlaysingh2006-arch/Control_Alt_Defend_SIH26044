import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import DashboardView from './DashboardView';

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ bountyId: string }>;
}) {
  const { bountyId } = await params;

  // Fetch submissions for this specific bounty only
  const submissions = await prisma.submission.findMany({
    where: { bountyId },
    include: {
      student: {
        select: {
          id: true,
          name: true,
          institute: true,
          gpa: true,
          anonymousId: true,
        },
      },
      bounty: {
        select: {
          id: true,
          title: true,
          company: true,
          requiredSkills: true,
        },
      },
    },
  });

  if (submissions.length === 0) {
    notFound();
  }

  const bounty = submissions[0].bounty;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Recruiter Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Bounty: {bounty.title} • {bounty.company}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Required Skills: {bounty.requiredSkills.join(', ')}
          </p>
        </div>

        <DashboardView submissions={submissions} bounty={bounty} />
      </div>
    </div>
  );
}
