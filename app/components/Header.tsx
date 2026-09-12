"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Available Bounties", path: "/bounties" },
  { label: "Recruiter Dashboard", path: "/dashboard" },
  { label: "Predictive Curriculum Delta", path: "/curriculum-delta" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Indian Flag Stripe */}
      <div className="w-full h-1 flex">
        <div className="w-1/3 bg-[#FF9933]"></div>
        <div className="w-1/3 bg-surface-container-lowest"></div>
        <div className="w-1/3 bg-[#138808]"></div>
      </div>

      {/* Top Bar: Government + Blind Review Status */}
      <div className="bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-gutter py-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
          <div className="flex items-center gap-space-sm">
            <span>GOVERNMENT OF INDIA</span>
            <span>|</span>
            <span>MINISTRY OF AYUSH</span>
            <span>|</span>
            <span>SMART INDIA HACKATHON 2026</span>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs bg-primary-fixed text-on-primary-fixed px-space-xs py-0.5 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span>Blind Review Protocol Active: PII Scrubbed</span>
            </div>
            <div className="hidden sm:flex items-center gap-space-xs text-on-surface-variant">
              <span>A+</span>
              <span>A-</span>
              <span className="font-bold text-on-surface">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-surface-container-lowest">
        <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between">
          <Link href="/" className="flex items-center gap-space-md">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                verified_user
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-title-md text-title-md text-primary uppercase">
                Blind Merit &amp; Skill Evaluation Portal
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Ministry of Ayush • Government of India | National
                Industry-Academia Collaborative Skill Portal
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-space-md">
            <div className="hidden lg:flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg text-on-surface-variant">
              <span className="font-label-sm text-label-sm uppercase text-on-surface">
                NSQF Aligned Registry
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-gutter flex items-center justify-between">
          <nav className="flex items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-space-md py-space-sm font-label-lg text-label-lg transition-colors ${
                    isActive
                      ? "bg-primary-container text-on-primary-container"
                      : "text-on-primary-container"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider hidden md:block">
            Portal Ref: SIH-26044 / Control_Alt_Defend
          </div>
        </div>
      </div>
    </header>
  );
}
