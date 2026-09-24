'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Building2, Users, BookOpen } from 'lucide-react';
import { LoginCard } from '@/components/auth/login-card';
import { GradientBlob, BlueprintGrid } from '@/components/site/backgrounds';
import { ThemeSwitcher } from '@/components/site/theme-switcher';

export default function SchoolAdminLogin() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — campus identity */}
        <div className="relative hidden overflow-hidden bg-surface-2 lg:flex">
          <BlueprintGrid className="opacity-20" />
          <GradientBlob className="-top-24 -left-16 h-[32rem] w-[32rem]" color="bg-emerald-500/20" />
          <GradientBlob className="bottom-0 right-0 h-[26rem] w-[26rem]" color="bg-teal-400/15" delay={4} />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholara</span>
            </Link>

            {/* Campus building illustration */}
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              <motion.svg
                viewBox="0 0 480 480"
                fill="none"
                className="h-full w-full animate-float-slow"
                aria-hidden
              >
                <g stroke="hsl(160 70% 40%)" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
                  {/* main building */}
                  <rect x="120" y="180" width="240" height="200" rx="4" />
                  <rect x="150" y="140" width="180" height="40" rx="3" />
                  {/* roof */}
                  <path d="M140 140 L240 100 L340 140" />
                  {/* flag */}
                  <line x1="240" y1="100" x2="240" y2="70" />
                  <path d="M240 72 L262 78 L240 86 Z" />
                  {/* columns */}
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                    const x = 140 + i * 28 + 10;
                    return <line key={i} x1={x} y1="180" x2={x} y2="380" opacity="0.5" />;
                  })}
                  {/* windows */}
                  {[0, 1, 2].map((r) =>
                    [0, 1, 2, 3, 4].map((c) => (
                      <rect
                        key={`${r}-${c}`}
                        x={140 + c * 44}
                        y={200 + r * 48}
                        width="32"
                        height="34"
                        rx="3"
                        opacity="0.5"
                      />
                    ))
                  )}
                  {/* entrance arch */}
                  <path d="M220 380 L220 330 Q240 310 260 330 L260 380" />
                  {/* ground */}
                  <line x1="60" y1="392" x2="420" y2="392" opacity="0.3" />
                  {/* side trees */}
                  <circle cx="80" cy="350" r="22" opacity="0.4" />
                  <line x1="80" y1="372" x2="80" y2="392" opacity="0.4" />
                  <circle cx="400" cy="350" r="22" opacity="0.4" />
                  <line x1="400" y1="372" x2="400" y2="392" opacity="0.4" />
                </g>
              </motion.svg>
            </div>

            <div className="max-w-md">
              <div className="flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-emerald-500" /> 1,248 students</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-teal-500" /> 42 classes</span>
                <span className="flex items-center gap-1.5"><Building2 className="h-4 w-4 text-emerald-400" /> 1 campus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:px-8">
          <GradientBlob className="-top-20 right-0 h-72 w-72" color="bg-emerald-500/15" />
          <GradientBlob className="bottom-0 -left-16 h-64 w-64" color="bg-teal-400/10" delay={4} />

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
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-md">
                <Building2 className="h-6 w-6" />
              </span>
              <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Welcome to School Administration
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Manage students, staff, classes, fees and operations for your institution with precision and clarity.
              </p>
            </motion.div>

            <div className="mt-8">
              <LoginCard
                portalName="School Admin"
                forgotPasswordHref="/forgot-password/school-admin"
                dashboardHref="/school-admin/dashboard"
                accentClass="from-emerald-500 to-teal-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
