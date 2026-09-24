'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronLeft, X, Menu, Search, Bell, ChevronDown, LogOut, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ThemeSwitcher } from '@/components/site/theme-switcher';
import { cn } from '@/lib/utils';

export interface NavEntry {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string;
}

export interface NavSection {
  label?: string;
  items: NavEntry[];
}

/** Each dashboard owns its sidebar config and passes it here. */
export function DashboardFrame({
  brandGradient,
  portalLabel,
  navSections,
  searchPlaceholder,
  profileName,
  profileInitials,
  notifications,
  children,
}: {
  brandGradient: string;
  portalLabel: string;
  navSections: NavSection[];
  searchPlaceholder: string;
  profileName: string;
  profileInitials: string;
  notifications: { title: string; sub: string }[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-surface-1 transition-transform duration-300 lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className={cn('flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform group-hover:scale-105', brandGradient)}>
              <GraduationCap className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-semibold tracking-tight">Scholara</p>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{portalLabel}</p>
            </div>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="scrollbar-thin flex-1 overflow-y-auto px-3 py-4">
          {navSections.map((section, si) => (
            <div key={si} className="mb-6">
              {section.label && (
                <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.label}
                </p>
              )}
              <ul className="mt-2 space-y-0.5">
                {section.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={cn(
                          'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                          active
                            ? cn('bg-gradient-to-r text-white shadow-sm', brandGradient)
                            : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                        )}
                      >
                        <item.icon className={cn('h-4.5 w-4.5 shrink-0', active ? 'text-white' : 'text-muted-foreground group-hover:text-foreground')} />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className={cn(
                            'rounded-md px-1.5 py-0.5 text-[10px] font-semibold',
                            active ? 'bg-white/20 text-white' : 'bg-accent text-muted-foreground'
                          )}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-3">
          <div className={cn('rounded-2xl border border-border bg-gradient-to-br p-4', brandGradient, 'bg-opacity-5')}>
            <p className="text-xs font-semibold">Need help?</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              Browse docs or contact your platform admin.
            </p>
            <Button asChild variant="outline" size="sm" className="mt-3 w-full">
              <Link href="#">View docs</Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-72">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md sm:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="relative hidden flex-1 max-w-md sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder={searchPlaceholder} className="h-9 bg-surface-2 pl-9" />
          </div>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent" aria-label="Notifications">
                  <Bell className="h-4.5 w-4.5" />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-chart-4 ring-2 ring-background" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  Notifications
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">{notifications.length} new</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((n) => (
                  <DropdownMenuItem key={n.title} className="flex flex-col items-start gap-0.5 py-2.5">
                    <p className="text-sm font-medium">{n.title}</p>
                    <p className="text-xs text-muted-foreground">{n.sub}</p>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeSwitcher />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-lg p-1 pr-2 hover:bg-accent" aria-label="Profile">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className={cn('bg-gradient-to-br text-xs font-semibold text-white', brandGradient)}>
                      {profileInitials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden text-sm font-medium sm:block">{profileName}</span>
                  <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <p className="text-sm font-semibold">{profileName}</p>
                  <p className="text-xs font-normal text-muted-foreground">admin@scholara.io</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User className="mr-2 h-4 w-4" /> Profile</DropdownMenuItem>
                <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Preferences</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/"><LogOut className="mr-2 h-4 w-4" /> Sign out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export function DashHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}
