'use client';

import { Reveal, Section, SectionHeading } from '@/components/site/section';
import { Gauge, Layers, LifeBuoy, LineChart, Cpu, Fingerprint } from 'lucide-react';

const REASONS = [
  {
    icon: Gauge,
    title: 'Built for scale',
    body: 'Multi-tenant architecture handles dozens of schools and tens of thousands of students without a hiccup.',
  },
  {
    icon: Fingerprint,
    title: 'Role-precise access',
    body: 'Eight purpose-built portals ensure everyone sees exactly what they need — and nothing more.',
  },
  {
    icon: LineChart,
    title: 'Insight, not just data',
    body: 'Dashboards surface what matters: trends, risks and opportunities — across every institution.',
  },
  {
    icon: Cpu,
    title: 'Real-time by design',
    body: 'Live attendance, instant notices and immediate grade publication keep everyone in sync.',
  },
  {
    icon: LifeBuoy,
    title: 'White-glove onboarding',
    body: 'Dedicated specialists migrate your data and train every team before a single student logs in.',
  },
  {
    icon: Layers,
    title: 'Elegant by default',
    body: 'An interface your staff, parents and board will actually enjoy using — every single day.',
  },
];

export function WhyChoose() {
  return (
    <Section id="why" className="bg-surface-2/60">
      <SectionHeading
        eyebrow="Why Scholara"
        title={<>Why leading institutions choose Scholara</>}
        description="We obsess over the details so your teams can focus on education — not software."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 0.08}>
            <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 premium-shadow transition-all duration-300 hover:-translate-y-1">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-chart-2 text-white shadow-md transition-transform group-hover:scale-105">
                <r.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
