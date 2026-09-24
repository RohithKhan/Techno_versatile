'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Users, Award, Heart } from 'lucide-react';
import { LoginCard } from '@/components/auth/login-card';
import { GradientBlob, BlueprintGrid } from '@/components/site/backgrounds';
import { ThemeSwitcher } from '@/components/site/theme-switcher';

export default function ParentLogin() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — parent & child identity */}
        <div className="relative hidden overflow-hidden bg-surface-2 lg:flex">
          <BlueprintGrid className="opacity-20" />
          <GradientBlob className="-top-24 -left-16 h-[32rem] w-[32rem]" color="bg-orange-500/20" />
          <GradientBlob className="bottom-0 right-0 h-[26rem] w-[26rem]" color="bg-amber-400/15" delay={4} />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholara</span>
            </Link>

            {/* Parent & child progress illustration */}
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              <motion.svg
                viewBox="0 0 480 480"
                fill="none"
                className="h-full w-full animate-float-slow"
                aria-hidden
              >
                <g stroke="hsl(30 80% 50%)" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
                  {/* progress card */}
                  <rect x="110" y="110" width="260" height="260" rx="12" />
                  <line x1="110" y1="150" x2="370" y2="150" />
                  {/* header */}
                  <circle cx="132" cy="130" r="6" />
                  <line x1="150" y1="130" x2="220" y2="130" opacity="0.5" />
                  {/* avatar circle (parent + child) */}
                  <circle cx="240" cy="200" r="34" opacity="0.4" />
                  <circle cx="240" cy="194" r="10" opacity="0.6" />
                  <path d="M222 214 Q240 200 258 214" opacity="0.5" />
                  {/* small child figure */}
                  <circle cx="266" cy="196" r="6" opacity="0.5" />
                  <path d="M260 206 Q266 200 272 206" opacity="0.4" />
                  {/* progress bars */}
                  <line x1="140" y1="262" x2="180" y2="262" opacity="0.5" />
                  <rect x="140" y="270" width="200" height="8" rx="4" opacity="0.3" />
                  <rect x="140" y="270" width="170" height="8" rx="4" opacity="0.6" />
                  <line x1="140" y1="296" x2="172" y2="296" opacity="0.5" />
                  <rect x="140" y="304" width="200" height="8" rx="4" opacity="0.3" />
                  <rect x="140" y="304" width="140" height="8" rx="4" opacity="0.6" />
                  <line x1="140" y1="330" x2="168" y2="330" opacity="0.5" />
                  <rect x="140" y="338" width="200" height="8" rx="4" opacity="0.3" />
                  <rect x="140" y="338" width="185" height="8" rx="4" opacity="0.6" />
                  {/* heart accent */}
                  <path d="M340 350 C340 345 348 345 348 352 C348 345 356 345 356 352 C356 360 348 366 348 366 C348 366 340 360 340 352 Z" opacity="0.5" />
                </g>
              </motion.svg>
            </div>

            <div className="max-w-md">
              <div className="flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-orange-500" /> Aria · Grade 6</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-amber-500" /> Grade A−</span>
                <span className="flex items-center gap-1.5"><Heart className="h-4 w-4 text-orange-400" /> 97.8% attendance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:px-8">
          <GradientBlob className="-top-20 right-0 h-72 w-72" color="bg-orange-500/15" />
          <GradientBlob className="bottom-0 -left-16 h-64 w-64" color="bg-amber-400/10" delay={4} />

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
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-md">
                <Users className="h-6 w-6" />
              </span>
              <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Welcome to the Parent Portal
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Track your child’s attendance, grades, fees and school notices in real time — stay close to their progress, every step.
              </p>
            </motion.div>

            <div className="mt-8">
              <LoginCard
                portalName="Parent Portal"
                forgotPasswordHref="/forgot-password/parent"
                dashboardHref="/parent/dashboard"
                accentClass="from-orange-500 to-amber-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
