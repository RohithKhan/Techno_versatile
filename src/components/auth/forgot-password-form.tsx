'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mail, CheckCircle2, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PremiumBackground, LineArtCampus, GradientBlob } from '@/components/site/backgrounds';
import { ThemeSwitcher } from '@/components/site/theme-switcher';
import { ROLE_MAP, type RoleSlug } from '@/lib/roles';
import { cn } from '@/lib/utils';

export function ForgotPasswordForm({ slug }: { slug: RoleSlug }) {
  const role = ROLE_MAP[slug];
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');

  return (
    <div className="relative min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — illustration */}
        <div className="relative hidden overflow-hidden bg-surface-2 lg:block">
          <PremiumBackground variant="hero" />
          <div className="relative flex h-full flex-col justify-between p-12">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-chart-2 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholara</span>
            </Link>
            <div className="relative mx-auto aspect-square max-w-md">
              <LineArtCampus className="absolute inset-0 h-full w-full animate-float-slow" />
            </div>
            <div className="max-w-md">
              <p className="font-display text-2xl font-semibold leading-snug">
                Secure access, by design
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Password resets are encrypted end-to-end and expire automatically.
              </p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:px-8">
          <GradientBlob className="-top-20 right-0 h-72 w-72" color="bg-primary/15" />
          <GradientBlob className="bottom-0 -left-16 h-64 w-64" color="bg-chart-2/10" delay={4} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong relative w-full max-w-md rounded-3xl p-8 premium-shadow-lg sm:p-10"
          >
            <div className="mb-6 flex items-center justify-between">
              <Link href={role.loginPath} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> Back to sign in
              </Link>
              <ThemeSwitcher />
            </div>

            <span className={cn(
              'inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-foreground ring-1',
              role.accent,
              role.ring
            )}>
              <role.icon className="h-6 w-6" />
            </span>

            {sent ? (
              <div className="mt-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-chart-5" />
                  <h1 className="font-display text-2xl font-semibold tracking-tight">Check your inbox</h1>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  If an account exists for <span className="font-medium text-foreground">{email}</span>,
                  you’ll receive a secure reset link within a few minutes.
                </p>
                <Button asChild variant="outline" className="mt-6 w-full">
                  <Link href={role.loginPath}>Return to sign in</Link>
                </Button>
              </div>
            ) : (
              <>
                <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Reset your password
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enter the email associated with your <span className="font-medium text-foreground">{role.name}</span> account.
                </p>

                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="mt-8 space-y-5"
                >
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="reset-email"
                        type="email"
                        placeholder="you@school.edu"
                        className="pl-9"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="group w-full">
                    Send reset link
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
