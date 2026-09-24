'use client';

import { Reveal, Section, SectionHeading } from '@/components/site/section';
import { LineArtArcs } from '@/components/site/backgrounds';
import { Layers, ShieldCheck, Zap, Globe } from 'lucide-react';

const PILLARS = [
  {
    icon: Layers,
    title: 'Unified data layer',
    body: 'One schema across every institution — students, staff, finance and academics stay consistent and queryable.',
  },
  {
    icon: Globe,
    title: 'True multi-tenancy',
    body: 'Each school is isolated by tenant with independent branding, policies and administrators — on shared infrastructure.',
  },
  {
    icon: Zap,
    title: 'Real-time everything',
    body: 'Attendance, notices and grades propagate instantly to staff and parents through live channels.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance by default',
    body: 'Role-based access, audit trails and data residency controls keep every institution audit-ready.',
  },
];

export function PlatformOverview() {
  return (
    <Section id="platform" className="bg-surface-2/60">
      <SectionHeading
        eyebrow="Platform Overview"
        title={<>One platform. Every institution. Zero friction.</>}
        description="Scholara is engineered as a single, elegant system that scales from a single campus to a network of dozens — without changing how your teams work."
      />

      <div className="relative mt-16">
        <LineArtArcs className="absolute -right-20 top-0 h-72 w-72 opacity-50" />
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 premium-shadow transition-all duration-300 hover:-translate-y-1 hover:premium-shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-chart-2/10 text-primary transition-transform group-hover:scale-110">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
