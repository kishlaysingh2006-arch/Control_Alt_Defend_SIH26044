import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import DashboardUI from './DashboardUI';

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

  return <DashboardUI bounty={bounty} submissions={submissions} />;
}
