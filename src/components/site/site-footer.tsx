'use client';

import Link from 'next/link';
import { GraduationCap, ArrowUpRight } from 'lucide-react';
import { ROLES } from '@/lib/roles';

const COLUMNS = [
  {
    title: 'Platform',
    links: ['Overview', 'Core Features', 'Architecture', 'Security', 'Pricing'],
  },
  {
    title: 'Portals',
    links: ROLES.map((r) => r.name),
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Guides', 'Changelog', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Partners', 'Contact', 'Privacy'],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface-2">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-chart-2 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Scholara
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The premium multi-school management platform for institutions that
              demand elegance, security and scale.
            </p>
            <div className="mt-6 flex gap-3">
              {['Twitter', 'LinkedIn', 'GitHub'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  aria-label={s}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Scholara Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
