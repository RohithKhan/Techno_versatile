'use client';

import {
  LayoutDashboard, CalendarCheck, FileText, BarChart3,
  Users, GraduationCap, Clock, CheckCircle2, XCircle,
  Plus, Download, TrendingUp, UserCheck,
} from 'lucide-react';
import { DashboardFrame, DashHeader, type NavSection } from '@/components/dashboard/frame';
import { StatCard, DashCard, ActivityRow, EmptyBlock } from '@/components/dashboard/primitives';
import { LineTrend, BarTrend, DonutChart } from '@/components/dashboard/charts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NAV: NavSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '/attendance/dashboard' },
      { label: 'Attendance', icon: CalendarCheck, href: '#' },
      { label: 'Leaves', icon: FileText, href: '#', badge: '7' },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Reports', icon: FileText, href: '#' },
      { label: 'Analytics', icon: BarChart3, href: '#' },
    ],
  },
];

const MONTHLY = [
  { day: '1', rate: 95 }, { day: '5', rate: 96 }, { day: '10', rate: 93 },
  { day: '15', rate: 97 }, { day: '20', rate: 94 }, { day: '25', rate: 96 },
  { day: '30', rate: 92 },
];

const WEEK = [
  { day: 'Mon', present: 94, absent: 6 },
  { day: 'Tue', present: 96, absent: 4 },
  { day: 'Wed', present: 92, absent: 8 },
  { day: 'Thu', present: 97, absent: 3 },
  { day: 'Fri', present: 95, absent: 5 },
  { day: 'Sat', present: 88, absent: 12 },
];

const STATUS_PIE = [
  { name: 'Present', value: 92, fill: 'hsl(210 80% 50%)' },
  { name: 'Absent', value: 5, fill: 'hsl(27 87% 62%)' },
  { name: 'Late', value: 3, fill: 'hsl(43 74% 56%)' },
];

const ABSENT = [
  { name: 'Aria Sharma', grade: 'Grade 6-B', reason: 'Sick leave', time: '08:45' },
  { name: 'Ethan Park', grade: 'Grade 9-A', reason: 'Family', time: '08:30' },
  { name: 'Mia Chen', grade: 'Grade 10-B', reason: 'Unexcused', time: '—' },
  { name: 'Liam Costa', grade: 'Grade 8-A', reason: 'Medical', time: '09:00' },
];

const LEAVES = [
  { student: 'Aria Sharma', type: 'Sick leave', days: '2 days', status: 'Approved' },
  { student: 'Ethan Park', type: 'Family event', days: '1 day', status: 'Pending' },
  { student: 'Mia Chen', type: 'Medical', days: '3 days', status: 'Pending' },
];

export default function AttendanceDashboard() {
  return (
    <DashboardFrame
      brandGradient="from-sky-500 to-indigo-400"
      portalLabel="Attendance Cell"
      navSections={NAV}
      searchPlaceholder="Search students, attendance records…"
      profileName="Attendance Cell"
      profileInitials="AC"
      notifications={[
        { title: '4 absentees flagged', sub: 'Grade 8 · 22m ago' },
        { title: 'Daily log reconciled', sub: 'Northfield · 1h ago' },
        { title: '12 parents notified', sub: 'Auto-alert · 2h ago' },
      ]}
    >
      <DashHeader
        title="Attendance Monitoring"
        subtitle="Live capture and reconciliation across the network"
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>
            <Button size="sm"><Plus className="mr-1.5 h-4 w-4" /> Mark Attendance</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard index={0} label="Today's Attendance" value="44,820" delta="92.9%" icon={UserCheck} accent="from-sky-500 to-indigo-400" />
        <StatCard index={1} label="Absent Students" value="3,390" delta="7.1%" trend="down" icon={XCircle} accent="from-indigo-500 to-blue-400" />
        <StatCard index={2} label="Leave Requests" value="7" delta="3 pending" icon={FileText} accent="from-sky-500 to-blue-400" />
        <StatCard index={3} label="Reconciled" value="99.4%" delta="On track" icon={CheckCircle2} accent="from-blue-500 to-cyan-400" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Attendance Trends" subtitle="Monthly rate (%)" icon={TrendingUp} className="lg:col-span-2">
          <LineTrend
            data={MONTHLY}
            xKey="day"
            series={[{ key: 'rate', color: 'hsl(210 80% 50%)', name: 'Attendance Rate' }]}
            height={220}
          />
        </DashCard>

        <DashCard title="Today's Status" subtitle="Present / absent / late" icon={Clock}>
          <DonutChart data={STATUS_PIE} height={220} />
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Weekly Attendance" subtitle="Present vs absent (%)" icon={CalendarCheck} className="lg:col-span-2">
          <BarTrend
            data={WEEK}
            xKey="day"
            series={[
              { key: 'present', color: 'hsl(210 80% 50%)', name: 'Present' },
              { key: 'absent', color: 'hsl(27 87% 62%)', name: 'Absent' },
            ]}
            height={200}
          />
        </DashCard>

        <DashCard title="Leave Requests" icon={FileText}>
          <div className="space-y-3">
            {LEAVES.map((l) => (
              <div key={l.student} className="flex items-center justify-between rounded-xl border border-border bg-surface-2 p-3">
                <div>
                  <p className="text-sm font-medium">{l.student}</p>
                  <p className="text-xs text-muted-foreground">{l.type} · {l.days}</p>
                </div>
                <Badge variant={l.status === 'Approved' ? 'default' : 'secondary'} className={l.status === 'Approved' ? 'bg-chart-5/15 text-chart-5 hover:bg-chart-5/15' : 'bg-chart-4/15 text-chart-4 hover:bg-chart-4/15'}>
                  {l.status}
                </Badge>
              </div>
            ))}
          </div>
        </DashCard>
      </div>

      <div className="mt-4">
        <DashCard title="Absent Students Today" subtitle="Flagged for follow-up" icon={Users}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="pb-3 font-medium">Student</th>
                  <th className="pb-3 font-medium">Grade</th>
                  <th className="pb-3 font-medium">Reason</th>
                  <th className="pb-3 font-medium">Reported</th>
                </tr>
              </thead>
              <tbody>
                {ABSENT.map((s) => (
                  <tr key={s.name} className="border-b border-border/50 last:border-0">
                    <td className="py-3 font-medium">{s.name}</td>
                    <td className="py-3 text-muted-foreground">{s.grade}</td>
                    <td className="py-3 text-muted-foreground">{s.reason}</td>
                    <td className="py-3 text-muted-foreground">{s.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashCard>
      </div>

      <div className="mt-4">
        <EmptyBlock
          title="Module content lives here"
          description="Each sidebar item — Attendance, Leaves, Reports, Analytics — maps to an independent module page for detailed tracking."
        />
      </div>
    </DashboardFrame>
  );
}
