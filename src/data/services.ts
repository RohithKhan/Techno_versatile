export type ServiceKind = 'software' | 'hardware' | 'ai' | 'ar' | 'robotics' | 'cloud';

export interface Service {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  positioning: string;
  overview: string;
  capabilities: string[];
  technologies: string[];
  outcomes: string[];
  kind: ServiceKind;
  accent: string;
  accentRgb: string;
  customCta?: string;
  customCtaLink?: string;
}

export const services: Service[] = [
  {
    id: 'software',
    number: '01',
    title: 'Software Development',
    shortTitle: 'SOFTWARE',
    positioning: 'Digital products engineered around real business requirements, from responsive web experiences to connected application systems.',
    overview: 'We architect and build software solutions that perform at scale. By focusing on robust architecture and intuitive user experiences, we deliver digital platforms that connect users, process data, and drive business operations.',
    capabilities: ['WEB APPLICATIONS', 'MOBILE APPLICATIONS', 'API DEVELOPMENT', 'DATABASE SYSTEMS', 'UI/UX', 'ENTERPRISE SOFTWARE'],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python'],
    outcomes: ['Scalable Architecture', 'Responsive Experiences', 'Connected Systems'],
    kind: 'software',
    accent: '#8dddf0',
    accentRgb: '141, 221, 240',
  },
  {
    id: 'hardware',
    number: '02',
    title: 'Hardware & IoT',
    shortTitle: 'HARDWARE',
    positioning: 'From intelligent hardware concepts to connected real-world systems and sensor networks.',
    overview: 'We bridge the gap between physical and digital. Our team engineers custom connected hardware, smart sensors, and embedded systems designed to function seamlessly within larger IoT and automation ecosystems.',
    capabilities: ['EMBEDDED SYSTEMS', 'IoT CONNECTIVITY', 'ELECTRONICS INTEGRATION', 'CONNECTED DEVICES', 'PROTOTYPE DEVELOPMENT'],
    technologies: ['Microcontrollers', 'Sensor Networks', 'Wireless Protocols', 'Custom PCBs'],
    outcomes: ['Real-time Monitoring', 'Physical Automation', 'Data Acquisition'],
    kind: 'hardware',
    accent: '#f0b878',
    accentRgb: '240, 184, 120',
    customCta: 'EXPLORE OUR HARDWARE WORKS',
    customCtaLink: '#hardware-works'
  },
  {
    id: 'ai',
    number: '03',
    title: 'AI & Data Solutions',
    shortTitle: 'AI / DATA',
    positioning: 'Transforming complex data into intelligent automation, processing, and actionable insights.',
    overview: 'We develop intelligent systems that can process, analyze, and automate at scale. Instead of generic wrappers, we focus on custom data processing pipelines and machine learning implementations that solve specific operational challenges.',
    capabilities: ['AI SYSTEMS', 'DATA PROCESSING', 'PREDICTIVE ANALYTICS', 'INTELLIGENT AUTOMATION', 'MACHINE LEARNING', 'CUSTOM AI SOLUTIONS'],
    technologies: ['Python', 'TensorFlow', 'Data Pipelines', 'LLM Integration'],
    outcomes: ['Automated Workflows', 'Data-driven Insights', 'Operational Efficiency'],
    kind: 'ai',
    accent: '#70c8ff',
    accentRgb: '112, 200, 255',
  },
  {
    id: 'ar',
    number: '04',
    title: 'AR / VR Experiences',
    shortTitle: 'AR / VR',
    positioning: 'Immersive visualization and interactive environments for training, simulation, and spatial computing.',
    overview: 'We build digital spaces that humans can interact with naturally. Our immersive technology solutions are utilized for virtual training, architectural simulation, and complex 3D data visualization.',
    capabilities: ['IMMERSIVE VISUALIZATION', 'VIRTUAL TRAINING', 'INTERACTIVE ENVIRONMENTS', '3D EXPERIENCES', 'SIMULATION', 'SPATIAL INTERFACES'],
    technologies: ['Unity', 'Unreal Engine', 'WebXR', 'Spatial Computing'],
    outcomes: ['Enhanced Training', '3D Visualization', 'Interactive Simulation'],
    kind: 'ar',
    accent: '#a9e3e6',
    accentRgb: '169, 227, 230',
  },
  {
    id: 'robotics',
    number: '05',
    title: 'Automation & Robotics',
    shortTitle: 'ROBOTICS',
    positioning: 'Industrial automation, robotic systems, and smart processes that operate physical environments.',
    overview: 'We engineer precision movement and mechanical control. By linking software intelligence with mechanical capabilities, we deploy automated workflows, connected machines, and autonomous systems.',
    capabilities: ['INDUSTRIAL AUTOMATION', 'ROBOTIC SYSTEMS', 'MECHANICAL CONTROL', 'SMART PROCESSES', 'AUTOMATED WORKFLOWS', 'CONNECTED MACHINES'],
    technologies: ['Robotic OS (ROS)', 'Control Systems', 'Actuators', 'Sensors'],
    outcomes: ['Physical Automation', 'Precision Movement', 'Reduced Manual Work'],
    kind: 'robotics',
    accent: '#f4c790',
    accentRgb: '244, 199, 144',
  },
  {
    id: 'cloud',
    number: '06',
    title: 'Cloud & Infrastructure',
    shortTitle: 'CLOUD',
    positioning: 'Scalable cloud architecture, deployment, and security-conscious infrastructure.',
    overview: 'We build the foundation that keeps digital products running. Our infrastructure engineering focuses on scalable architectures, reliable DevOps deployment pipelines, and robust security.',
    capabilities: ['CLOUD ARCHITECTURE', 'DEPLOYMENT', 'APPLICATION INFRASTRUCTURE', 'DEVOPS', 'SCALABLE SYSTEMS', 'SECURITY-CONSCIOUS INFRASTRUCTURE'],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
    outcomes: ['High Availability', 'Rapid Deployment', 'Secure Scaling'],
    kind: 'cloud',
    accent: '#86ddff',
    accentRgb: '134, 221, 255',
  }
];

export const navItems = [
  { label: 'HOME', target: 'home' },
  { label: 'ABOUT', target: 'about' },
  { label: 'SERVICES', target: 'services' },
  { label: 'INDUSTRIES', target: 'industries' },
  { label: 'OUR WORKS', target: 'hardware-works' },
  { label: 'CAREERS', target: 'contact' },
  { label: 'CONTACT', target: 'contact' },
];
