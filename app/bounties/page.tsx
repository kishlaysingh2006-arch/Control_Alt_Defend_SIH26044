import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function BountiesPage() {
  const bounties = await prisma.bounty.findMany({
    orderBy: { title: 'asc' },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Bounties</h1>
          <p className="mt-2 text-gray-600">
            Choose a bounty and submit your work to demonstrate your skills
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bounties.map((bounty) => (
            <Link
              key={bounty.id}
              href={`/bounties/${bounty.id}`}
              className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {bounty.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{bounty.company}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {bounty.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {bounty.requiredSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Submit work →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {bounties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No bounties available yet.</p>
            <p className="text-sm text-gray-400 mt-2">
              Run the seed script to populate sample bounties.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
