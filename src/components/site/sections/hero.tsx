'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PremiumBackground, LineArtCampus } from '@/components/site/backgrounds';
import { AnimatedCounter } from '@/components/site/animated-counter';

const TRUST = [
  { value: 24, suffix: '+', label: 'Schools' },
  { value: 48, suffix: 'K', label: 'Students' },
  { value: 99.98, suffix: '%', label: 'Uptime', decimals: 2 },
  { value: 4, suffix: '.9★', label: 'Rating' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <PremiumBackground variant="hero" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Trusted by 24 institutions across 6 countries
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              The premium platform for{' '}
              <span className="text-gradient animate-gradient-x">multi-school</span>{' '}
              management.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Scholara unifies attendance, examinations, notices, staff and
              parent engagement into one elegant, secure system — engineered for
              institutions that demand excellence at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" className="group h-12 rounded-xl px-6 text-base">
                <Link href="#portals">
                  Access your portal
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-xl px-6 text-base">
                <Link href="#platform">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  See the platform
                </Link>
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
            >
              {TRUST.map((t) => (
                <div key={t.label}>
                  <dd className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    <AnimatedCounter
                      value={t.value}
                      suffix={t.suffix}
                      decimals={(t as { decimals?: number }).decimals ?? 0}
                    />
                  </dd>
                  <dt className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-chart-2/5 to-transparent premium-shadow-lg" />
              <LineArtCampus className="absolute inset-0 h-full w-full animate-float-slow" />
              {/* floating glass cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass absolute -left-4 top-10 rounded-2xl p-3 premium-shadow sm:-left-8"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-chart-5/15 text-chart-5">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold">Attendance</p>
                    <p className="text-[10px] text-muted-foreground">96.2% today</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="glass absolute -right-2 bottom-12 rounded-2xl p-3 premium-shadow sm:-right-6"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-chart-1/15 text-chart-1">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold">Results</p>
                    <p className="text-[10px] text-muted-foreground">Published</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
