import skillTrendsData from '@/skill_trends (1).json';

export default function CurriculumDeltaPage() {
  const { _note, source_reference, sector_context_real, skills } = skillTrendsData;

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Predictive Curriculum Delta
          </h1>
          <p className="text-gray-600">
            Real-time skill demand trends to guide curriculum development
          </p>
        </div>

        {/* Disclaimer Banner */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">{_note}</p>
            </div>
          </div>
        </div>

        {/* Sector Context */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            AYUSH Sector Context
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">
                ${sector_context_real.ayush_market_size_2022_usd_billion}B
              </div>
              <div className="text-sm text-gray-600 mt-1">Market Size (2022)</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                ${sector_context_real.ayush_market_projection_2030_usd_billion}B
              </div>
              <div className="text-sm text-gray-600 mt-1">Projected (2030)</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">
                {sector_context_real.foreign_patients_on_ayush_visa_2024.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Foreign Patients (2024)
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">{sector_context_real.note}</p>
        </div>

        {/* Skills by Category */}
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{category}</h2>
            <div className="space-y-4">
              {categorySkills
                .sort((a, b) => b.demand_trend_pct - a.demand_trend_pct)
                .map((skill) => (
                  <div key={skill.skill} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{skill.skill}</h3>
                        <p className="text-xs text-gray-500">
                          NSQF Level {skill.nsqf_level} •{' '}
                          {skill.training_hours_classroom}h classroom
                          {skill.training_hours_ojt &&
                            ` + ${skill.training_hours_ojt}h OJT`}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-blue-600">
                          +{skill.demand_trend_pct}%
                        </div>
                        <div className="text-xs text-gray-500">demand trend</div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all"
                        style={{ width: `${Math.min(skill.demand_trend_pct * 3, 100)}%` }}
                      />
                    </div>

                    {skill.note && (
                      <p className="text-sm text-gray-600 mt-2 italic">{skill.note}</p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Source Reference */}
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-600">
            <strong>Source:</strong> {source_reference}
          </p>
        </div>
      </div>
    </div>
  );
}
