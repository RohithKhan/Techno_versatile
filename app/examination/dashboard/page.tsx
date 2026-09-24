'use client';

import {
  LayoutDashboard, FileCheck2, ClipboardList, Award,
  BarChart3, CalendarDays, FileText, Plus, Download,
  TrendingUp, Clock, CheckCircle2, AlertCircle,
} from 'lucide-react';
import { DashboardFrame, DashHeader, type NavSection } from '@/components/dashboard/frame';
import { StatCard, DashCard, ActivityRow, EmptyBlock } from '@/components/dashboard/primitives';
import { BarTrend, DonutChart, LineTrend } from '@/components/dashboard/charts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NAV: NavSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '/examination/dashboard' },
      { label: 'Examinations', icon: FileCheck2, href: '#', badge: '36' },
      { label: 'Marks', icon: ClipboardList, href: '#' },
    ],
  },
  {
    label: 'Results',
    items: [
      { label: 'Grades', icon: Award, href: '#' },
      { label: 'Results', icon: FileText, href: '#' },
      { label: 'Reports', icon: BarChart3, href: '#' },
    ],
  },
];

const UPCOMING = [
  { name: 'Physics Mid-term', grade: 'Grade 10', date: 'Jul 24', time: '09:00', room: 'Hall A' },
  { name: 'Mathematics Unit 3', grade: 'Grade 9', date: 'Jul 25', time: '11:00', room: 'Hall B' },
  { name: 'Chemistry Practical', grade: 'Grade 12', date: 'Jul 26', time: '14:00', room: 'Lab 2' },
  { name: 'English Literature', grade: 'Grade 11', date: 'Jul 27', time: '09:30', room: 'Hall A' },
];

const GRADE_PIE = [
  { name: 'A+', value: 18, fill: 'hsl(340 75% 50%)' },
  { name: 'A', value: 26, fill: 'hsl(340 60% 60%)' },
  { name: 'B', value: 30, fill: 'hsl(27 87% 62%)' },
  { name: 'C', value: 16, fill: 'hsl(43 74% 56%)' },
  { name: 'D', value: 10, fill: 'hsl(173 58% 45%)' },
];

const TREND = [
  { month: 'Jan', avg: 78 }, { month: 'Feb', avg: 80 }, { month: 'Mar', avg: 82 },
  { month: 'Apr', avg: 81 }, { month: 'May', avg: 84 }, { month: 'Jun', avg: 86 },
  { month: 'Jul', avg: 87 },
];

const SUBJECT = [
  { name: 'Physics', score: 82 },
  { name: 'Math', score: 88 },
  { name: 'Chemistry', score: 79 },
  { name: 'Biology', score: 85 },
  { name: 'English', score: 91 },
];

export default function ExaminationDashboard() {
  return (
    <DashboardFrame
      brandGradient="from-rose-500 to-pink-400"
      portalLabel="Examination Cell"
      navSections={NAV}
      searchPlaceholder="Search exams, results, grades…"
      profileName="Examination Cell"
      profileInitials="EX"
      notifications={[
        { title: 'Physics results published', sub: 'Grade 10 · 8m ago' },
        { title: '36 exams scheduled', sub: 'This week · 45m ago' },
        { title: '2 answer sheet anomalies', sub: 'Integrity · 2h ago' },
      ]}
    >
      <DashHeader
        title="Examination Management"
        subtitle="Schedules, results and integrity monitoring"
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>
            <Button size="sm"><Plus className="mr-1.5 h-4 w-4" /> Schedule Exam</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard index={0} label="Upcoming Exams" value="36" delta="This week" icon={FileCheck2} accent="from-rose-500 to-pink-400" />
        <StatCard index={1} label="Marks Pending" value="1,840" delta="-320" icon={ClipboardList} accent="from-pink-500 to-rose-400" />
        <StatCard index={2} label="Results Published" value="12,480" delta="+2.1K" icon={CheckCircle2} accent="from-rose-500 to-red-400" />
        <StatCard index={3} label="Integrity Alerts" value="3" delta="Reviewed" trend="down" icon={AlertCircle} accent="from-pink-500 to-orange-400" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Exam Schedule" subtitle="Upcoming examinations" icon={CalendarDays} className="lg:col-span-2">
          <div className="space-y-3">
            {UPCOMING.map((e) => (
              <div key={e.name} className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 p-3 transition-colors hover:bg-accent">
                <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
                  <span className="text-[10px] font-medium">{e.date.split(' ')[1]}</span>
                  <span className="text-[9px] uppercase">{e.date.split(' ')[0]}</span>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{e.name}</p>
                  <p className="text-xs text-muted-foreground">{e.grade} · {e.room} · {e.time}</p>
                </div>
                <Badge variant="secondary" className="bg-rose-500/10 text-rose-600 hover:bg-rose-500/10">Scheduled</Badge>
              </div>
            ))}
          </div>
        </DashCard>

        <DashCard title="Grade Analytics" subtitle="Distribution across exams" icon={Award}>
          <DonutChart data={GRADE_PIE} height={220} />
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Score Trends" subtitle="Avg score over time (%)" icon={TrendingUp} className="lg:col-span-2">
          <LineTrend
            data={TREND}
            xKey="month"
            series={[{ key: 'avg', color: 'hsl(340 75% 50%)', name: 'Average Score' }]}
            height={200}
          />
        </DashCard>

        <DashCard title="Subject Performance" subtitle="Avg score by subject" icon={BarChart3}>
          <BarTrend
            data={SUBJECT}
            xKey="name"
            series={[{ key: 'score', color: 'hsl(340 75% 50%)', maxBarSize: 32 }]}
            height={200}
          />
        </DashCard>
      </div>

      <div className="mt-4">
        <DashCard title="Recent Activity" icon={Clock}>
          <div className="divide-y divide-border/50">
            <ActivityRow actor="Dr. Reyes" action="published" target="Physics mid-term results" time="8m ago" tone="bg-chart-5" />
            <ActivityRow actor="System" action="scheduled" target="36 exams for this week" time="45m ago" tone="bg-chart-1" />
            <ActivityRow actor="Integrity" action="flagged" target="2 answer sheet anomalies" time="2h ago" tone="bg-chart-4" />
            <ActivityRow actor="Ms. Tan" action="completed grading for" target="Mathematics Paper 2" time="5h ago" tone="bg-muted-foreground" />
          </div>
        </DashCard>
      </div>

      <div className="mt-4">
        <EmptyBlock
          title="Module content lives here"
          description="Each sidebar item — Examinations, Marks, Grades, Results, Reports — maps to an independent module page."
        />
      </div>
    </DashboardFrame>
  );
}
