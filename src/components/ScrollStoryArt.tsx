import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollStoryArt() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        }
      });

      // Path tracing through the entire site
      tl.fromTo('.story-line-main', { strokeDashoffset: 3000 }, { strokeDashoffset: 0, duration: 10, ease: 'none' })
        .fromTo('.story-node', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 1, ease: 'back.out' }, 0)
        .fromTo('.story-ring', { rotation: -180, scale: 0.5, opacity: 0 }, { rotation: 180, scale: 1, opacity: 0.8, duration: 1, stagger: 1, transformOrigin: 'center' }, 0.5)
        .fromTo('.story-pulse', { strokeDashoffset: 400 }, { strokeDashoffset: -400, duration: 3, repeat: -1, ease: 'linear' }, 0);

      // Section-specific events
      gsap.utils.toArray('.section-anchor').forEach((section: any, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          onEnter: () => {
            gsap.to(`.story-bracket-${i}`, { scaleX: 1, opacity: 1, duration: 0.6, ease: 'power2.out' });
            gsap.fromTo(`.story-label-${i}`, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6 });
          },
          onLeaveBack: () => {
            gsap.to(`.story-bracket-${i}`, { scaleX: 0, opacity: 0, duration: 0.4 });
            gsap.to(`.story-label-${i}`, { opacity: 0, x: -20, duration: 0.4 });
          }
        });
      });

    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg 
      ref={svgRef}
      className="scroll-story-art" 
      viewBox="0 0 100 1000" 
      preserveAspectRatio="none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '10vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 5,
        mixBlendMode: 'screen'
      }}
    >
      <defs>
        <linearGradient id="storyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--mint)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--mint)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--mint)" stopOpacity="0" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main continuous spine */}
      {/* <path 
        className="story-line-main" 
        d="M 50 0 L 50 150 L 80 180 L 80 300 L 20 360 L 20 500 L 50 530 L 50 700 L 80 730 L 80 850 L 50 880 L 50 1000" 
        fill="none" 
        stroke="rgba(255,255,255,0.05)" 
        strokeWidth="1" 
      />
      <path 
        className="story-line-main" 
        d="M 50 0 L 50 150 L 80 180 L 80 300 L 20 360 L 20 500 L 50 530 L 50 700 L 80 730 L 80 850 L 50 880 L 50 1000" 
        fill="none" 
        stroke="url(#storyGrad)" 
        strokeWidth="1.5" 
        strokeDasharray="3000" 
        strokeDashoffset="3000" 
      /> */}

      {/* Energy pulse moving along the spine */}
      <path 
        className="story-pulse" 
        d="M 50 0 L 50 150 L 80 180 L 80 300 L 20 360 L 20 500 L 50 530 L 50 700 L 80 730 L 80 850 L 50 880 L 50 1000" 
        fill="none" 
        stroke="var(--mint)" 
        strokeWidth="2" 
        strokeDasharray="4 400" 
        strokeLinecap="round"
        filter="url(#glow)"
      />

      {/* Strategic Nodes */}
      {[150, 300, 500, 700, 850].map((y, i) => {
        const x = y === 150 ? 50 : y === 300 ? 80 : y === 500 ? 20 : y === 700 ? 50 : 80;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="2" fill="var(--mint)" className="story-node" filter="url(#glow)" />
            <circle cx={x} cy={y} r="8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" className="story-ring" />
            <circle cx={x} cy={y} r="16" fill="none" stroke="var(--mint)" strokeWidth="0.2" className="story-ring" strokeDasharray="2 4" />
            
            {/* Horizontal expansion bracket */}
            <path className={`story-bracket-${i}`} d={`M ${x} ${y} L ${x + 20} ${y} L ${x + 25} ${y - 5}`} fill="none" stroke="rgba(255,255,255,0.1)" style={{ transformOrigin: 'left', opacity: 0 }} />
            <text className={`story-label-${i}`} x={x + 30} y={y - 5} fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace" style={{ opacity: 0 }}>SEQ 0{i + 1}</text>
          </g>
        );
      })}

      {/* Decorative floating crosshairs */}
      <g stroke="rgba(255,255,255,0.1)" strokeWidth="0.5">
        <path d="M 20 100 L 30 100 M 25 95 L 25 105" />
        <path d="M 70 400 L 80 400 M 75 395 L 75 405" />
        <path d="M 30 800 L 40 800 M 35 795 L 35 805" />
      </g>
    </svg>
  );
}
