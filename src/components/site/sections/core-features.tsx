'use client';

import { Reveal, Section, SectionHeading } from '@/components/site/section';
import {
  CalendarCheck,
  FileCheck2,
  Megaphone,
  Wallet,
  Users,
  GraduationCap,
  BarChart3,
  Bell,
} from 'lucide-react';

const FEATURES = [
  {
    icon: GraduationCap,
    title: 'Student Information System',
    body: 'Complete lifecycle from admission to alumni — profiles, guardians, documents and history in one record.',
  },
  {
    icon: CalendarCheck,
    title: 'Smart Attendance',
    body: 'Class, biometric and QR-based capture with instant absentee alerts to parents and staff.',
  },
  {
    icon: FileCheck2,
    title: 'Examination Suite',
    body: 'Timetables, question banks, grading workflows and result publication with integrity checks.',
  },
  {
    icon: Megaphone,
    title: 'Notice Management',
    body: 'Targeted circulars by class, role or institution with delivery tracking and archives.',
  },
  {
    icon: Wallet,
    title: 'Fees & Finance',
    body: 'Fee structures, online payments, receipts and real-time reconciliation per institution.',
  },
  {
    icon: Users,
    title: 'Staff & HR',
    body: 'Onboarding, payroll, leave and performance reviews tied to teaching schedules.',
  },
  {
    icon: BarChart3,
    title: 'Executive Analytics',
    body: 'Board-ready dashboards comparing enrollment, revenue and performance across schools.',
  },
  {
    icon: Bell,
    title: 'Parent Engagement',
    body: 'A dedicated portal keeps families informed on attendance, grades, fees and notices.',
  },
];

export function CoreFeatures() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Core Features"
        title={<>Everything an institution needs, beautifully integrated</>}
        description="Each module is designed to feel effortless on its own — and powerful together. No more switching between disconnected tools."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 0.07}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 premium-shadow transition-all duration-300 hover:-translate-y-1">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
