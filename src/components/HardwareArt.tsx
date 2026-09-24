import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ArtProps {
  active: boolean;
  accent: string;
}

export function SolarTrackerArt({ active, accent }: ArtProps) {
  const ref = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!active) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // 1. Grid and environment fade in
      tl.fromTo('.bg-grid line', { opacity: 0 }, { opacity: 0.1, stagger: 0.02, duration: 1 })
      
      // 2. Base construction
      .fromTo('.base-part', { strokeDashoffset: 200, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, duration: 1.5, stagger: 0.1 }, "-=0.5")
      
      // 3. Mount & Axis appearing
      .fromTo('.axis-node', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'back.out' })
      .fromTo('.axis-ring', { rotationX: 90, opacity: 0 }, { rotationX: 0, opacity: 1, duration: 1, transformOrigin: "center" }, "-=0.5")
      
      // 4. Solar panel unfolding/assembling
      .fromTo('.panel-segment', { scaleY: 0, opacity: 0, transformOrigin: "bottom center" }, { scaleY: 1, opacity: 1, stagger: 0.1, duration: 1, ease: 'power2.out' })
      .fromTo('.panel-grid-line', { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 0.8, stagger: 0.05 })
      
      // 5. Sun rays & light tracking
      .fromTo('.sun-ray', { strokeDashoffset: 150, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, stagger: 0.1, duration: 1.2 })
      .fromTo('.sensor-ping', { scale: 0, opacity: 1 }, { scale: 3, opacity: 0, duration: 1.5, repeat: -1 }, "-=0.5")
      
      // 6. 4-Axis movement reaction
      .to('.panel-group', { rotationX: 20, rotationY: -15, rotationZ: 5, transformOrigin: 'center center', duration: 3, ease: 'power1.inOut', yoyo: true, repeat: -1 }, "-=1")
      .to('.axis-ring', { rotationY: 180, duration: 4, ease: 'none', repeat: -1 }, "-=3")
      
      // 7. Energy flow down the shaft
      .fromTo('.energy-flow', { strokeDashoffset: 50 }, { strokeDashoffset: 0, duration: 0.5, repeat: -1, ease: 'none' }, "-=2")
      
      // 8. Data HUD
      .fromTo('.hud-element', { opacity: 0, x: -10 }, { opacity: 1, x: 0, stagger: 0.1, duration: 0.8 });
      
    }, ref);
    return () => ctx.revert();
  }, [active]);

  return (
    <svg ref={ref} viewBox="0 0 500 500" className="hardware-art" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Background Grid */}
      <g className="bg-grid">
        {[...Array(10)].map((_, i) => <line key={`h${i}`} x1="0" y1={i*50} x2="500" y2={i*50} stroke="rgba(255,255,255,0.5)" />)}
        {[...Array(10)].map((_, i) => <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="500" stroke="rgba(255,255,255,0.5)" />)}
      </g>

      {/* HUD Data */}
      <g className="hud-element" stroke="none" fill={accent} fontSize="9" fontFamily="monospace">
        <text x="30" y="40">SYS: ONLINE</text>
        <text x="30" y="55">TRK: ACTIVE [4-AXIS]</text>
        <text x="30" y="70">EFF: 98.4%</text>
      </g>
      <g className="hud-element" stroke={accent} opacity="0.5">
        <path d="M 30 80 L 100 80 L 110 90 L 150 90" />
        <circle cx="150" cy="90" r="2" fill={accent} />
      </g>

      {/* Base & Electronics Enclosure */}
      <g strokeDasharray="200" className="base-part">
        <path d="M 180 420 L 320 420 L 340 460 L 160 460 Z" stroke="rgba(255,255,255,0.3)" />
        <rect x="210" y="380" width="80" height="40" stroke="rgba(255,255,255,0.4)" />
        <line x1="220" y1="390" x2="280" y2="390" stroke="rgba(255,255,255,0.2)" />
        <line x1="220" y1="400" x2="280" y2="400" stroke="rgba(255,255,255,0.2)" />
        <line x1="220" y1="410" x2="280" y2="410" stroke="rgba(255,255,255,0.2)" />
      </g>
      
      {/* 4-Axis Mount */}
      <path d="M 250 380 L 250 260" stroke="rgba(255,255,255,0.5)" className="base-part" />
      <line x1="240" y1="320" x2="260" y2="320" stroke={accent} className="energy-flow" strokeDasharray="4 4" strokeWidth="2" />
      <line x1="240" y1="290" x2="260" y2="290" stroke={accent} className="energy-flow" strokeDasharray="4 4" strokeWidth="2" />

      {/* Complex Joints */}
      <circle cx="250" cy="260" r="16" stroke="rgba(255,255,255,0.6)" className="axis-node" />
      <circle cx="250" cy="260" r="8" stroke="rgba(255,255,255,0.8)" className="axis-node" />
      <ellipse cx="250" cy="260" rx="30" ry="10" stroke={accent} className="axis-ring" />
      
      <path d="M 250 244 L 250 180" stroke="rgba(255,255,255,0.5)" className="base-part" />
      <circle cx="250" cy="180" r="12" stroke={accent} className="axis-node" />
      
      <g className="panel-group">
        {/* Support frame */}
        <line x1="120" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.6)" strokeWidth="2" className="panel-segment" />
        
        {/* Solar Panel Array (Multi-segment) */}
        <polygon points="120,180 380,180 400,100 140,100" stroke="rgba(255,255,255,0.8)" fill="rgba(255,255,255,0.03)" className="panel-segment" />
        <polygon points="100,260 360,260 380,180 120,180" stroke="rgba(255,255,255,0.8)" fill="rgba(255,255,255,0.05)" className="panel-segment" />
        
        {/* Grid lines on panels */}
        <g strokeDasharray="100" className="panel-grid-line">
          {[160, 200, 240, 280, 320, 360].map(x => (
            <line key={`p1_${x}`} x1={x} y1="180" x2={x+20} y2="100" stroke="rgba(255,255,255,0.3)" />
          ))}
          {[140, 180, 220, 260, 300, 340].map(x => (
            <line key={`p2_${x}`} x1={x} y1="260" x2={x+20} y2="180" stroke="rgba(255,255,255,0.3)" />
          ))}
          <line x1="130" y1="140" x2="390" y2="140" stroke="rgba(255,255,255,0.3)" />
          <line x1="110" y1="220" x2="370" y2="220" stroke="rgba(255,255,255,0.3)" />
        </g>
      </g>
      
      {/* Light Source / Sun Rays */}
      <g stroke={accent} strokeDasharray="150" strokeDashoffset="150" className="sun-ray">
        <line x1="80" y1="40" x2="160" y2="100" strokeWidth="2" />
        <line x1="50" y1="80" x2="130" y2="140" strokeWidth="1" opacity="0.6" />
        <line x1="110" y1="20" x2="190" y2="80" strokeWidth="1" opacity="0.6" />
      </g>
      
      <circle cx="160" cy="100" r="15" fill="none" stroke={accent} strokeWidth="1.5" className="sensor-ping" />
      <circle cx="130" cy="140" r="10" fill="none" stroke={accent} strokeWidth="1" className="sensor-ping" style={{animationDelay: '0.2s'}} />
    </svg>
  );
}

export function CleaningBotArt({ active, accent }: ArtProps) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!active) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // HUD
      tl.fromTo('.hud-box', { scaleX: 0 }, { scaleX: 1, duration: 0.8, transformOrigin: "left" })
        .fromTo('.hud-text', { opacity: 0 }, { opacity: 1, stagger: 0.1, duration: 0.5 })
      
      // Panel Array
        .fromTo('.array-frame', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2 })
        .fromTo('.array-line', { strokeDashoffset: 300 }, { strokeDashoffset: 0, stagger: 0.05, duration: 1 }, "-=0.8")
      
      // Dirt Particles
        .fromTo('.dirt-particle', { opacity: 0, scale: 0 }, { opacity: 0.6, scale: 1, stagger: 0.01, duration: 0.5 })
        
      // Robot Assembly
        .fromTo('.bot-chassis', { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 0.8, ease: "bounce.out" })
        .fromTo('.bot-wheel', { scale: 0 }, { scale: 1, stagger: 0.1, duration: 0.5 })
        .fromTo('.bot-brush', { opacity: 0, rotation: -90 }, { opacity: 1, rotation: 0, duration: 0.6 })
      
      // Scanning Beam
        .fromTo('.scan-beam', { opacity: 0, scaleY: 0 }, { opacity: 0.4, scaleY: 1, duration: 0.5, transformOrigin: "top" })
      
      // Robot Movement & Cleaning
        .to('.cleaning-bot-group', { x: 200, y: -65, duration: 4, ease: 'linear' })
        .to('.scan-beam', { opacity: 0.8, duration: 0.2, yoyo: true, repeat: 20 }, "-=4")
        .to('.bot-wheel', { rotation: 360, duration: 1, repeat: 3, ease: 'linear', transformOrigin: "center" }, "-=4")
        .to('.dirt-particle', { 
          opacity: 0, scale: 0, 
          stagger: { amount: 3.5, from: "start" }, 
          ease: "power1.in" 
        }, "-=4")
        .fromTo('.clean-path', { strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: 4, ease: 'linear' }, "-=4");
        
    }, ref);
    return () => ctx.revert();
  }, [active]);

  return (
    <svg ref={ref} viewBox="0 0 500 500" className="hardware-art" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* HUD */}
      <rect x="350" y="30" width="120" height="60" stroke="rgba(255,255,255,0.2)" className="hud-box" />
      <text x="360" y="50" fill={accent} fontSize="9" fontFamily="monospace" stroke="none" className="hud-text">STATUS: CLEANING</text>
      <text x="360" y="65" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace" stroke="none" className="hud-text">PATH: AUTO-NAV</text>
      <text x="360" y="80" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace" stroke="none" className="hud-text">WATER: 78%</text>

      {/* Massive Solar Array */}
      <g className="array-frame">
        <polygon points="40,420 460,380 480,180 60,220" stroke="rgba(255,255,255,0.3)" fill="rgba(255,255,255,0.02)" />
        {/* Horizontal joints */}
        <line x1="50" y1="320" x2="470" y2="280" stroke="rgba(255,255,255,0.2)" />
        <line x1="70" y1="120" x2="490" y2="80" stroke="rgba(255,255,255,0.05)" /> 
      </g>
      
      <g className="array-line" strokeDasharray="300">
        {[100, 160, 220, 280, 340, 400].map(x => (
          <line key={`arr_${x}`} x1={x-40} y1="420" x2={x} y2="220" stroke="rgba(255,255,255,0.15)" />
        ))}
      </g>

      {/* Dirt Particles (Scattered along path) */}
      <g className="dirt-layer" fill="rgba(255,255,255,0.4)" stroke="none">
        {[...Array(40)].map((_, i) => {
          const progress = i / 40;
          const x = 120 + (200 * progress) + (Math.random() * 40 - 20);
          const y = 300 - (65 * progress) + (Math.random() * 30 - 15);
          return <circle key={`d${i}`} cx={x} cy={y} r={Math.random() * 1.5 + 0.5} className="dirt-particle" />
        })}
      </g>

      {/* Clean Path trail */}
      <path d="M 90 320 L 310 245" stroke={accent} strokeWidth="40" strokeDasharray="300" strokeDashoffset="300" className="clean-path" opacity="0.1" strokeLinecap="round" />
      <path d="M 90 320 L 310 245" stroke={accent} strokeWidth="2" strokeDasharray="300" strokeDashoffset="300" className="clean-path" strokeLinecap="round" style={{opacity: 0.5, strokeDasharray: '4 4'}} />

      {/* Robot Group */}
      <g className="cleaning-bot-group">
        {/* Scanning beam */}
        <polygon points="120,290 180,340 190,300" fill={`url(#scanGrad-${accent})`} opacity="0" stroke="none" className="scan-beam" />
        <defs>
          <linearGradient id={`scanGrad-${accent}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.8" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Chassis */}
        <rect x="80" y="280" width="60" height="25" rx="4" transform="rotate(-18 110 292)" stroke="rgba(255,255,255,0.9)" className="bot-chassis" fill="rgba(0,0,0,0.8)" />
        <rect x="85" y="275" width="30" height="10" transform="rotate(-18 110 292)" stroke={accent} className="bot-chassis" />
        
        {/* Wheels / Tracks */}
        <circle cx="75" cy="305" r="8" stroke="rgba(255,255,255,0.7)" className="bot-wheel" />
        <circle cx="75" cy="305" r="3" stroke={accent} className="bot-wheel" />
        <circle cx="130" cy="285" r="8" stroke="rgba(255,255,255,0.7)" className="bot-wheel" />
        <circle cx="130" cy="285" r="3" stroke={accent} className="bot-wheel" />
        
        {/* Connecting track */}
        <line x1="75" y1="313" x2="130" y2="293" stroke="rgba(255,255,255,0.4)" className="bot-chassis" strokeWidth="2" />
        
        {/* Scrub Brushes (rotating) */}
        <g className="bot-brush">
          <line x1="100" y1="310" x2="100" y2="325" stroke={accent} strokeWidth="4" opacity="0.8" />
          <line x1="95" y1="325" x2="105" y2="325" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        </g>
        <g className="bot-brush" style={{transform: 'translate(30px, -10px)'}}>
          <line x1="100" y1="310" x2="100" y2="325" stroke={accent} strokeWidth="4" opacity="0.8" />
          <line x1="95" y1="325" x2="105" y2="325" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        </g>

        {/* Antenna / Comm link */}
        <line x1="120" y1="270" x2="125" y2="250" stroke="rgba(255,255,255,0.6)" className="bot-chassis" />
        <circle cx="125" cy="250" r="2" fill={accent} className="bot-chassis" stroke="none" />
      </g>
    </svg>
  );
}

export function GarbageBotArt({ active, accent }: ArtProps) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!active) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Factory floor / tracks
      tl.fromTo('.floor-grid', { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo('.rail-track', { strokeDashoffset: 400 }, { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut' }, "-=0.5")
      
      // Bin & Waste
        .fromTo('.waste-bin', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'back.out' })
        .fromTo('.waste-item', { scale: 0 }, { scale: 1, stagger: 0.1, duration: 0.5 })
      
      // Bot Chassis
        .fromTo('.bot-body', { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' })
        
      // LiDAR Sweep
        .fromTo('.lidar-sweep', { rotation: -45, opacity: 0, transformOrigin: "bottom center" }, { rotation: 45, opacity: 0.5, duration: 2, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      
      // Arm Kinematics
        .fromTo('.arm-base', { rotation: -20, transformOrigin: "bottom center" }, { rotation: 10, duration: 1.5, ease: 'power1.inOut' })
        .fromTo('.arm-mid', { rotation: -40, transformOrigin: "bottom center" }, { rotation: 20, duration: 1.5, ease: 'power1.inOut' }, "-=1.5")
        .fromTo('.arm-claw', { rotation: -30, transformOrigin: "bottom center" }, { rotation: 0, duration: 1.5, ease: 'power1.inOut' }, "-=1.5")
      
      // Cycle repetition (grab and lift)
        .to('.arm-base', { rotation: -10, duration: 2, ease: 'power1.inOut', yoyo: true, repeat: -1 })
        .to('.arm-mid', { rotation: -60, duration: 2, ease: 'power1.inOut', yoyo: true, repeat: -1 }, "-=2")
        .to('.arm-claw', { rotation: -20, duration: 2, ease: 'power1.inOut', yoyo: true, repeat: -1 }, "-=2")
        
      // Data transmission
        .fromTo('.data-link', { strokeDashoffset: 20 }, { strokeDashoffset: 0, duration: 0.5, repeat: -1, ease: 'none' });
        
    }, ref);
    return () => ctx.revert();
  }, [active]);

  return (
    <svg ref={ref} viewBox="0 0 500 500" className="hardware-art" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Floor Grid */}
      <g className="floor-grid" stroke="rgba(255,255,255,0.1)">
        <line x1="50" y1="420" x2="450" y2="420" />
        <line x1="70" y1="440" x2="470" y2="440" />
        <line x1="90" y1="460" x2="490" y2="460" />
      </g>
      
      {/* Guide Rails */}
      <path d="M 0 400 L 500 400" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="400" className="rail-track" />
      <path d="M 0 410 L 500 410" stroke={accent} strokeWidth="1" strokeDasharray="4 4" className="rail-track" />
      <circle cx="250" cy="410" r="3" fill={accent} stroke="none" />
      
      {/* Target Waste Bin */}
      <g className="waste-bin">
        <path d="M 320 300 L 400 300 L 390 400 L 330 400 Z" stroke="rgba(255,255,255,0.6)" />
        <line x1="335" y1="320" x2="385" y2="320" stroke="rgba(255,255,255,0.2)" />
        <line x1="340" y1="350" x2="380" y2="350" stroke="rgba(255,255,255,0.2)" />
        <line x1="345" y1="380" x2="375" y2="380" stroke="rgba(255,255,255,0.2)" />
        
        {/* Waste Items */}
        <rect x="340" y="380" width="15" height="15" stroke="rgba(255,255,255,0.4)" className="waste-item" transform="rotate(15 340 380)" />
        <circle cx="370" cy="385" r="8" stroke={accent} className="waste-item" />
        <polygon points="350,370 370,360 365,375" stroke="rgba(255,255,255,0.5)" className="waste-item" />
      </g>

      {/* Robot Chassis */}
      <g className="bot-body">
        <rect x="100" y="320" width="100" height="70" rx="6" stroke="rgba(255,255,255,0.8)" fill="rgba(0,0,0,0.8)" />
        <rect x="110" y="330" width="30" height="15" stroke={accent} />
        <rect x="110" y="350" width="80" height="30" stroke="rgba(255,255,255,0.3)" strokeDasharray="2 2" />
        
        {/* Wheels */}
        <circle cx="125" cy="390" r="14" stroke="rgba(255,255,255,0.7)" />
        <circle cx="125" cy="390" r="4" stroke={accent} />
        <circle cx="175" cy="390" r="14" stroke="rgba(255,255,255,0.7)" />
        <circle cx="175" cy="390" r="4" stroke={accent} />
        
        {/* LiDAR Dome */}
        <path d="M 130 320 A 20 20 0 0 1 170 320" stroke="rgba(255,255,255,0.6)" fill="rgba(255,255,255,0.1)" />
        <circle cx="150" cy="310" r="3" fill={accent} stroke="none" />
        
        {/* LiDAR Cone */}
        <path d="M 150 310 L 100 200 A 120 120 0 0 1 200 200 Z" fill={`url(#lidarGrad-${accent})`} stroke="none" className="lidar-sweep" />
        <defs>
          <radialGradient id={`lidarGrad-${accent}`} cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
      </g>

      {/* Kinematic Arm */}
      <g transform="translate(180, 340)">
        <circle cx="0" cy="0" r="8" stroke={accent} className="bot-body" />
        <g className="arm-base">
          <line x1="0" y1="0" x2="60" y2="-80" stroke="rgba(255,255,255,0.9)" strokeWidth="6" strokeLinecap="round" />
          <line x1="0" y1="0" x2="60" y2="-80" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          <circle cx="60" cy="-80" r="6" stroke="rgba(255,255,255,0.8)" fill="#000" />
          
          <g transform="translate(60, -80)" className="arm-mid">
            <line x1="0" y1="0" x2="80" y2="-20" stroke="rgba(255,255,255,0.8)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="80" cy="-20" r="5" stroke={accent} fill="#000" />
            
            <g transform="translate(80, -20)" className="arm-claw">
              <path d="M 0 0 L 20 10 L 30 30" stroke="rgba(255,255,255,0.9)" strokeWidth="3" fill="none" />
              <path d="M 0 0 L 20 -10 L 30 -30" stroke="rgba(255,255,255,0.9)" strokeWidth="3" fill="none" />
              {/* Data stream from claw */}
              <line x1="25" y1="0" x2="55" y2="0" stroke={accent} strokeDasharray="4 4" className="data-link" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function SmartWatchArt({ active, accent }: ArtProps) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!active) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Wireframe Grid & Topo
      tl.fromTo('.topo-line', { strokeDashoffset: 500 }, { strokeDashoffset: 0, stagger: 0.05, duration: 1.5, ease: 'power2.out' })
      
      // Exploded View Assembly
        .fromTo('.watch-strap', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('.watch-chassis', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.5")
        .fromTo('.watch-glass', { opacity: 0, y: -40, scale: 1.1 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out' }, "-=0.4")
      
      // UI Elements & Sensors
        .fromTo('.sensor-beam', { opacity: 0, scale: 0 }, { opacity: 0.6, scale: 1, stagger: 0.2, duration: 0.8 })
        .fromTo('.ui-circle', { strokeDashoffset: 200 }, { strokeDashoffset: 0, duration: 1.5, ease: 'power3.inOut' })
        .fromTo('.ui-data', { opacity: 0, x: -10 }, { opacity: 1, x: 0, stagger: 0.1, duration: 0.5 })
        
      // Continuous Monitoring Animation
        .to('.sensor-beam', { opacity: 0.2, scale: 1.2, duration: 1, yoyo: true, repeat: -1 }, "-=0.5")
        .fromTo('.ekg-line', { strokeDashoffset: 150 }, { strokeDashoffset: -150, duration: 2, repeat: -1, ease: 'linear' })
        .to('.ui-circle', { rotation: 360, duration: 10, repeat: -1, ease: 'linear', transformOrigin: 'center' }, "-=2")
        .to('.pulse-dot', { opacity: 0, duration: 0.5, yoyo: true, repeat: -1 }, "-=2");

    }, ref);
    return () => ctx.revert();
  }, [active]);

  return (
    <svg ref={ref} viewBox="0 0 500 500" className="hardware-art" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Background Topo/Grid to make it look technical */}
      <g className="topo-line" stroke="rgba(255,255,255,0.05)" strokeDasharray="500">
        <circle cx="250" cy="250" r="200" />
        <circle cx="250" cy="250" r="150" />
        <circle cx="250" cy="250" r="100" />
        <line x1="50" y1="250" x2="450" y2="250" />
        <line x1="250" y1="50" x2="250" y2="450" />
      </g>

      {/* Measurement Callouts */}
      <g fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" stroke="none" className="ui-data">
        <text x="140" y="100">STRAP: 22MM</text>
        <line x1="140" y1="105" x2="210" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="210" y1="105" x2="220" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        
        <text x="320" y="190">SENSOR: BIO-OPTIC</text>
        <line x1="320" y1="195" x2="380" y2="195" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="320" y1="195" x2="280" y2="220" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      </g>

      {/* Watch Straps */}
      <g className="watch-strap">
        {/* Top strap */}
        <path d="M 210 60 L 290 60 C 290 60 280 120 270 140 L 230 140 C 220 120 210 60 210 60 Z" stroke="rgba(255,255,255,0.3)" fill="rgba(255,255,255,0.02)" />
        <circle cx="250" cy="80" r="3" stroke="rgba(255,255,255,0.2)" />
        <circle cx="250" cy="100" r="3" stroke="rgba(255,255,255,0.2)" />
        <circle cx="250" cy="120" r="3" stroke="rgba(255,255,255,0.2)" />
        
        {/* Bottom strap */}
        <path d="M 230 360 L 270 360 C 280 380 290 440 290 440 L 210 440 C 210 440 220 380 230 360 Z" stroke="rgba(255,255,255,0.3)" fill="rgba(255,255,255,0.02)" />
        <line x1="220" y1="380" x2="280" y2="380" stroke="rgba(255,255,255,0.2)" />
        <line x1="215" y1="400" x2="285" y2="400" stroke="rgba(255,255,255,0.2)" />
        <line x1="210" y1="420" x2="290" y2="420" stroke="rgba(255,255,255,0.2)" />
      </g>

      {/* Chassis / Body */}
      <g className="watch-chassis">
        <rect x="180" y="130" width="140" height="240" rx="32" stroke="rgba(255,255,255,0.8)" fill="rgba(0,0,0,0.8)" strokeWidth="2" />
        <rect x="190" y="140" width="120" height="220" rx="24" stroke="rgba(255,255,255,0.3)" />
        {/* Side Button */}
        <path d="M 320 200 L 328 200 L 328 240 L 320 240" stroke="rgba(255,255,255,0.6)" fill="rgba(255,255,255,0.1)" />
        <path d="M 320 270 L 324 270 L 324 300 L 320 300" stroke="rgba(255,255,255,0.4)" />
      </g>

      {/* Bio-Sensors (Back of watch projecting outwards) */}
      <g className="sensor-beam" stroke={accent}>
        <circle cx="250" cy="250" r="60" strokeDasharray="4 8" opacity="0.4" />
        <circle cx="250" cy="250" r="75" strokeDasharray="2 12" opacity="0.2" />
        <path d="M 210 250 L 150 210 M 290 250 L 350 290 M 250 210 L 290 150 M 250 290 L 210 350" strokeDasharray="5 5" opacity="0.3" />
      </g>

      {/* Glass / UI Layer (Elevated slightly in perspective if possible, or just layered on top) */}
      <g className="watch-glass">
        {/* Active UI Rings */}
        <circle cx="250" cy="210" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
        <circle cx="250" cy="210" r="45" stroke={accent} strokeWidth="4" strokeDasharray="282" strokeDashoffset="282" className="ui-circle" strokeLinecap="round" />
        <circle cx="250" cy="210" r="35" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        <circle cx="250" cy="210" r="35" stroke="#fff" strokeWidth="2" strokeDasharray="220" strokeDashoffset="110" className="ui-circle" style={{animationDirection: 'reverse', animationDuration: '15s'}} />
        
        <text x="250" y="215" fill="#fff" fontSize="18" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" stroke="none" className="ui-data">98</text>
        <text x="250" y="228" fill={accent} fontSize="8" fontFamily="monospace" textAnchor="middle" stroke="none" className="ui-data">BPM</text>
        
        {/* Pulse Dot */}
        <circle cx="250" cy="180" r="3" fill={accent} stroke="none" className="pulse-dot" />

        {/* EKG Graph Box */}
        <rect x="200" y="280" width="100" height="40" rx="4" stroke="rgba(255,255,255,0.2)" fill="rgba(255,255,255,0.02)" className="ui-data" />
        <g style={{ clipPath: 'url(#ekg-clip)' }}>
          <clipPath id="ekg-clip"><rect x="200" y="280" width="100" height="40" /></clipPath>
          <path d="M 190 300 L 210 300 L 215 290 L 225 315 L 235 285 L 240 300 L 260 300 L 265 290 L 275 315 L 285 285 L 290 300 L 310 300" 
                stroke={accent} strokeWidth="1.5" strokeDasharray="150" strokeDashoffset="150" className="ekg-line" />
        </g>
      </g>
    </svg>
  );
}

export function SmartHomeArt({ active, accent }: ArtProps) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!active) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Draw Floorplan
      tl.fromTo('.floor-wall', { strokeDashoffset: 1000, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, duration: 2, ease: 'power2.inOut' })
        .fromTo('.room-label', { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, "-=0.5")
      
      // Central Hub
        .fromTo('.hub-core', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out' })
        .fromTo('.hub-pulse', { scale: 0, opacity: 1 }, { scale: 3, opacity: 0, duration: 2, repeat: -1 }, "-=0.4")
        
      // Network Connections
        .fromTo('.network-path', { strokeDashoffset: 300 }, { strokeDashoffset: 0, stagger: 0.1, duration: 1.5, ease: 'power1.inOut' })
        
      // Smart Devices Activating
        .fromTo('.device-node', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'back.out' })
        .to('.device-icon', { filter: `drop-shadow(0 0 6px ${accent})`, color: accent, stagger: 0.1, duration: 0.5 })
        
      // Data Packets traversing network
        .fromTo('.data-packet', { opacity: 0 }, { opacity: 1, duration: 0.2 })
        .to('.data-packet', { 
          strokeDashoffset: -20,
          duration: 1,
          repeat: -1,
          ease: 'linear'
        });

    }, ref);
    return () => ctx.revert();
  }, [active]);

  return (
    <svg ref={ref} viewBox="0 0 500 500" className="hardware-art" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Blueprint Floorplan */}
      <g className="floor-wall" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="1000">
        {/* Outer walls */}
        <polygon points="50,100 450,100 450,400 50,400" fill="rgba(255,255,255,0.02)" />
        {/* Inner walls */}
        <line x1="250" y1="100" x2="250" y2="400" />
        <line x1="50" y1="250" x2="450" y2="250" />
        {/* Doors (gaps) */}
        <rect x="248" y="150" width="4" height="40" fill="var(--bg-card)" stroke="none" />
        <rect x="248" y="300" width="4" height="40" fill="var(--bg-card)" stroke="none" />
        <rect x="120" y="248" width="40" height="4" fill="var(--bg-card)" stroke="none" />
        <rect x="320" y="248" width="40" height="4" fill="var(--bg-card)" stroke="none" />
      </g>

      {/* Room Labels */}
      <g className="room-label" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace" stroke="none">
        <text x="70" y="130">LIVING AREA</text>
        <text x="270" y="130">KITCHEN</text>
        <text x="70" y="280">BEDROOM</text>
        <text x="270" y="280">BATHROOM</text>
      </g>

      {/* Network Connections */}
      <g className="network-path" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="300">
        <path d="M 250 250 L 150 180" />
        <path d="M 250 250 L 350 180" />
        <path d="M 250 250 L 150 330" />
        <path d="M 250 250 L 350 330" />
        <path d="M 250 250 L 80 150" />
        <path d="M 250 250 L 420 350" />
      </g>

      {/* Data Packets (animated dashed lines over the paths) */}
      <g className="data-packet" stroke={accent} strokeWidth="2" strokeDasharray="4 300" strokeLinecap="round">
        <path d="M 250 250 L 150 180" />
        <path d="M 250 250 L 350 180" />
        <path d="M 250 250 L 150 330" />
        <path d="M 250 250 L 350 330" />
        <path d="M 250 250 L 80 150" />
        <path d="M 250 250 L 420 350" />
      </g>

      {/* Central Hub */}
      <g transform="translate(250, 250)">
        <circle cx="0" cy="0" r="30" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.2)" className="hub-core" />
        <circle cx="0" cy="0" r="15" stroke={accent} strokeWidth="2" className="hub-core" />
        <circle cx="0" cy="0" r="5" fill={accent} className="hub-core" stroke="none" />
        <circle cx="0" cy="0" r="15" stroke={accent} strokeWidth="1" className="hub-pulse" fill="none" />
        <circle cx="0" cy="0" r="15" stroke={accent} strokeWidth="1" className="hub-pulse" fill="none" style={{animationDelay: '1s'}} />
      </g>

      {/* Smart Devices */}
      <g className="device-node">
        {/* Thermostat */}
        <circle cx="150" cy="180" r="12" stroke="rgba(255,255,255,0.8)" fill="var(--bg-card)" className="device-icon" />
        <text x="150" y="183" fill="currentColor" fontSize="8" textAnchor="middle" stroke="none" className="device-icon">72°</text>
      </g>
      
      <g className="device-node">
        {/* Smart Light */}
        <path d="M 345 180 L 355 180 L 353 185 L 347 185 Z" stroke="rgba(255,255,255,0.8)" fill="none" className="device-icon" />
        <circle cx="350" cy="173" r="7" stroke="rgba(255,255,255,0.8)" fill="none" className="device-icon" />
      </g>

      <g className="device-node">
        {/* Security Camera */}
        <rect x="142" y="325" width="16" height="10" rx="3" transform="rotate(-30 150 330)" stroke="rgba(255,255,255,0.8)" fill="var(--bg-card)" className="device-icon" />
        <circle cx="154" cy="328" r="2" fill="currentColor" stroke="none" className="device-icon" />
      </g>

      <g className="device-node">
        {/* Smart Speaker */}
        <rect x="344" y="322" width="12" height="16" rx="2" stroke="rgba(255,255,255,0.8)" fill="var(--bg-card)" className="device-icon" />
        <line x1="347" y1="326" x2="353" y2="326" stroke="currentColor" className="device-icon" />
        <line x1="347" y1="330" x2="353" y2="330" stroke="currentColor" className="device-icon" />
        <line x1="347" y1="334" x2="353" y2="334" stroke="currentColor" className="device-icon" />
      </g>

      <g className="device-node">
        {/* Door Lock */}
        <circle cx="80" cy="150" r="10" stroke="rgba(255,255,255,0.8)" fill="var(--bg-card)" className="device-icon" />
        <rect x="78" y="148" width="4" height="4" fill="currentColor" stroke="none" className="device-icon" />
        <path d="M 77 148 A 3 3 0 0 1 83 148" stroke="currentColor" fill="none" className="device-icon" />
      </g>
      
      <g className="device-node">
        {/* Smart Plug/Appliance */}
        <rect x="412" y="342" width="16" height="16" rx="4" stroke="rgba(255,255,255,0.8)" fill="var(--bg-card)" className="device-icon" />
        <circle cx="417" cy="350" r="1.5" fill="currentColor" stroke="none" className="device-icon" />
        <circle cx="423" cy="350" r="1.5" fill="currentColor" stroke="none" className="device-icon" />
      </g>
    </svg>
  );
}
