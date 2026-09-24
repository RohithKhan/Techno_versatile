'use client';

import {
  LayoutDashboard, Megaphone, FileText, Bell, BarChart3,
  Plus, Download, Send, Users, Clock, CheckCircle2,
  type LucideIcon,
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
      { label: 'Dashboard', icon: LayoutDashboard, href: '/notice-management/dashboard' },
      { label: 'Create Notice', icon: Plus, href: '#' },
      { label: 'All Notices', icon: FileText, href: '#', badge: '1.2k' },
    ],
  },
  {
    label: 'Manage',
    items: [
      { label: 'Announcements', icon: Megaphone, href: '#' },
      { label: 'Templates', icon: FileText, href: '#' },
      { label: 'Reports', icon: BarChart3, href: '#' },
    ],
  },
];

const PUBLISH_TREND = [
  { month: 'Jan', notices: 82 }, { month: 'Feb', notices: 95 },
  { month: 'Mar', notices: 88 }, { month: 'Apr', notices: 110 },
  { month: 'May', notices: 124 }, { month: 'Jun', notices: 132 },
  { month: 'Jul', notices: 142 },
];

const AUDIENCE_PIE = [
  { name: 'All', value: 38, fill: 'hsl(270 70% 55%)' },
  { name: 'Parents', value: 28, fill: 'hsl(290 70% 60%)' },
  { name: 'Staff', value: 20, fill: 'hsl(43 74% 56%)' },
  { name: 'Students', value: 14, fill: 'hsl(173 58% 45%)' },
];

const DELIVERY = [
  { name: 'Mon', delivered: 42, failed: 1 },
  { name: 'Tue', delivered: 48, failed: 0 },
  { name: 'Wed', delivered: 38, failed: 2 },
  { name: 'Thu', delivered: 52, failed: 1 },
  { name: 'Fri', delivered: 46, failed: 0 },
  { name: 'Sat', delivered: 28, failed: 1 },
];

const RECENT = [
  { title: 'Holiday on Friday — School closed', audience: 'All', status: 'Published', time: '6m ago' },
  { title: 'PTM scheduled for next week', audience: 'Parents', status: 'Scheduled', time: '30m ago' },
  { title: 'Fee submission deadline extended', audience: 'Parents', status: 'Published', time: '2h ago' },
  { title: 'Annual day invitation', audience: 'All', status: 'Published', time: '1d ago' },
];

const SCHEDULED = [
  { title: 'Science fair announcement', audience: 'Students', when: 'Tomorrow 09:00' },
  { title: 'Staff meeting reminder', audience: 'Staff', when: 'Jul 24 14:00' },
];

export default function NoticeManagementDashboard() {
  return (
    <DashboardFrame
      brandGradient="from-violet-500 to-fuchsia-400"
      portalLabel="Notice Management"
      navSections={NAV}
      searchPlaceholder="Search notices, announcements…"
      profileName="Notice Management"
      profileInitials="NM"
      notifications={[
        { title: 'Holiday circular published', sub: 'To all · 6m ago' },
        { title: 'PTM notice pending approval', sub: 'HR · 30m ago' },
        { title: '1,284 notices delivered', sub: '99.6% rate · 1h ago' },
      ]}
    >
      <DashHeader
        title="Communication Center"
        subtitle="Broadcasts, audiences and delivery health"
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>
            <Button size="sm"><Plus className="mr-1.5 h-4 w-4" /> Create Notice</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard index={0} label="Active Notices" value="42" delta="+8 today" icon={Megaphone} accent="from-violet-500 to-fuchsia-400" />
        <StatCard index={1} label="Scheduled Notices" value="7" delta="3 this week" icon={Clock} accent="from-fuchsia-500 to-purple-400" />
        <StatCard index={2} label="Recent Announcements" value="1,284" delta="+42" icon={Bell} accent="from-violet-500 to-indigo-400" />
        <StatCard index={3} label="Delivery Rate" value="99.6%" delta="Healthy" icon={CheckCircle2} accent="from-purple-500 to-violet-400" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Circular Statistics" subtitle="Notices published per month" icon={BarChart3} className="lg:col-span-2">
          <AreaTrend
            data={PUBLISH_TREND}
            xKey="month"
            series={[{ key: 'notices', color: 'hsl(270 70% 55%)', name: 'Notices' }]}
            height={220}
          />
        </DashCard>

        <DashCard title="Audience Breakdown" subtitle="By recipient group" icon={Users}>
          <DonutChart data={AUDIENCE_PIE} height={220} />
        </DashCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Delivery Health" subtitle="Delivered vs failed this week" icon={Send} className="lg:col-span-2">
          <BarTrend
            data={DELIVERY}
            xKey="name"
            series={[
              { key: 'delivered', color: 'hsl(270 70% 55%)', name: 'Delivered' },
              { key: 'failed', color: 'hsl(27 87% 62%)', name: 'Failed' },
            ]}
            height={200}
          />
        </DashCard>

        <DashCard title="Scheduled Notices" icon={Clock}>
          <div className="space-y-3">
            {SCHEDULED.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-surface-2 p-3">
                <p className="text-sm font-medium">{s.title}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">To: {s.audience}</span>
                  <Badge variant="secondary" className="bg-violet-500/10 text-violet-600 hover:bg-violet-500/10">{s.when}</Badge>
                </div>
              </div>
            ))}
          </div>
        </DashCard>
      </div>

      <div className="mt-4">
        <DashCard title="Recent Announcements" subtitle="Latest published and scheduled" icon={Megaphone}>
          <div className="divide-y divide-border/50">
            {RECENT.map((n) => (
              <div key={n.title} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{n.title}</p>
                  <p className="text-xs text-muted-foreground">To: {n.audience} · {n.time}</p>
                </div>
                <Badge variant={n.status === 'Published' ? 'default' : 'secondary'} className={n.status === 'Published' ? 'bg-chart-5/15 text-chart-5 hover:bg-chart-5/15' : 'bg-violet-500/10 text-violet-600 hover:bg-violet-500/10'}>
                  {n.status}
                </Badge>
              </div>
            ))}
          </div>
        </DashCard>
      </div>

      <div className="mt-4">
        <EmptyBlock
          title="Module content lives here"
          description="Each sidebar item — Create Notice, All Notices, Announcements, Templates, Reports — maps to an independent module page."
        />
      </div>
    </DashboardFrame>
  );
}
