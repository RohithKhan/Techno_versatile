'use client';

import { Reveal, Section, SectionHeading } from '@/components/site/section';
import { AnimatedCounter } from '@/components/site/animated-counter';
import { LineArtArcs } from '@/components/site/backgrounds';

const STATS = [
  { value: 24, suffix: '', label: 'Institutions onboarded', sub: 'Across 6 countries' },
  { value: 48210, suffix: '+', label: 'Active students', sub: 'Growing 4.8% MoM' },
  { value: 3710, suffix: '', label: 'Staff members', sub: 'On a single platform' },
  { value: 99.98, suffix: '%', label: 'Platform uptime', sub: '12-month SLA', decimals: 2 },
  { value: 1284, suffix: '', label: 'Notices delivered daily', sub: '99.6% delivery rate' },
  { value: 4.9, suffix: '/5', label: 'Customer satisfaction', sub: 'Verified reviews', decimals: 1 },
];

export function PlatformStats() {
  return (
    <Section id="stats">
      <SectionHeading
        eyebrow="Platform Statistics"
        title={<>Numbers that reflect real impact</>}
        description="Measurable outcomes across the institutions that run on Scholara today."
      />

      <div className="relative mt-16">
        <LineArtArcs className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 opacity-40" />
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 3) * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 premium-shadow transition-all duration-300 hover:-translate-y-1">
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={(s as { decimals?: number }).decimals ?? 0}
                  />
                </p>
                <p className="mt-3 text-sm font-medium">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
