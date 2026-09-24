import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check, ChevronRight, Menu, Send, X, Plus } from 'lucide-react';
import { BlueprintArt } from '@/components/BlueprintArt';
import { navItems, services, type Service } from '@/data/services';
import { SolarTrackerArt, CleaningBotArt, GarbageBotArt, SmartWatchArt, SmartHomeArt } from './components/HardwareArt';
import { ScrollStoryArt } from './components/ScrollStoryArt';

gsap.registerPlugin(ScrollTrigger);

const sectionIds = ['home', 'about', 'services', 'industries', 'works', 'contact'];

/* ─── Brand ─────────────────────────────────────────────────── */
function Brand({ compact = false, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <a href="#home" className={`brand${compact ? ' brand--compact' : ''} ${className}`} aria-label="Techno Versatile home">
      <img src="/tvlogo-2.png" alt="Techno Versatile" className="brand-img" />
    </a>
  );
}

/* ─── Technical Label ────────────────────────────────────────── */
function TL({ children, className = '', ...rest }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={`tl ${className}`} {...rest}>{children}</span>;
}


/* ─── Dynamic Scrub Nav ──────────────────────────────────────── */
function DynamicNav({ activeSection }: { activeSection: string }) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;
    
    const ctx = gsap.context(() => {
      const container = containerRef.current!;
      const items = gsap.utils.toArray('.dynamic-nav__item') as HTMLElement[];
      
      // Calculate dynamic offsets
      const containerW = container.offsetWidth;
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      
      // Move container from center top to left middle (slightly higher)
      const startX = 28 - (winW / 2) + (containerW / 2);
      const startY = (winH / 2) - 130;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '800px top',
          scrub: 1.5,
        }
      });

      tl.from(container, { x: startX, y: startY, ease: 'power2.inOut' }, 0);
      
      const rail = container.querySelector('.dynamic-nav__rail') as HTMLElement;
      if (rail && items.length > 0) {
        rail.style.left = (items[0].offsetLeft + 3) + 'px';
        rail.style.top = '-10px';
        rail.style.height = ((items.length - 1) * 45 + 20) + 'px';
        tl.from(rail, { opacity: 1, duration: 0.15 }, 0);
      }

      // Stack items vertically for the side state
      items.forEach((item, i) => {
        const leftOffset = item.offsetLeft - items[0].offsetLeft;
        tl.from(item, {
          x: -leftOffset,
          y: i * 45,
          ease: 'power2.inOut'
        }, 0);
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav className="dynamic-nav" ref={containerRef} aria-label="Dynamic navigation">
      <div className="dynamic-nav__rail" />
      {navItems.map((item) => (
        <a className={`dynamic-nav__item ${activeSection === item.target ? 'is-active' : ''}`} href={`#${item.target}`} key={item.label}>
          <span className="nav-dot" />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

/* ─── Top Nav ────────────────────────────────────────────────── */
function TopNav({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="top-nav">
      <Brand />
      
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

    const tl = gsap.timeline(); // Intro load
    tl.fromTo(q('.hero-env-layer'), { opacity: 0 }, { opacity: 1, duration: 2, stagger: 0.2 })
      .fromTo(qs('.blueprint-backdrop__grid'), { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1")
      .fromTo(q('.hero__left > *'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=0.5");

    // Cinematic Scroll Story
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '+=1500',
        scrub: 1,
        pin: true,
      }
    });

    scrollTl
      // Stage 1: Hero environment recedes, technical grid expands
      .fromTo(q('.hero-env-layer--1, .hero-env-layer--2'), { opacity: 1, scale: 1 }, { opacity: 0, scale: 1.1, duration: 2 })
      .fromTo(q('.hero__left, .hero__right-copy, .hero__far-right'), { opacity: 1, x: 0 }, { opacity: 0, x: -30, duration: 1 }, 0)
      .fromTo(qs('.blueprint-backdrop__grid'), { scale: 1, opacity: 1 }, { scale: 1.2, opacity: 0.8, duration: 2 }, 0)
      
      // Stage 2: Logo / Core becomes prominent
      .fromTo(topNav, { y: 0, opacity: 1 }, { y: -100, opacity: 0, duration: 1 }, 0)
      .fromTo(sideNav, { x: 0, opacity: 1 }, { x: -100, opacity: 0, duration: 1 }, 0)
      .fromTo(q('.backdrop-node'), { scale: 1, opacity: 1 }, { scale: 4, opacity: 0, duration: 1 }, 1)
      .fromTo(q('.backdrop-line'), { opacity: 1 }, { opacity: 0, duration: 1 }, 1);

    return () => { tl.kill(); scrollTl.kill(); };
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
          <TL className="hero__system-label hero__subtext">// WELCOME TO</TL>
          <h1 className="hero__headline">TECHNO<br />VERSATILE</h1>
          <p className="hero__tagline">TECHNOLOGICALLY<br />CAPABLE IN MANY<br />DIFFERENT AREAS</p>
          <p className="hero__desc hero__subtext">We design and develop technology solutions across software, hardware, AI, connected systems, immersive experiences and automation — bringing different disciplines together to solve real-world problems.</p>
          <div className="hero__cta">
            <a className="tv-cta tv-cta--primary" href="#services">EXPLORE OUR CAPABILITIES <ArrowRight size={13} /></a>
            <a className="tv-cta tv-cta--ghost" href="#works">VIEW OUR WORKS</a>
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
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: '+=3000',
          scrub: 1,
          pin: true,
        }
      });
      scrollTl
        .fromTo('.section-heading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('.about-bg-layer', { opacity: 0, scale: 1.1 }, { opacity: 0.3, scale: 1, duration: 1.5 }, "<")
        .fromTo('.about__block', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, stagger: 0.5 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about section-anchor" id="about" ref={ref} style={{ position: 'relative' }}>
      <div 
        className="about-bg-layer" 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: "url('/about.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          opacity: 0.2, 
          pointerEvents: 'none'
        }} 
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-heading">
          <TL>01 / COMPANY</TL>
          <h2>TECHNOLOGY<br /><em>WITHOUT</em> BOUNDARIES.</h2>
        </div>
        <div className="about__grid">
          <div className="about__block">
            <h3>MULTIDISCIPLINARY ENGINEERING</h3>
            <p>Techno Versatile brings different technology disciplines together rather than treating them as isolated services. From <b>SOFTWARE</b> and <b>HARDWARE</b> to <b>AI</b>, <b>IoT</b>, <b>AR/VR</b>, <b>AUTOMATION</b>, and <b>CLOUD</b>, we are one interconnected engineering ecosystem.</p>
          </div>
          <div className="about__block">
            <h3>FROM IDEA TO IMPLEMENTATION</h3>
            <p>We don't just talk about technology. We build it. Our multidisciplinary team handles the entire lifecycle — taking complex requirements and engineering robust, scalable, and connected solutions.</p>
          </div>
          <div className="about__block">
            <h3>TECHNOLOGY BUILT FOR REAL USE</h3>
            <p>Every system, application, and piece of physical hardware we engineer is designed to solve real-world problems, optimize operations, and create meaningful impact across multiple industries.</p>
          </div>
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
        <p className="service-positioning">{service.positioning}</p>
        
        <div className="service-details">
          <p className="service-overview">{service.overview}</p>
          <div className="service-meta-grid">
            <div className="service-meta-col">
              <TL>CAPABILITIES</TL>
              <ul>
                {service.capabilities.map(c => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="service-meta-col">
              <TL>TECHNOLOGY</TL>
              <ul>
                {service.technologies.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="service-panel__footer">
        <button className="sv-cta">{service.customCta || 'EXPLORE DOMAIN'} <ChevronRight size={11} /></button>
        <span className="service-panel__corner">{service.number} <span>/</span> 06</span>
      </div>
    </article>
  );
}

/* ─── Services Section ───────────────────────────────────────── */
function ServicesSection({ onSelect }: { onSelect: (s: Service) => void }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: '+=1500',
          scrub: 1,
          pin: true,
        }
      });
      
      scrollTl
        .fromTo('.services__intro', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1 })
        .fromTo('.service-panel', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, stagger: 0.3 }, "-=0.5")
        // Technical lines cross-connecting the domains
        .to('.service-panel', { borderColor: 'var(--mint)', duration: 1, stagger: 0.3 }, 1);
        
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
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: '+=3000',
          scrub: 1,
          pin: true,
        }
      });
      scrollTl
        .fromTo('.section-heading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('.industries-bg-layer', { opacity: 0, scale: 1.1 }, { opacity: 0.3, scale: 1, duration: 1.5 }, "<")
        .fromTo('.industry-map__connections', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
        .fromTo('.industry-node', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: 'back.out' }, "-=0.5")
        .fromTo('.industries__aside', { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="industries section-anchor" id="industries" ref={ref} style={{ position: 'relative' }}>
      <div 
        className="industries-bg-layer" 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: "url('/industries.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          opacity: 0.2, 
          pointerEvents: 'none'
        }} 
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
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
      </div>
    </section>
  );
}

/* ─── Hardware Works Section ───────────────────────────────────── */
const hardwareProjects = [
  {
    id: 'solar-tracker',
    number: '01',
    title: '4-Axis Solar Panel with Light Tracker',
    category: 'Solar / Renewable Energy / Embedded Systems',
    overview: 'A solar tracking system designed around multi-axis panel movement and light tracking, allowing the panel orientation to respond to changing light conditions.',
    capabilities: ['4-AXIS MOVEMENT', 'LIGHT TRACKING', 'SOLAR POSITIONING', 'EMBEDDED CONTROL', 'RENEWABLE ENERGY'],
    tags: ['SENSORS', 'ACTUATORS', 'EMBEDDED C', 'CONTROL SYSTEMS'],
    accent: '#f0b878' // warm light
  },
  {
    id: 'cleaning-bot',
    number: '02',
    title: 'Solar Panel Cleaning Bot',
    category: 'Robotics / Solar Maintenance / Automation',
    overview: 'An automated robotic concept designed to assist with solar panel surface cleaning and maintenance.',
    capabilities: ['ROBOTIC CLEANING', 'SOLAR MAINTENANCE', 'AUTOMATION', 'MOTION CONTROL', 'SURFACE CLEANING'],
    tags: ['ROBOTICS', 'MOTORS', 'PATH PLANNING', 'IoT'],
    accent: '#ffffff' // cool white
  },
  {
    id: 'garbage-bot',
    number: '03',
    title: 'Automatic Garbage Disposal Bot',
    category: 'Robotics / Automation / Smart Waste Management',
    overview: 'An automated robotic system designed to support intelligent garbage handling and disposal workflows.',
    capabilities: ['AUTOMATED HANDLING', 'ROBOTICS', 'WASTE MANAGEMENT', 'MOTION SYSTEM', 'SMART DISPOSAL'],
    tags: ['ROBOTICS', 'SENSORS', 'AUTOMATION', 'EMBEDDED'],
    accent: '#d8f0d8' // green / neutral white
  },
  {
    id: 'smart-watch',
    number: '04',
    title: 'Health Monitoring Smart Watch for Drivers',
    category: 'Wearable Technology / IoT / Driver Safety',
    overview: 'A wearable technology concept focused on monitoring driver-related health information through a connected smartwatch interface.',
    capabilities: ['WEARABLE TECHNOLOGY', 'HEALTH MONITORING', 'CONNECTED DEVICE', 'REAL-TIME DATA', 'DRIVER SAFETY'],
    tags: ['WEARABLES', 'SENSORS', 'BLUETOOTH', 'IoT'],
    accent: '#70c8ff' // cool cyan
  },
  {
    id: 'smart-home',
    number: '05',
    title: 'Advanced IoT Home Automation',
    category: 'IoT / Smart Home / Automation',
    overview: 'An interconnected home automation concept that brings devices, controls and household systems into a connected technology environment.',
    capabilities: ['IoT CONNECTIVITY', 'SMART HOME', 'DEVICE CONTROL', 'AUTOMATION', 'CONNECTED SYSTEMS'],
    tags: ['IoT', 'WIRELESS PROTOCOLS', 'HOME AUTOMATION', 'CLOUD'],
    accent: '#8dddf0' // subtle blue-green
  }
];

function HardwareWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProj = hardwareProjects[activeIndex];
  const artContainerRef = useRef<HTMLDivElement>(null);

  // When changing projects, morph the art container slightly
  useEffect(() => {
    if (artContainerRef.current) {
      gsap.fromTo(artContainerRef.current, { scale: 0.98, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' });
    }
  }, [activeIndex]);

  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: '+=1500',
          scrub: 1,
          pin: true,
        }
      });

      scrollTl
        .fromTo('.section-heading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('.hw-nav', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
        .fromTo('.hw-art', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.5 }, "-=0.5")
        .fromTo('.hw-content', { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1 }, "-=1")
        .to('.hw-art', { boxShadow: 'inset 0 0 120px rgba(67,240,176,0.1)', duration: 2 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hardware-works section-anchor" id="hardware-works" ref={sectionRef}>
      <div className="section-heading">
        <TL>04 / ENGINEERING WORKS</TL>
        <h2>From intelligent concepts to<br /><em>connected</em> real-world systems.</h2>
      </div>

      <div className="hw-grid">
        {/* LEFT: Project Navigation */}
        <div className="hw-nav">
          {hardwareProjects.map((proj, idx) => (
            <button 
              key={proj.id} 
              className={`hw-nav-btn ${activeIndex === idx ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <span className="hw-nav-num">{proj.number}</span>
              <span className="hw-nav-title">{proj.title}</span>
            </button>
          ))}
        </div>

        {/* CENTER: Technical Illustration */}
        <div className="hw-art" ref={artContainerRef}>
          {activeIndex === 0 && <SolarTrackerArt active={true} accent={activeProj.accent} />}
          {activeIndex === 1 && <CleaningBotArt active={true} accent={activeProj.accent} />}
          {activeIndex === 2 && <GarbageBotArt active={true} accent={activeProj.accent} />}
          {activeIndex === 3 && <SmartWatchArt active={true} accent={activeProj.accent} />}
          {activeIndex === 4 && <SmartHomeArt active={true} accent={activeProj.accent} />}
        </div>

        {/* RIGHT: Content & Specs */}
        <div className="hw-content">
          <TL>{activeProj.category}</TL>
          <h3>{activeProj.title}</h3>
          <p className="hw-overview">{activeProj.overview}</p>
          
          <div className="hw-capabilities">
            <TL>KEY CAPABILITIES</TL>
            <ul>
              {activeProj.capabilities.map(cap => <li key={cap}><i style={{backgroundColor: activeProj.accent}}/> {cap}</li>)}
            </ul>
          </div>
          
          <div className="hw-footer">
            <div className="hw-tags">
              {activeProj.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <button className="sv-cta" style={{color: activeProj.accent, borderColor: activeProj.accent}}>EXPLORE PROJECT <ArrowRight size={13} /></button>
          </div>
        </div>
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
          <p>{service.overview}</p>
          <div className="modal-capabilities">
            {service.capabilities.map((label: string) => (
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
          <img src="/tvlogo-2.png" alt="Techno Versatile" className="boot-img" />
        </div>
        <div className="boot-progress-container">
          <div className="boot-progress-bar" />
        </div>
        <div className="boot-text">TECHNO VERSATILE / SYSTEM INITIALIZING</div>
      </div>
      
      <ScrollStoryArt />
      
      <TopNav onMenu={() => setMenuOpen(true)} />
      <DynamicNav activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelect={setSelectedService} />
        <IndustriesSection />
        <HardwareWorksSection />
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
