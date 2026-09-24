'use client';

import {
  LayoutDashboard, CalendarCheck, BookOpen, Award,
  Wallet, MessageSquare, User, Bell, Megaphone,
  Download, CheckCircle2, TrendingUp, Clock, Receipt,
} from 'lucide-react';
import { DashboardFrame, DashHeader, type NavSection } from '@/components/dashboard/frame';
import { StatCard, DashCard, ActivityRow, EmptyBlock } from '@/components/dashboard/primitives';
import { AreaTrend, BarTrend, DonutChart } from '@/components/dashboard/charts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NAV: NavSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '/parent/dashboard' },
      { label: 'Overview', icon: User, href: '#' },
      { label: 'Attendance', icon: CalendarCheck, href: '#' },
    ],
  },
  {
    label: 'Track',
    items: [
      { label: 'Homework', icon: BookOpen, href: '#', badge: '3' },
      { label: 'Results', icon: Award, href: '#' },
      { label: 'Fees', icon: Wallet, href: '#' },
      { label: 'Messages', icon: MessageSquare, href: '#' },
      { label: 'Profile', icon: User, href: '#' },
    ],
  },
];

const ATT_TREND = [
  { week: 'W1', rate: 98 }, { week: 'W2', rate: 96 },
  { week: 'W3', rate: 100 }, { week: 'W4', rate: 97 },
  { week: 'W5', rate: 99 }, { week: 'W6', rate: 98 },
];

const SUBJECT_BAR = [
  { name: 'Math', score: 88 },
  { name: 'Science', score: 92 },
  { name: 'English', score: 85 },
  { name: 'History', score: 79 },
  { name: 'Art', score: 94 },
];

const GRADE_PIE = [
  { name: 'A', value: 42, fill: 'hsl(30 80% 50%)' },
  { name: 'B', value: 31, fill: 'hsl(43 74% 56%)' },
  { name: 'C', value: 27, fill: 'hsl(173 58% 45%)' },
];

const HOMEWORK = [
  { subject: 'Mathematics', title: 'Algebra Worksheet 4', due: 'Jul 24', status: 'Pending' },
  { subject: 'Science', title: 'Lab Report — Photosynthesis', due: 'Jul 26', status: 'Pending' },
  { subject: 'English', title: 'Essay — Climate Change', due: 'Jul 28', status: 'Submitted' },
];

const ANNOUNCEMENTS = [
  { title: 'Holiday on Friday — School closed', time: '6m ago' },
  { title: 'PTM scheduled for next week', time: '30m ago' },
  { title: 'Science fair registration open', time: '2h ago' },
];

const MESSAGES = [
  { from: 'Ms. Tan (Math)', preview: 'Aria is doing excellent work in algebra…', time: '1h ago' },
  { from: 'School Office', preview: 'Term 2 fee receipt has been issued…', time: '1d ago' },
];

export default function ParentDashboard() {
  return (
    <DashboardFrame
      brandGradient="from-orange-500 to-amber-400"
      portalLabel="Parent Portal"
      navSections={NAV}
      searchPlaceholder="Search announcements, messages…"
      profileName="Parent"
      profileInitials="PA"
      notifications={[
        { title: 'Science fair notice posted', sub: 'School · 10m ago' },
        { title: 'Aria’s Math test graded: A−', sub: 'Ms. Tan · 2h ago' },
        { title: 'Term 2 fee receipt issued', sub: 'Accounts · 1d ago' },
      ]}
    >
      <DashHeader
        title="Parent Portal"
        subtitle="Aria’s progress at Northfield Academy · Grade 6-B"
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Download Report</Button>
            <Button size="sm"><MessageSquare className="mr-1.5 h-4 w-4" /> Message Teacher</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard index={0} label="Child Attendance" value="97.8%" delta="Excellent" icon={CalendarCheck} accent="from-orange-500 to-amber-400" />
        <StatCard index={1} label="Homework" value="3" delta="2 pending" trend="down" icon={BookOpen} accent="from-amber-500 to-orange-400" />
        <StatCard index={2} label="Current Grade" value="A−" delta="Stable" icon={Award} accent="from-orange-500 to-yellow-400" />
        <StatCard index={3} label="Fee Status" value="Paid" delta="Term 2" icon={Receipt} accent="from-amber-500 to-orange-400" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Child Attendance" subtitle="Weekly rate (%)" icon={CalendarCheck} className="lg:col-span-2">
          <AreaTrend
            data={ATT_TREND}
            xKey="week"
            series={[{ key: 'rate', color: 'hsl(30 80% 50%)', name: 'Attendance' }]}
            height={220}
          />
        </DashCard>

        <DashCard title="Grade Breakdown" subtitle="By grade band" icon={Award}>
          <DonutChart data={GRADE_PIE} height={220} />
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Examination Results" subtitle="Latest subject scores" icon={TrendingUp} className="lg:col-span-2">
          <BarTrend
            data={SUBJECT_BAR}
            xKey="name"
            series={[{ key: 'score', color: 'hsl(30 80% 50%)', maxBarSize: 36 }]}
            height={200}
          />
        </DashCard>

        <DashCard title="Homework" subtitle="Upcoming & submitted" icon={BookOpen}>
          <div className="space-y-3">
            {HOMEWORK.map((h) => (
              <div key={h.title} className="rounded-xl border border-border bg-surface-2 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{h.subject}</p>
                  <Badge variant={h.status === 'Submitted' ? 'default' : 'secondary'} className={h.status === 'Submitted' ? 'bg-chart-5/15 text-chart-5 hover:bg-chart-5/15' : 'bg-chart-4/15 text-chart-4 hover:bg-chart-4/15'}>
                    {h.status}
                  </Badge>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{h.title} · Due {h.due}</p>
              </div>
            ))}
          </div>
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="School Announcements" icon={Megaphone}>
          <div className="divide-y divide-border/50">
            {ANNOUNCEMENTS.map((a) => (
              <div key={a.title} className="flex items-start gap-2.5 py-3">
                <Bell className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <div>
                  <p className="text-sm font-medium">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </DashCard>

        <DashCard title="Messages" icon={MessageSquare}>
          <div className="divide-y divide-border/50">
            {MESSAGES.map((m) => (
              <div key={m.from} className="py-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{m.from}</p>
                  <span className="text-xs text-muted-foreground">{m.time}</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{m.preview}</p>
              </div>
            ))}
          </div>
        </DashCard>

        <DashCard title="Fee Status" subtitle="Term 2 — Paid" icon={Receipt}>
          <div className="space-y-3">
            <div className="rounded-xl border border-border bg-surface-2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Term 2 Tuition</span>
                <Badge className="bg-chart-5/15 text-chart-5 hover:bg-chart-5/15">Paid</Badge>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">$1,240 · Jul 15</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Transport (Term 2)</span>
                <Badge className="bg-chart-5/15 text-chart-5 hover:bg-chart-5/15">Paid</Badge>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">$320 · Jul 15</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-dashed border-border p-3 text-xs text-muted-foreground">
              <Clock className="h-4 w-4" /> Term 3 invoice issued Aug 15
            </div>
          </div>
        </DashCard>
      </div>

      <div className="mt-4">
        <EmptyBlock
          title="Module content lives here"
          description="Each sidebar item — Overview, Attendance, Homework, Results, Fees, Messages, Profile — maps to an independent module page."
        />
      </div>
    </DashboardFrame>
  );
}
