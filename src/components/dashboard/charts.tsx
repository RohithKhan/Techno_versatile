'use client';

import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { cn } from '@/lib/utils';

const tooltipStyle = {
  borderRadius: '0.75rem',
  border: '1px solid hsl(var(--border))',
  background: 'hsl(var(--popover))',
  color: 'hsl(var(--popover-foreground))',
  fontSize: '12px',
  boxShadow: '0 8px 24px hsl(222 22% 11% / 0.08)',
};

export function AreaTrend({
  data,
  xKey,
  series,
  height = 240,
  className,
}: {
  data: Record<string, number | string>[];
  xKey: string;
  series: { key: string; color: string; name?: string }[];
  height?: number;
  className?: string;
}) {
  return (
    <div className={cn('h-64', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
          <defs>
            {series.map((s) => (
              <linearGradient key={s.key} id={`g-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={s.color} stopOpacity={0.35} />
                <stop offset="95%" stopColor={s.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          {series.length > 1 && <Legend iconType="circle" wrapperStyle={{ fontSize: 11 }} />}
          {series.map((s) => (
            <Area key={s.key} type="monotone" dataKey={s.key} name={s.name ?? s.key} stroke={s.color} strokeWidth={2} fill={`url(#g-${s.key})`} />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BarTrend({
  data,
  xKey,
  series,
  height = 240,
  layout = 'horizontal',
  className,
}: {
  data: Record<string, number | string>[];
  xKey: string;
  series: { key: string; color: string; name?: string; maxBarSize?: number }[];
  height?: number;
  layout?: 'horizontal' | 'vertical';
  className?: string;
}) {
  return (
    <div className={cn('h-56', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout={layout} margin={{ top: 8, right: 8, bottom: 0, left: layout === 'vertical' ? 24 : -20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={layout === 'vertical'} horizontal={layout !== 'vertical'} />
          {layout === 'horizontal' ? (
            <>
              <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
            </>
          ) : (
            <>
              <XAxis type="number" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey={xKey} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} width={80} />
            </>
          )}
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'hsl(var(--accent))' }} />
          {series.length > 1 && <Legend iconType="circle" wrapperStyle={{ fontSize: 11 }} />}
          {series.map((s) => (
            <Bar key={s.key} dataKey={s.key} name={s.name ?? s.key} fill={s.color} radius={layout === 'horizontal' ? [6, 6, 0, 0] : [0, 6, 6, 0]} maxBarSize={s.maxBarSize ?? 28} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DonutChart({
  data,
  height = 208,
  className,
}: {
  data: { name: string; value: number; fill: string }[];
  height?: number;
  className?: string;
}) {
  return (
    <div className={cn('h-52', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} stroke="hsl(var(--card))" strokeWidth={2} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: 11 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function LineTrend({
  data,
  xKey,
  series,
  height = 240,
  className,
}: {
  data: Record<string, number | string>[];
  xKey: string;
  series: { key: string; color: string; name?: string }[];
  height?: number;
  className?: string;
}) {
  return (
    <div className={cn('h-64', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          {series.length > 1 && <Legend iconType="circle" wrapperStyle={{ fontSize: 11 }} />}
          {series.map((s) => (
            <Line key={s.key} type="monotone" dataKey={s.key} name={s.name ?? s.key} stroke={s.color} strokeWidth={2} dot={{ r: 3 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RadarTrend({
  data,
  xKey,
  series,
  height = 240,
  className,
}: {
  data: Record<string, number | string>[];
  xKey: string;
  series: { key: string; color: string; name?: string }[];
  height?: number;
  className?: string;
}) {
  return (
    <div className={cn('h-60', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius={88}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey={xKey} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          {series.map((s) => (
            <Radar key={s.key} name={s.name ?? s.key} dataKey={s.key} stroke={s.color} fill={s.color} fillOpacity={0.2} strokeWidth={2} />
          ))}
          <Legend iconType="circle" wrapperStyle={{ fontSize: 11 }} />
          <Tooltip contentStyle={tooltipStyle} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
