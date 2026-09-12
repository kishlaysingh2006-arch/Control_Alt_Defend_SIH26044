"use client";

import Link from "next/link";

export default function CurriculumDeltaPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col justify-between pt-space-md pb-space-lg">
        <div className="flex flex-col gap-space-md">
          <div className="px-space-md flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">verified_user</span>
              </div>
              <span className="font-label-lg text-label-lg text-primary uppercase">AYUSH RECRUIT</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Blind Merit Engine • SIH-26044</span>
          </div>
          <div className="mx-space-md px-space-sm py-space-xs bg-surface-container-high rounded-DEFAULT">
            <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Blind Evaluation Active</span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Candidate PII Scrubbed</span>
          </div>
          <nav className="flex flex-col gap-1 px-space-sm">
            <Link className="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-label-lg text-label-lg" href="/dashboard">
              <span className="material-symbols-outlined mr-space-sm text-[18px]">space_dashboard</span>Dashboard Overview
            </Link>
            <Link className="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-label-lg text-label-lg" href="/bounties">
              <span className="material-symbols-outlined mr-space-sm text-[18px]">verified</span>Active Bounties
            </Link>
            <Link className="flex items-center px-space-md py-space-sm rounded-lg transition-all font-label-lg bg-primary-container text-on-primary-container" href="/curriculum-delta" aria-current="page">
              <span className="material-symbols-outlined mr-space-sm text-[18px]">analytics</span>Curriculum Delta
            </Link>
            <Link className="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-label-lg text-label-lg" href="/dashboard">
              <span className="material-symbols-outlined mr-space-sm text-[18px]">how_to_reg</span>Blind Merit Roster
            </Link>
            <a className="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-label-lg text-label-lg" href="#">
              <span className="material-symbols-outlined mr-space-sm text-[18px]">menu_book</span>NQR Guidelines
            </a>
          </nav>
        </div>
        <div className="px-space-md flex flex-col gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[14px]">gavel</span>
            <span>Statutory Evaluation Sandbox</span>
          </div>
          <span>SIH 2024 / Control_Alt_Defend</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="pl-64">
        {/* Top Header */}
        <header className="fixed top-0 left-64 right-0 h-16 bg-surface shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md">
            <span className="font-label-sm text-label-sm uppercase bg-surface-container px-space-sm py-1 rounded-DEFAULT text-on-surface-variant">Institutional Recruiter Session</span>
            <span className="text-on-surface-variant font-label-sm text-label-sm hidden md:inline">Govt. of India • National Skill Portal</span>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs bg-primary-fixed text-on-primary-fixed px-space-sm py-1 rounded-DEFAULT font-label-sm text-label-sm uppercase">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span>PII Redacted</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </header>

        <main className="relative pt-16 bg-surface">
          {/* Breadcrumb */}
          <div className="px-space-lg py-space-sm bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[14px]">admin_panel_settings</span>
            <span>Evaluation Console</span>
            <span>/</span>
            <span className="text-primary font-bold uppercase">National Ayurvedic &amp; AYUSH Talent Match</span>
          </div>

          <div className="p-space-lg">
            <div className="flex flex-col w-full">
              {/* Page Header */}
              <div className="flex flex-col gap-space-sm pb-space-lg">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                  <div>
                    <div className="flex items-center gap-space-xs font-label-md text-label-md uppercase text-primary tracking-wider mb-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span>NSQF National Registry Live Telemetry • Sub-Council on AYUSH</span>
                    </div>
                    <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Predictive Curriculum Delta &amp; Skill Demand Engine</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl mt-1">
                      Real-time industry hiring and skill requirements mapped against National Skills Qualifications Framework (NSQF) to inform university curricula, vocational accreditation, and policy revisions.
                    </p>
                  </div>
                  <div className="flex items-center gap-space-sm flex-wrap shrink-0">
                    <button className="flex items-center gap-space-xs px-space-md py-2 bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-high transition-colors" id="filterBtn">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">filter_alt</span>
                      <span>Filter by State</span>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
                    </button>
                    <button className="flex items-center gap-space-xs px-space-md py-2 bg-surface-container text-on-surface font-label-lg text-label-lg rounded-lg hover:bg-surface-container-high transition-colors shadow-sm" onClick={() => window.print()}>
                      <span className="material-symbols-outlined text-[18px]">sim_card_download</span>
                      <span>Export Syllabi Recommendations</span>
                    </button>
                    <button className="flex items-center gap-space-xs px-space-md py-2 bg-primary text-on-primary font-label-lg text-label-lg rounded-lg hover:bg-primary-container transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                      <span>Download Curriculum Delta PDF</span>
                    </button>
                  </div>
                </div>
                {/* Official Advisory Strip */}
                <div className="mt-space-sm p-space-md bg-secondary-fixed/30 rounded-lg shadow-sm flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  </div>
                  <div className="flex flex-col text-on-secondary-fixed">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Official Statutory Advisory</span>
                    <p className="font-body-sm text-body-sm text-on-secondary-fixed-variant mt-0.5">
                      Real, published job roles and NSQF qualification levels recognized by the Ministry of AYUSH through the Sub-Council on AYUSH (Healthcare Sector Skill Council). Trend projections are calibrated against national health tourism, Ayush Visa data, and NABH wellness industry telemetry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Macro AYUSH Sector Telemetry Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Baseline Valuation</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">2022 Data</span>
                  </div>
                  <div>
                    <div className="font-display-lg text-display-lg text-primary tracking-tight">$43.3 <span className="text-headline-md font-normal text-on-surface-variant">Billion</span></div>
                    <div className="font-headline-sm text-headline-sm text-on-surface mt-1">Current Sector Market Size</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">National production, herbal exports &amp; domestic AYUSH healthcare delivery.</p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">assured_workload</span>
                    <span>Validated via MoA Economic Wing</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-secondary-container/10 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Projected Trajectory</span>
                    <span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">2030 Target</span>
                  </div>
                  <div>
                    <div className="font-display-lg text-display-lg text-secondary tracking-tight">$200 <span className="text-headline-md font-normal text-on-surface-variant">Billion</span></div>
                    <div className="font-headline-sm text-headline-sm text-on-surface mt-1">Projected Market Scale</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Rapid CAGR growth propelled by global wellness lifestyle integration.</p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                    <span>Compound 21.4% Annual Expansion</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-tertiary/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Ayush Visa Influx</span>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">FY 2023-24</span>
                  </div>
                  <div>
                    <div className="font-display-lg text-display-lg text-tertiary tracking-tight">46,000<span className="text-headline-md text-primary">+</span></div>
                    <div className="font-headline-sm text-headline-sm text-on-surface mt-1">Foreign Medical Patients</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Direct international admissions for classical Ayurvedic &amp; Naturopathic therapies.</p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-tertiary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">flight_land</span>
                    <span>Medical Value Travel Surge</span>
                  </div>
                </div>
                <div className="bg-primary p-space-lg rounded-xl shadow-sm text-on-primary flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-on-primary/10 rounded-full pointer-events-none"></div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim font-bold">Curriculum Delta</span>
                    <span className="px-space-xs py-0.5 rounded bg-on-primary/10 text-primary-fixed font-label-sm text-label-sm">Systemic Urgency</span>
                  </div>
                  <div>
                    <div className="font-display-lg text-display-lg text-on-primary tracking-tight">18.4%</div>
                    <div className="font-headline-sm text-headline-sm text-on-primary mt-1">Curriculum Lag Index</div>
                    <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-1">Quantitative disparity between legacy university syllabus and active industry hiring criteria.</p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary-fixed font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">sync_problem</span>
                    <span>High priority for 2025 Syllabus Refactor</span>
                  </div>
                </div>
              </div>

              {/* CATEGORY 1: Ayurveda Therapy & Clinical Care */}
              <div className="flex flex-col gap-space-xl">
                <div className="flex flex-col gap-space-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-7 h-7 rounded bg-primary text-on-primary flex items-center justify-center font-bold font-label-md text-label-md">01</div>
                      <div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Ayurveda Therapy &amp; Clinical Care</h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Core clinical interventions, para-surgical therapies, and NABH-standardised inpatient support.</p>
                      </div>
                    </div>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold mt-2 sm:mt-0">3 Tracked Roles</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
                    {[
                      { title: "Panchakarma Technician", level: "NSQF Level 4", demand: "+26% Demand Surge", demandColor: "text-primary", hours: "1000h Classroom + 500h On-the-Job Training (OJT)", pressure: 88, desc: "One of the most requested clinical support roles in Ayurveda hospitals and wellness centres across NABH-accredited facilities.", delta: "Introduce digital pulse-monitoring telemetry and automated Abhyanga chamber safety SOPs.", code: "HSSC/Q7301" },
                      { title: "Kshara Karma Technician", level: "NSQF Level 4", demand: "+11% Steady", demandColor: "text-on-surface-variant", hours: "1000h Classroom + 200h On-the-Job Training (OJT)", pressure: 64, desc: "Specialised para-surgical Ayurveda technique — a niche but highly stable surgical assistance skill area for anorectal conditions.", delta: "Incorporate modern sterilization validation and minimally invasive post-op monitoring protocols.", code: "HSSC/Q7303" },
                      { title: "Cupping Therapy Assistant", level: "NSQF Level 4", demand: "+9% Demand", demandColor: "text-on-surface-variant", hours: "520h Classroom + 240h On-the-Job Training (OJT)", pressure: 58, desc: "Growing as cupping gains mainstream clinical visibility in sports rehabilitation, musculoskeletal trauma, and pain management clinics.", delta: "Standardize vacuum pressure gauges, disposable silicone hygiene standards, and dermal contraindication screening.", code: "HSSC/Q7305" },
                    ].map((role) => (
                      <div key={role.code} className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                          <div className="flex items-start justify-between gap-space-sm mb-space-sm">
                            <span className="font-label-md text-label-md uppercase px-space-sm py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-bold">{role.level}</span>
                            <span className={`font-label-sm text-label-sm font-bold ${role.demandColor} flex items-center gap-0.5`}>
                              <span className="material-symbols-outlined text-[16px]">arrow_upward</span> {role.demand}
                            </span>
                          </div>
                          <h3 className="font-headline-md text-headline-md text-on-surface">{role.title}</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{role.hours}</p>
                          <div className="mt-space-md">
                            <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
                              <span>Clinical Demand Pressure</span>
                              <span className="font-tabular-data text-tabular-data text-primary font-bold">{role.pressure} / 100</span>
                            </div>
                            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                              <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${role.pressure}%` }}></div>
                            </div>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md">{role.desc}</p>
                          <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg">
                            <div className="font-label-sm text-label-sm uppercase text-primary font-bold flex items-center gap-1 mb-1">
                              <span className="material-symbols-outlined text-[14px]">auto_read_pause</span>
                              <span>Curriculum Delta Required</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface">{role.delta}</p>
                          </div>
                        </div>
                        <div className="mt-space-lg pt-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                          <span>Code: {role.code}</span>
                          <button className="text-primary hover:underline font-bold flex items-center gap-0.5">
                            <span>View NOS Specs</span>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CATEGORY 2: Yoga & Naturopathy */}
                <div className="flex flex-col gap-space-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-7 h-7 rounded bg-secondary text-on-secondary flex items-center justify-center font-bold font-label-md text-label-md">02</div>
                      <div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Yoga &amp; Naturopathy</h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Preventive wellness, rehabilitation therapies, and corporate lifestyle mitigation frameworks.</p>
                      </div>
                    </div>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mt-2 sm:mt-0">3 Tracked Roles</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
                    {[
                      { title: "Yoga Wellness Trainer", level: "NSQF Level 5", demand: "+31% Surge", demandIcon: "bolt", demandColor: "text-secondary", hours: "405h Classroom Instruction", pressure: 96, pressureColor: "text-secondary", barColor: "bg-secondary", desc: "Tracks explosive growth in wellness tourism, preventive healthcare insurance packages, and corporate wellness initiatives.", delta: "Add biometric stress-tracking (HRV telemetry) and corporate workstation ergonomics integration.", code: "HSSC/Q7401", badge: "Peak Growth" },
                      { title: "Yoga Therapy Assistant", level: "NSQF Level 4", demand: "+22% Demand", demandIcon: "arrow_upward", demandColor: "text-primary", hours: "560h Classroom + 340h On-the-Job Training (OJT)", pressure: 78, pressureColor: "text-primary", barColor: "bg-primary-container", desc: "Supports certified yoga therapists in clinical and integrative musculoskeletal rehabilitation settings, geriatric centers, and pain clinics.", delta: "Train for orthopedic prop mechanics, geriatric stabilization ropes, and spine-load metrics.", code: "HSSC/Q7402" },
                      { title: "Assistant Yoga Instructor", level: "NSQF Level 3", demand: "+17% Demand", demandIcon: "arrow_upward", demandColor: "text-on-surface-variant", hours: "203h Classroom Instruction", pressure: 72, pressureColor: "text-primary", barColor: "bg-primary-container", desc: "Entry-level teaching role with a high volume of open positions in public schools, community centers, urban sports complexes, and civic gyms.", delta: "Standardize multi-lingual basic anatomy instruction and common injury first-aid certifications.", code: "HSSC/Q7403" },
                    ].map((role) => (
                      <div key={role.code} className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                        {role.badge && (
                          <div className="absolute top-0 right-0 bg-secondary text-on-secondary px-3 py-1 rounded-bl-lg font-label-sm text-label-sm uppercase font-bold tracking-wider">{role.badge}</div>
                        )}
                        <div>
                          <div className="flex items-start justify-between gap-space-sm mb-space-sm">
                            <span className="font-label-md text-label-md uppercase px-space-sm py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-bold">{role.level}</span>
                            <span className={`font-label-sm text-label-sm font-bold ${role.demandColor} flex items-center gap-0.5`}>
                              <span className="material-symbols-outlined text-[16px]">{role.demandIcon}</span> {role.demand}
                            </span>
                          </div>
                          <h3 className="font-headline-md text-headline-md text-on-surface">{role.title}</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{role.hours}</p>
                          <div className="mt-space-md">
                            <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
                              <span>Sector Demand Index</span>
                              <span className={`font-tabular-data text-tabular-data ${role.pressureColor} font-bold`}>{role.pressure} / 100</span>
                            </div>
                            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                              <div className={`h-full ${role.barColor} rounded-full transition-all duration-1000`} style={{ width: `${role.pressure}%` }}></div>
                            </div>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md">{role.desc}</p>
                          <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg">
                            <div className="font-label-sm text-label-sm uppercase text-primary font-bold flex items-center gap-1 mb-1">
                              <span className="material-symbols-outlined text-[14px]">auto_read_pause</span>
                              <span>Curriculum Delta Required</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface">{role.delta}</p>
                          </div>
                        </div>
                        <div className="mt-space-lg pt-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                          <span>Code: {role.code}</span>
                          <button className="text-primary hover:underline font-bold flex items-center gap-0.5">
                            <span>View NOS Specs</span>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CATEGORY 3: Nutrition & Dietetics */}
                <div className="flex flex-col gap-space-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-7 h-7 rounded bg-tertiary text-on-tertiary flex items-center justify-center font-bold font-label-md text-label-md">03</div>
                      <div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Ayurveda Nutrition &amp; Dietetics</h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Clinical Ahara planning, therapeutic formulation, and lifestyle metabolic management.</p>
                      </div>
                    </div>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-tertiary font-bold mt-2 sm:mt-0">2 Tracked Roles</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                    {[
                      { title: "Ayurveda Dietician & Ahara Specialist", level: "NSQF Level 5", demand: "+19% Trend", hours: "540h Classroom Curriculum", pressure: 79, label: "Metabolic Clinical Influx", desc: "Growing interest in food-as-medicine approaches within integrative healthcare, clinical dietetics, diabetes remission, and metabolic disorder clinics.", delta: "Correlate traditional Pathya-Apathya caloric metrics with glycemic index charts and gut microbiota profiling.", code: "HSSC/Q7501" },
                      { title: "Ayurveda Ahar and Poshan Sahyaka", level: "NSQF Level 4", demand: "+14% Trend", hours: "500h Classroom + 100h On-the-Job Training (OJT)", pressure: 66, label: "Culinary Nutrition Influx", desc: "Entry-level support role in Ayurvedic diet preparation, therapeutic hospital kitchen management, and nutrient counselling under supervision.", delta: "FSSAI herbal manufacturing hygiene mandates, allergen labelling, and standardized decoction vessel maintenance.", code: "HSSC/Q7502" },
                    ].map((role) => (
                      <div key={role.code} className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                          <div className="flex items-start justify-between gap-space-sm mb-space-sm">
                            <span className="font-label-md text-label-md uppercase px-space-sm py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-bold">{role.level}</span>
                            <span className="font-label-sm text-label-sm font-bold text-primary flex items-center gap-0.5">
                              <span className="material-symbols-outlined text-[16px]">arrow_upward</span> {role.demand}
                            </span>
                          </div>
                          <h3 className="font-headline-md text-headline-md text-on-surface">{role.title}</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{role.hours}</p>
                          <div className="mt-space-md">
                            <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
                              <span>{role.label}</span>
                              <span className="font-tabular-data text-tabular-data text-primary font-bold">{role.pressure} / 100</span>
                            </div>
                            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                              <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${role.pressure}%` }}></div>
                            </div>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md">{role.desc}</p>
                          <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg">
                            <div className="font-label-sm text-label-sm uppercase text-primary font-bold flex items-center gap-1 mb-1">
                              <span className="material-symbols-outlined text-[14px]">auto_read_pause</span>
                              <span>Curriculum Delta Required</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface">{role.delta}</p>
                          </div>
                        </div>
                        <div className="mt-space-lg pt-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                          <span>Code: {role.code}</span>
                          <button className="text-primary hover:underline font-bold flex items-center gap-0.5">
                            <span>View NOS Specs</span>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* NSQF Alignment Matrix Table */}
              <div className="mt-space-xl bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-sm">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">National Alignment Matrix &amp; Curriculum Gap Overview</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">High-density summary of statutory credit hours versus industrial skill deficit.</p>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block"></span>
                    <span>High Re-accreditation Priority</span>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low font-label-md text-label-md uppercase text-on-surface-variant">
                        <th className="py-space-sm px-space-md rounded-l">Qualification Title</th>
                        <th className="py-space-sm px-space-md">NSQF</th>
                        <th className="py-space-sm px-space-md">Classroom / OJT</th>
                        <th className="py-space-sm px-space-md">Industry Demand</th>
                        <th className="py-space-sm px-space-md">Targeted Upgrade Horizon</th>
                        <th className="py-space-sm px-space-md text-right rounded-r">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">
                      {[
                        { title: "Panchakarma Technician", titleColor: "text-primary", level: "Level 4", levelBg: "bg-primary-fixed text-on-primary-fixed", hours: "1000h / 500h", demand: "+26% (High)", demandColor: "text-primary", horizon: "Q2 2025 Syllabus Cycle", action: "Review Draft", actionBg: "bg-surface-container text-on-surface" },
                        { title: "Yoga Wellness Trainer", titleColor: "text-secondary", level: "Level 5", levelBg: "bg-secondary-fixed text-on-secondary-fixed-variant", hours: "405h / Direct", demand: "+31% (Surge)", demandColor: "text-secondary font-bold", horizon: "Immediate Notification", action: "Accelerate", actionBg: "bg-secondary text-on-secondary" },
                        { title: "Ayurveda Dietician & Ahara Specialist", titleColor: "text-on-surface", level: "Level 5", levelBg: "bg-primary-fixed text-on-primary-fixed", hours: "540h / Direct", demand: "+19% (Elevated)", demandColor: "text-primary", horizon: "Q3 2025 Syllabus Cycle", action: "Review Draft", actionBg: "bg-surface-container text-on-surface" },
                        { title: "Kshara Karma Technician", titleColor: "text-on-surface", level: "Level 4", levelBg: "bg-surface-container text-on-surface-variant", hours: "1000h / 200h", demand: "+11% (Stable)", demandColor: "text-on-surface", horizon: "Annual Routine Review", action: "Audit", actionBg: "bg-surface-container text-on-surface" },
                      ].map((row) => (
                        <tr key={row.title} className="hover:bg-surface-container-low/50 transition-colors">
                          <td className={`py-space-md px-space-md font-bold ${row.titleColor}`}>{row.title}</td>
                          <td className="py-space-md px-space-md"><span className={`px-2 py-0.5 rounded ${row.levelBg} font-bold font-label-sm text-label-sm`}>{row.level}</span></td>
                          <td className="py-space-md px-space-md">{row.hours}</td>
                          <td className={`py-space-md px-space-md font-tabular-data text-tabular-data ${row.demandColor}`}>{row.demand}</td>
                          <td className="py-space-md px-space-md">{row.horizon}</td>
                          <td className="py-space-md px-space-md text-right">
                            <button className={`px-3 py-1 ${row.actionBg} rounded hover:opacity-80 font-label-sm text-label-sm`}>{row.action}</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer Advisory */}
              <div className="mt-space-xl p-space-md bg-surface-container-low rounded-lg shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md mb-space-lg">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">info</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Data sources: Sub-Council on AYUSH (Healthcare Sector Skill Council), NSDC, NQR Gateway, MoA Economic Wing. All projections are algorithmically calibrated and do not constitute official policy commitments.
                  </p>
                </div>
                <Link href="/" className="font-label-sm text-label-sm text-primary uppercase hover:underline whitespace-nowrap">Return to Portal Home</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
