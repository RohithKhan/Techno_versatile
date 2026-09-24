'use client';

import { Reveal, Section, SectionHeading } from '@/components/site/section';
import { ShieldCheck, Server, Database, Network, Lock, Eye } from 'lucide-react';

const LAYERS = [
  {
    icon: Network,
    title: 'Tenant isolation',
    body: 'Every school operates in a logically isolated tenant with independent data, branding and policy.',
  },
  {
    icon: Server,
    title: 'Shared infrastructure',
    body: 'A hardened, autoscaling backbone serves all tenants — no per-school servers to maintain.',
  },
  {
    icon: Database,
    title: 'Centralized governance',
    body: 'Super admins govern the network while school admins retain full local control.',
  },
  {
    icon: Eye,
    title: 'Cross-school analytics',
    body: 'Leadership compares performance and revenue across institutions in real time.',
  },
];

export function ArchitectureOverview() {
  return (
    <Section id="architecture" className="bg-surface-2/60">
      <SectionHeading
        eyebrow="Multi-School Architecture"
        title={<>One backbone. Many institutions. Total isolation.</>}
        description="A true multi-tenant design you onboard new schools in minutes while keeping each one’s data, branding and policies completely independent."
      />

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* Diagram */}
        <Reveal>
          <div className="relative rounded-3xl border border-border bg-card p-8 premium-shadow-lg">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                <ShieldCheck className="h-4 w-4" /> Super Admin
              </span>
              <span className="text-xs text-muted-foreground">Global control plane</span>
            </div>

            <div className="my-6 flex justify-center">
              <div className="h-12 w-px bg-gradient-to-b from-primary/60 to-border" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {['Northfield', 'Riverside', 'St. Aurora', 'Greenwood', 'Lakeside', 'Hilltop'].map(
                (school, i) => (
                  <div
                    key={school}
                    className="rounded-xl border border-border bg-surface-1 p-3 text-center transition-transform hover:-translate-y-0.5"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-2/20 text-foreground">
                      <Database className="h-4 w-4" />
                    </div>
                    <p className="mt-2 text-[11px] font-medium">{school}</p>
                    <p className="text-[9px] text-muted-foreground">Isolated tenant</p>
                  </div>
                )
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <div className="h-8 w-px bg-gradient-to-b from-border to-chart-5/40" />
            </div>
            <div className="flex justify-center">
              <span className="rounded-lg bg-chart-5/10 px-3 py-1.5 text-xs font-medium text-chart-5">
                Shared autoscaling backbone
              </span>
            </div>
          </div>
        </Reveal>

        {/* Points */}
        <div className="grid gap-4 sm:grid-cols-2">
          {LAYERS.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 premium-shadow transition-all duration-300 hover:-translate-y-1">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <l.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{l.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
