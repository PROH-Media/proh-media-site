import React, { useEffect, useRef } from 'react';

// Ícones vivos: o próprio desenho se move pelo que significa (as mãos se
// cumprimentam, a agulha procura o norte, a caneta escreve). Geometria
// idêntica à da Lucide — só as partes que se movem ganharam classe.
// Loop calmo enquanto o ícone está na tela (pausa fora dela). Cada ícone
// tem a sua fase, para não pulsarem todos ao mesmo tempo.

const DESENHOS: Record<string, () => React.ReactElement> = {
  'compass': () => (<>
    <circle cx="12" cy="12" r="10" />
    <path className="iv-agulha" d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
  </>),
  'fingerprint': () => (<>
    {['M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4', 'M14 13.12c0 2.38 0 6.38-1 8.88', 'M17.29 21.02c.12-.6.43-2.3.5-3.02', 'M2 12a10 10 0 0 1 18-6', 'M2 16h.01', 'M21.8 16c.2-2 .131-5.354 0-6', 'M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2', 'M8.65 22c.21-.66.45-1.32.57-2', 'M9 6.8a6 6 0 0 1 9 5.2v2'].map((d, i) => (
      <path key={i} className="iv-traco" pathLength={1} style={{ '--i': i } as React.CSSProperties} d={d} />
    ))}
  </>),
  'pen-line': () => (<>
    <path className="iv-linha" pathLength={1} d="M12 20h9" />
    <path className="iv-caneta" d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
  </>),
  'trending-up': () => (<>
    <polyline className="iv-grafico" pathLength={1} points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline className="iv-seta" points="16 7 22 7 22 13" />
  </>),
  'monitor-smartphone': () => (<>
    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
    <path d="M10 19v-3.96 3.15" />
    <path d="M7 19h5" />
    <rect className="iv-celular" width="6" height="10" x="16" y="12" rx="2" />
  </>),
  'heart-handshake': () => (<>
    <path className="iv-coracao" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <g className="iv-maos">
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </g>
  </>),
  'briefcase': () => (<g className="iv-maleta">
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </g>),
  'user-round': () => (<>
    <circle className="iv-cabeca" cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </>),
  'landmark': () => (<>
    <line x1="3" x2="21" y1="22" y2="22" />
    {[6, 10, 14, 18].map((x, i) => <line key={x} className="iv-coluna" style={{ '--i': i } as React.CSSProperties} x1={x} x2={x} y1="18" y2="11" />)}
    <polygon className="iv-fronte" points="12 2 20 7 4 7" />
  </>),
  'hand-heart': () => (<>
    <g className="iv-mao">
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 15 6 6" />
    </g>
    <path className="iv-coracao" d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
  </>),
  'message-circle': () => (<>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    {[8, 12, 16].map((x, i) => <circle key={x} className="iv-ponto" style={{ '--i': i } as React.CSSProperties} cx={x} cy="12" r=".9" fill="currentColor" stroke="none" />)}
  </>),
  'sparkles': () => (<>
    <path className="iv-estrela" d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <g className="iv-brilho" style={{ '--i': 0 } as React.CSSProperties}><path d="M20 3v4" /><path d="M22 5h-4" /></g>
    <g className="iv-brilho" style={{ '--i': 1 } as React.CSSProperties}><path d="M4 17v2" /><path d="M5 18H3" /></g>
  </>),
  'users': () => (<>
    <g className="iv-segundo">
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </g>
    <g className="iv-primeiro">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </g>
  </>),
  'target': () => (<>
    <circle cx="12" cy="12" r="10" />
    <circle className="iv-anel" cx="12" cy="12" r="6" />
    <circle className="iv-centro" cx="12" cy="12" r="2" />
  </>),
  'megaphone': () => (<g className="iv-megafone">
    <path className="iv-boca" d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </g>),
  'chart-column': () => (<>
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path className="iv-barra" style={{ '--i': 2 } as React.CSSProperties} d="M18 17V9" />
    <path className="iv-barra" style={{ '--i': 1 } as React.CSSProperties} d="M13 17V5" />
    <path className="iv-barra" style={{ '--i': 0 } as React.CSSProperties} d="M8 17v-3" />
  </>),
  'lightbulb': () => (<>
    <path className="iv-bulbo" d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <g className="iv-raios">
      <path d="M3 8h1" /><path d="M20 8h1" /><path d="m4.9 2.9.7.7" /><path d="m19.1 2.9-.7.7" />
    </g>
  </>),
  'layers': () => (<>
    <path className="iv-camada" style={{ '--i': 0 } as React.CSSProperties} d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path className="iv-camada" style={{ '--i': 1 } as React.CSSProperties} d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
  </>),
  'mail': () => (<>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path className="iv-aba" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>),
  'globe': () => (<>
    <circle cx="12" cy="12" r="10" />
    <path className="iv-meridiano" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </>),
};

export const ICONES_VIVOS = Object.keys(DESENHOS);

export function IconeVivo({ nome, size = 22, className = '' }: { nome: string; size?: number; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const obs = new IntersectionObserver(([e]) => {
      svg.classList.toggle('is-animando', e.isIntersecting);
    }, { threshold: 0.2 });
    obs.observe(svg);
    return () => obs.disconnect();
  }, []);

  // fase estável por ícone (0 a 2,4 s), derivada do nome
  const fase = (Array.from(nome).reduce((t, c) => t + c.charCodeAt(0), 0) % 7) * 0.4;

  const Desenho = DESENHOS[nome];
  if (!Desenho) return null;
  return (
    <svg ref={ref} viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={`iv iv-${nome} ${className}`} style={{ '--fase': `${fase}s` } as React.CSSProperties} aria-hidden="true">
      <Desenho />
    </svg>
  );
}
