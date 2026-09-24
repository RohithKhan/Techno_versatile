'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LoginCardProps {
  portalName: string;
  forgotPasswordHref: string;
  dashboardHref: string;
  accentClass?: string;
}

/**
 * The glass login card — shared form markup only.
 * Each dedicated login page owns its own layout, illustration, heading and identity.
 */
export function LoginCard({
  portalName,
  forgotPasswordHref,
  dashboardHref,
  accentClass = 'from-primary to-chart-2',
}: LoginCardProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass-strong relative w-full max-w-md rounded-3xl p-8 premium-shadow-lg sm:p-10"
    >
      <div className={cn('mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r', accentClass)} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = dashboardHref;
        }}
        className="space-y-5"
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="email" type="email" placeholder="you@school.edu" className="pl-9" required />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href={forgotPasswordHref} className="text-xs font-medium text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="pl-9 pr-9"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
            Keep me signed in for 30 days
          </Label>
        </div>

        <Button type="submit" size="lg" className="group w-full">
          Sign in to {portalName}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Need access? Contact your institution administrator.
      </p>
    </motion.div>
  );
}
