'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, FileCheck2, Award, ClipboardList } from 'lucide-react';
import { LoginCard } from '@/components/auth/login-card';
import { GradientBlob, BlueprintGrid } from '@/components/site/backgrounds';
import { ThemeSwitcher } from '@/components/site/theme-switcher';

export default function ExaminationLogin() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — examination identity */}
        <div className="relative hidden overflow-hidden bg-surface-2 lg:flex">
          <BlueprintGrid className="opacity-20" />
          <GradientBlob className="-top-24 -left-16 h-[32rem] w-[32rem]" color="bg-rose-500/20" />
          <GradientBlob className="bottom-0 right-0 h-[26rem] w-[26rem]" color="bg-pink-400/15" delay={4} />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-400 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholara</span>
            </Link>

            {/* Examination / report card illustration */}
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              <motion.svg
                viewBox="0 0 480 480"
                fill="none"
                className="h-full w-full animate-float-slow"
                aria-hidden
              >
                <g stroke="hsl(340 75% 50%)" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
                  {/* report card */}
                  <rect x="120" y="100" width="240" height="300" rx="10" />
                  <line x1="120" y1="140" x2="360" y2="140" />
                  <line x1="140" y1="120" x2="220" y2="120" opacity="0.5" />
                  {/* grade circle */}
                  <circle cx="300" cy="120" r="14" opacity="0.6" />
                  <text x="300" y="124" fontSize="12" textAnchor="middle" fill="hsl(340 75% 50%)" opacity="0.7">A+</text>
                  {/* subject rows */}
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'].map((_, i) => (
                    <g key={i} opacity="0.6">
                      <line x1="140" y1={168 + i * 36} x2={240} y2={168 + i * 36} opacity="0.5" />
                      <rect x={260} y={160 + i * 36} width="40" height="16" rx="3" opacity="0.4" />
                      <line x1={312} y1={168 + i * 36} x2={340} y2={168 + i * 36} opacity="0.5" />
                    </g>
                  ))}
                  {/* performance bars */}
                  <rect x="140" y="356" width="200" height="6" rx="3" opacity="0.3" />
                  <rect x="140" y="356" width="160" height="6" rx="3" opacity="0.6" />
                  <rect x="140" y="372" width="200" height="6" rx="3" opacity="0.3" />
                  <rect x="140" y="372" width="130" height="6" rx="3" opacity="0.6" />
                  {/* exam paper corner */}
                  <path d="M360 100 L380 100 L380 120 L360 120" opacity="0.4" />
                  <line x1="365" y1="108" x2="375" y2="108" opacity="0.5" />
                  <line x1="365" y1="114" x2="372" y2="114" opacity="0.5" />
                </g>
              </motion.svg>
            </div>

            <div className="max-w-md">
              <div className="flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><FileCheck2 className="h-4 w-4 text-rose-500" /> 36 active exams</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-pink-500" /> 12.4K results</span>
                <span className="flex items-center gap-1.5"><ClipboardList className="h-4 w-4 text-rose-400" /> Integrity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:px-8">
          <GradientBlob className="-top-20 right-0 h-72 w-72" color="bg-rose-500/15" />
          <GradientBlob className="bottom-0 -left-16 h-64 w-64" color="bg-pink-400/10" delay={4} />

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
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-400 text-white shadow-md">
                <FileCheck2 className="h-6 w-6" />
              </span>
              <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Examination Cell Portal
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Design timetables, publish results, manage grading workflows and maintain exam integrity across all grades.
              </p>
            </motion.div>

            <div className="mt-8">
              <LoginCard
                portalName="Examination Cell"
                forgotPasswordHref="/forgot-password/examination"
                dashboardHref="/examination/dashboard"
                accentClass="from-rose-500 to-pink-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
