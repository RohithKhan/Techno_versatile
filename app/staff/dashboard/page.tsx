'use client';

import {
  LayoutDashboard, BookOpen, CalendarCheck, ClipboardList,
  GraduationCap, User, Plus, Download, Clock,
  Award, MessageSquare, FileText, TrendingUp,
} from 'lucide-react';
import { DashboardFrame, DashHeader, type NavSection } from '@/components/dashboard/frame';
import { StatCard, DashCard, ActivityRow, EmptyBlock } from '@/components/dashboard/primitives';
import { BarTrend, LineTrend, DonutChart } from '@/components/dashboard/charts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NAV: NavSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '/staff/dashboard' },
      { label: 'My Classes', icon: BookOpen, href: '#', badge: '6' },
      { label: 'Attendance', icon: CalendarCheck, href: '#' },
    ],
  },
  {
    label: 'Teaching',
    items: [
      { label: 'Assignments', icon: ClipboardList, href: '#', badge: '24' },
      { label: 'Students', icon: GraduationCap, href: '#' },
      { label: 'Profile', icon: User, href: '#' },
    ],
  },
];

const TODAY = [
  { time: '08:30', title: 'Morning Assembly', room: 'Main Hall', tone: 'bg-teal-500/10 text-teal-600' },
  { time: '09:15', title: 'Mathematics — Grade 10-B', room: 'Room 204', tone: 'bg-cyan-500/10 text-cyan-600' },
  { time: '11:00', title: 'Faculty sync', room: 'Conference A', tone: 'bg-teal-500/10 text-teal-600' },
  { time: '13:00', title: 'Physics Lab — Grade 9-A', room: 'Lab 3', tone: 'bg-emerald-500/10 text-emerald-600' },
  { time: '15:30', title: 'Parent call — Aria', room: 'Online', tone: 'bg-cyan-500/10 text-cyan-600' },
];

const WEEK_ATT = [
  { day: 'Mon', present: 94 }, { day: 'Tue', present: 96 },
  { day: 'Wed', present: 92 }, { day: 'Thu', present: 97 },
  { day: 'Fri', present: 95 }, { day: 'Sat', present: 88 },
];

const SCORE_TREND = [
  { month: 'Feb', score: 78 }, { month: 'Mar', score: 80 },
  { month: 'Apr', score: 79 }, { month: 'May', score: 82 },
  { month: 'Jun', score: 84 }, { month: 'Jul', score: 83 },
];

const CLASS_PIE = [
  { name: 'Grade 9-A', value: 32, fill: 'hsl(175 65% 40%)' },
  { name: 'Grade 10-B', value: 28, fill: 'hsl(190 80% 45%)' },
  { name: 'Grade 9-B', value: 24, fill: 'hsl(43 74% 56%)' },
  { name: 'Grade 8-A', value: 16, fill: 'hsl(173 58% 50%)' },
];

const ASSIGNMENTS = [
  { title: 'Algebra Worksheet 4', class: 'Grade 10-B', due: 'Jul 24', status: 'Pending' },
  { title: 'Physics Lab Report', class: 'Grade 9-A', due: 'Jul 25', status: 'Pending' },
  { title: 'Geometry Quiz', class: 'Grade 9-B', due: 'Jul 26', status: 'Graded' },
  { title: 'Trigonometry Test', class: 'Grade 10-B', due: 'Jul 28', status: 'Pending' },
];

export default function StaffDashboard() {
  return (
    <DashboardFrame
      brandGradient="from-teal-500 to-cyan-400"
      portalLabel="Staff / Teacher"
      navSections={NAV}
      searchPlaceholder="Search classes, students, assignments…"
      profileName="Ms. Tan"
      profileInitials="MT"
      notifications={[
        { title: '24 grades due Friday', sub: 'Reminder · 1h ago' },
        { title: 'Parent messaged about project', sub: 'Aria’s parent · 3h ago' },
        { title: 'Resource request approved', sub: 'Library · 5h ago' },
      ]}
    >
      <DashHeader
        title="Teacher Workspace"
        subtitle="Your classes, grading and communications"
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>
            <Button size="sm"><Plus className="mr-1.5 h-4 w-4" /> New Assignment</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard index={0} label="Today's Classes" value="5" delta="3 remaining" icon={BookOpen} accent="from-teal-500 to-cyan-400" />
        <StatCard index={1} label="Attendance" value="96.2%" delta="+1.1%" icon={CalendarCheck} accent="from-cyan-500 to-teal-400" />
        <StatCard index={2} label="Assignments" value="24" delta="Due Friday" trend="down" icon={ClipboardList} accent="from-teal-500 to-emerald-400" />
        <StatCard index={3} label="Avg Class Score" value="82.6%" delta="+3.1%" icon={Award} accent="from-emerald-500 to-cyan-400" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Today's Schedule" subtitle="5 events" icon={Clock} className="lg:col-span-2">
          <div className="space-y-3">
            {TODAY.map((s) => (
              <div key={s.time} className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 p-3 transition-colors hover:bg-accent">
                <span className="w-12 shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">{s.time}</span>
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${s.tone}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.room}</p>
                </div>
              </div>
            ))}
          </div>
        </DashCard>

        <DashCard title="My Classes" subtitle="Student distribution" icon={BookOpen}>
          <DonutChart data={CLASS_PIE} height={220} />
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Weekly Attendance" subtitle="Present rate by day (%)" icon={CalendarCheck} className="lg:col-span-2">
          <BarTrend
            data={WEEK_ATT}
            xKey="day"
            series={[{ key: 'present', color: 'hsl(175 65% 40%)', maxBarSize: 36 }]}
            height={200}
          />
        </DashCard>

        <DashCard title="Performance Trend" subtitle="Avg class score over time" icon={TrendingUp}>
          <LineTrend
            data={SCORE_TREND}
            xKey="month"
            series={[{ key: 'score', color: 'hsl(175 65% 40%)', name: 'Avg Score' }]}
            height={200}
          />
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Assignments" subtitle="Grading status" icon={ClipboardList} className="lg:col-span-2">
          <div className="divide-y divide-border/50">
            {ASSIGNMENTS.map((a) => (
              <div key={a.title} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.class} · Due {a.due}</p>
                </div>
                <Badge variant={a.status === 'Graded' ? 'default' : 'secondary'} className={a.status === 'Graded' ? 'bg-chart-5/15 text-chart-5 hover:bg-chart-5/15' : 'bg-chart-4/15 text-chart-4 hover:bg-chart-4/15'}>
                  {a.status}
                </Badge>
              </div>
            ))}
          </div>
        </DashCard>

        <DashCard title="Recent Activities" icon={MessageSquare}>
          <div className="divide-y divide-border/50">
            <ActivityRow actor="You" action="marked" target="Grade 9-A attendance" time="4m ago" tone="bg-chart-5" />
            <ActivityRow actor="System" action="reminded" target="24 grades due Friday" time="1h ago" tone="bg-chart-4" />
            <ActivityRow actor="Parent" action="messaged about" target="Project deadline" time="3h ago" tone="bg-chart-1" />
            <ActivityRow actor="Library" action="approved" target="Your resource request" time="5h ago" tone="bg-muted-foreground" />
          </div>
        </DashCard>
      </div>

      <div className="mt-4">
        <EmptyBlock
          title="Module content lives here"
          description="Each sidebar item — My Classes, Attendance, Assignments, Students, Profile — maps to an independent module page."
        />
      </div>
    </DashboardFrame>
  );
}
