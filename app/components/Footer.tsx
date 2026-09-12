export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-space-xl mt-space-xl">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-title-md text-title-md text-primary uppercase">
              Ministry of AYUSH
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Ayush Bhawan, B Block, GPO Complex, INA, New Delhi - 110023.
              Government of India Official CivicTech Infrastructure.
            </p>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg text-on-surface uppercase">
              Regulatory Alignment
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              National Skills Qualifications Framework (NSQF)
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              National Qualification Register (NQR) Compliant
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Blind Merit Anonymization Standard v1.2
            </span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg text-on-surface uppercase">
              Project Governance
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Smart India Hackathon 2026 (SIH-26044)
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Engineering Unit: Control_Alt_Defend
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Statutory Public Sector Merit Engine
            </span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg text-on-surface uppercase">
              Accessibility &amp; Audit
            </span>
            <div className="flex flex-wrap gap-space-xs">
              <span className="px-space-xs py-0.5 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-DEFAULT">
                WCAG 2.1 AA
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-DEFAULT">
                GIGW Compliant
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-DEFAULT">
                SHA-256 Audit Seal
              </span>
            </div>
          </div>
        </div>
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
          <p>
            © 2026 Ministry of Ayush, Government of India. Designed under
            SIH-26044. All Rights Reserved.
          </p>
          <div className="flex gap-space-md font-label-sm text-label-sm">
            <a
              className="hover:text-primary transition-colors"
              href="#"
            >
              TERMS OF SERVICE
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#"
            >
              PRIVACY CHARTER
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#"
            >
              SECURITY AUDIT LOG
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
