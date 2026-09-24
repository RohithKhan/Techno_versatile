'use client';

import { Reveal, Section, SectionHeading } from '@/components/site/section';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Scholara replaced six disconnected tools across our 14 campuses. Our staff finally have one place to look — and our board finally has one source of truth.',
    name: 'Dr. Amara Okafor',
    role: 'Director of Operations',
    org: 'Northfield Group',
    accent: 'from-chart-1/20 to-chart-2/10',
  },
  {
    quote:
      'The parent portal transformed how families engage with us. Attendance disputes dropped 80% in the first term alone.',
    name: 'Mr. David Chen',
    role: 'Principal',
    org: 'Riverside Academy',
    accent: 'from-chart-5/20 to-chart-3/10',
  },
  {
    quote:
      'As a superintendent managing 9 schools, the cross-institution analytics are a revelation. I spot problems weeks earlier than I used to.',
    name: 'Ms. Sofia Reyes',
    role: 'Superintendent',
    org: 'St. Aurora District',
    accent: 'from-chart-4/20 to-chart-1/10',
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface-2/60">
      <SectionHeading
        eyebrow="Testimonials"
        title={<>Loved by educators and administrators alike</>}
        description="Hear from the institutions running their daily operations on Scholara."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 premium-shadow transition-all duration-300 hover:-translate-y-1">
              <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${t.accent} blur-2xl opacity-60`} />
              <Quote className="h-7 w-7 text-primary/30" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-chart-2 text-sm font-semibold text-white">
                  {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.org}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-chart-3 text-chart-3" />
                  ))}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
