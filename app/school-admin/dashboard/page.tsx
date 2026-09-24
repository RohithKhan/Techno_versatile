'use client';

import {
  LayoutDashboard, Users, GraduationCap, BookOpen, Wallet,
  BarChart3, Settings, CalendarCheck, Megaphone, CalendarDays,
  Plus, Download, Filter, TrendingUp, Bell, DollarSign,
} from 'lucide-react';
import { DashboardFrame, DashHeader, type NavSection } from '@/components/dashboard/frame';
import { StatCard, DashCard, ActivityRow, EmptyBlock } from '@/components/dashboard/primitives';
import { BarTrend, DonutChart, AreaTrend } from '@/components/dashboard/charts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NAV: NavSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '/school-admin/dashboard' },
      { label: 'Students', icon: GraduationCap, href: '#', badge: '1.2k' },
      { label: 'Staff', icon: Users, href: '#', badge: '142' },
    ],
  },
  {
    label: 'Manage',
    items: [
      { label: 'Academics', icon: BookOpen, href: '#' },
      { label: 'Fees', icon: Wallet, href: '#' },
      { label: 'Reports', icon: BarChart3, href: '#' },
      { label: 'Settings', icon: Settings, href: '#' },
    ],
  },
];

const ATTENDANCE_WEEK = [
  { day: 'Mon', present: 94, absent: 6 },
  { day: 'Tue', present: 96, absent: 4 },
  { day: 'Wed', present: 92, absent: 8 },
  { day: 'Thu', present: 97, absent: 3 },
  { day: 'Fri', present: 95, absent: 5 },
  { day: 'Sat', present: 88, absent: 12 },
];

const GRADE_PIE = [
  { name: 'A', value: 32, fill: 'hsl(160 70% 40%)' },
  { name: 'B', value: 28, fill: 'hsl(173 58% 45%)' },
  { name: 'C', value: 22, fill: 'hsl(43 74% 56%)' },
  { name: 'D', value: 18, fill: 'hsl(27 87% 62%)' },
];

const FEE_TREND = [
  { month: 'Apr', collected: 62, pending: 18 },
  { month: 'May', collected: 71, pending: 14 },
  { month: 'Jun', collected: 78, pending: 10 },
  { month: 'Jul', collected: 84, pending: 8 },
];

const TODAY_EVENTS = [
  { time: '08:30', title: 'Morning Assembly', room: 'Main Hall' },
  { time: '11:00', title: 'Parent-Teacher Meeting', room: 'Conference A' },
  { time: '14:00', title: 'Science Exhibition', room: 'Lab 3' },
  { time: '16:00', title: 'Sports Practice', room: 'Field' },
];

const NOTICES = [
  { title: 'Holiday on Friday', audience: 'All', time: '1h ago' },
  { title: 'Fee submission deadline', audience: 'Parents', time: '4h ago' },
  { title: 'Annual day invitation', audience: 'All', time: '1d ago' },
];

export default function SchoolAdminDashboard() {
  return (
    <DashboardFrame
      brandGradient="from-emerald-500 to-teal-400"
      portalLabel="School Admin"
      navSections={NAV}
      searchPlaceholder="Search students, staff, classes…"
      profileName="School Admin"
      profileInitials="AD"
      notifications={[
        { title: '12 new students enrolled', sub: 'This week · 5m ago' },
        { title: 'Fee payment received', sub: '$12,400 · 1h ago' },
        { title: '3 pending approvals', sub: 'Timetable · 4h ago' },
      ]}
    >
      <DashHeader
        title="School Administration"
        subtitle="Northfield Academy · Academic year 2026–27"
        actions={
          <>
            <Button variant="outline" size="sm"><Filter className="mr-1.5 h-4 w-4" /> Filter</Button>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>
            <Button size="sm"><Plus className="mr-1.5 h-4 w-4" /> Enroll Student</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard index={0} label="Students" value="1,248" delta="+32" icon={GraduationCap} accent="from-emerald-500 to-teal-400" />
        <StatCard index={1} label="Staff" value="142" delta="+3" icon={Users} accent="from-teal-500 to-cyan-400" />
        <StatCard index={2} label="Classes" value="42" delta="6 grades" icon={BookOpen} accent="from-green-500 to-emerald-400" />
        <StatCard index={3} label="Attendance Rate" value="96.2%" delta="+1.1%" icon={CalendarCheck} accent="from-emerald-500 to-green-400" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Attendance Overview" subtitle="This week (%)" icon={CalendarCheck} className="lg:col-span-2">
          <BarTrend
            data={ATTENDANCE_WEEK}
            xKey="day"
            series={[
              { key: 'present', color: 'hsl(160 70% 40%)', name: 'Present' },
              { key: 'absent', color: 'hsl(27 87% 62%)', name: 'Absent' },
            ]}
            height={220}
          />
        </DashCard>

        <DashCard title="Grade Distribution" subtitle="Across all classes" icon={TrendingUp}>
          <DonutChart data={GRADE_PIE} height={220} />
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Fee Collection" subtitle="Collected vs pending ($K)" icon={DollarSign} className="lg:col-span-2">
          <AreaTrend
            data={FEE_TREND}
            xKey="month"
            series={[
              { key: 'collected', color: 'hsl(160 70% 40%)', name: 'Collected' },
              { key: 'pending', color: 'hsl(27 87% 62%)', name: 'Pending' },
            ]}
            height={200}
          />
        </DashCard>

        <DashCard title="Today's Events" icon={CalendarDays}>
          <div className="space-y-3">
            {TODAY_EVENTS.map((e) => (
              <div key={e.time} className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 p-3">
                <span className="w-12 shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">{e.time}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{e.title}</p>
                  <p className="text-xs text-muted-foreground">{e.room}</p>
                </div>
              </div>
            ))}
          </div>
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Recent Notices" icon={Megaphone} className="lg:col-span-2">
          <div className="divide-y divide-border/50">
            {NOTICES.map((n) => (
              <div key={n.title} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{n.title}</p>
                  <p className="text-xs text-muted-foreground">To: {n.audience}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10">Published</Badge>
                  <span className="text-xs text-muted-foreground">{n.time}</span>
                </div>
              </div>
            ))}
          </div>
        </DashCard>

        <DashCard title="Recent Activity" icon={Bell}>
          <div className="divide-y divide-border/50">
            <ActivityRow actor="Ms. Lopez" action="enrolled" target="12 new students" time="5m ago" tone="bg-chart-5" />
            <ActivityRow actor="System" action="generated" target="Term 2 timetable" time="40m ago" tone="bg-chart-1" />
            <ActivityRow actor="Accounts" action="collected" target="$12,400 in fees" time="2h ago" tone="bg-chart-5" />
            <ActivityRow actor="System" action="reminded" target="3 pending approvals" time="4h ago" tone="bg-chart-4" />
          </div>
        </DashCard>
      </div>

      <div className="mt-4">
        <EmptyBlock
          title="Module content lives here"
          description="Each sidebar item — Students, Staff, Academics, Fees, Reports — maps to an independent module page you can build next."
        />
      </div>
    </DashboardFrame>
  );
}
