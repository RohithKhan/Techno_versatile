'use client';

import { cn } from '@/lib/utils';

interface BlobProps {
  className?: string;
  color?: string;
  delay?: number;
}

/** Soft animated gradient blob for backgrounds. */
export function GradientBlob({
  className,
  color = 'bg-primary/20',
  delay = 0,
}: BlobProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-full blur-3xl opacity-60 animate-blob',
        color,
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

/** Subtle architectural blueprint grid. */
export function BlueprintGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 grid-pattern opacity-[0.35]',
        className
      )}
    />
  );
}

/** Floating thin-line architectural SVG illustration. */
export function LineArtCampus({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('pointer-events-none', className)}
      aria-hidden
    >
      <g
        stroke="hsl(var(--line-art))"
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* central rotunda */}
        <circle cx="300" cy="300" r="70" />
        <circle cx="300" cy="300" r="92" opacity="0.5" />
        <circle cx="300" cy="300" r="120" opacity="0.25" />
        <line x1="300" y1="180" x2="300" y2="420" opacity="0.4" />
        <line x1="180" y1="300" x2="420" y2="300" opacity="0.4" />
        {/* columns */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = 250 + i * 20;
          return (
            <g key={i} opacity="0.7">
              <line x1={x} y1="250" x2={x} y2="350" />
              <circle cx={x} cy="248" r="3" />
            </g>
          );
        })}
        {/* flanking buildings */}
        <rect x="80" y="220" width="120" height="160" rx="4" />
        <line x1="80" y1="260" x2="200" y2="260" />
        <line x1="80" y1="300" x2="200" y2="300" />
        <line x1="80" y1="340" x2="200" y2="340" />
        <line x1="120" y1="220" x2="120" y2="380" opacity="0.4" />
        <line x1="160" y1="220" x2="160" y2="380" opacity="0.4" />
        <rect x="400" y="220" width="120" height="160" rx="4" />
        <line x1="400" y1="260" x2="520" y2="260" />
        <line x1="400" y1="300" x2="520" y2="300" />
        <line x1="400" y1="340" x2="520" y2="340" />
        <line x1="440" y1="220" x2="440" y2="380" opacity="0.4" />
        <line x1="480" y1="220" x2="480" y2="380" opacity="0.4" />
        {/* arches */}
        <path d="M270 380 Q300 350 330 380" />
        {/* ground line */}
        <line x1="40" y1="420" x2="560" y2="420" opacity="0.3" />
        {/* radial ticks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = 300 + Math.cos(a) * 120;
          const y1 = 300 + Math.sin(a) * 120;
          const x2 = 300 + Math.cos(a) * 130;
          const y2 = 300 + Math.sin(a) * 130;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.3" />;
        })}
      </g>
    </svg>
  );
}

/** Abstract concentric arcs — organic curves. */
export function LineArtArcs({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('pointer-events-none', className)}
      aria-hidden
    >
      <g
        stroke="hsl(var(--line-art))"
        strokeWidth="1"
        opacity="0.4"
        fill="none"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={40 + i * 22}
            opacity={0.9 - i * 0.1}
          />
        ))}
        <path d="M200 0 Q 320 200 200 400" opacity="0.5" />
        <path d="M0 200 Q 200 320 400 200" opacity="0.5" />
      </g>
    </svg>
  );
}

/** Composed premium background for marketing pages. */
export function PremiumBackground({
  variant = 'hero',
  className,
}: {
  variant?: 'hero' | 'soft' | 'minimal';
  className?: string;
}) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {variant === 'hero' && (
        <>
          <GradientBlob className="-top-32 -left-24 h-[34rem] w-[34rem]" color="bg-primary/20" />
          <GradientBlob className="-top-10 right-0 h-[28rem] w-[28rem]" color="bg-chart-2/15" delay={3} />
          <GradientBlob className="bottom-0 left-1/3 h-[30rem] w-[30rem]" color="bg-chart-5/10" delay={6} />
          <BlueprintGrid className="opacity-20" />
        </>
      )}
      {variant === 'soft' && (
        <>
          <GradientBlob className="-top-24 right-1/4 h-[26rem] w-[26rem]" color="bg-primary/12" />
          <GradientBlob className="bottom-0 -left-20 h-[24rem] w-[24rem]" color="bg-chart-2/10" delay={4} />
        </>
      )}
      {variant === 'minimal' && (
        <GradientBlob className="top-0 right-0 h-[22rem] w-[22rem]" color="bg-primary/10" />
      )}
    </div>
  );
}
