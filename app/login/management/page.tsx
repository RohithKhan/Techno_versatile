'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Briefcase, TrendingUp, BarChart3 } from 'lucide-react';
import { LoginCard } from '@/components/auth/login-card';
import { GradientBlob, BlueprintGrid } from '@/components/site/backgrounds';
import { ThemeSwitcher } from '@/components/site/theme-switcher';

export default function ManagementLogin() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — analytics command center */}
        <div className="relative hidden overflow-hidden bg-surface-2 lg:flex">
          <BlueprintGrid className="opacity-20" />
          <GradientBlob className="-top-24 -left-16 h-[32rem] w-[32rem]" color="bg-amber-500/20" />
          <GradientBlob className="bottom-0 right-0 h-[26rem] w-[26rem]" color="bg-orange-400/15" delay={4} />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholara</span>
            </Link>

            {/* Analytics dashboard preview illustration */}
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              <motion.svg
                viewBox="0 0 480 480"
                fill="none"
                className="h-full w-full animate-float-slow"
                aria-hidden
              >
                <g stroke="hsl(35 80% 45%)" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
                  {/* dashboard frame */}
                  <rect x="80" y="90" width="320" height="300" rx="10" />
                  <line x1="80" y1="128" x2="400" y2="128" />
                  {/* header dots */}
                  <circle cx="100" cy="110" r="4" />
                  <circle cx="116" cy="110" r="4" />
                  <circle cx="132" cy="110" r="4" />
                  {/* stat cards */}
                  <rect x="100" y="144" width="84" height="56" rx="6" opacity="0.7" />
                  <line x1="112" y1="160" x2="150" y2="160" opacity="0.6" />
                  <line x1="112" y1="172" x2="138" y2="172" opacity="0.4" />
                  <rect x="196" y="144" width="84" height="56" rx="6" opacity="0.7" />
                  <line x1="208" y1="160" x2="246" y2="160" opacity="0.6" />
                  <line x1="208" y1="172" x2="234" y2="172" opacity="0.4" />
                  <rect x="292" y="144" width="84" height="56" rx="6" opacity="0.7" />
                  <line x1="304" y1="160" x2="342" y2="160" opacity="0.6" />
                  <line x1="304" y1="172" x2="330" y2="172" opacity="0.4" />
                  {/* bar chart */}
                  <line x1="100" y1="360" x2="380" y2="360" opacity="0.4" />
                  <line x1="100" y1="220" x2="100" y2="360" opacity="0.4" />
                  {[40, 64, 50, 88, 72, 96, 60].map((h, i) => (
                    <rect key={i} x={116 + i * 36} y={360 - h} width="24" height={h} rx="3" opacity="0.65" />
                  ))}
                  {/* trend line */}
                  <path d="M112 320 L150 300 L188 286 L226 270 L264 250 L302 240 L340 222" opacity="0.5" />
                  <circle cx="150" cy="300" r="3" />
                  <circle cx="226" cy="270" r="3" />
                  <circle cx="302" cy="240" r="3" />
                </g>
              </motion.svg>
            </div>

            <div className="max-w-md">
              <div className="flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><TrendingUp className="h-4 w-4 text-amber-500" /> +14.2% revenue</span>
                <span className="flex items-center gap-1.5"><BarChart3 className="h-4 w-4 text-orange-500" /> 24 schools</span>
                <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-amber-400" /> Board view</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:px-8">
          <GradientBlob className="-top-20 right-0 h-72 w-72" color="bg-amber-500/15" />
          <GradientBlob className="bottom-0 -left-16 h-64 w-64" color="bg-orange-400/10" delay={4} />

          <div className="relative w-full max-w-md">
            <div className="mb-6 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> Back home
              </Link>
              <ThemeSwitcher />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 text-white shadow-md">
                <Briefcase className="h-6 w-6" />
              </span>
              <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Management Command Center
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Executive dashboards, financial summaries and institution-wide performance — the strategic view your board needs.
              </p>
            </motion.div>

            <div className="mt-8">
              <LoginCard
                portalName="Management"
                forgotPasswordHref="/forgot-password/management"
                dashboardHref="/management/dashboard"
                accentClass="from-amber-500 to-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
