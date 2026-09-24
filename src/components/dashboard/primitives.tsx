'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Animated stat card — shared primitive, styled per dashboard via props. */
export function StatCard({
  label,
  value,
  delta,
  trend = 'up',
  icon: Icon,
  accent = 'from-primary to-chart-2',
  index = 0,
}: {
  label: string;
  value: string;
  delta?: string;
  trend?: 'up' | 'down';
  icon: LucideIcon;
  accent?: string;
  index?: number;
}) {
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 premium-shadow transition-all duration-300 hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start justify-between">
        <span className={cn('flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm transition-transform group-hover:scale-110', accent)}>
          <Icon className="h-5 w-5" />
        </span>
        {delta && (
          <span className={cn(
            'inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium',
            trend === 'up' ? 'bg-chart-5/10 text-chart-5' : 'bg-chart-4/10 text-chart-4'
          )}>
            <TrendIcon className="h-3 w-3" />
            {delta}
          </span>
        )}
      </div>
      <p className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

/** Generic card shell for dashboard sections. */
export function DashCard({
  title,
  subtitle,
  action,
  children,
  className,
  icon: Icon,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className={cn('rounded-2xl border border-border bg-card p-6 premium-shadow', className)}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Icon className="h-4.5 w-4.5" />
            </span>
          )}
          <div>
            <h3 className="font-display text-base font-semibold">{title}</h3>
            {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
          </div>
        </div>
        {action}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

/** Activity timeline row. */
export function ActivityRow({
  actor,
  action,
  target,
  time,
  tone = 'bg-chart-1',
}: {
  actor: string;
  action: string;
  target: string;
  time: string;
  tone?: string;
}) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <span className={cn('mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ring-4 ring-card', tone)} />
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-snug">
          <span className="font-medium">{actor}</span>{' '}
          <span className="text-muted-foreground">{action}</span>{' '}
          <span className="font-medium">{target}</span>
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}

/** Empty state placeholder. */
export function EmptyBlock({ title, description, className }: { title: string; description: string; className?: string }) {
  return (
    <div className={cn('flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface-2 p-10 text-center', className)}>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-muted-foreground">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      </div>
      <h3 className="mt-4 font-display text-base font-semibold">{title}</h3>
      <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
