'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, ShieldCheck, Globe, Server, Database } from 'lucide-react';
import { LoginCard } from '@/components/auth/login-card';
import { GradientBlob, BlueprintGrid } from '@/components/site/backgrounds';
import { ThemeSwitcher } from '@/components/site/theme-switcher';

export default function SuperAdminLogin() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — platform administration identity */}
        <div className="relative hidden overflow-hidden bg-surface-2 lg:flex">
          <BlueprintGrid className="opacity-20" />
          <GradientBlob className="-top-24 -left-16 h-[32rem] w-[32rem]" color="bg-blue-500/20" />
          <GradientBlob className="bottom-0 right-0 h-[26rem] w-[26rem]" color="bg-cyan-400/15" delay={4} />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholara</span>
            </Link>

            {/* Platform control illustration */}
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              <motion.svg
                viewBox="0 0 480 480"
                fill="none"
                className="h-full w-full animate-float-slow"
                aria-hidden
              >
                <g stroke="hsl(217 76% 50%)" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
                  {/* control hub */}
                  <circle cx="240" cy="240" r="56" />
                  <circle cx="240" cy="240" r="78" opacity="0.4" />
                  <circle cx="240" cy="240" r="104" opacity="0.2" />
                  <rect x="212" y="222" width="56" height="36" rx="6" />
                  <line x1="224" y1="222" x2="224" y2="206" />
                  <line x1="256" y1="222" x2="256" y2="206" />
                  {/* orbiting nodes */}
                  {[0, 60, 120, 180, 240, 300].map((deg) => {
                    const a = (deg * Math.PI) / 180;
                    const x = 240 + Math.cos(a) * 150;
                    const y = 240 + Math.sin(a) * 150;
                    return (
                      <g key={deg} opacity="0.7">
                        <line x1={240} y1={240} x2={x} y2={y} opacity="0.25" />
                        <rect x={x - 22} y={y - 16} width="44" height="32" rx="5" />
                        <line x1={x - 16} y1={y - 6} x2={x + 16} y2={y - 6} opacity="0.5" />
                        <line x1={x - 16} y1={y + 2} x2={x + 10} y2={y + 2} opacity="0.5" />
                        <line x1={x - 16} y1={y + 10} x2={x + 14} y2={y + 10} opacity="0.5" />
                      </g>
                    );
                  })}
                  {/* radial ticks */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const a = (i / 24) * Math.PI * 2;
                    return (
                      <line
                        key={i}
                        x1={240 + Math.cos(a) * 104}
                        y1={240 + Math.sin(a) * 104}
                        x2={240 + Math.cos(a) * 112}
                        y2={240 + Math.sin(a) * 112}
                        opacity="0.3"
                      />
                    );
                  })}
                </g>
              </motion.svg>
            </div>

            <div className="max-w-md">
              <div className="flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-blue-500" /> 24 schools</span>
                <span className="flex items-center gap-1.5"><Server className="h-4 w-4 text-cyan-500" /> 99.98% uptime</span>
                <span className="flex items-center gap-1.5"><Database className="h-4 w-4 text-blue-400" /> 48K records</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:px-8">
          <GradientBlob className="-top-20 right-0 h-72 w-72" color="bg-blue-500/15" />
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
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Welcome to the Super Admin Portal
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Govern the entire multi-school network — institutions, billing, security and global configuration from a single command center.
              </p>
            </motion.div>

            <div className="mt-8">
              <LoginCard
                portalName="Super Admin"
                forgotPasswordHref="/forgot-password/super-admin"
                dashboardHref="/super-admin/dashboard"
                accentClass="from-blue-500 to-cyan-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
