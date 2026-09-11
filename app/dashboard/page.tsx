import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function DashboardRedirect() {
  // Get the first bounty with submissions
  const bountyWithSubmissions = await prisma.bounty.findFirst({
    where: {
      submissions: {
        some: {},
      },
    },
    select: {
      id: true,
    },
  });

  if (bountyWithSubmissions) {
    redirect(`/dashboard/${bountyWithSubmissions.id}`);
  }

  // No submissions yet
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          No Submissions Yet
        </h1>
        <p className="text-gray-600 mb-6">
          Run the seed script to populate demo submissions
        </p>
        <code className="bg-gray-100 px-4 py-2 rounded text-sm">
          npm run seed:submissions
        </code>
      </div>
    </div>
  );
}
