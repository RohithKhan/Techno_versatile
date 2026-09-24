'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, CalendarCheck, CheckCircle2, Clock } from 'lucide-react';
import { LoginCard } from '@/components/auth/login-card';
import { GradientBlob, BlueprintGrid } from '@/components/site/backgrounds';
import { ThemeSwitcher } from '@/components/site/theme-switcher';

export default function AttendanceLogin() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — attendance analytics identity */}
        <div className="relative hidden overflow-hidden bg-surface-2 lg:flex">
          <BlueprintGrid className="opacity-20" />
          <GradientBlob className="-top-24 -left-16 h-[32rem] w-[32rem]" color="bg-sky-500/20" />
          <GradientBlob className="bottom-0 right-0 h-[26rem] w-[26rem]" color="bg-indigo-400/15" delay={4} />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-400 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholara</span>
            </Link>

            {/* Attendance tracking illustration */}
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              <motion.svg
                viewBox="0 0 480 480"
                fill="none"
                className="h-full w-full animate-float-slow"
                aria-hidden
              >
                <g stroke="hsl(210 80% 50%)" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
                  {/* calendar frame */}
                  <rect x="100" y="110" width="280" height="260" rx="10" />
                  <line x1="100" y1="150" x2="380" y2="150" />
                  {/* calendar header */}
                  <circle cx="124" cy="130" r="5" />
                  <line x1="150" y1="130" x2="220" y2="130" opacity="0.5" />
                  {/* day labels */}
                  {['M', 'T', 'W', 'T', 'F'].map((_, i) => (
                    <line key={i} x1={120 + i * 52} y1="166" x2={120 + i * 52 + 28} y2="166" opacity="0.3" />
                  ))}
                  {/* attendance grid — checkmarks and dots */}
                  {Array.from({ length: 4 }).map((_, r) =>
                    Array.from({ length: 5 }).map((_, c) => {
                      const x = 120 + c * 52;
                      const y = 188 + r * 44;
                      const present = (r + c) % 4 !== 0;
                      return present ? (
                        <g key={`${r}-${c}`} opacity="0.7">
                          <rect x={x} y={y} width="32" height="32" rx="5" opacity="0.4" />
                          <path d={`M${x + 8} ${y + 16} L${x + 14} ${y + 22} L${x + 24} ${y + 10}`} />
                        </g>
                      ) : (
                        <g key={`${r}-${c}`} opacity="0.5">
                          <rect x={x} y={y} width="32" height="32" rx="5" opacity="0.3" />
                          <circle cx={x + 16} cy={y + 16} r="3" />
                        </g>
                      );
                    })
                  )}
                  {/* attendance ring */}
                  <circle cx="240" cy="400" r="22" opacity="0.4" />
                  <path d="M240 378 A22 22 0 1 1 218 400" opacity="0.6" />
                  <text x="240" y="404" fontSize="10" textAnchor="middle" fill="hsl(210 80% 50%)" opacity="0.7">96%</text>
                </g>
              </motion.svg>
            </div>

            <div className="max-w-md">
              <div className="flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-sky-500" /> 96.2% present</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-indigo-500" /> Real-time</span>
                <span className="flex items-center gap-1.5"><CalendarCheck className="h-4 w-4 text-sky-400" /> Daily log</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:px-8">
          <GradientBlob className="-top-20 right-0 h-72 w-72" color="bg-sky-500/15" />
          <GradientBlob className="bottom-0 -left-16 h-64 w-64" color="bg-indigo-400/10" delay={4} />

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
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-400 text-white shadow-md">
                <CalendarCheck className="h-6 w-6" />
              </span>
              <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Attendance Cell Portal
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Real-time attendance capture, absentee alerts and daily reconciliation for every class across the institution.
              </p>
            </motion.div>

            <div className="mt-8">
              <LoginCard
                portalName="Attendance Cell"
                forgotPasswordHref="/forgot-password/attendance"
                dashboardHref="/attendance/dashboard"
                accentClass="from-sky-500 to-indigo-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
