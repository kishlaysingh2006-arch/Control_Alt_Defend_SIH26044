"use client";

import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function AvailableBountiesPage() {
  const [bountyState, setBountyState] = useState<{ [key: string]: string }>({});

  const handleButtonClick = (id: string) => {
    setBountyState((prev) => ({ ...prev, [id]: "loading" }));
    setTimeout(() => {
      setBountyState((prev) => ({ ...prev, [id]: "ready" }));
    }, 800);
  };

  return (
    <>
      <Header />
      <main className="w-full pt-36 bg-surface">
        <div className="max-w-7xl mx-auto px-gutter py-space-sm bg-surface-container-low mb-space-md font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[14px]">account_balance</span>
          <span>AYUSH National Skill Registry</span>
          <span>/</span>
          <span className="text-primary font-bold uppercase">Blind Merit Evaluation Gateway</span>
        </div>

        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col w-full">
            {/* Top Statutory Alert Strip */}
            <div className="w-full bg-surface-container-lowest p-space-md shadow-sm mb-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="p-1.5 bg-primary text-on-primary rounded-DEFAULT flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </span>
                <div>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-headline-sm text-headline-sm text-primary">Blind Review Protocol v2.4 (SHA-256 Engine)</span>
                    <span className="px-space-xs py-0.5 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase rounded-DEFAULT">Statutory Active</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">All attachments and code samples undergo automatic heuristic stripping of applicant name, college crest, and metadata prior to expert evaluation.</p>
                </div>
              </div>
              <div className="flex items-center gap-space-md text-on-surface font-label-sm text-label-sm self-end md:self-auto">
                <span className="flex items-center gap-1 text-primary"><span className="w-2 h-2 rounded-full bg-primary animate-ping"></span> Live Evaluation Cycle 2024-Q4</span>
                <span className="text-on-surface-variant">|</span>
                <span className="text-on-surface-variant">Active Pool: <strong className="text-on-surface font-tabular-data text-tabular-data">₹3,45,000 INR</strong></span>
              </div>
            </div>

            {/* Header & Context Display */}
            <div className="w-full bg-surface-container-lowest p-space-lg shadow-sm mb-space-lg">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase mb-space-xs">
                    <span className="material-symbols-outlined text-[15px]">clinical_notes</span>
                    <span>Ministry of Ayush National Skill Registry • SIH-26044 Micro-Grants</span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-primary mb-space-xs tracking-tight">Available Industry Micro-Bounties</h1>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Solve real-world traditional medicine, clinical workflow, and wellness operational challenges. Submissions are evaluated 100% blind without revealing your university or identity to promote absolute academic meritocracy.
                  </p>
                </div>
                {/* Key Counters Summary Bento */}
                <div className="flex items-center gap-space-md bg-surface-container-low p-space-sm rounded-DEFAULT">
                  <div className="px-space-sm text-center">
                    <span className="block font-headline-lg text-headline-lg text-primary font-tabular-data">48</span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Active Bounties</span>
                  </div>
                  <div className="w-px h-8 bg-surface-variant"></div>
                  <div className="px-space-sm text-center">
                    <span className="block font-headline-lg text-headline-lg text-secondary font-tabular-data">630+</span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Blind Submissions</span>
                  </div>
                  <div className="w-px h-8 bg-surface-variant"></div>
                  <div className="px-space-sm text-center">
                    <span className="block font-headline-lg text-headline-lg text-primary-container font-tabular-data">94.2%</span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Evaluator SLA</span>
                  </div>
                </div>
              </div>

              {/* Filter & Search Toolbar Strip */}
              <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-md rounded-DEFAULT flex flex-col gap-space-md">
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-space-sm justify-between">
                  {/* Search input */}
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
                    <input className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-2 text-body-md font-body-md rounded-DEFAULT focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Search bounties by skill, sector, or keyword..." type="text"/>
                  </div>
                  {/* Dropdowns */}
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <div className="flex items-center gap-1 bg-surface-container-lowest px-3 py-2 rounded-DEFAULT shadow-sm text-on-surface text-body-sm font-body-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Level:</span>
                      <select className="bg-transparent text-on-surface font-title-md text-title-md focus:outline-none cursor-pointer">
                        <option>All NSQF Levels (3 - 5)</option>
                        <option>NSQF Level 3 (Assistant)</option>
                        <option>NSQF Level 4 (Technician/Associate)</option>
                        <option>NSQF Level 5 (Specialist/Supervisor)</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-1 bg-surface-container-lowest px-3 py-2 rounded-DEFAULT shadow-sm text-on-surface text-body-sm font-body-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Status:</span>
                      <select className="bg-transparent text-on-surface font-title-md text-title-md focus:outline-none cursor-pointer">
                        <option>Open for Submissions</option>
                        <option>Under Blind Review</option>
                        <option>Awarded / Archived</option>
                      </select>
                    </div>
                    <button className="bg-primary text-on-primary px-space-md py-2 rounded-DEFAULT font-label-lg text-label-lg hover:bg-primary-container transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">filter_alt</span>
                      <span>Apply Filters</span>
                    </button>
                  </div>
                </div>
                {/* Sector Filter Tabs */}
                <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant mr-space-xs">Sector Track:</span>
                  <button className="px-space-sm py-1 rounded-DEFAULT bg-primary text-on-primary font-label-sm text-label-sm uppercase shadow-sm">All AYUSH (48)</button>
                  <button className="px-space-sm py-1 rounded-DEFAULT bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm uppercase shadow-sm">Ayurveda Pharmacy (14)</button>
                  <button className="px-space-sm py-1 rounded-DEFAULT bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm uppercase shadow-sm">Yoga & Naturopathy (16)</button>
                  <button className="px-space-sm py-1 rounded-DEFAULT bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm uppercase shadow-sm">Unani & Siddha (9)</button>
                  <button className="px-space-sm py-1 rounded-DEFAULT bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm uppercase shadow-sm">Clinical Documentation (9)</button>
                </div>
              </div>
            </div>

            {/* Primary Content Grid: Bounties + Blind Protocol Sidebar */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-xl">
              {/* Bounty Cards Column (8 Cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                {/* Card 1: Sanjivani Herbal Foundation */}
                <div className="bg-surface-container-lowest p-space-lg shadow-sm rounded-DEFAULT flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-7 h-7 rounded-DEFAULT bg-primary text-on-primary flex items-center justify-center font-tabular-data text-tabular-data">#01</span>
                        <span className="font-title-md text-title-md text-primary font-bold">Sanjivani Herbal Foundation</span>
                        <span className="flex items-center gap-0.5 px-space-xs py-0.5 bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm rounded-DEFAULT uppercase">
                          <span className="material-symbols-outlined text-[13px]">verified</span> Verified Partner
                        </span>
                      </div>
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase rounded-DEFAULT">NSQF Level 4</span>
                    </div>
                    <Link href="/bounties/bnt-01">
                      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs hover:text-primary transition-colors cursor-pointer">
                        Compile a Medicinal Plant Reference Guide for a Community Herbal Garden
                      </h2>
                    </Link>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      Develop a comprehensive reference guide for medicinal plants in a community herbal garden. The guide should include plant identification, active phytoconstituents, traditional Ayurvedic pharmacology, cultivation standards, and clinical dosage safety.
                    </p>
                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">eco</span> Medicinal Plant Identification
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">menu_book</span> Ayurvedic Pharmacology
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">description</span> Documentation
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">science</span> Dravyaguna Vijnana
                      </span>
                    </div>
                  </div>
                  {/* Metric and Action Strip */}
                  <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                    <div className="flex flex-wrap items-center gap-space-md text-body-sm font-body-sm">
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Bounty Honorarium</span>
                        <span className="font-headline-sm text-headline-sm text-primary font-tabular-data">₹25,000</span>
                      </div>
                      <div className="w-px h-6 bg-surface-variant"></div>
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Blind Submissions</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-tabular-data">18 Candidates</span>
                      </div>
                      <div className="w-px h-6 bg-surface-variant"></div>
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Time Remaining</span>
                        <span className="font-headline-sm text-headline-sm text-secondary font-tabular-data">5 days left</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs w-full sm:w-auto">
                      <Link href="/bounties/bnt-01" className="flex-1 sm:flex-none px-space-md py-2 bg-surface-container hover:bg-surface-variant text-on-surface font-label-lg text-label-lg rounded-DEFAULT transition-colors text-center">
                        View Brief
                      </Link>
                      <Link href="/bounties/bnt-01" className="flex-1 sm:flex-none px-space-md py-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-DEFAULT transition-colors flex items-center justify-center gap-1 shadow-sm">
                        <span>Submit Work (Blind Portal)</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 2: Amrita Ayush Wellness Center */}
                <div className="bg-surface-container-lowest p-space-lg shadow-sm rounded-DEFAULT flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-7 h-7 rounded-DEFAULT bg-primary text-on-primary flex items-center justify-center font-tabular-data text-tabular-data">#02</span>
                        <span className="font-title-md text-title-md text-primary font-bold">Amrita Ayush Wellness Center</span>
                        <span className="flex items-center gap-0.5 px-space-xs py-0.5 bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm rounded-DEFAULT uppercase">
                          <span className="material-symbols-outlined text-[13px]">verified</span> Verified Partner
                        </span>
                      </div>
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase rounded-DEFAULT">NSQF Level 4</span>
                    </div>
                    <Link href="/bounties/bnt-02">
                      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs hover:text-primary transition-colors cursor-pointer">
                        Design a Patient Wellness Dashboard for a Panchakarma Clinic
                      </h2>
                    </Link>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      Design a comprehensive patient wellness tracking system for a Panchakarma clinic. The dashboard should track patient vitals, preparatory Snehana/Swedana phases, post-treatment dietary guidelines, and therapy outcome metrics.
                    </p>
                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">spa</span> Panchakarma Protocol
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">dashboard</span> Patient Documentation
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">monitor_heart</span> Wellness Tracking
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">analytics</span> Therapy Outcomes
                      </span>
                    </div>
                  </div>
                  {/* Metric and Action Strip */}
                  <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                    <div className="flex flex-wrap items-center gap-space-md text-body-sm font-body-sm">
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Bounty Honorarium</span>
                        <span className="font-headline-sm text-headline-sm text-primary font-tabular-data">₹40,000</span>
                      </div>
                      <div className="w-px h-6 bg-surface-variant"></div>
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Blind Submissions</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-tabular-data">12 Candidates</span>
                      </div>
                      <div className="w-px h-6 bg-surface-variant"></div>
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Time Remaining</span>
                        <span className="font-headline-sm text-headline-sm text-secondary font-tabular-data">8 days left</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs w-full sm:w-auto">
                      <Link href="/bounties/bnt-02" className="flex-1 sm:flex-none px-space-md py-2 bg-surface-container hover:bg-surface-variant text-on-surface font-label-lg text-label-lg rounded-DEFAULT transition-colors text-center">
                        View Brief
                      </Link>
                      <Link href="/bounties/bnt-02" className="flex-1 sm:flex-none px-space-md py-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-DEFAULT transition-colors flex items-center justify-center gap-1 shadow-sm">
                        <span>Submit Work (Blind Portal)</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 3: Prana Wellness Retreats */}
                <div className="bg-surface-container-lowest p-space-lg shadow-sm rounded-DEFAULT flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-7 h-7 rounded-DEFAULT bg-primary text-on-primary flex items-center justify-center font-tabular-data text-tabular-data">#03</span>
                        <span className="font-title-md text-title-md text-primary font-bold">Prana Wellness Retreats</span>
                        <span className="flex items-center gap-0.5 px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-sm text-label-sm rounded-DEFAULT uppercase">
                          <span className="material-symbols-outlined text-[13px]">business</span> Corporate Wellness Partner
                        </span>
                      </div>
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase rounded-DEFAULT">NSQF Level 5</span>
                    </div>
                    <Link href="/bounties/bnt-4409">
                      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs hover:text-primary transition-colors cursor-pointer">
                        Develop a Yoga Therapy Plan for Workplace Stress Management
                      </h2>
                    </Link>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      Create a structured yoga therapy program designed for corporate wellness. The plan should include detailed session planning, breathing techniques (Nadi Shodhana, Bhramari), chair yoga modifications, and heart-rate variability recovery tracking.
                    </p>
                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">self_improvement</span> Yoga Therapy
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">event_note</span> Session Planning
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">air</span> Breathing Techniques
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">psychology</span> Stress Management
                      </span>
                    </div>
                  </div>
                  {/* Metric and Action Strip */}
                  <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                    <div className="flex flex-wrap items-center gap-space-md text-body-sm font-body-sm">
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Bounty Honorarium</span>
                        <span className="font-headline-sm text-headline-sm text-primary font-tabular-data">₹30,000</span>
                      </div>
                      <div className="w-px h-6 bg-surface-variant"></div>
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Blind Submissions</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-tabular-data">24 Candidates</span>
                      </div>
                      <div className="w-px h-6 bg-surface-variant"></div>
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Time Remaining</span>
                        <span className="font-headline-sm text-headline-sm text-error font-tabular-data">3 days left</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs w-full sm:w-auto">
                      <Link href="/bounties/bnt-4409" className="flex-1 sm:flex-none px-space-md py-2 bg-surface-container hover:bg-surface-variant text-on-surface font-label-lg text-label-lg rounded-DEFAULT transition-colors text-center">
                        View Brief
                      </Link>
                      <Link href="/bounties/bnt-4409" className="flex-1 sm:flex-none px-space-md py-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-DEFAULT transition-colors flex items-center justify-center gap-1 shadow-sm">
                        <span>Submit Work (Blind Portal)</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 4: National Institute of Ayurveda Hospital */}
                <div className="bg-surface-container-lowest p-space-lg shadow-sm rounded-DEFAULT flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-7 h-7 rounded-DEFAULT bg-primary text-on-primary flex items-center justify-center font-tabular-data text-tabular-data">#04</span>
                        <span className="font-title-md text-title-md text-primary font-bold">National Institute of Ayurveda Hospital</span>
                        <span className="flex items-center gap-0.5 px-space-xs py-0.5 bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm rounded-DEFAULT uppercase">
                          <span className="material-symbols-outlined text-[13px]">account_balance</span> Apex Body
                        </span>
                      </div>
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase rounded-DEFAULT">NSQF Level 5</span>
                    </div>
                    <Link href="/bounties/bnt-04">
                      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs hover:text-primary transition-colors cursor-pointer">
                        Standardized SOP for Kshara Sutra Preparation & Quality Control
                      </h2>
                    </Link>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      Formulate an institutional standard operating procedure adhering to Ayurvedic Pharmacopoeia of India (API) guidelines for surgical thread coating, alkaline ash extraction, and shelf-life assessment.
                    </p>
                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">medical_services</span> Kshara Karma
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">fact_check</span> SOP Formulation
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">verified</span> Quality Assurance
                      </span>
                      <span className="px-space-xs py-1 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-DEFAULT flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">health_and_safety</span> Clinical Safety
                      </span>
                    </div>
                  </div>
                  {/* Metric and Action Strip */}
                  <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                    <div className="flex flex-wrap items-center gap-space-md text-body-sm font-body-sm">
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Bounty Honorarium</span>
                        <span className="font-headline-sm text-headline-sm text-primary font-tabular-data">₹35,000</span>
                      </div>
                      <div className="w-px h-6 bg-surface-variant"></div>
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Blind Submissions</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-tabular-data">9 Candidates</span>
                      </div>
                      <div className="w-px h-6 bg-surface-variant"></div>
                      <div>
                        <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">Time Remaining</span>
                        <span className="font-headline-sm text-headline-sm text-primary font-tabular-data">12 days left</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs w-full sm:w-auto">
                      <Link href="/bounties/bnt-04" className="flex-1 sm:flex-none px-space-md py-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-DEFAULT transition-colors flex items-center justify-center gap-1 shadow-sm">
                        <span>Submit Work (Blind Portal)</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar: Blind Submission Guidelines & System Status (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                {/* Regulatory Protocol Card */}
                <div className="bg-surface-container-lowest p-space-lg shadow-sm rounded-DEFAULT">
                  <div className="flex items-center gap-space-xs mb-space-sm text-secondary">
                    <span className="material-symbols-outlined text-[20px]">shield_person</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">Active Blind Guidelines</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    To comply with Ministry of AYUSH Gazette Norms and SIH-26044 regulations, all micro-bounty entries are processed through the zero-knowledge merit gateway:
                  </p>
                  <div className="flex flex-col gap-space-sm mb-space-md">
                    <div className="flex items-start gap-space-xs p-space-xs bg-surface-container-low rounded-DEFAULT">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">cleaning_services</span>
                      <div>
                        <strong className="font-title-md text-title-md text-on-surface block">Automated Metadata Scrub</strong>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Author properties, institution headers, email tags, and system EXIF are scrubbed immediately at upload.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-xs p-space-xs bg-surface-container-low rounded-DEFAULT">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">fingerprint</span>
                      <div>
                        <strong className="font-title-md text-title-md text-on-surface block">SHA-256 Merit Tokenization</strong>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Each submission is assigned an irreversible identifier (e.g., <code className="font-mono text-primary">#AYU-9842X</code>) seen by industry evaluators.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-xs p-space-xs bg-surface-container-low rounded-DEFAULT">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">gavel</span>
                      <div>
                        <strong className="font-title-md text-title-md text-on-surface block">Double-Blind Scoring</strong>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Three independent AYUSH council experts rate each rubric facet without mutual consensus view.</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-sm bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm rounded-DEFAULT flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-[16px] mt-0.5">warning</span>
                    <span>WARNING: Any document containing embedded self-identifying markers, watermarks, or university letterheads will result in immediate algorithmic disqualification.</span>
                  </div>
                </div>

                {/* Live Pipeline Telemetry Bento */}
                <div className="bg-surface-container-lowest p-space-lg shadow-sm rounded-DEFAULT">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-title-md text-title-md text-primary uppercase">Evaluation Telemetry</span>
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    <div>
                      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
                        <span>Ayurveda Track Review Speed</span>
                        <span className="font-tabular-data text-on-surface">1.8 Days Avg</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container rounded-DEFAULT overflow-hidden">
                        <div className="bg-primary h-full w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
                        <span>Yoga & Naturopathy Review Speed</span>
                        <span className="font-tabular-data text-on-surface">2.4 Days Avg</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container rounded-DEFAULT overflow-hidden">
                        <div className="bg-primary h-full w-[72%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
                        <span>Unani & Siddha Track Speed</span>
                        <span className="font-tabular-data text-on-surface">3.1 Days Avg</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container rounded-DEFAULT overflow-hidden">
                        <div className="bg-secondary h-full w-[64%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                    <span>Active Evaluators Online:</span>
                    <span className="font-headline-sm text-headline-sm text-primary font-tabular-data">41 Doctors / Specialists</span>
                  </div>
                </div>

                {/* Reference Proof Visual */}
                <div className="bg-surface-container-lowest p-space-md shadow-sm rounded-DEFAULT overflow-hidden">
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Archival Reference Schema</span>
                    <span className="px-1.5 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded-DEFAULT">SIH-26044 Spec</span>
                  </div>
                  <div className="w-full rounded-DEFAULT overflow-hidden mb-space-xs bg-surface-container-low">
                    <img alt="AYUSH Micro-Bounty Interface Reference" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoSHQNfVrKrMfDDInivDFjhuuL5KZQ9Nd9ppuoOOJv_ANxCvY8OvJNYyOdOTnDUNde0FeXYLCwVNpcdIQicnFL7uyNmTIgv7h6Ner2Pb0zwUouIVCve8jhn2b8a8G0igB01DV6hcpcvhd54ILwyCoUzVVyaQbrIOJpdLFEjybOrmqHIEdm6X64YrqQHjUFdYIMCz_TnVtIPL4CGoSqZVh7fhrjn5KSD7GbG7m8UFIHz3p0KSdbU2McclBwDZ-UsEymVlo"/>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Live snapshot of candidate credentialing workflow and NSQF matrix mappings for validated AYUSH research repositories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
