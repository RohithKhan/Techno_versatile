'use client';

import {
  LayoutDashboard, Users, GraduationCap, Briefcase, BarChart3,
  Settings, TrendingUp, Award, DollarSign, Building2,
  Plus, Download, FileText, PieChart as PieIcon,
} from 'lucide-react';
import { DashboardFrame, DashHeader, type NavSection } from '@/components/dashboard/frame';
import { StatCard, DashCard, ActivityRow, EmptyBlock } from '@/components/dashboard/primitives';
import { AreaTrend, BarTrend, RadarTrend } from '@/components/dashboard/charts';
import { Button } from '@/components/ui/button';

const NAV: NavSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '/management/dashboard' },
      { label: 'Students', icon: GraduationCap, href: '#' },
      { label: 'Staff', icon: Users, href: '#' },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Departments', icon: Briefcase, href: '#' },
      { label: 'Reports', icon: FileText, href: '#' },
      { label: 'Settings', icon: Settings, href: '#' },
    ],
  },
];

const REVENUE = [
  { month: 'Jan', revenue: 142, expense: 98 },
  { month: 'Feb', revenue: 148, expense: 101 },
  { month: 'Mar', revenue: 152, expense: 104 },
  { month: 'Apr', revenue: 158, expense: 107 },
  { month: 'May', revenue: 164, expense: 110 },
  { month: 'Jun', revenue: 169, expense: 112 },
  { month: 'Jul', revenue: 175, expense: 115 },
  { month: 'Aug', revenue: 181, expense: 118 },
  { month: 'Sep', revenue: 186, expense: 121 },
];

const DEPARTMENTS = [
  { name: 'Science', value: 92 },
  { name: 'Mathematics', value: 88 },
  { name: 'Humanities', value: 78 },
  { name: 'Arts', value: 71 },
  { name: 'Sports', value: 65 },
  { name: 'Languages', value: 84 },
];

const RADAR = [
  { subject: 'Academics', A: 120, B: 90 },
  { subject: 'Attendance', A: 130, B: 110 },
  { subject: 'Sports', A: 80, B: 70 },
  { subject: 'Arts', A: 95, B: 60 },
  { subject: 'Discipline', A: 110, B: 100 },
  { subject: 'Engagement', A: 100, B: 85 },
];

export default function ManagementDashboard() {
  return (
    <DashboardFrame
      brandGradient="from-amber-500 to-orange-400"
      portalLabel="Management"
      navSections={NAV}
      searchPlaceholder="Search departments, reports, staff…"
      profileName="Management"
      profileInitials="MG"
      notifications={[
        { title: 'Q3 budget approved', sub: 'Board review · 12m ago' },
        { title: 'Annual report published', sub: 'Analytics · 1h ago' },
        { title: '2 schools below margin', sub: 'CFO flag · 3h ago' },
      ]}
    >
      <DashHeader
        title="Management Command Center"
        subtitle="Strategic oversight across all institutions"
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>
            <Button size="sm"><Plus className="mr-1.5 h-4 w-4" /> New Report</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard index={0} label="Total Revenue" value="$2.4M" delta="+14.2%" icon={DollarSign} accent="from-amber-500 to-orange-400" />
        <StatCard index={1} label="Enrollment" value="48,210" delta="+4.8%" icon={GraduationCap} accent="from-orange-500 to-amber-400" />
        <StatCard index={2} label="Avg Performance" value="87.4%" delta="+2.3%" icon={Award} accent="from-amber-500 to-yellow-400" />
        <StatCard index={3} label="Faculty Retention" value="94.1%" delta="-0.6%" trend="down" icon={Users} accent="from-orange-500 to-red-400" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Revenue vs Expenses" subtitle="Last 9 months ($K)" icon={TrendingUp} className="lg:col-span-2">
          <AreaTrend
            data={REVENUE}
            xKey="month"
            series={[
              { key: 'revenue', color: 'hsl(35 80% 45%)', name: 'Revenue' },
              { key: 'expense', color: 'hsl(27 87% 62%)', name: 'Expenses' },
            ]}
            height={240}
          />
        </DashCard>

        <DashCard title="Performance Radar" subtitle="This year vs last year" icon={PieIcon}>
          <RadarTrend
            data={RADAR}
            xKey="subject"
            series={[
              { key: 'A', color: 'hsl(35 80% 45%)', name: 'This year' },
              { key: 'B', color: 'hsl(43 74% 56%)', name: 'Last year' },
            ]}
            height={240}
          />
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Department Statistics" subtitle="Avg performance score" icon={Building2} className="lg:col-span-2">
          <BarTrend
            data={DEPARTMENTS}
            xKey="name"
            series={[{ key: 'value', color: 'hsl(35 80% 45%)', maxBarSize: 36 }]}
            height={220}
          />
        </DashCard>

        <DashCard title="Recent Activity" icon={BarChart3}>
          <div className="divide-y divide-border/50">
            <ActivityRow actor="Board" action="approved" target="Q3 infrastructure budget" time="12m ago" tone="bg-chart-5" />
            <ActivityRow actor="Analytics" action="published" target="Annual performance report" time="1h ago" tone="bg-chart-1" />
            <ActivityRow actor="CFO" action="flagged" target="2 schools below margin" time="3h ago" tone="bg-chart-4" />
            <ActivityRow actor="System" action="archived" target="2024 financials" time="1d ago" tone="bg-muted-foreground" />
          </div>
        </DashCard>
      </div>

      <div className="mt-4">
        <EmptyBlock
          title="Module content lives here"
          description="Each sidebar item — Students, Staff, Departments, Reports — maps to an independent module page for deeper analysis."
        />
      </div>
    </DashboardFrame>
  );
}
