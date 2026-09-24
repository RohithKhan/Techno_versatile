'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal, Section, SectionHeading } from '@/components/site/section';
import { Button } from '@/components/ui/button';
import { ROLES } from '@/lib/roles';
import { cn } from '@/lib/utils';

export function RolePortals() {
  return (
    <Section id="portals">
      <SectionHeading
        eyebrow="Role Access Portal"
        title={<>Eight portals. One elegant experience.</>}
        description="Every stakeholder gets a purpose-built workspace. Choose your role to access the portal."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ROLES.map((role, i) => (
          <Reveal key={role.slug} delay={(i % 4) * 0.07}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 premium-shadow"
            >
              <div className={cn(
                'pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-50 blur-2xl transition-opacity group-hover:opacity-100',
                role.accent
              )} />
              <div className="relative">
                <span className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-foreground ring-1 transition-transform group-hover:scale-110',
                  role.accent,
                  role.ring
                )}>
                  <role.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{role.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary/80">
                  {role.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group/btn mt-5 w-full justify-between"
                >
                  <Link href={role.loginPath}>
                    Access Portal
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
