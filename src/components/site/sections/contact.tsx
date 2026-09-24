'use client';

import { Reveal, Section } from '@/components/site/section';
import { PremiumBackground } from '@/components/site/backgrounds';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'hello@scholara.io' },
  { icon: Phone, label: 'Phone', value: '+1 (415) 555-0142' },
  { icon: MapPin, label: 'Office', value: 'San Francisco · London · Singapore' },
];

export function ContactSection() {
  return (
    <Section id="contact" className="bg-surface-2/60">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card premium-shadow-lg">
        <PremiumBackground variant="soft" />
        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Talk to us
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Let’s modernize your institution
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Tell us about your schools and we’ll prepare a tailored walkthrough —
                no obligation, no pressure.
              </p>

              <ul className="mt-8 space-y-4">
                {CONTACTS.map((c) => (
                  <li key={c.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.label}</p>
                      <p className="text-sm font-medium">{c.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form className="rounded-2xl border border-border bg-surface-1 p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="Amara" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Okafor" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="workEmail">Work email</Label>
                <Input id="workEmail" type="email" placeholder="amara@school.edu" />
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input id="institution" placeholder="Northfield Academy" />
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" placeholder="We manage 14 campuses and currently use…" rows={4} />
              </div>
              <Button type="submit" size="lg" className="group mt-6 w-full">
                Request a walkthrough
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
