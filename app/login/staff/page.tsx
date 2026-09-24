'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, BookOpen, ClipboardList, MessageSquare } from 'lucide-react';
import { LoginCard } from '@/components/auth/login-card';
import { GradientBlob, BlueprintGrid } from '@/components/site/backgrounds';
import { ThemeSwitcher } from '@/components/site/theme-switcher';

export default function StaffLogin() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — teacher / classroom identity */}
        <div className="relative hidden overflow-hidden bg-surface-2 lg:flex">
          <BlueprintGrid className="opacity-20" />
          <GradientBlob className="-top-24 -left-16 h-[32rem] w-[32rem]" color="bg-teal-500/20" />
          <GradientBlob className="bottom-0 right-0 h-[26rem] w-[26rem]" color="bg-cyan-400/15" delay={4} />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholara</span>
            </Link>

            {/* Classroom illustration */}
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              <motion.svg
                viewBox="0 0 480 480"
                fill="none"
                className="h-full w-full animate-float-slow"
                aria-hidden
              >
                <g stroke="hsl(175 65% 40%)" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
                  {/* blackboard */}
                  <rect x="110" y="100" width="260" height="150" rx="6" />
                  <rect x="120" y="110" width="240" height="130" rx="3" opacity="0.4" />
                  {/* chalk lines */}
                  <line x1="140" y1="140" x2="280" y2="140" opacity="0.5" />
                  <line x1="140" y1="156" x2="240" y2="156" opacity="0.4" />
                  <path d="M140 180 Q200 160 280 180" opacity="0.4" />
                  <path d="M140 200 Q220 180 300 200" opacity="0.4" />
                  {/* teacher desk */}
                  <rect x="180" y="280" width="120" height="50" rx="4" />
                  <line x1="200" y1="300" x2="240" y2="300" opacity="0.5" />
                  {/* student desks */}
                  {[0, 1, 2].map((r) =>
                    [0, 1, 2].map((c) => (
                      <g key={`${r}-${c}`} opacity="0.5">
                        <rect x={120 + c * 90} y={350 + r * 36} width="60" height="24" rx="3" />
                        <circle cx={150 + c * 90} cy={362 + r * 36} r="6" opacity="0.6" />
                      </g>
                    ))
                  )}
                  {/* book stack */}
                  <rect x="320" y="290" width="40" height="8" rx="2" opacity="0.5" />
                  <rect x="320" y="298" width="40" height="8" rx="2" opacity="0.4" />
                  <rect x="320" y="306" width="40" height="8" rx="2" opacity="0.3" />
                </g>
              </motion.svg>
            </div>

            <div className="max-w-md">
              <div className="flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-teal-500" /> 6 classes</span>
                <span className="flex items-center gap-1.5"><ClipboardList className="h-4 w-4 text-cyan-500" /> 24 grades due</span>
                <span className="flex items-center gap-1.5"><MessageSquare className="h-4 w-4 text-teal-400" /> Messages</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:px-8">
          <GradientBlob className="-top-20 right-0 h-72 w-72" color="bg-teal-500/15" />
          <GradientBlob className="bottom-0 -left-16 h-64 w-64" color="bg-cyan-400/10" delay={4} />

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
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 text-white shadow-md">
                <GraduationCap className="h-6 w-6" />
              </span>
              <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Welcome back, Educator
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Mark attendance, record grades, share resources and communicate with your classes — your teaching workspace, all in one place.
              </p>
            </motion.div>

            <div className="mt-8">
              <LoginCard
                portalName="Staff Portal"
                forgotPasswordHref="/forgot-password/staff"
                dashboardHref="/staff/dashboard"
                accentClass="from-teal-500 to-cyan-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
