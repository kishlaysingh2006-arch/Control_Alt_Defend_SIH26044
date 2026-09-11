import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Blind Merit Engine
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Skill-based merit evaluation platform that removes bias from recruitment
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/bounties"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Bounties
          </Link>
          <Link
            href="/dashboard"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 border-2 border-blue-600 transition-colors"
          >
            Recruiter Dashboard
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold text-gray-900 mb-2">Skill-Based Evaluation</h3>
            <p className="text-sm text-gray-600">
              Automatic scoring based on demonstrated skills, not pedigree
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="font-semibold text-gray-900 mb-2">Blind Review</h3>
            <p className="text-sm text-gray-600">
              Recruiters see only anonymous IDs and skill scores
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Verified Competency</h3>
            <p className="text-sm text-gray-600">
              Proof of skills through actual work submissions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
