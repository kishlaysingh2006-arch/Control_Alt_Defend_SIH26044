"use client";

import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function BountyDetailPage() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [summaryText, setSummaryText] = useState("");

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
            {/* Statutory Sub-header & Security Strip */}
            <div className="w-full bg-surface-container-lowest border-b border-surface-container-highest py-space-sm mb-space-md">
              <div className="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-xs font-label-md text-label-md uppercase text-on-surface-variant">
                  <Link className="hover:text-primary transition-colors" href="/">Portal</Link>
                  <span>›</span>
                  <Link className="hover:text-primary transition-colors" href="/bounties">Micro-Bounties</Link>
                  <span>›</span>
                  <span className="text-primary font-bold">BNT-4409</span>
                  <span>›</span>
                  <span className="text-on-surface font-bold">Blind Vault Submission</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary-fixed text-on-primary-fixed rounded-DEFAULT font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                    SHA-256 Hasher Active: Zero-Knowledge Redaction Engine v2.4
                  </span>
                </div>
              </div>
            </div>

            {/* Main Administrative Content Area */}
            <div className="max-w-7xl mx-auto px-gutter py-space-lg w-full">
              {/* Statutory Alert Banner */}
              <div className="w-full bg-[#FFFBEB] border-l-4 border-[#B45309] p-space-md mb-space-lg flex items-start gap-space-md shadow-sm">
                <span className="material-symbols-outlined text-[#B45309] text-[24px] shrink-0 mt-0.5">verified_user</span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-[#92400E] uppercase tracking-wide">Statutory Zero-Knowledge Blind Anonymization Protocol</span>
                  <p className="font-body-sm text-body-sm text-[#78350F] mt-0.5 leading-relaxed">
                    In adherence to the National Merit Framework (SIH-26044), all uploaded academic manuscripts, raw videos, and clinical protocols are processed through our automated PII scrubber. Institutional stamps, candidate names, supervisor signatures, EXIF telemetry, and email addresses are cryptographically redacted prior to evaluation by the AYUSH National Registry Council.
                  </p>
                </div>
              </div>

              {/* Structured Submission Card / Form Workspace Container */}
              <div className="w-full bg-surface-container-lowest border border-surface-container-highest rounded-DEFAULT shadow-[0_1px_3px_0_rgba(15,23,42,0.08)]">
                {/* Top Modal-Style Action Header */}
                <div className="p-space-lg border-b border-surface-container-highest bg-surface-bright flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold uppercase rounded-DEFAULT tracking-wider">NSQF LEVEL 5</span>
                      <span className="px-2 py-0.5 bg-surface-container-high text-on-surface font-label-sm text-label-sm rounded-DEFAULT uppercase">BOUNTY REF: #BNT-4409</span>
                      <span className="px-2 py-0.5 bg-[#ECFDF5] text-[#0F5132] border border-[#A7F3D0] font-label-sm text-label-sm rounded-DEFAULT uppercase flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">verified</span> Verified Sponsoring Partner: Prana Wellness Retreats
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">Candidate Blind Submission & Deliverable Upload</h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Standardized Yoga Therapy Protocol for Corporate Workplace Stress Management and Autonomic Balance</p>
                  </div>
                  <div className="flex items-center gap-space-sm shrink-0">
                    <div className="flex flex-col text-right">
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Anonymous Candidate Identity</span>
                      <span className="font-tabular-data text-tabular-data text-primary font-bold tracking-wide">ID: AYUSH-BLIND-5573</span>
                    </div>
                    <div className="w-10 h-10 rounded-DEFAULT bg-surface-container-low flex items-center justify-center border border-surface-container">
                      <span className="material-symbols-outlined text-primary text-[20px]">fingerprint</span>
                    </div>
                  </div>
                </div>

                {/* Step Wizard Indicator Strip */}
                <div className="w-full bg-surface-container-low border-b border-surface-container-highest px-space-lg py-space-sm">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm text-center">
                    {/* Step 1 */}
                    <div className="flex items-center gap-2 text-left opacity-75">
                      <div className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">1</div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase font-bold text-primary">Metadata & Scope</span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">Completed</span>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-center gap-2 text-left">
                      <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center font-bold animate-pulse">2</div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">PII Scrubber & Vault</span>
                        <span className="font-body-sm text-[11px] text-secondary leading-tight">In Progress</span>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-center gap-2 text-left opacity-50">
                      <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center font-bold">3</div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface">Competency Attestation</span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">NSQF Mappings</span>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex items-center gap-2 text-left opacity-50">
                      <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center font-bold">4</div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface">Cryptographic Mint</span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">Immutable Hash</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Form Body Panels */}
                <form className="p-space-lg flex flex-col gap-space-xl" id="submissionForm" onSubmit={(e) => e.preventDefault()}>
                  {/* SECTION A: Automated PII Scrubber & Upload Vault */}
                  <section className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between border-b border-surface-container-highest pb-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[20px]">cloud_upload</span>
                        <h2 className="font-title-md text-title-md text-primary uppercase tracking-wide">Section A: Automated PII Scrubber & File Vault</h2>
                      </div>
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-DEFAULT">
                        Automated Sanitization Active
                      </span>
                    </div>

                    {/* Drag and Drop Vault Zone */}
                    <div className="border-2 border-dashed border-[#CBD5E1] hover:border-primary transition-colors bg-surface rounded-DEFAULT p-space-xl flex flex-col items-center justify-center text-center cursor-pointer group">
                      <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-space-sm group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[28px]">shield_with_heart</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Drop Official Deliverables Here or <span className="text-primary underline">Browse Local Files</span></span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-lg">
                        Supported: PDF, DOCX, MP4 / Clinical Demo Videos (max 50MB), Jupyter Notebooks, CSV / HRV Datasets.
                      </p>
                      <div className="mt-space-md flex flex-wrap items-center justify-center gap-space-xs">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-high rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[13px] text-primary">verified</span> Strips Name & Phone
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-high rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[13px] text-primary">verified</span> Redacts College Letterheads
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-high rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[13px] text-primary">verified</span> Removes GPS & Camera EXIF
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-high rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[13px] text-primary">verified</span> Masks Voice Timbre in Videos
                        </span>
                      </div>
                    </div>

                    {/* Active Scanned File Roster */}
                    <div className="flex flex-col gap-space-xs mt-space-xs">
                      <span className="font-label-md text-label-md uppercase text-on-surface-variant font-bold">Scrubbed Deliverables Ready For Scoring (2 Vault Objects)</span>
                      {/* Item 1 */}
                      <div className="p-space-md bg-surface-bright border border-surface-container-highest rounded-DEFAULT flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                        <div className="flex items-start gap-space-md">
                          <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-DEFAULT shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-[24px]">description</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-tabular-data text-tabular-data font-bold text-on-surface">Yoga_Therapy_Stress_Plan_vFinal.pdf</span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">(4.2 MB)</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#ECFDF5] text-[#0F5132] border border-[#A7F3D0] rounded-DEFAULT font-label-sm text-label-sm">
                                <span className="material-symbols-outlined text-[12px]">check_circle</span> PII Stripped: 3 University Stamps & 1 Roll No. Redacted
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">MD5: e74b...a210</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-space-sm shrink-0">
                          <button className="px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest border border-[#CBD5E1] text-on-surface font-label-sm text-label-sm uppercase rounded-DEFAULT flex items-center gap-1 transition-colors" onClick={() => setShowPreviewModal(true)} type="button">
                            <span className="material-symbols-outlined text-[14px]">visibility</span> View Scrubbed Preview
                          </button>
                          <button className="text-error hover:text-red-800 p-1" title="Remove Deliverable" type="button">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </div>
                      {/* Item 2 */}
                      <div className="p-space-md bg-surface-bright border border-surface-container-highest rounded-DEFAULT flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                        <div className="flex items-start gap-space-md">
                          <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center rounded-DEFAULT shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-[24px]">movie</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-tabular-data text-tabular-data font-bold text-on-surface">Deskbound_Pranayama_Demo.mp4</span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">(28.4 MB)</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#ECFDF5] text-[#0F5132] border border-[#A7F3D0] rounded-DEFAULT font-label-sm text-label-sm">
                                <span className="material-symbols-outlined text-[12px]">check_circle</span> Audio Anonymized / EXIF Metadata Scrubbed
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SHA-256: 4f1c...90bb</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-space-sm shrink-0">
                          <button className="px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest border border-[#CBD5E1] text-on-surface font-label-sm text-label-sm uppercase rounded-DEFAULT flex items-center gap-1 transition-colors" type="button">
                            <span className="material-symbols-outlined text-[14px]">videocam</span> Stream Sanitized Stream
                          </button>
                          <button className="text-error hover:text-red-800 p-1" title="Remove Deliverable" type="button">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION B: Core Rubric & Competency Fulfillment Matrix */}
                  <section className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between border-b border-surface-container-highest pb-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
                        <h2 className="font-title-md text-title-md text-primary uppercase tracking-wide">Section B: Core Rubric & NSQF Competency Matrix</h2>
                      </div>
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Mandatory Alignment Check (4/4)</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Indicate how your submitted deliverable answers each clinical competency mandated under this NSQF Level 5 Bounty. Rubric evaluators will blind-score each domain independently.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      {/* Competency 1 */}
                      <div className="border border-surface-container-highest bg-surface-container-lowest p-space-md rounded-DEFAULT flex flex-col justify-between border-l-4 border-l-primary">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Competency Code: AY-YT-501</span>
                            <span className="px-2 py-0.5 bg-[#ECFDF5] text-[#0F5132] font-label-sm text-label-sm font-bold uppercase rounded-DEFAULT">Weight: 30%</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">1. Yoga Therapy Protocol (7-Day Asana / Pranayama Schedule)</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Submission must outline contraindications, warm-ups, Sukshma Vyayama, and specific therapeutic adaptations for sedentary lumbar tension.
                          </p>
                        </div>
                        <div className="mt-space-md pt-space-xs border-t border-surface-container-high flex items-center justify-between">
                          <span className="font-body-sm text-body-sm text-primary font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">task_alt</span> Addressed in PDF (Pages 2-8)
                          </span>
                          <span className="font-label-sm text-label-sm uppercase bg-surface-container px-2 py-0.5 text-on-surface font-semibold">Self-Attested</span>
                        </div>
                      </div>

                      {/* Competency 2 */}
                      <div className="border border-surface-container-highest bg-surface-container-lowest p-space-md rounded-DEFAULT flex flex-col justify-between border-l-4 border-l-primary">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Competency Code: AY-YT-502</span>
                            <span className="px-2 py-0.5 bg-[#ECFDF5] text-[#0F5132] font-label-sm text-label-sm font-bold uppercase rounded-DEFAULT">Weight: 25%</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">2. Corporate Ergonomics & Chair-Based Session Planning</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Design a repeatable 15-minute mid-day routine executable in formal office attire without dedicated yoga mat equipment.
                          </p>
                        </div>
                        <div className="mt-space-md pt-space-xs border-t border-surface-container-high flex items-center justify-between">
                          <span className="font-body-sm text-body-sm text-primary font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">task_alt</span> Addressed in MP4 Demo
                          </span>
                          <span className="font-label-sm text-label-sm uppercase bg-surface-container px-2 py-0.5 text-on-surface font-semibold">Self-Attested</span>
                        </div>
                      </div>

                      {/* Competency 3 */}
                      <div className="border border-surface-container-highest bg-surface-container-lowest p-space-md rounded-DEFAULT flex flex-col justify-between border-l-4 border-l-primary">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Competency Code: AY-YT-503</span>
                            <span className="px-2 py-0.5 bg-[#ECFDF5] text-[#0F5132] font-label-sm text-label-sm font-bold uppercase rounded-DEFAULT">Weight: 25%</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">3. Therapeutic Pranayama (Nadi Shodhana & Bhramari)</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Prescribe ratio pacing (1:1, 1:2), kumbhaka restrictions, and clinical breath sound modulation for acute cognitive anxiety.
                          </p>
                        </div>
                        <div className="mt-space-md pt-space-xs border-t border-surface-container-high flex items-center justify-between">
                          <span className="font-body-sm text-body-sm text-primary font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">task_alt</span> Addressed in PDF (Pages 9-14)
                          </span>
                          <span className="font-label-sm text-label-sm uppercase bg-surface-container px-2 py-0.5 text-on-surface font-semibold">Self-Attested</span>
                        </div>
                      </div>

                      {/* Competency 4 */}
                      <div className="border border-surface-container-highest bg-surface-container-lowest p-space-md rounded-DEFAULT flex flex-col justify-between border-l-4 border-l-primary">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Competency Code: AY-YT-504</span>
                            <span className="px-2 py-0.5 bg-[#ECFDF5] text-[#0F5132] font-label-sm text-label-sm font-bold uppercase rounded-DEFAULT">Weight: 20%</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">4. Quantitative Biomarkers (HRV & PSS-10 Tracking)</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Integrate objective autonomic metric checkpoints (RMSSD recovery) with standard Perceived Stress Scale validation.
                          </p>
                        </div>
                        <div className="mt-space-md pt-space-xs border-t border-surface-container-high flex items-center justify-between">
                          <span className="font-body-sm text-body-sm text-primary font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">task_alt</span> Addressed in PDF (Pages 15-18)
                          </span>
                          <span className="font-label-sm text-label-sm uppercase bg-surface-container px-2 py-0.5 text-on-surface font-semibold">Self-Attested</span>
                        </div>
                      </div>
                    </div>

                    {/* Executive Submission Abstract */}
                    <div className="flex flex-col gap-1 mt-space-sm">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md uppercase font-bold text-on-surface" htmlFor="submissionSummary">
                          Executive Clinical Abstract (Max 300 words)
                        </label>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Strict Rule: Do not mention your college, city, or advisor name.</span>
                      </div>
                      <textarea
                        className="w-full bg-surface-container-lowest border border-[#CBD5E1] p-space-sm rounded-DEFAULT text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none"
                        id="submissionSummary"
                        placeholder="Provide a clinical executive summary of the protocol, explaining therapeutic rationale, vagal nerve stimulation mechanisms, and safety checkpoints in deskbound environments..."
                        rows={4}
                        value={summaryText}
                        onChange={(e) => setSummaryText(e.target.value)}
                      />
                      <span className="font-label-sm text-label-sm text-on-surface-variant text-right">Scrub Engine Pre-Check: Clean (No PII detected)</span>
                    </div>
                  </section>

                  {/* SECTION C: Statutory Non-Pedigree Guarantee & Cryptographic Hash Preview */}
                  <section className="flex flex-col gap-space-md bg-surface-container-low p-space-md rounded-DEFAULT border border-surface-container-highest">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">policy</span>
                      <h2 className="font-title-md text-title-md text-primary uppercase tracking-wide">Section C: Statutory Non-Pedigree Guarantee & Minting Hashes</h2>
                    </div>
                    {/* Attestation Checkbox */}
                    <label className="flex items-start gap-space-sm cursor-pointer select-none bg-surface-container-lowest p-space-sm rounded-DEFAULT border border-surface-container">
                      <input defaultChecked className="mt-1 w-4 h-4 rounded-DEFAULT text-primary focus:ring-primary border-[#CBD5E1]" type="checkbox"/>
                      <span className="font-body-sm text-body-sm text-on-surface leading-normal">
                        <strong>Statutory Declaration of Anonymity & Originality:</strong> I solemnly attest that the deliverables uploaded represent original practical clinical work. I acknowledge that introducing personal identifiers, institution watermarks, or covert contact handles constitutes a breach of the SIH-26044 Blind Review Protocol and triggers immediate algorithmic forfeiture.
                      </span>
                    </label>

                    {/* Cryptographic Hash Preview Box */}
                    <div className="bg-surface-container-lowest border border-surface-container p-space-md rounded-DEFAULT grid grid-cols-1 md:grid-cols-3 gap-space-md">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Ephemeral Candidate Token</span>
                        <span className="font-tabular-data text-tabular-data text-primary font-bold mt-0.5">AYUSH-BLIND-5573-Q4</span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">Scrambled seed derived from Aadhaar-Vault</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">SHA-256 Vault Commit Hash</span>
                        <span className="font-tabular-data text-tabular-data text-on-surface font-mono font-bold mt-0.5 break-all">886A-559B-C19F-023E-4DF1</span>
                        <span className="font-body-sm text-[11px] text-[#0F5132] font-semibold mt-0.5">Ready to seal upon submission</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Independent AYUSH Assessment Pool</span>
                        <span className="font-tabular-data text-tabular-data text-on-surface font-bold mt-0.5">3 Peer Evaluators Allocated</span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">Double-Blind Rubric Scoring</span>
                      </div>
                    </div>
                  </section>

                  {/* Final Submission Action Bar */}
                  <div className="pt-space-md border-t border-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary">info</span>
                      <span>Once committed, submission cannot be retracted or altered during active scoring.</span>
                    </div>
                    <div className="flex items-center gap-space-sm w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-space-md py-2.5 bg-surface-container-lowest border border-[#CBD5E1] text-on-surface hover:bg-surface-container-low font-label-lg text-label-lg uppercase rounded-DEFAULT transition-colors" type="button">
                        Save Draft
                      </button>
                      <button
                        className="w-full sm:w-auto px-space-lg py-2.5 bg-primary hover:bg-[#0A3622] text-on-primary font-label-lg text-label-lg uppercase rounded-DEFAULT shadow-sm flex items-center justify-center gap-space-xs transition-colors"
                        onClick={() => setShowSuccessModal(true)}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">lock</span>
                        Confirm & Mint to Blind Merit Engine
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL 1: Scrubbed Document Inspector */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-surface-container-lowest w-full max-w-4xl max-h-[90vh] flex flex-col rounded-DEFAULT shadow-2xl border border-surface-container-highest overflow-hidden">
            <div className="bg-primary text-on-primary px-space-md py-space-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-on-primary-container">sanitizer</span>
                <span className="font-title-md text-title-md uppercase font-bold tracking-wide">Automated Redaction Inspector: Evaluator View</span>
              </div>
              <button className="text-on-primary hover:text-surface-container transition-colors" onClick={() => setShowPreviewModal(false)} type="button">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="bg-[#FFFBEB] px-space-md py-space-xs border-b border-[#FDE68A] flex items-center justify-between text-[#92400E] font-label-sm text-label-sm">
              <span className="flex items-center gap-1 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#B45309]"></span> Document Simulation: What the Sponsoring Corporate Evaluator Receives
              </span>
              <span className="uppercase">Algorithm Confidence: 99.8% Cleansed</span>
            </div>
            <div className="p-space-lg overflow-y-auto bg-surface space-y-space-md font-body-md text-body-md">
              <div className="bg-white p-space-lg border border-surface-container-highest shadow-sm max-w-2xl mx-auto flex flex-col gap-space-md text-on-surface">
                <div className="flex items-center justify-between border-b pb-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-on-surface text-on-surface px-8 py-2 select-none" title="Redacted by SIH-26044 Engine">[INSTITUTE REDACTED]</span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">AYUSH Merit System Token:</span>
                    <span className="font-tabular-data text-tabular-data font-bold text-primary">#AYUSH-BLIND-5573</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-headline-md text-headline-md text-primary font-bold">Workplace Vagal-Tuning Protocol for Deskbound Workers</h4>
                  <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                    <span>Author:</span>
                    <span className="bg-black text-black px-4 py-0.5 select-none">[NAME REDACTED]</span>
                    <span>• Roll No:</span>
                    <span className="bg-black text-black px-4 py-0.5 select-none">[ROLL NO REDACTED]</span>
                    <span>• Dept:</span>
                    <span className="bg-black text-black px-4 py-0.5 select-none">[COLLEGE REDACTED]</span>
                  </div>
                </div>
                <div className="p-space-sm bg-surface-container-low border-l-2 border-primary text-body-sm font-body-sm text-on-surface">
                  <strong>Clinical Objective:</strong> To induce parasympathetic dominance within an active 8-hour desktop work cycle using 3-stage isometric micro-stretching and controlled expiration pranayama.
                </div>
                <div className="space-y-2 text-body-sm text-on-surface leading-relaxed">
                  <p><strong>1. Morning Activation (10 mins, Chair-Based):</strong> Progressive neck rotation, seated Marjaryasana-Bitilasana with rhythmic abdominal expansion. Synchronized exhalation ratio set strictly at 1:1.</p>
                  <p><strong>2. Mid-Day Stress Dissipation (15 mins):</strong> Bhramari pranayama with Shanmukhi mudra adaptation for open office environments. Focus on low-frequency humming vibration to stimulate vagal nerve tone without vocal strain.</p>
                  <p><strong>3. Metric Assessment:</strong> Baseline RMSSD tracked at 09:00 AM vs 04:30 PM across 21 test subjects using consumer optical photoplethysmography.</p>
                </div>
                <div className="mt-4 pt-4 border-t flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>Verified Integrity Token: 0x992B...7710</span>
                  <span>SIH-26044 Automated Audit Seal: PASSED</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low px-space-md py-space-sm border-t border-surface-container-highest flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant">All highlighted black bars represent PII cryptographically masked prior to database storage.</span>
              <button className="px-space-md py-1.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase rounded-DEFAULT font-bold" onClick={() => setShowPreviewModal(false)} type="button">
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Minting Confirmation / Sealed Success State */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-surface-container-lowest w-full max-w-lg p-space-lg rounded-DEFAULT shadow-2xl border border-surface-container-highest text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#0F5132] border border-[#A7F3D0] flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <span className="font-label-sm text-label-sm uppercase text-primary font-bold tracking-widest">SIH-26044 Sealed Receipt</span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">Deliverable Vaulted & Blind-Sealed</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Your work has been stripped of personal identification, stamped with SHA-256 hash <strong className="text-on-surface">#886A-559B</strong>, and dispatched to the 3-member blind assessment panel.
            </p>
            <div className="w-full bg-surface-container-low p-space-md rounded-DEFAULT my-space-md text-left font-body-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-label-sm uppercase">Anonymous ID:</span>
                <span className="font-tabular-data font-bold text-primary">AYUSH-BLIND-5573</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-label-sm uppercase">Bounty:</span>
                <span className="font-body-sm font-semibold">#BNT-4409 (Yoga Therapy)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-label-sm uppercase">Evaluation ETA:</span>
                <span className="font-body-sm font-semibold">48-72 Hours</span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm w-full">
              <button className="w-full py-2.5 bg-primary text-on-primary font-label-lg text-label-lg uppercase rounded-DEFAULT font-bold shadow-sm" onClick={() => setShowSuccessModal(false)} type="button">
                Return to Candidate Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
