import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck,
  Building2,
  Briefcase,
  CalendarCheck,
  FileCheck2,
  Megaphone,
  GraduationCap,
  Users,
} from 'lucide-react';

export type RoleSlug =
  | 'super-admin'
  | 'school-admin'
  | 'management'
  | 'attendance'
  | 'examination'
  | 'notice-management'
  | 'staff'
  | 'parent';

export interface RoleConfig {
  slug: RoleSlug;
  name: string;
  short: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
  ring: string; // ring/border accent
  loginPath: string;
  dashboardPath: string;
  forgotPath: string;
}

export const ROLES: RoleConfig[] = [
  {
    slug: 'super-admin',
    name: 'Super Admin',
    short: 'Platform',
    tagline: 'Govern the entire multi-school network',
    description:
      'Full oversight of every institution, billing, and global configuration across the platform.',
    icon: ShieldCheck,
    accent: 'from-blue-500/15 to-cyan-400/10',
    ring: 'ring-blue-500/20',
    loginPath: '/login/super-admin',
    dashboardPath: '/super-admin/dashboard',
    forgotPath: '/forgot-password/super-admin',
  },
  {
    slug: 'school-admin',
    name: 'School Admin',
    short: 'School',
    tagline: 'Run a single school end-to-end',
    description:
      'Manage students, staff, classes, fees and operations for one institution with precision.',
    icon: Building2,
    accent: 'from-emerald-500/15 to-teal-400/10',
    ring: 'ring-emerald-500/20',
    loginPath: '/login/school-admin',
    dashboardPath: '/school-admin/dashboard',
    forgotPath: '/forgot-password/school-admin',
  },
  {
    slug: 'management',
    name: 'Management',
    short: 'Board',
    tagline: 'Strategic oversight & reporting',
    description:
      'Executive dashboards, financial summaries and institution-wide performance at a glance.',
    icon: Briefcase,
    accent: 'from-amber-500/15 to-orange-400/10',
    ring: 'ring-amber-500/20',
    loginPath: '/login/management',
    dashboardPath: '/management/dashboard',
    forgotPath: '/forgot-password/management',
  },
  {
    slug: 'attendance',
    name: 'Attendance Cell',
    short: 'Attendance',
    tagline: 'Track presence, instantly',
    description:
      'Real-time attendance capture, absentee alerts and daily reconciliation for every class.',
    icon: CalendarCheck,
    accent: 'from-sky-500/15 to-indigo-400/10',
    ring: 'ring-sky-500/20',
    loginPath: '/login/attendance',
    dashboardPath: '/attendance/dashboard',
    forgotPath: '/forgot-password/attendance',
  },
  {
    slug: 'examination',
    name: 'Examination Cell',
    short: 'Exams',
    tagline: 'Schedules, results & integrity',
    description:
      'Design timetables, publish results and maintain exam integrity across all grades.',
    icon: FileCheck2,
    accent: 'from-rose-500/15 to-pink-400/10',
    ring: 'ring-rose-500/20',
    loginPath: '/login/examination',
    dashboardPath: '/examination/dashboard',
    forgotPath: '/forgot-password/examination',
  },
  {
    slug: 'notice-management',
    name: 'Notice Management',
    short: 'Notices',
    tagline: 'Broadcast, target & archive',
    description:
      'Publish circulars to specific audiences and maintain an immutable notice archive.',
    icon: Megaphone,
    accent: 'from-violet-500/15 to-fuchsia-400/10',
    ring: 'ring-violet-500/20',
    loginPath: '/login/notice-management',
    dashboardPath: '/notice-management/dashboard',
    forgotPath: '/forgot-password/notice-management',
  },
  {
    slug: 'staff',
    name: 'Staff / Teacher',
    short: 'Staff',
    tagline: 'Teach, grade & engage',
    description:
      'Mark attendance, record grades, share resources and communicate with your classes.',
    icon: GraduationCap,
    accent: 'from-teal-500/15 to-cyan-400/10',
    ring: 'ring-teal-500/20',
    loginPath: '/login/staff',
    dashboardPath: '/staff/dashboard',
    forgotPath: '/forgot-password/staff',
  },
  {
    slug: 'parent',
    name: 'Parent Portal',
    short: 'Parent',
    tagline: 'Stay close to progress',
    description:
      'Track your child’s attendance, grades, fees and school notices in real time.',
    icon: Users,
    accent: 'from-orange-500/15 to-amber-400/10',
    ring: 'ring-orange-500/20',
    loginPath: '/login/parent',
    dashboardPath: '/parent/dashboard',
    forgotPath: '/forgot-password/parent',
  },
];

export const ROLE_MAP: Record<RoleSlug, RoleConfig> = ROLES.reduce(
  (acc, r) => {
    acc[r.slug] = r;
    return acc;
  },
  {} as Record<RoleSlug, RoleConfig>
);

export function getRole(slug: string): RoleConfig | undefined {
  return ROLE_MAP[slug as RoleSlug];
}

export function isRoleSlug(slug: string): slug is RoleSlug {
  return slug in ROLE_MAP;
}
