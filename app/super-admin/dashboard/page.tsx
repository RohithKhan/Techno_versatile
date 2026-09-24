'use client';

import {
  LayoutDashboard, School, CreditCard, Users, BarChart3,
  Activity, Settings, ShieldCheck, Globe, Server, Database,
  TrendingUp, Plus, Download, Filter, Building2, Zap,
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
      { label: 'Dashboard', icon: LayoutDashboard, href: '/super-admin/dashboard' },
      { label: 'Schools', icon: School, href: '#', badge: '24' },
      { label: 'Subscriptions', icon: CreditCard, href: '#' },
    ],
  },
  {
    label: 'Administration',
    items: [
      { label: 'Platform Users', icon: Users, href: '#' },
      { label: 'Reports', icon: BarChart3, href: '#' },
      { label: 'System Monitoring', icon: Activity, href: '#' },
      { label: 'Settings', icon: Settings, href: '#' },
    ],
  },
];

const ENROLLMENT = [
  { month: 'Jan', students: 42000, revenue: 142 },
  { month: 'Feb', students: 42800, revenue: 148 },
  { month: 'Mar', students: 43500, revenue: 152 },
  { month: 'Apr', students: 44100, revenue: 158 },
  { month: 'May', students: 44900, revenue: 164 },
  { month: 'Jun', students: 45600, revenue: 169 },
  { month: 'Jul', students: 46400, revenue: 175 },
  { month: 'Aug', students: 47200, revenue: 181 },
  { month: 'Sep', students: 48210, revenue: 186 },
];

const SUBSCRIPTIONS = [
  { name: 'Enterprise', value: 8, fill: 'hsl(217 76% 45%)' },
  { name: 'Professional', value: 12, fill: 'hsl(173 58% 40%)' },
  { name: 'Starter', value: 4, fill: 'hsl(43 74% 56%)' },
];

const RECENT_SCHOOLS = [
  { name: 'Lakeside International', plan: 'Enterprise', status: 'Active', date: '2 days ago' },
  { name: 'Greenwood Academy', plan: 'Professional', status: 'Active', date: '1 week ago' },
  { name: 'Hilltop Public School', plan: 'Starter', status: 'Trial', date: '2 weeks ago' },
  { name: 'St. Aurora Convent', plan: 'Enterprise', status: 'Active', date: '3 weeks ago' },
];

const ACTIVITY = [
  { actor: 'System', action: 'provisioned', target: 'Lakeside International', time: '2m ago', tone: 'bg-chart-5' },
  { actor: 'A. Mehta', action: 'updated billing for', target: 'Northfield Academy', time: '18m ago', tone: 'bg-chart-1' },
  { actor: 'System', action: 'flagged high latency on', target: 'Hilltop node', time: '1h ago', tone: 'bg-chart-4' },
  { actor: 'J. Costa', action: 'rotated API keys for', target: 'Riverside cluster', time: '3h ago', tone: 'bg-muted-foreground' },
];

export default function SuperAdminDashboard() {
  return (
    <DashboardFrame
      brandGradient="from-blue-500 to-cyan-400"
      portalLabel="Super Admin"
      navSections={NAV}
      searchPlaceholder="Search schools, subscriptions, users…"
      profileName="Super Admin"
      profileInitials="SA"
      notifications={[
        { title: 'New school provisioned', sub: 'Lakeside International · 2m ago' },
        { title: 'Billing updated', sub: 'Northfield Academy · 18m ago' },
        { title: 'High latency flagged', sub: 'Hilltop node · 1h ago' },
      ]}
    >
      <DashHeader
        title="Platform Administration"
        subtitle="Network-wide oversight across 24 institutions"
        actions={
          <>
            <Button variant="outline" size="sm"><Filter className="mr-1.5 h-4 w-4" /> Filter</Button>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>
            <Button size="sm"><Plus className="mr-1.5 h-4 w-4" /> Add School</Button>
          </>
        }
      />

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard index={0} label="Total Schools" value="24" delta="+2 this quarter" icon={School} accent="from-blue-500 to-cyan-400" />
        <StatCard index={1} label="Active Schools" value="22" delta="91.7% active" icon={Building2} accent="from-cyan-500 to-blue-400" />
        <StatCard index={2} label="Platform Users" value="48,210" delta="+4.8%" icon={Users} accent="from-blue-500 to-indigo-400" />
        <StatCard index={3} label="Monthly Revenue" value="$186K" delta="+12.3%" icon={CreditCard} accent="from-sky-500 to-blue-400" />
      </div>

      {/* System health strip */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <DashCard title="System Health" subtitle="All systems operational" icon={ShieldCheck}>
          <div className="space-y-3">
            {[
              { label: 'API Gateway', value: '99.99%', tone: 'bg-chart-5' },
              { label: 'Database Cluster', value: '99.97%', tone: 'bg-chart-5' },
              { label: 'Edge Functions', value: '99.98%', tone: 'bg-chart-5' },
            ].map((m) => (
              <div key={m.label} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm">
                  <span className={`h-2 w-2 rounded-full ${m.tone}`} /> {m.label}
                </span>
                <span className="text-sm font-semibold tabular-nums">{m.value}</span>
              </div>
            ))}
          </div>
        </DashCard>

        <DashCard title="Platform Analytics" subtitle="Enrollment & revenue trend" icon={TrendingUp}>
          <AreaTrend
            data={ENROLLMENT}
            xKey="month"
            series={[
              { key: 'students', color: 'hsl(217 76% 45%)', name: 'Students' },
              { key: 'revenue', color: 'hsl(173 58% 40%)', name: 'Revenue ($K)' },
            ]}
            height={180}
          />
        </DashCard>

        <DashCard title="Subscription Overview" subtitle="Plan distribution" icon={CreditCard}>
          <DonutChart data={SUBSCRIPTIONS} height={180} />
        </DashCard>
      </div>

      {/* Recent schools + activity */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Recent Schools" subtitle="Recently onboarded institutions" icon={School} className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="pb-3 font-medium">School</th>
                  <th className="pb-3 font-medium">Plan</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Onboarded</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_SCHOOLS.map((s) => (
                  <tr key={s.name} className="border-b border-border/50 last:border-0">
                    <td className="py-3 font-medium">{s.name}</td>
                    <td className="py-3 text-muted-foreground">{s.plan}</td>
                    <td className="py-3">
                      <Badge variant={s.status === 'Active' ? 'default' : 'secondary'} className={s.status === 'Active' ? 'bg-chart-5/15 text-chart-5 hover:bg-chart-5/15' : ''}>
                        {s.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-right text-muted-foreground">{s.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashCard>

        <DashCard title="Recent Activity" icon={Activity}>
          <div className="divide-y divide-border/50">
            {ACTIVITY.map((a) => (
              <ActivityRow key={a.target} {...a} />
            ))}
          </div>
        </DashCard>
      </div>

      {/* Infrastructure + empty module */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DashCard title="Infrastructure" subtitle="Global resource utilization" icon={Server}>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'CPU', value: '42%', icon: Zap },
              { label: 'Memory', value: '61%', icon: Database },
              { label: 'Storage', value: '38%', icon: Server },
              { label: 'Network', value: '27%', icon: Globe },
            ].map((r) => (
              <div key={r.label} className="rounded-xl border border-border bg-surface-2 p-3">
                <r.icon className="h-4 w-4 text-blue-500" />
                <p className="mt-2 font-display text-lg font-semibold">{r.value}</p>
                <p className="text-xs text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>
        </DashCard>

        <EmptyBlock
          className="lg:col-span-2"
          title="Module content lives here"
          description="Each sidebar item maps to an independent module page — schools, subscriptions, platform users, reports and system monitoring."
        />
      </div>
    </DashboardFrame>
  );
}
