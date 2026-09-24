'use client';

import { Reveal, Section, SectionHeading } from '@/components/site/section';
import { Lock, ShieldCheck, KeyRound, FileLock2, Eye, ServerCog } from 'lucide-react';

const SECURITY = [
  {
    icon: Lock,
    title: 'Encryption everywhere',
    body: 'AES-256 at rest and TLS 1.3 in transit — for every record, on every tenant.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-based access control',
    body: 'Granular permissions per role, per school, per module — enforced at the data layer.',
  },
  {
    icon: KeyRound,
    title: 'SSO & MFA ready',
    body: 'SAML and OIDC integration with optional multi-factor authentication for staff.',
  },
  {
    icon: FileLock2,
    title: 'Immutable audit trails',
    body: 'Every action is logged with actor, timestamp and context — exportable for compliance.',
  },
  {
    icon: Eye,
    title: 'Data residency controls',
    body: 'Choose where each institution’s data is stored to meet regional requirements.',
  },
  {
    icon: ServerCog,
    title: 'Continuous monitoring',
    body: '24/7 anomaly detection and automated incident response keep the platform hardened.',
  },
];

export function SecurityPrivacy() {
  return (
    <Section id="security">
      <SectionHeading
        eyebrow="Security & Privacy"
        title={<>Security engineered into every layer</>}
        description="Protecting student and institutional data isn’t a feature — it’s the foundation Scholara is built on."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SECURITY.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 premium-shadow transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-chart-5/15 to-primary/10 text-chart-5 transition-transform group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
