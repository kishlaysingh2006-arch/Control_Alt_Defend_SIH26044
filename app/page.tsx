import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-36 bg-surface">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-gutter py-space-sm bg-surface-container-low mb-space-md font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[14px]">account_balance</span>
          <span>AYUSH National Skill Registry</span>
          <span>/</span>
          <span className="text-primary font-bold uppercase">Blind Merit Evaluation Gateway</span>
        </div>

        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col w-full">
            {/* Top Statutory Demo & Status Marquee */}
            <div className="bg-surface-container-high rounded-lg p-space-sm mb-space-md shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-DEFAULT bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold">SIH</span>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-on-surface">SIH-26044 / Blind Merit &amp; Competency Gateway Active</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Autonomous Public Sector Talent Registry • End-to-End PII Hash Scrubbing Standard</span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs self-stretch md:self-auto overflow-x-auto pb-1 md:pb-0">
                <Link className="px-space-sm py-1 bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase rounded-DEFAULT shadow-sm hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap flex items-center gap-1" href="/bounties">
                  <span className="material-symbols-outlined text-[14px]">task_alt</span> Bounties Demo
                </Link>
                <Link className="px-space-sm py-1 bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase rounded-DEFAULT shadow-sm hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap flex items-center gap-1" href="/dashboard">
                  <span className="material-symbols-outlined text-[14px]">visibility_off</span> Recruiter Console
                </Link>
                <Link className="px-space-sm py-1 bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase rounded-DEFAULT shadow-sm hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap flex items-center gap-1" href="/curriculum-delta">
                  <span className="material-symbols-outlined text-[14px]">analytics</span> Demand Forecast
                </Link>
              </div>
            </div>

            {/* Hero Banner */}
            <div className="relative bg-surface-container-lowest rounded-xl shadow-md overflow-hidden mb-space-lg">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-fixed/20 via-secondary-fixed/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg p-space-lg md:p-space-xl items-center relative z-10">
                <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
                  <div className="inline-flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-DEFAULT shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Ministry of AYUSH • National Skill Initiative</span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">|</span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">NSQF Level 4-8 Aligned</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                      Objective, Pedigree-Free Recruitment for the AYUSH Ecosystem
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                      Bridging academia and traditional medicine industry through blinded skill verification, standardized NSQF-benchmarked evaluation, and real-world micro-bounties. Eliminating demographic bias at the point of discovery.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
                    <Link className="px-space-md py-3 bg-primary text-on-primary rounded-DEFAULT font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-space-xs" href="/bounties">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span>Browse Active Bounties</span>
                    </Link>
                    <Link className="px-space-md py-3 bg-surface-container-low text-on-surface rounded-DEFAULT font-label-lg text-label-lg uppercase tracking-wider shadow-sm hover:bg-surface-container hover:text-primary transition-all flex items-center gap-space-xs" href="/dashboard">
                      <span className="material-symbols-outlined text-[18px]">shield</span>
                      <span>Enter Recruiter Console</span>
                    </Link>
                    <Link className="px-space-md py-3 bg-transparent text-secondary font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-fixed/30 rounded-DEFAULT transition-all flex items-center gap-space-xs" href="/curriculum-delta">
                      <span className="material-symbols-outlined text-[18px]">trending_up</span>
                      <span>Curriculum Delta</span>
                    </Link>
                  </div>
                  <div className="pt-space-xs flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-[16px]">lock_reset</span>
                      SHA-256 Candidate Anonymization
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-[16px]">workspace_premium</span>
                      AYUSH Quality Council Certified
                    </span>
                  </div>
                </div>
                {/* Hero Visual */}
                <div className="lg:col-span-5 flex flex-col gap-space-sm">
                  <div className="relative bg-surface-container-low rounded-lg p-space-sm shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between pb-space-xs mb-space-xs bg-surface-container-lowest px-space-sm py-space-xs rounded-DEFAULT">
                      <span className="font-label-sm text-label-sm uppercase text-primary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">security</span> LIVE BLIND SUBMISSION AUDIT
                      </span>
                      <span className="font-tabular-data text-tabular-data text-secondary text-xs">HASH: #AYUSH-9942</span>
                    </div>
                    <div className="relative rounded-DEFAULT overflow-hidden shadow-sm aspect-video bg-surface-container-highest">
                      <img alt="AYUSH Blind Skill Portal Architecture" className="w-full h-full object-cover object-top opacity-95 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZetxWDvlhw0xu1ivz8tOcC6knCM4-QryMyPui4QNhfMJIpRmJ_2swy4JiUKuftGVc1S3ROdvnmHpZaefs2ABCzx_GR2cqiLzr8hI_UfLSMeHXLZAOg0kWd8ZrVyqjwKymALK9LdvXqUlB9moziBRAABaDjiHRS4O31Ho2rpDtavMZAHjShu-_2ZzS8Bv0EF73_FDVqvMIRyoD6Fo06KSC-KmP06KoD8jGlIumsDbQ41VOmry2hkineNR3TaWBv846IEI" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-3 right-3 text-on-primary flex items-center justify-between font-label-sm text-label-sm">
                        <span className="bg-primary px-2 py-0.5 rounded-DEFAULT uppercase">Blind Dossier Preview</span>
                        <span className="font-tabular-data">PII REMOVED: 100%</span>
                      </div>
                    </div>
                    <div className="mt-space-sm bg-surface-container-lowest p-space-sm rounded-DEFAULT shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-DEFAULT bg-primary-fixed flex items-center justify-center text-primary font-headline-sm text-headline-sm">#01</div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md text-on-surface">Candidate ID: AY-4029-BLIND</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Phytochemical HPLC Purity Profiling</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-tabular-data text-tabular-data text-primary text-base">94.8% Match</span>
                        <span className="block font-label-sm text-label-sm text-secondary uppercase">NSQF Level 7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Ecosystem Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-lg">
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
                  <span className="font-label-md text-label-md uppercase tracking-wider">Active AYUSH Bounties</span>
                  <span className="material-symbols-outlined text-primary text-[20px]">assignment</span>
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-display-lg text-display-lg text-primary">24+</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Live Projects</span>
                </div>
                <div className="mt-space-xs w-full bg-surface-container-highest h-1 rounded-full overflow-hidden"><div className="bg-primary h-full w-3/4"></div></div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Micro-challenges across Ayurveda, Yoga, Unani &amp; Siddha</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
                  <span className="font-label-md text-label-md uppercase tracking-wider">Evaluated Submissions</span>
                  <span className="material-symbols-outlined text-primary text-[20px]">fact_check</span>
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-display-lg text-display-lg text-primary">1,480+</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Verified</span>
                </div>
                <div className="mt-space-xs w-full bg-surface-container-highest h-1 rounded-full overflow-hidden"><div className="bg-secondary h-full w-4/5"></div></div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Scored via standardized clinical &amp; formulation rubrics</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
                  <span className="font-label-md text-label-md uppercase tracking-wider">Healthcare Partners</span>
                  <span className="material-symbols-outlined text-primary text-[20px]">corporate_fare</span>
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-display-lg text-display-lg text-primary">85+</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Hospitals &amp; Pharma</span>
                </div>
                <div className="mt-space-xs w-full bg-surface-container-highest h-1 rounded-full overflow-hidden"><div className="bg-primary-container h-full w-2/3"></div></div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Patanjali, Dabur, Himalaya &amp; CCRAS Institutes</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
                  <span className="font-label-md text-label-md uppercase tracking-wider">Bias Mitigation Rate</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-display-lg text-display-lg text-secondary">100%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Zero PII Leak</span>
                </div>
                <div className="mt-space-xs w-full bg-surface-container-highest h-1 rounded-full overflow-hidden"><div className="bg-secondary h-full w-full"></div></div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Gender, caste, region, and college identity scrubbed</span>
              </div>
            </div>

            {/* Four Institutional Core Pillars */}
            <div className="mb-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-md gap-space-xs">
                <div>
                  <div className="font-label-md text-label-md text-secondary uppercase tracking-wider">CivicTech Framework</div>
                  <h2 className="font-headline-lg text-headline-lg text-primary">Architectural Pillars of Meritocracy</h2>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Designed strictly in compliance with GIGW and National Skills Qualification Framework.</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {[
                  { icon: "visibility_off", title: "Blind Review Protocol", desc: "Candidate submissions undergo cryptographic scrubbing. Pedigree, caste, gender, college tags, and geographic markers are replaced with randomized cryptographic tokens before recruiter triage.", sub1: "Protocol v1.2", sub2: "PII Scrubbed" },
                  { icon: "fact_check", title: "NSQF-Aligned Skill Evaluation", desc: "Submissions are benchmarked against standardized National Qualifications Register metrics. Rigorous programmatic scoring for Ayurvedic formulations, pharmacological modeling, and clinical analysis.", sub1: "Level 4 to Level 8", sub2: "NQR Verified" },
                  { icon: "domain_verification", title: "Industry Verified Competency", desc: "Premier AYUSH enterprises post actual industrial micro-challenges. Candidates receive direct employment offers and grants based on functional solution performance rather than CV claims.", sub1: "Direct Industry Offers", sub2: "Zero Gatekeeping" },
                  { icon: "schema", title: "Curriculum-Market Synergy", desc: "Dynamic market intelligence detects emerging shortages—such as Good Agricultural Practices (GAP) and Ayush Pharmacovigilance—feeding actionable insights directly to accredited universities.", sub1: "University Feed", sub2: "Real-Time Delta" },
                ].map((pillar) => (
                  <div key={pillar.title} className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
                    <div className="flex flex-col gap-space-sm">
                      <div className="w-10 h-10 rounded-DEFAULT bg-surface-container-low flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">{pillar.icon}</span>
                      </div>
                      <span className="font-title-md text-title-md text-on-surface">{pillar.title}</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.desc}</p>
                    </div>
                    <div className="mt-space-md pt-space-xs bg-surface-container-low p-space-xs rounded-DEFAULT flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span>{pillar.sub1}</span>
                      <span className="text-primary font-bold">{pillar.sub2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Dual-Module Workflow */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-lg">
              {/* Active Bounties Quick Portal */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Live Bounty Pipeline</span>
                      <h3 className="font-headline-md text-headline-md text-primary">Open Research &amp; Formulation Bounties</h3>
                    </div>
                    <Link className="font-label-sm text-label-sm uppercase text-primary hover:underline flex items-center gap-1" href="/bounties">View All 24 <span className="material-symbols-outlined text-[16px]">arrow_forward</span></Link>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    {[
                      { tag: "Ayurveda Formulation", tagBg: "bg-primary-fixed text-on-primary-fixed", id: "#BOUNTY-AY-104", title: "Standardized Stability Protocol for Kwatha Preparations", sponsor: "National Institute of Ayurveda • 6 Submissions Under Evaluation", amount: "₹75,000", level: "NSQF Level 6" },
                      { tag: "Siddha Pharmacology", tagBg: "bg-secondary-fixed text-on-secondary-fixed", id: "#BOUNTY-SD-088", title: "Heavy Metal Detoxic Validation in Parpam Preparations", sponsor: "Central Council for Research in Siddha • 11 Submissions", amount: "₹1,20,000", level: "NSQF Level 7" },
                      { tag: "Yoga Biomechanics", tagBg: "bg-surface-container-highest text-on-surface-variant", id: "#BOUNTY-YG-032", title: "Computer Vision Alignment Model for Therapeutic Asanas", sponsor: "Morarji Desai National Institute • 4 Submissions", amount: "₹50,000", level: "NSQF Level 5" },
                    ].map((bounty) => (
                      <div key={bounty.id} className="p-space-sm bg-surface-container-low rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs hover:bg-surface-container transition-colors">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-space-xs">
                            <span className={`px-1.5 py-0.5 ${bounty.tagBg} font-label-sm text-label-sm rounded-DEFAULT uppercase`}>{bounty.tag}</span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">{bounty.id}</span>
                          </div>
                          <span className="font-title-md text-title-md text-on-surface mt-1">{bounty.title}</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Sponsor: {bounty.sponsor}</span>
                        </div>
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0">
                          <span className="font-tabular-data text-tabular-data text-primary font-bold">{bounty.amount}</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">{bounty.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Are you an AYUSH researcher or registered corporate laboratory?</span>
                  <button className="px-space-sm py-1 bg-primary text-on-primary font-label-sm text-label-sm uppercase rounded-DEFAULT shadow-sm hover:bg-primary-container">Post a Problem Statement</button>
                </div>
              </div>

              {/* Predictive Curriculum Delta Widget */}
              <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Academic-Industry Delta</span>
                      <h3 className="font-headline-md text-headline-md text-primary">Skill Deficit Forecasting</h3>
                    </div>
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded-DEFAULT uppercase">Q4 2024</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Aggregate bounty requirements vs. national university syllabi reveal significant industry voids in modern analytics.</p>
                  <div className="flex flex-col gap-space-sm">
                    {[
                      { label: "GAP & Good Laboratory Practice (GLP)", pct: 84, req: "310 certified", avail: "49 graduates" },
                      { label: "Ayush Pharmacovigilance & Safety Data", pct: 71, req: "180 analysts", avail: "52 graduates" },
                      { label: "Clinical Trial Regulatory Documentation", pct: 58, req: "420 auditors", avail: "176 graduates" },
                    ].map((skill) => (
                      <div key={skill.label}>
                        <div className="flex justify-between font-label-sm text-label-sm mb-1">
                          <span className="text-on-surface font-bold">{skill.label}</span>
                          <span className={`${skill.pct > 60 ? 'text-secondary' : 'text-primary'} font-tabular-data font-bold`}>{skill.pct}% Deficit</span>
                        </div>
                        <div className="w-full bg-surface-container h-2 rounded-DEFAULT overflow-hidden">
                          <div className={`${skill.pct > 60 ? 'bg-secondary' : 'bg-primary'} h-full`} style={{ width: `${skill.pct}%` }}></div>
                        </div>
                        <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant mt-0.5 text-xs">
                          <span>Required: {skill.req}</span>
                          <span>Available: {skill.avail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-space-md p-space-sm bg-surface-container-low rounded-DEFAULT flex items-center justify-between">
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase font-bold">
                    <span className="material-symbols-outlined text-[16px]">school</span> NCISM Syllabus Sync Recommended
                  </div>
                  <Link className="text-primary font-label-sm text-label-sm uppercase hover:underline" href="/curriculum-delta">View Full Report</Link>
                </div>
              </div>
            </div>

            {/* Civic Partner Seal Grid */}
            <div className="bg-surface-container-low p-space-md rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md mb-space-lg">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Validated Integration Partners</span>
                <span className="font-title-md text-title-md text-primary">AYUSH Industry &amp; Research Alliance</span>
              </div>
              <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-lg text-label-lg uppercase">
                {["CCRAS", "CCRH", "CCRS", "NIIA", "All India Institute of Ayurveda"].map((p) => (
                  <span key={p} className="px-space-sm py-1 bg-surface-container-lowest rounded-DEFAULT shadow-sm text-on-surface">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
