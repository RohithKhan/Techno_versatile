import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check, ChevronRight, Menu, Send, X, Plus } from 'lucide-react';
import { BlueprintArt } from '@/components/BlueprintArt';
import { navItems, services, type Service } from '@/data/services';

gsap.registerPlugin(ScrollTrigger);

const sectionIds = ['home', 'about', 'services', 'industries', 'works', 'contact'];

/* ─── Brand ─────────────────────────────────────────────────── */
function Brand({ compact = false, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <a href="#home" className={`brand${compact ? ' brand--compact' : ''} ${className}`} aria-label="Techno Versatile home">
      <svg className="brand-icon" viewBox="0 0 32 24" width="32" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 18h6l9-12" />
        <path d="M14 18l9-12" />
      </svg>
      <span className="brand-name"><b>TECHNO</b><b>VERSATILE</b></span>
    </a>
  );
}

/* ─── Technical Label ────────────────────────────────────────── */
function TL({ children, className = '', ...rest }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={`tl ${className}`} {...rest}>{children}</span>;
}


/* ─── Side Nav ───────────────────────────────────────────────── */
function SideNav({ activeSection }: { activeSection: string }) {
  return (
    <aside className="side-nav" aria-label="Section navigation">
      <div className="side-nav__rail" />
      {navItems.map((item) => (
        <a className={`side-nav__item ${activeSection === item.target ? 'is-active' : ''}`} href={`#${item.target}`} key={item.label}>
          <span className="side-nav__dot" />
          <span>{item.label}</span>
        </a>
      ))}
    </aside>
  );
}

/* ─── Top Nav ────────────────────────────────────────────────── */
function TopNav({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="top-nav">
      <Brand />
      <nav className="top-nav__links" aria-label="Primary navigation">
        {['SOLUTIONS', 'INDUSTRIES', 'INSIGHTS', 'CONTACT'].map((item) => (
          <a href={`#${item === 'SOLUTIONS' ? 'services' : item.toLowerCase()}`} key={item}>{item}</a>
        ))}
      </nav>
      <div className="top-nav__actions">
        <a className="nav-cta" href="#contact">LET'S BUILD <ArrowRight size={12} /></a>
        <button className="menu-button" onClick={onMenu} aria-label="Open navigation"><Menu size={17} /></button>
      </div>
    </header>
  );
}

/* ─── Hero architectural environment SVG ────────────────────── */
function HeroEnvironment() {
  return (
    <svg className="hero-env-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="envGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(67,240,176,0)" />
          <stop offset="100%" stopColor="rgba(67,240,176,0.04)" />
        </linearGradient>
        <radialGradient id="glowCenter" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="rgba(67,240,176,0.06)" />
          <stop offset="100%" stopColor="rgba(67,240,176,0)" />
        </radialGradient>
        <clipPath id="envClip">
          <rect width="1440" height="900" />
        </clipPath>
      </defs>
      <rect width="1440" height="900" fill="url(#glowCenter)" />

      {/* Floor perspective grid */}
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <line key={i} x1={300 + i * 105} y1={500} x2={-200 + i * 260} y2={900} stroke="rgba(67,240,176,0.08)" strokeWidth="1" />
      ))}
      {[0,1,2,3,4,5].map(i => (
        <path key={i} d={`M 0 ${500 + i * 80} Q 720 ${480 + i * 70} 1440 ${500 + i * 80}`} fill="none" stroke="rgba(67,240,176,0.06)" strokeWidth="0.8" />
      ))}

      {/* Architectural columns - left */}
      <path d="M 200 900 L 200 200 L 220 180 L 240 200 L 240 900" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
      <path d="M 220 180 L 220 900" fill="none" stroke="rgba(67,240,176,0.12)" strokeWidth="0.8" />
      <line x1="200" y1="350" x2="240" y2="350" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
      <line x1="200" y1="550" x2="240" y2="550" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />

      {/* Architectural columns - right */}
      <path d="M 1200 900 L 1200 220 L 1220 200 L 1240 220 L 1240 900" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
      <path d="M 1220 200 L 1220 900" fill="none" stroke="rgba(67,240,176,0.1)" strokeWidth="0.8" />

      {/* Ceiling structure */}
      <path d="M 0 120 L 1440 120" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <path d="M 300 0 L 200 120 L 220 120" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <path d="M 1140 0 L 1240 120 L 1220 120" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      {/* Ceiling cross-beams */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1={240 + i * 240} y1={120} x2={220 + i * 240} y2={0} stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
      ))}

      {/* Glass wall panels */}
      <path d="M 240 120 L 280 200 L 280 900" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <path d="M 1200 120 L 1160 200 L 1160 900" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />

      {/* City skyline silhouette far background */}
      <path d="M 260 500 L 280 480 L 280 420 L 295 420 L 295 380 L 310 380 L 310 340 L 325 340 L 325 500" fill="rgba(5,6,6,0.4)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />
      <path d="M 340 500 L 340 360 L 360 360 L 360 320 L 375 320 L 375 360 L 390 360 L 390 500" fill="rgba(5,6,6,0.3)" stroke="rgba(255,255,255,0.03)" strokeWidth="0.6" />
      {/* Building windows */}
      {[[315,350],[317,365],[313,380],[360,330],[360,345]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width={8} height={6} fill="rgba(67,240,176,0.08)" />
      ))}

      {/* Technical overlay lines */}
      <line x1="0" y1="200" x2="1440" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <line x1="0" y1="500" x2="1440" y2="500" stroke="rgba(255,255,255,0.025)" strokeWidth="0.8" />
      <line x1="400" y1="0" x2="400" y2="900" stroke="rgba(255,255,255,0.025)" strokeWidth="0.8" />
      <line x1="1040" y1="0" x2="1040" y2="900" stroke="rgba(255,255,255,0.025)" strokeWidth="0.8" />

      {/* Intersection nodes */}
      <circle cx="400" cy="200" r="3" fill="rgba(67,240,176,0.4)" />
      <circle cx="1040" cy="200" r="3" fill="rgba(67,240,176,0.25)" />
      <circle cx="400" cy="500" r="3" fill="rgba(67,240,176,0.25)" />

      {/* Technical coordinate labels */}
      <text x="405" y="196" fill="rgba(67,240,176,0.35)" fontSize="8" letterSpacing="1.5" fontFamily="monospace">X:400</text>
      <text x="1045" y="196" fill="rgba(255,255,255,0.12)" fontSize="8" letterSpacing="1.5" fontFamily="monospace">X:1040</text>

      {/* Ambient glow */}
      <ellipse cx="720" cy="350" rx="500" ry="300" fill="url(#envGrad)" />
    </svg>
  );
}

/* ─── World Map (dot grid) ───────────────────────────────────── */
function WorldMap() {
  // Simplified continent dot map
  const dots: [number, number][] = [
    // North America
    [15,18],[17,19],[18,18],[19,17],[20,20],[21,19],[22,18],[23,20],[24,21],[22,22],
    // South America
    [22,30],[23,31],[24,32],[23,33],[22,34],[24,34],
    // Europe
    [46,16],[47,17],[48,16],[49,17],[50,16],[48,18],[49,18],
    // Africa
    [46,24],[47,25],[48,26],[47,27],[48,28],[46,28],[49,26],
    // Asia
    [55,15],[57,16],[60,17],[62,18],[64,16],[65,17],[66,18],[68,17],[70,16],
    [56,20],[58,21],[60,20],[62,21],[65,20],[68,20],
    // Australia
    [68,28],[70,29],[72,28],[70,30],
    // Japan
    [72,18],[73,18],[72,19],
  ];

  return (
    <svg className="world-map-svg" viewBox="0 0 90 45" aria-hidden="true">
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.7" fill="rgba(67,240,176,0.35)" />
      ))}
      {/* Active points */}
      <circle cx="22" cy="20" r="1.2" fill="rgba(67,240,176,0.9)" />
      <circle cx="48" cy="17" r="1.2" fill="rgba(67,240,176,0.9)" />
      <circle cx="62" cy="18" r="1.2" fill="rgba(67,240,176,0.9)" />
      <line x1="22" y1="20" x2="48" y2="17" stroke="rgba(67,240,176,0.3)" strokeWidth="0.4" strokeDasharray="2 2" />
      <line x1="48" y1="17" x2="62" y2="18" stroke="rgba(67,240,176,0.3)" strokeWidth="0.4" strokeDasharray="2 2" />
    </svg>
  );
}

/* ─── Hero Section ───────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const q = (sel: string) => hero.querySelectorAll(sel);
    const qs = (sel: string) => hero.querySelector(sel);
    const topNav = document.querySelector('.top-nav');
    const sideNav = document.querySelector('.side-nav');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl
      // Environment layers
      .fromTo(q('.hero-env-layer--1'), { opacity: 0 }, { opacity: 1, duration: 2 }, 1.4)
      .fromTo(q('.hero-env-layer--2'), { opacity: 0 }, { opacity: 1, duration: 1.5 }, 1.8)
      .fromTo(q('.hero-env-layer--3'), { opacity: 0 }, { opacity: 1, duration: 1.2 }, 2.0)
      // Blueprint grid
      .fromTo(qs('.blueprint-backdrop__grid'), { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 1.4 }, 1.6)
      // Technical line markers
      .fromTo(q('.backdrop-line'), { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.8, stagger: 0.12 }, 1.8)
      .fromTo(q('.backdrop-label'), { opacity: 0, x: -6 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, 2.1)
      .fromTo(q('.backdrop-node'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.2, ease: 'back.out(2)' }, 2.2)
      // Nav (outside hero, use doc selectors)
      .fromTo(topNav, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.7 }, 1.8)
      .fromTo(sideNav, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.7 }, 2.0)
      // Hero content
      .fromTo(qs('.hero__headline'), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, 2.2)
      .fromTo(qs('.hero__tagline'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, 2.5)
      .fromTo(q('.hero__subtext'), { opacity: 0 }, { opacity: 1, duration: 0.6 }, 2.6)
      .fromTo(qs('.hero__cta'), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6 }, 2.8)
      .fromTo(qs('.hero__right-copy'), { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.8 }, 2.4);

    return () => { tl.kill(); };
  }, []);

  // Parallax on mouse move
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = (currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 2;

    gsap.to('.hero-env-layer--1', { x: x * 4, y: y * 2, duration: 1.2, ease: 'power1.out' });
    gsap.to('.hero-env-layer--2', { x: x * 8, y: y * 4, duration: 1.2, ease: 'power1.out' });
    gsap.to('.hero-env-layer--3', { x: x * 14, y: y * 7, duration: 1.2, ease: 'power1.out' });
    gsap.to('.backdrop-line, .backdrop-node', { x: x * 6, y: y * 3, duration: 1.4, ease: 'power1.out' });
  }, []);

  return (
    <section className="hero section-anchor" id="home" ref={heroRef} onMouseMove={onMouseMove}>
      {/* Environment layers (depth 1-3) */}
      <div className="hero-env-layer hero-env-layer--1 hero-bg" style={{ backgroundImage: "url('/herolanding.png')" }} />
      <div className="hero-env-layer hero-env-layer--2">
        <HeroEnvironment />
      </div>
      <div className="hero-env-layer hero-env-layer--3">
        {/* Blueprint backdrop */}
        <div className="blueprint-backdrop">
          <div className="blueprint-backdrop__grid" />
          <span className="backdrop-line backdrop-line--one" />
          <span className="backdrop-line backdrop-line--two" />
          <span className="backdrop-line backdrop-line--three" />
          <span className="backdrop-line backdrop-line--four" />
          <span className="backdrop-node backdrop-node--one" />
          <span className="backdrop-node backdrop-node--two" />
          <TL className="backdrop-label backdrop-label--one">SYS. 04.02.26</TL>
          <TL className="backdrop-label backdrop-label--two">LAT 25°12' / LONG 55°16'</TL>
          <TL className="backdrop-label backdrop-label--three">ARCHITECTURE / 001</TL>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* HTML layer */}
      <div className="hero__layout">
        {/* LEFT — Brand + Headline */}
        <div className="hero__left">
          <TL className="hero__system-label hero__subtext">// TECHNO VERSATILE — SYSTEM ACTIVE</TL>
          <h1 className="hero__headline">TECHNO<br />VERSATILE</h1>
          <p className="hero__tagline">TECHNOLOGICALLY<br />CAPABLE IN MANY<br />DIFFERENT AREAS</p>
          <p className="hero__desc hero__subtext">We build, design, and deliver technology solutions across software, hardware, AI, automation and beyond.</p>
          <div className="hero__cta">
            <a className="tv-cta tv-cta--primary" href="#services">EXPLORE SOLUTIONS <ArrowRight size={13} /></a>
            <a className="tv-cta tv-cta--ghost" href="#about">OUR APPROACH</a>
          </div>
        </div>

        {/* CENTRE — spacer for environment to breathe */}
        <div className="hero__centre" />

        {/* RIGHT — Industry copy */}
        <div className="hero__right-copy">
          <TL className="hero__subtext" style={{ marginBottom: '20px', display: 'block' }}>03 / MULTI-DOMAIN</TL>
          <h2>MULTIPLE<br />INDUSTRIES<br /><span>ONE VISION</span></h2>
          <p>Six technology disciplines. One versatile team. We connect disciplines, people and systems to create solutions that are as adaptable as the challenges they solve.</p>
          <a className="tv-link" href="#industries">VIEW INDUSTRIES <ArrowRight size={11} /></a>
        </div>

      </div>
    </section>
  );
}

/* ─── About Section ──────────────────────────────────────────── */
function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const stages = ['IDEA', 'DESIGN', 'ENGINEERING', 'DEVELOPMENT', 'INTEGRATION', 'DEPLOYMENT', 'REAL-WORLD SOLUTION'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-step', { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.process-diagram', start: 'top 80%' },
      });
      gsap.fromTo('.about__copy', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
      // Animate the path line
      gsap.fromTo('.process-step__line', { scaleX: 0 }, {
        scaleX: 1, stagger: 0.12, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.process-diagram', start: 'top 80%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about section-anchor" id="about" ref={ref}>
      <div className="section-heading">
        <TL>01 / OUR APPROACH</TL>
        <h2>One core.<br /><em>Many</em> possibilities.</h2>
      </div>
      <div className="about__body">
        <div className="process-diagram">
          {stages.map((stage, index) => (
            <div className="process-step" key={stage}>
              <span className="process-step__index">0{index + 1}</span>
              <strong>{stage}</strong>
              {index < stages.length - 1 && <span className="process-step__connector" />}
              <span className="process-step__line" />
            </div>
          ))}
        </div>
        <div className="about__copy">
          <p>Techno Versatile is a technology ecosystem built to move ideas from the first spark to the real world. We connect disciplines, people and systems to create solutions that are as adaptable as the challenges they solve.</p>
          <p>From embedded hardware to cloud infrastructure, from AI intelligence to immersive AR — we are one team spanning many capabilities.</p>
          <a className="tv-link" href="#services">OUR CAPABILITIES <ArrowRight size={13} /></a>
        </div>
      </div>
    </section>
  );
}

/* ─── Service Panel ──────────────────────────────────────────── */
function ServicePanel({ service, onSelect }: { service: Service; onSelect: (s: Service) => void }) {
  const panelRef = useRef<HTMLElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = panelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <article
      ref={panelRef}
      className="service-panel"
      style={{ '--service-accent': service.accent, '--service-accent-rgb': service.accentRgb } as React.CSSProperties}
      onClick={() => onSelect(service)}
      onMouseMove={onMouseMove}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(service)}
      aria-label={`Explore ${service.title}`}
    >
      {/* Glow spotlight following cursor */}
      <div className="service-panel__glow" />

      <div className="service-panel__head">
        <TL>{service.number} / 06</TL>
        <span className="service-status"><i />&nbsp;SYSTEM READY</span>
      </div>

      <div className="service-panel__art">
        <BlueprintArt kind={service.kind} accent={service.accent} />
      </div>

      <div className="service-panel__body">
        <span className="service-number">{service.number}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-panel__labels">
          {service.labels.slice(0, 4).map((label) => (
            <span key={label}><i />{label}</span>
          ))}
        </div>
      </div>

      <div className="service-panel__footer">
        <button className="sv-cta">EXPLORE <ChevronRight size={11} /></button>
        <span className="service-panel__corner">{service.number} <span>/</span> 06</span>
      </div>
    </article>
  );
}

/* ─── Services Section ───────────────────────────────────────── */
function ServicesSection({ onSelect }: { onSelect: (s: Service) => void }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-panel', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.services__grid', start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="services section-anchor" id="services" ref={ref}>
      <div className="services__intro">
        <div>
          <TL>02 / CAPABILITIES</TL>
          <h2>Different domains.<br /><em>One</em> integrated approach.</h2>
        </div>
        <div className="services__meta">
          <p>Six technology disciplines. One versatile team.</p>
          <div className="services__index">
            <span>01</span><i /><span>06</span>
          </div>
        </div>
      </div>

      <div className="services__grid">
        {services.map((service) => (
          <ServicePanel key={service.id} service={service} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

/* ─── Industries Section ─────────────────────────────────────── */
const industries = ['EDUCATION', 'HEALTHCARE', 'MANUFACTURING', 'RETAIL', 'LOGISTICS', 'AGRICULTURE', 'REAL ESTATE', 'STARTUPS'];

function IndustriesSection() {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.industry-node', { opacity: 0, scale: 0.8 }, {
        opacity: 1, scale: 1, stagger: 0.08, duration: 0.6, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.industry-map', start: 'top 80%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="industries section-anchor" id="industries" ref={ref}>
      <div className="section-heading">
        <TL>03 / THE NETWORK</TL>
        <h2>Built for<br /><em>real-world</em> impact.</h2>
      </div>
      <div className="industries__body">
        <div className="industry-map">
          <div className="industry-map__rings" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          {/* Animated SVG connections */}
          <svg className="industry-map__connections" viewBox="0 0 480 480" aria-hidden="true">
            {industries.map((_, i) => {
              const angle = (i / industries.length) * Math.PI * 2 - Math.PI / 2;
              const r = 200;
              const x = 240 + r * Math.cos(angle);
              const y = 240 + r * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1="240" y1="240"
                  x2={x} y2={y}
                  stroke={active === industries[i] ? 'rgba(67,240,176,0.6)' : 'rgba(67,240,176,0.12)'}
                  strokeWidth={active === industries[i] ? 1.5 : 0.8}
                  strokeDasharray="4 6"
                  style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                />
              );
            })}
          </svg>
          <div className="industry-map__core">
            <span className="core-pulse" />
            <strong>TV</strong>
            <small>TECH CORE</small>
          </div>
          {industries.map((industry, index) => (
            <div
              className={`industry-node industry-node--${index + 1} ${active === industry ? 'is-active' : ''}`}
              key={industry}
              onMouseEnter={() => setActive(industry)}
              onMouseLeave={() => setActive(null)}
            >
              <i />
              {industry}
              <span>0{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="industries__aside">
          <p>From learning to logistics, we apply the right technology to the right context. Our cross-domain expertise means we don't just build solutions — we understand the environments they operate in.</p>
          <a className="tv-link" href="#contact" style={{ marginTop: '24px', display: 'inline-flex' }}>START A PROJECT <ArrowRight size={13} /></a>
        </div>
      </div>
    </section>
  );
}

/* ─── Works Section ──────────────────────────────────────────── */
const projects = [
  { number: '01', name: 'NEXUS / LEARNING', type: 'EDUCATION / AR + AI', detail: 'An immersive training environment that makes complex systems easier to understand.', kind: 'ar' as const },
  { number: '02', name: 'ORBIT / OPERATIONS', type: 'LOGISTICS / SOFTWARE + IOT', detail: 'A connected command layer for moving people, products and decisions.', kind: 'software' as const },
  { number: '03', name: 'FORGE / FACTORY', type: 'MANUFACTURING / ROBOTICS', detail: 'Intelligent automation that gives teams more precision and more possibility.', kind: 'robotics' as const },
];

function WorksSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.works__grid', start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="works section-anchor" id="works" ref={ref}>
      <div className="works__top">
        <div className="section-heading" style={{ marginBottom: 0 }}>
          <TL>04 / SELECTED WORKS</TL>
          <h2>Ideas made<br /><em>tangible.</em></h2>
        </div>
        <p className="works__desc">We create technology that has a job to do — then make it feel inevitable.</p>
      </div>
      <div className="works__grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card__meta">
              <TL>{project.number} / CASE STUDY</TL>
              <span>{project.type}</span>
            </div>
            <div className="project-card__art">
              <BlueprintArt kind={project.kind} />
            </div>
            <div className="project-card__info">
              <h3>{project.name}</h3>
              <p>{project.detail}</p>
              <button className="sv-cta" style={{ marginTop: '16px' }}>VIEW PROJECT <ArrowRight size={11} /></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Contact Section ────────────────────────────────────────── */
function ContactSection() {
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact__content', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="contact section-anchor" id="contact" ref={ref}>
      <div className="contact__env" aria-hidden="true">
        <div className="contact__grid-lines">
          {[0,1,2,3].map(i => <span key={i} />)}
        </div>
      </div>
      <div className="contact__content">
        <div className="contact__headline">
          <TL>05 / START A CONVERSATION</TL>
          <h2>LET'S BUILD<br /><em>WHAT'S NEXT.</em></h2>
          <p>Have an idea, challenge or technology requirement? Let's turn it into a real-world solution.</p>
          <a className="tv-cta tv-cta--primary" href="mailto:hello@technoversatile.com">START A PROJECT <Send size={13} /></a>
        </div>
        <form
          className="contact-form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <TL style={{ marginBottom: '24px', display: 'block' }}>PROJECT BRIEF / INTAKE</TL>
          <label>
            Your name
            <input required placeholder="Enter your name" />
          </label>
          <label>
            Work email
            <input required type="email" placeholder="you@company.com" />
          </label>
          <label>
            How can we help?
            <textarea required placeholder="Tell us a little about your challenge..." rows={3} />
          </label>
          <button className="tv-cta tv-cta--primary" type="submit" style={{ alignSelf: 'flex-start' }}>
            {sent ? <><Check size={13} /> MESSAGE SENT</> : <>SEND ENQUIRY <ArrowRight size={13} /></>}
          </button>
          {sent && <p className="form-success">Thanks — we'll be in touch shortly.</p>}
        </form>
      </div>
    </section>
  );
}

/* ─── Service Modal ──────────────────────────────────────────── */
function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, scale: 0.96, y: 12 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' });
  }, []);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={ref} className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-dialog-title"
        style={{ '--service-accent': service.accent, '--service-accent-rgb': service.accentRgb } as React.CSSProperties}>
        <button className="modal-close" onClick={onClose} aria-label="Close service details"><X size={16} /></button>
        <div className="service-modal__visual">
          <TL>{service.number} / TECHNOLOGY ENVIRONMENT</TL>
          <BlueprintArt kind={service.kind} accent={service.accent} />
        </div>
        <div className="service-modal__details">
          <TL>SYSTEM OVERVIEW / ACTIVE</TL>
          <h2 id="service-dialog-title">{service.title}</h2>
          <p>{service.detail}</p>
          <div className="modal-capabilities">
            {service.labels.map((label) => (
              <span key={label}><Check size={12} /> {label}</span>
            ))}
          </div>
          <a className="tv-cta tv-cta--primary" href="#contact" onClick={onClose}>BUILD WITH US <ArrowRight size={13} /></a>
        </div>
      </div>
    </div>
  );
}

/* ─── App ────────────────────────────────────────────────────── */
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const visibleSections = useMemo(() =>
    sectionIds.map((id) => document.getElementById(id)).filter(Boolean),
  []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] }
    );
    visibleSections.forEach((s) => observer.observe(s as Element));
    return () => observer.disconnect();
  }, [visibleSections]);

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(selectedService || menuOpen));
  }, [selectedService, menuOpen]);

  const bootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bootRef.current) return;
    gsap.to(bootRef.current, {
      opacity: 0, duration: 1.2, delay: 1.5,
      onComplete: () => { if (bootRef.current) bootRef.current.style.display = 'none'; },
    });
  }, []);

  return (
    <div className="app-shell">
      <div ref={bootRef} className="boot-overlay" aria-hidden="true">
        <div className="boot-brand">
          <svg className="brand-icon" viewBox="0 0 32 24" width="48" height="36" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18h6l9-12" />
            <path d="M14 18l9-12" />
          </svg>
        </div>
        <div className="boot-progress-container">
          <div className="boot-progress-bar" />
        </div>
        <div className="boot-text">TECHNO VERSATILE / SYSTEM INITIALIZING</div>
      </div>
      <TopNav onMenu={() => setMenuOpen(true)} />
      <SideNav activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelect={setSelectedService} />
        <IndustriesSection />
        <WorksSection />
        <ContactSection />
      </main>

      <footer>
        <Brand compact />
        <span>© 2026 TECHNO VERSATILE / BUILT ACROSS MANY DOMAINS</span>
        <a href="#home">BACK TO TOP <Plus size={11} /></a>
      </footer>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu is-open">
          <div className="mobile-menu__panel">
            <button className="modal-close" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X size={16} /></button>
            <Brand />
            {navItems.map((item) => (
              <a href={`#${item.target}`} onClick={() => setMenuOpen(false)} key={item.label}>
                {item.label}<ArrowRight size={14} />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Service modal */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
}

export default App;
