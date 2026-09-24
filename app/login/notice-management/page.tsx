'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Megaphone, Bell, Send } from 'lucide-react';
import { LoginCard } from '@/components/auth/login-card';
import { GradientBlob, BlueprintGrid } from '@/components/site/backgrounds';
import { ThemeSwitcher } from '@/components/site/theme-switcher';

export default function NoticeManagementLogin() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — notice board identity */}
        <div className="relative hidden overflow-hidden bg-surface-2 lg:flex">
          <BlueprintGrid className="opacity-20" />
          <GradientBlob className="-top-24 -left-16 h-[32rem] w-[32rem]" color="bg-violet-500/20" />
          <GradientBlob className="bottom-0 right-0 h-[26rem] w-[26rem]" color="bg-fuchsia-400/15" delay={4} />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-400 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholara</span>
            </Link>

            {/* Digital notice board illustration */}
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              <motion.svg
                viewBox="0 0 480 480"
                fill="none"
                className="h-full w-full animate-float-slow"
                aria-hidden
              >
                <g stroke="hsl(270 70% 55%)" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
                  {/* notice board frame */}
                  <rect x="90" y="90" width="300" height="300" rx="10" />
                  <line x1="90" y1="128" x2="390" y2="128" />
                  {/* header */}
                  <circle cx="112" cy="110" r="5" />
                  <line x1="130" y1="110" x2="200" y2="110" opacity="0.5" />
                  {/* pinned notices */}
                  {[0, 1, 2].map((i) => (
                    <g key={i} opacity="0.65">
                      <rect x={110} y={146 + i * 76} width="260" height="64" rx="6" />
                      <circle cx={120} cy={156 + i * 76} r="4" />
                      <line x1={136} y1={156 + i * 76} x2={300} y2={156 + i * 76} opacity="0.6" />
                      <line x1={136} y1={168 + i * 76} x2={260} y2={168 + i * 76} opacity="0.4" />
                      <line x1={136} y1={180 + i * 76} x2={280} y2={180 + i * 76} opacity="0.4" />
                      <line x1={136} y1={192 + i * 76} x2={240} y2={192 + i * 76} opacity="0.4" />
                    </g>
                  ))}
                  {/* broadcast waves */}
                  <path d="M400 240 Q420 240 420 220" opacity="0.5" />
                  <path d="M410 250 Q440 250 440 210" opacity="0.4" />
                  <path d="M420 260 Q460 260 460 200" opacity="0.3" />
                  {/* megaphone accent */}
                  <path d="M390 380 L410 370 L410 390 Z" opacity="0.6" />
                  <line x1="410" y1="380" x2="430" y2="380" opacity="0.5" />
                </g>
              </motion.svg>
            </div>

            <div className="max-w-md">
              <div className="flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Megaphone className="h-4 w-4 text-violet-500" /> 1,284 published</span>
                <span className="flex items-center gap-1.5"><Bell className="h-4 w-4 text-fuchsia-500" /> 99.6% delivery</span>
                <span className="flex items-center gap-1.5"><Send className="h-4 w-4 text-violet-400" /> 18 audiences</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:px-8">
          <GradientBlob className="-top-20 right-0 h-72 w-72" color="bg-violet-500/15" />
          <GradientBlob className="bottom-0 -left-16 h-64 w-64" color="bg-fuchsia-400/10" delay={4} />

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
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-400 text-white shadow-md">
                <Megaphone className="h-6 w-6" />
              </span>
              <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Notice Management Portal
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Publish targeted circulars, manage audiences, track delivery and maintain an immutable notice archive.
              </p>
            </motion.div>

            <div className="mt-8">
              <LoginCard
                portalName="Notice Management"
                forgotPasswordHref="/forgot-password/notice-management"
                dashboardHref="/notice-management/dashboard"
                accentClass="from-violet-500 to-fuchsia-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
