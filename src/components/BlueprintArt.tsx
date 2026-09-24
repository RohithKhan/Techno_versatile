import type { ServiceKind } from '@/data/services';

interface BlueprintArtProps {
  kind: ServiceKind;
  compact?: boolean;
  accent?: string;
}

// Large dimensional CAD-style laptop with perspective
function SoftwareArt({ accent }: { accent?: string }) {
  const col = accent || 'currentColor';
  return (
    <g>
      {/* Grid background */}
      <path d="M60 280 L400 280 L460 200 L120 200 Z" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.15" />
      {/* Laptop base - perspective bottom */}
      <path d="M80 290 L400 290 L420 270 L100 270 Z" fill="none" stroke="currentColor" strokeWidth="1" />
      {/* Keyboard surface lines */}
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1={108 + i*8} y1={278} x2={108 + i*8} y2={282} stroke="currentColor" strokeWidth="0.6" />
      ))}
      {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
        <line key={i} x1={108 + i*22} y1={272} x2={108 + i*22} y2={288} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
      ))}
      {/* Laptop screen housing */}
      <path d="M100 270 L100 80 L380 80 L380 270" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {/* Screen bezel */}
      <rect x="112" y="92" width="256" height="162" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" />
      {/* Screen interior */}
      <rect x="120" y="100" width="240" height="146" rx="1" fill="rgba(0,0,0,0.2)" stroke={col} strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Code window 1 */}
      <rect x="128" y="108" width="108" height="70" rx="2" fill="none" stroke={col} strokeWidth="0.8" />
      <line x1="128" y1="116" x2="236" y2="116" stroke={col} strokeWidth="0.5" strokeOpacity="0.6" />
      <circle cx="135" cy="112" r="2" fill={col} fillOpacity="0.7" />
      <circle cx="143" cy="112" r="2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="151" cy="112" r="2" fill="currentColor" fillOpacity="0.3" />
      {/* Code lines in window 1 */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1={136} y1={124 + i*10} x2={136 + 40 + (i%3)*20} y2={124 + i*10} stroke={col} strokeWidth="0.6" strokeOpacity={0.4 + i*0.08} />
      ))}
      {/* Code window 2 */}
      <rect x="244" y="108" width="108" height="70" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="244" y1="116" x2="352" y2="116" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
      {[0,1,2,3,4].map(i => (
        <line key={i} x1={252} y1={124 + i*10} x2={252 + 30 + (i%4)*18} y2={124 + i*10} stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.25" />
      ))}
      {/* API nodes */}
      <circle cx="150" cy="200" r="8" fill="none" stroke={col} strokeWidth="1" />
      <circle cx="240" cy="210" r="8" fill="none" stroke={col} strokeWidth="1" />
      <circle cx="330" cy="200" r="8" fill="none" stroke={col} strokeWidth="1" />
      <circle cx="150" cy="200" r="3" fill={col} fillOpacity="0.8" />
      <circle cx="240" cy="210" r="3" fill={col} fillOpacity="0.5" />
      <circle cx="330" cy="200" r="3" fill={col} fillOpacity="0.8" />
      {/* Connection lines between nodes */}
      <path d="M158 200 L232 210" fill="none" stroke={col} strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.7" />
      <path d="M248 210 L322 200" fill="none" stroke={col} strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.7" />
      {/* Database bottom */}
      <ellipse cx="240" cy="236" rx="30" ry="8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
      <path d="M210 236 L210 248 Q240 256 270 248 L270 236" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Measurement marks */}
      <path d="M88 80 L88 270" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.2" />
      <path d="M86 80 L90 80 M86 270 L90 270" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M100 72 L380 72" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.2" />
      <path d="M100 70 L100 74 M380 70 L380 74" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Technical labels */}
      <text x="60" y="170" fill="currentColor" fillOpacity="0.25" fontSize="7" letterSpacing="1" fontFamily="monospace">Y: 190px</text>
      <text x="104" y="68" fill="currentColor" fillOpacity="0.25" fontSize="7" letterSpacing="1" fontFamily="monospace">W: 280px</text>
      {/* Data flow animated paths */}
      <path d="M150 200 L150 230 L210 230" fill="none" stroke={col} strokeWidth="1" strokeDasharray="4 5" className="art-flow" />
      <path d="M330 200 L330 230 L270 230" fill="none" stroke={col} strokeWidth="1" strokeDasharray="4 5" className="art-flow art-flow--delay" />
      {/* Corner crosshairs */}
      <path d="M38 68 L52 68 M45 61 L45 75" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <path d="M408 68 L422 68 M415 61 L415 75" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <path d="M38 298 L52 298 M45 291 L45 305" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <path d="M408 298 L422 298 M415 291 L415 305" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
    </g>
  );
}

// Large PCB with isometric perspective
function HardwareArt({ accent }: { accent?: string }) {
  const col = accent || 'currentColor';
  return (
    <g>
      {/* PCB board isometric */}
      <path d="M80 230 L240 140 L400 230 L240 320 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M80 230 L80 245 L240 335 L240 320" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
      <path d="M400 230 L400 245 L240 335 L240 320" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
      {/* PCB grid traces */}
      {[0,1,2,3].map(i => (
        <path key={i} d={`M${120+i*60} ${210-i*18} L${240} ${140+i*45}`} fill="none" stroke={col} strokeWidth="0.5" strokeOpacity="0.25" />
      ))}
      {/* Main chips */}
      <rect x="190" y="190" width="100" height="60" rx="3" fill="none" stroke={col} strokeWidth="1" />
      {/* Chip pins */}
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <line x1={195+i*18} y1={190} x2={195+i*18} y2={182} stroke={col} strokeWidth="0.8" strokeOpacity="0.7" />
          <line x1={195+i*18} y1={250} x2={195+i*18} y2={258} stroke={col} strokeWidth="0.8" strokeOpacity="0.7" />
        </g>
      ))}
      {[0,1,2].map(i => (
        <g key={i}>
          <line x1={190} y1={200+i*20} x2={182} y2={200+i*20} stroke={col} strokeWidth="0.8" strokeOpacity="0.7" />
          <line x1={290} y1={200+i*20} x2={298} y2={200+i*20} stroke={col} strokeWidth="0.8" strokeOpacity="0.7" />
        </g>
      ))}
      <text x="226" y="224" fill={col} fillOpacity="0.7" fontSize="8" letterSpacing="1" fontFamily="monospace" textAnchor="middle">MCU-01</text>
      {/* Smaller chips */}
      <rect x="130" y="170" width="40" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
      <rect x="310" y="185" width="40" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
      {/* Circuit traces */}
      <path d="M170 184 L190 196" fill="none" stroke={col} strokeWidth="0.8" strokeOpacity="0.5" />
      <path d="M290 210 L310 200" fill="none" stroke={col} strokeWidth="0.8" strokeOpacity="0.5" />
      {/* IoT module */}
      <rect x="145" y="255" width="60" height="35" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
      <path d="M155 240 Q175 225 195 240" fill="none" stroke={col} strokeWidth="0.8" strokeOpacity="0.5" />
      <path d="M145 235 Q175 215 205 235" fill="none" stroke={col} strokeWidth="0.6" strokeOpacity="0.3" />
      {/* Data pulse animated */}
      <path d="M290 220 L330 240 L370 240" fill="none" stroke={col} strokeWidth="1" strokeDasharray="4 5" className="art-flow" />
      <path d="M150 184 L130 170 L115 190 L130 198" fill="none" stroke={col} strokeWidth="1" strokeDasharray="4 5" className="art-flow art-flow--delay" />
      {/* Sensor nodes */}
      <circle cx="120" cy="175" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="120" cy="175" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="360" cy="188" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="360" cy="188" r="4" fill="currentColor" fillOpacity="0.3" />
      {/* Corner crosshairs */}
      <path d="M38 128 L52 128 M45 121 L45 135" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <path d="M408 128 L422 128 M415 121 L415 135" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
    </g>
  );
}

// AI neural cube - dimensional
function AiArt({ accent }: { accent?: string }) {
  const col = accent || 'currentColor';
  return (
    <g>
      {/* Outer hexagonal frame */}
      <path d="M230 60 L340 120 L340 240 L230 300 L120 240 L120 120 Z" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* Inner cube */}
      <path d="M230 100 L310 143 L310 230 L230 273 L150 230 L150 143 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
      {/* Cube interior lines */}
      <line x1="230" y1="100" x2="230" y2="273" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="150" y1="143" x2="310" y2="143" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="150" y1="230" x2="310" y2="230" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
      {/* Core */}
      <path d="M230 140 L268 162 L268 205 L230 227 L192 205 L192 162 Z" fill="none" stroke={col} strokeWidth="1.2" />
      <circle cx="230" cy="183" r="18" fill="none" stroke={col} strokeWidth="1" />
      <circle cx="230" cy="183" r="10" fill={col} fillOpacity="0.15" stroke={col} strokeWidth="0.8" />
      <circle cx="230" cy="183" r="4" fill={col} fillOpacity="0.8" />
      {/* Neural connection nodes */}
      <circle cx="150" cy="143" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="310" cy="143" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="150" cy="230" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="310" cy="230" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="230" cy="100" r="6" fill="none" stroke={col} strokeWidth="0.8" strokeOpacity="0.7" />
      <circle cx="230" cy="273" r="6" fill="none" stroke={col} strokeWidth="0.8" strokeOpacity="0.7" />
      {/* Connection lines from core to nodes */}
      <line x1="230" y1="165" x2="156" y2="143" stroke={col} strokeWidth="0.7" strokeOpacity="0.5" />
      <line x1="230" y1="165" x2="304" y2="143" stroke={col} strokeWidth="0.7" strokeOpacity="0.5" />
      <line x1="230" y1="200" x2="156" y2="230" stroke={col} strokeWidth="0.7" strokeOpacity="0.5" />
      <line x1="230" y1="200" x2="304" y2="230" stroke={col} strokeWidth="0.7" strokeOpacity="0.5" />
      <line x1="230" y1="165" x2="230" y2="106" stroke={col} strokeWidth="0.7" strokeOpacity="0.5" />
      <line x1="230" y1="200" x2="230" y2="267" stroke={col} strokeWidth="0.7" strokeOpacity="0.5" />
      {/* Data streams */}
      <path d="M80 183 L192 183" fill="none" stroke={col} strokeWidth="1" strokeDasharray="4 5" className="art-flow" />
      <path d="M268 183 L380 183" fill="none" stroke={col} strokeWidth="1" strokeDasharray="4 5" className="art-flow art-flow--delay" />
      {/* Layer lines */}
      <path d="M90 280 L160 260 M300 260 L380 280" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
      {/* Corner crosshairs */}
      <path d="M38 68 L52 68 M45 61 L45 75" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <path d="M408 68 L422 68 M415 61 L415 75" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
    </g>
  );
}

// VR Headset with spatial environment
function ArArt({ accent }: { accent?: string }) {
  const col = accent || 'currentColor';
  return (
    <g>
      {/* Spatial grid */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1={80 + i*75} y1={280} x2={80 + i*75 + 40} y2={200} stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.15" />
      ))}
      {[0,1,2,3].map(i => (
        <line key={i} x1={80} y1={200 + i*20} x2={380} y2={200 + i*20} stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.12" />
      ))}
      {/* VR headset main body */}
      <path d="M110 130 Q115 90 165 88 L295 88 Q345 90 350 130 L360 185 Q358 215 320 215 L290 215 Q265 230 230 230 Q195 230 170 215 L140 215 Q102 215 100 185 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {/* Lens left */}
      <ellipse cx="185" cy="160" rx="42" ry="36" fill="none" stroke={col} strokeWidth="1" />
      <ellipse cx="185" cy="160" rx="28" ry="24" fill="none" stroke={col} strokeWidth="0.7" strokeOpacity="0.5" />
      <ellipse cx="185" cy="160" rx="14" ry="12" fill={col} fillOpacity="0.1" stroke={col} strokeWidth="0.5" />
      {/* Lens right */}
      <ellipse cx="275" cy="160" rx="42" ry="36" fill="none" stroke={col} strokeWidth="1" />
      <ellipse cx="275" cy="160" rx="28" ry="24" fill="none" stroke={col} strokeWidth="0.7" strokeOpacity="0.5" />
      <ellipse cx="275" cy="160" rx="14" ry="12" fill={col} fillOpacity="0.1" stroke={col} strokeWidth="0.5" />
      {/* Bridge */}
      <path d="M227 148 L233 148" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Head strap */}
      <path d="M110 150 Q80 150 75 170 Q70 200 100 205" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M350 150 Q380 150 385 170 Q390 200 360 205" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      {/* Tracking dots */}
      <circle cx="130" cy="110" r="4" fill="none" stroke={col} strokeWidth="0.8" strokeOpacity="0.7" />
      <circle cx="330" cy="110" r="4" fill="none" stroke={col} strokeWidth="0.8" strokeOpacity="0.7" />
      <circle cx="230" cy="92" r="4" fill="none" stroke={col} strokeWidth="0.8" strokeOpacity="0.7" />
      {/* Tracking lines */}
      <path d="M130 114 L185 155" fill="none" stroke={col} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 3" />
      <path d="M330 114 L275 155" fill="none" stroke={col} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 3" />
      {/* Virtual panels floating */}
      <rect x="68" y="240" width="80" height="50" rx="2" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <rect x="312" y="245" width="80" height="50" rx="2" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="68" y1="250" x2="148" y2="250" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.3" />
      <line x1="312" y1="255" x2="392" y2="255" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.3" />
      {/* Data connection to panels */}
      <path d="M120 215 L108 240" fill="none" stroke={col} strokeWidth="0.8" strokeDasharray="3 4" className="art-flow" />
      <path d="M340 215 L352 245" fill="none" stroke={col} strokeWidth="0.8" strokeDasharray="3 4" className="art-flow art-flow--delay" />
      {/* Corner crosshairs */}
      <path d="M38 68 L52 68 M45 61 L45 75" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <path d="M408 298 L422 298 M415 291 L415 305" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
    </g>
  );
}

// Industrial robotic arm - large and detailed
function RoboticsArt({ accent }: { accent?: string }) {
  const col = accent || 'currentColor';
  return (
    <g>
      {/* Work surface / platform */}
      <path d="M60 285 L420 285" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M80 285 L80 295 M420 285 L420 295" fill="none" stroke="currentColor" strokeWidth="0.8" />
      {/* Platform grid */}
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1={80 + i*56} y1={285} x2={80 + i*56} y2={292} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
      ))}
      {/* Base mount */}
      <rect x="190" y="268" width="80" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="205" y="260" width="50" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="0.8" />
      {/* Lower arm joint */}
      <circle cx="230" cy="255" r="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="230" cy="255" r="7" fill="none" stroke={col} strokeWidth="0.8" />
      <circle cx="230" cy="255" r="3" fill={col} fillOpacity="0.7" />
      {/* Lower arm */}
      <path d="M222 248 L180 185" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.15" />
      <path d="M222 248 L180 185" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="218" y1="247" x2="176" y2="184" stroke={col} strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Elbow joint */}
      <circle cx="178" cy="182" r="16" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="178" cy="182" r="9" fill="none" stroke={col} strokeWidth="0.8" />
      <circle cx="178" cy="182" r="4" fill={col} fillOpacity="0.7" />
      {/* Upper arm */}
      <path d="M170 175 L270 128" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.15" />
      <path d="M170 175 L270 128" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="172" y1="171" x2="272" y2="124" stroke={col} strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Wrist joint */}
      <circle cx="272" cy="125" r="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="272" cy="125" r="7" fill="none" stroke={col} strokeWidth="0.8" />
      <circle cx="272" cy="125" r="3" fill={col} fillOpacity="0.7" />
      {/* Forearm */}
      <path d="M280 120 L330 90" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.15" />
      <path d="M280 120 L330 90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Tool head */}
      <path d="M328 82 L342 72 L356 90 L342 100 Z" fill="none" stroke={col} strokeWidth="1.2" />
      <circle cx="342" cy="86" r="5" fill="none" stroke={col} strokeWidth="0.8" />
      {/* Automation path arcs */}
      <path d="M342 86 Q370 60 380 90 Q385 120 360 140" fill="none" stroke={col} strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.5" className="art-flow" />
      {/* Measurement annotations */}
      <path d="M80 150 L160 150" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.2" />
      <path d="M80 148 L80 152 M160 148 L160 152" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.25" />
      <text x="84" y="146" fill="currentColor" fillOpacity="0.2" fontSize="7" letterSpacing="1" fontFamily="monospace">θ1: 45°</text>
      {/* Second arm ghost path */}
      <path d="M230 255 L200 195 L290 158 L340 130" fill="none" stroke={col} strokeWidth="0.5" strokeDasharray="2 4" strokeOpacity="0.2" />
      {/* Corner crosshairs */}
      <path d="M38 68 L52 68 M45 61 L45 75" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <path d="M408 68 L422 68 M415 61 L415 75" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
    </g>
  );
}

// Cloud / server infrastructure
function CloudArt({ accent }: { accent?: string }) {
  const col = accent || 'currentColor';
  return (
    <g>
      {/* Server racks */}
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={90 + i * 60} y={180} width={44} height={100} rx="2" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity={0.5 + i * 0.1} />
          {[0,1,2,3,4].map(j => (
            <g key={j}>
              <rect x={95 + i * 60} y={187 + j * 18} width={34} height={12} rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
              <circle cx={103 + i * 60} cy={193 + j * 18} r="2" fill={j % 2 === 0 ? col : 'currentColor'} fillOpacity={j % 2 === 0 ? 0.8 : 0.2} />
            </g>
          ))}
        </g>
      ))}
      {/* Cloud shape */}
      <path d="M240 100 Q240 68 270 70 Q278 48 302 52 Q318 38 336 52 Q360 48 362 70 Q382 72 380 92 Q380 112 360 112 L240 112 Q218 112 218 94 Q218 78 240 100 Z" fill="none" stroke={col} strokeWidth="1.2" />
      {/* Cloud internal lines */}
      <path d="M235 95 L375 95" fill="none" stroke={col} strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M300 70 L300 112" fill="none" stroke={col} strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Network connections from cloud to servers */}
      <path d="M240 112 L190 175" fill="none" stroke={col} strokeWidth="0.8" strokeDasharray="4 5" className="art-flow" />
      <path d="M300 112 L250 178" fill="none" stroke={col} strokeWidth="0.8" strokeDasharray="4 5" className="art-flow" />
      <path d="M360 112 L310 178" fill="none" stroke={col} strokeWidth="0.8" strokeDasharray="4 5" className="art-flow art-flow--delay" />
      {/* Right side data paths */}
      <path d="M330 230 L360 240 L390 220 L390 180 L375 165" fill="none" stroke={col} strokeWidth="0.8" strokeDasharray="3 4" className="art-flow art-flow--delay" />
      {/* Network node on right */}
      <circle cx="390" cy="170" r="10" fill="none" stroke={col} strokeWidth="1" />
      <circle cx="390" cy="170" r="4" fill={col} fillOpacity="0.7" />
      {/* Node connections */}
      <path d="M392 162 L380 140 L360 138" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
      <path d="M398 170 L420 175 L420 210" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
      {/* Data load bars */}
      <rect x="350" y="200" width="50" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="350" y="200" width="32" height="8" rx="1" fill={col} fillOpacity="0.2" />
      <rect x="350" y="214" width="50" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="350" y="214" width="18" height="8" rx="1" fill={col} fillOpacity="0.2" />
      {/* Corner crosshairs */}
      <path d="M38 68 L52 68 M45 61 L45 75" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <path d="M408 298 L422 298 M415 291 L415 305" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
    </g>
  );
}

const artMap: Record<ServiceKind, (props: { accent?: string }) => JSX.Element> = {
  software: SoftwareArt,
  hardware: HardwareArt,
  ai: AiArt,
  ar: ArArt,
  robotics: RoboticsArt,
  cloud: CloudArt,
};

export function BlueprintArt({ kind, compact = false, accent }: BlueprintArtProps) {
  const Art = artMap[kind];

  return (
    <svg
      className={`blueprint-art${compact ? ' blueprint-art--compact' : ''}`}
      viewBox="0 0 460 340"
      aria-hidden="true"
    >
      <defs>
        <pattern id={`grid-${kind}-${compact ? 'c' : 'f'}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeOpacity=".08" strokeWidth=".6" />
        </pattern>
      </defs>
      <rect width="460" height="340" fill={`url(#grid-${kind}-${compact ? 'c' : 'f'})`} />
      <Art accent={accent} />
    </svg>
  );
}
