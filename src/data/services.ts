export type ServiceKind = 'software' | 'hardware' | 'ai' | 'ar' | 'robotics' | 'cloud';

export interface Service {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  labels: string[];
  kind: ServiceKind;
  accent: string;
  accentRgb: string;
}

export const services: Service[] = [
  {
    id: 'software',
    number: '01',
    title: 'Software Development',
    shortTitle: 'SOFTWARE',
    description: 'Modern software for a connected world.',
    detail: 'Full-cycle software engineering from concept to deployment. We architect scalable web applications, mobile experiences, and enterprise systems that move businesses forward.',
    labels: ['WEB APPS', 'MOBILE APPS', 'API DESIGN', 'DATABASE', 'UI/UX DESIGN', 'ENTERPRISE SYSTEMS'],
    kind: 'software',
    accent: '#8dddf0',
    accentRgb: '141, 221, 240',
  },
  {
    id: 'hardware',
    number: '02',
    title: 'Hardware & IoT',
    shortTitle: 'HARDWARE',
    description: 'From concept to connected devices.',
    detail: 'We design, prototype, and manufacture intelligent hardware systems. From PCB layout to embedded firmware, we connect the physical and digital worlds.',
    labels: ['PCB DESIGN', 'EMBEDDED SYSTEMS', 'IoT INTEGRATION', 'SENSOR NETWORKS', 'CONNECTIVITY'],
    kind: 'hardware',
    accent: '#f0b878',
    accentRgb: '240, 184, 120',
  },
  {
    id: 'ai',
    number: '03',
    title: 'AI & Data Solutions',
    shortTitle: 'AI / DATA',
    description: 'Turning data into intelligent possibilities.',
    detail: 'Machine learning pipelines, predictive analytics, and custom AI model development. We transform raw data into actionable intelligence that drives real decisions.',
    labels: ['MACHINE LEARNING', 'DATA ANALYTICS', 'AI AUTOMATION', 'CUSTOM AI MODELS', 'DATA PROCESSING'],
    kind: 'ai',
    accent: '#70c8ff',
    accentRgb: '112, 200, 255',
  },
  {
    id: 'ar',
    number: '04',
    title: 'AR / VR Experiences',
    shortTitle: 'AR / VR',
    description: 'Immersive solutions for real impact.',
    detail: 'Spatial computing experiences that bridge physical and virtual environments. From industrial training simulations to immersive product visualization.',
    labels: ['VIRTUAL TRAINING', 'SPATIAL COMPUTING', 'IMMERSIVE VISUALIZATION', 'INTERACTIVE LEARNING'],
    kind: 'ar',
    accent: '#a9e3e6',
    accentRgb: '169, 227, 230',
  },
  {
    id: 'robotics',
    number: '05',
    title: 'Automation & Robotics',
    shortTitle: 'ROBOTICS',
    description: 'Smarter systems for a productive future.',
    detail: 'Industrial automation, robotic integration, and intelligent manufacturing systems. We engineer precision movement and autonomous decision-making at scale.',
    labels: ['INDUSTRIAL AUTOMATION', 'ROBOTIC INTEGRATION', 'SMART MANUFACTURING', 'CONTROL SYSTEMS'],
    kind: 'robotics',
    accent: '#f4c790',
    accentRgb: '244, 199, 144',
  },
  {
    id: 'cloud',
    number: '06',
    title: 'Cloud & Infrastructure',
    shortTitle: 'CLOUD',
    description: 'Scalable, secure and future-ready.',
    detail: 'Cloud architecture, DevOps pipelines, and managed infrastructure that scales with your ambitions. Security-first systems built for resilience and performance.',
    labels: ['CLOUD ARCHITECTURE', 'DEVOPS & CI/CD', 'SECURITY', 'SCALABILITY', 'MANAGED INFRASTRUCTURE'],
    kind: 'cloud',
    accent: '#86ddff',
    accentRgb: '134, 221, 255',
  },
];

export const navItems = [
  { label: 'HOME', target: 'home' },
  { label: 'ABOUT', target: 'about' },
  { label: 'SERVICES', target: 'services' },
  { label: 'INDUSTRIES', target: 'industries' },
  { label: 'OUR WORKS', target: 'works' },
  { label: 'CAREERS', target: 'contact' },
  { label: 'CONTACT', target: 'contact' },
];
