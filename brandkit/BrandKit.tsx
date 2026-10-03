import React, { useEffect, useState } from 'react';
import {
  Check, Copy, Download, X, ArrowUpRight, Compass, Fingerprint, PenLine, TrendingUp,
  MonitorSmartphone, HeartHandshake, Briefcase, UserRound, Landmark, HandHeart,
  MessageCircle, Sparkles, Mail, Globe, Users, Target, Megaphone, BarChart3, Lightbulb, Layers,
} from 'lucide-react';
import { Proh, Ondas, Rede, Direcao, Subida } from '../v2/AppV2';

// ==========================================================================
// DADOS DA MARCA
// ==========================================================================
const CAPITULOS = [
  ['essencia', 'Essência'], ['voz', 'Tom de voz'], ['logo', 'Logo'], ['cores', 'Cores'],
  ['tipografia', 'Tipografia'], ['elementos', 'Elementos gráficos'], ['fotografia', 'Fotografia'],
  ['texturas', 'Ruído e onda'], ['icones', 'Iconografia'], ['aplicacoes', 'Aplicações'], ['downloads', 'Downloads'],
];

const CORES = [
  { nome: 'Preto', hex: '#0F0F15', rgb: '15, 15, 21', cmyk: '29, 29, 0, 92', papel: 'Base escura, texto, contraste máximo', texto: '#D8D4BD' },
  { nome: 'Off-white', hex: '#D8D4BD', rgb: '216, 212, 189', cmyk: '0, 2, 12, 15', papel: 'Superfície principal da marca', texto: '#0F0F15' },
  { nome: 'Branco', hex: '#FFFFFF', rgb: '255, 255, 255', cmyk: '0, 0, 0, 0', papel: 'Respiro, cartões, destaques', texto: '#0F0F15' },
];

// Tons extraídos das próprias fotografias e texturas da marca
const APOIO = [
  { nome: 'Terracota', hex: '#C2643A', rgb: '194, 100, 58', origem: 'barro, tijolo, cerâmica', texto: '#FFFFFF' },
  { nome: 'Caramelo', hex: '#C69A6C', rgb: '198, 154, 108', origem: 'madeira clara, pele, luz de fim de tarde', texto: '#0F0F15' },
  { nome: 'Barro', hex: '#703F20', rgb: '112, 63, 32', origem: 'cerâmica, couro, terra', texto: '#FFFFFF' },
  { nome: 'Oliva', hex: '#505140', rgb: '80, 81, 64', origem: 'plantas, linho, tecido', texto: '#FFFFFF' },
];

const CONTRASTES = [
  ['Preto', '#0F0F15', 'Off-white', '#D8D4BD', '12,8', 'AAA'],
  ['Preto', '#0F0F15', 'Branco', '#FFFFFF', '19,1', 'AAA'],
  ['Off-white', '#D8D4BD', 'Preto', '#0F0F15', '12,8', 'AAA'],
  ['Preto', '#0F0F15', 'Caramelo', '#C69A6C', '7,5', 'AAA'],
  ['Branco', '#FFFFFF', 'Barro', '#703F20', '8,7', 'AAA'],
  ['Branco', '#FFFFFF', 'Oliva', '#505140', '8,1', 'AAA'],
  ['Preto', '#0F0F15', 'Terracota', '#C2643A', '4,7', 'AA'],
  ['Branco', '#FFFFFF', 'Terracota', '#C2643A', '4,1', 'Só títulos'],
];

// Convenção dos arquivos: PH = abreviada · PROH = completa · s-media = sem
// a palavra MEDIA · bg = com fundo (a cor no nome é a do fundo)
const LOGOS = [
  ['proh-black', 'claro'], ['proh-black-s-media', 'claro'], ['proh-black-white', 'claro'], ['proh-black-white-s-media', 'claro'],
  ['proh-white', 'escuro'], ['proh-white-s-media', 'escuro'], ['proh-white-off', 'escuro'], ['proh-white-off-s-media', 'escuro'],
  ['proh-off', 'escuro'], ['proh-off-s-media', 'escuro'], ['proh-bg-black', 'neutro'], ['proh-bg-off', 'neutro'],
  ['ph-black-white', 'claro'], ['ph-black-white-s-media', 'claro'], ['ph-white-off', 'escuro'], ['ph-white-off-s-media', 'escuro'],
  ['ph-bg-black', 'neutro'], ['ph-bg-off', 'neutro'],
];

const FOTOS = [
  ['estrategia-equipe-parede', 'Estratégia em equipe', 'Processo real: referências, rascunhos, conversa.'],
  ['empreendedora-atelie', 'Valor real', 'Quem faz bem e merece ser visto.'],
  ['criacao-conteudo', 'Bastidores do conteúdo', 'Produção próxima, artesanal e cuidadosa.'],
  ['conversa-cliente', 'Proximidade', 'Toda parceria começa com uma conversa.'],
  ['projeto-social-horta', 'Impacto com dignidade', 'Comunidade protagonista, nunca vítima.'],
  ['retrato-lideranca', 'Liderança', 'Retrato ambiental, olhar direto e sereno.'],
];



// ==========================================================================
export default function BrandKit() {
  const [ativo, setAtivo] = useState('essencia');

  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setAtivo(e.target.id)), { rootMargin: '-30% 0px -60% 0px' });
    CAPITULOS.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-[#D8D4BD] text-[#0F0F15] min-h-screen">
      {/* ---------- CAPA ---------- */}
      <header className="v2-grao relative overflow-hidden bg-[#0F0F15] text-[#D8D4BD] min-h-[92vh] flex flex-col">
        <Ondas className="w-[90rem] -right-[38rem] top-1/2 -translate-y-1/2 text-[#D8D4BD]/40" aneis={8} animado dur={18} />
        <div className="relative max-w-6xl w-full mx-auto px-6 md:px-12 pt-10 flex items-center justify-between">
          <img src="/SVG/proh-white-off.svg" alt="PROH Media" className="h-10" />
          <span className="v2-etiqueta"><b />Uso interno · v1.0</span>
        </div>
        <div className="relative max-w-6xl w-full mx-auto px-6 md:px-12 my-auto py-20">
          <p className="v2-rotulo is-escuro mb-6"><span className="v2-linha-h" aria-hidden="true"><i /></span>Sistema de identidade</p>
          <h1 className="text-6xl sm:text-7xl md:text-[8.5rem] font-black tracking-tighter leading-[0.88] text-white mb-8">Brand<br />Kit</h1>
          <p className="max-w-xl text-lg md:text-xl text-[#D8D4BD]/80 mb-10">Tudo o que é preciso para a <Proh /> falar, aparecer e se propagar com coerência — da logo às aplicações.</p>
          <p className="font-mirano text-xl md:text-2xl font-bold text-white">PROH. Propagar valor.</p>
        </div>
        <div className="relative h-24 md:h-28" style={{ backgroundImage: 'url(/img/marca/textura-calcada-ondas.webp)', backgroundSize: '420px' }} aria-hidden="true" />
      </header>

      <div className="max-w-[90rem] mx-auto lg:grid lg:grid-cols-[15rem_1fr]">
        {/* ---------- ÍNDICE ---------- */}
        <aside className="hidden lg:block">
          <nav className="sticky top-0 h-screen overflow-auto py-14 pl-10 pr-4">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#0F0F15]/45 mb-5">Capítulos</p>
            <ol className="space-y-1">
              {CAPITULOS.map(([id, nome], k) => (
                <li key={id}>
                  <a href={`#${id}`} className={`flex items-center gap-3 px-3 py-2 rounded-full text-sm font-bold transition-colors ${ativo === id ? 'bg-[#0F0F15] text-[#D8D4BD]' : 'text-[#0F0F15]/60 hover:text-[#0F0F15]'}`}>
                    <span className="font-mirano text-[0.65rem] w-5">{String(k + 1).padStart(2, '0')}</span>{nome}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <main className="px-6 md:px-12 lg:pl-8 lg:pr-14 pb-32">
          {/* ================= 01 ESSÊNCIA ================= */}
          <Capitulo id="essencia" n="01" titulo="Essência" lead="O que a PROH é, por que existe e como pensa. Toda decisão de marca começa aqui.">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Cartao escuro>
                <Rotulinho escuro>Posicionamento</Rotulinho>
                <p className="text-2xl md:text-3xl font-black text-white leading-tight">Agência estratégica de marca, mídia e impacto.</p>
              </Cartao>
              <Cartao>
                <Rotulinho>Propósito</Rotulinho>
                <p className="text-2xl md:text-3xl font-black leading-tight">Fazer o que tem valor alcançar mais.</p>
              </Cartao>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              <Cartao>
                <Rotulinho>Assinatura</Rotulinho>
                <p className="font-mirano text-2xl font-bold mb-3">Propagar valor.</p>
                <p className="text-sm text-[#0F0F15]/65">Institucional, sempre assim. “proPAGAR” é recurso criativo pontual — nunca assinatura.</p>
              </Cartao>
              <Cartao>
                <Rotulinho>Frase-manifesto</Rotulinho>
                <p className="text-xl font-black leading-snug">Propagação não é barulho. É direção.</p>
              </Cartao>
              <Cartao>
                <Rotulinho>Missão em uma linha</Rotulinho>
                <p className="text-xl font-black leading-snug">PROH é o nome. Propagar é a missão.</p>
              </Cartao>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Cartao escuro>
                <div className="flex items-start justify-between mb-6"><span className="font-mirano text-5xl font-black text-white">PRO</span><Direcao className="w-20 h-14 text-[#D8D4BD]/70" /></div>
                <p className="text-[#D8D4BD]/85">Direção, progresso, propósito e construção. Comunicação a favor do que precisa avançar.</p>
              </Cartao>
              <Cartao className="bg-[#E6E3D3]">
                <div className="flex items-start justify-between mb-6"><span className="font-mirano text-5xl font-black">H</span><Rede className="w-24 h-16" /></div>
                <p className="text-[#0F0F15]/80">O humano e o hub. Pessoas no centro; conexões ampliam o alcance e viram movimento.</p>
              </Cartao>
            </div>
            <Cartao>
              <Rotulinho>Personalidade</Rotulinho>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
                {[['Estratégica', 'Pensa antes de executar. Sabe por que cada peça existe.'], ['Humana', 'Pessoas no centro. Fala com gente, não com “público-alvo”.'], ['Elegante', 'Sofisticação sem distância. Premium sem pose.'], ['Clara', 'Diz o essencial, do jeito mais simples possível.']].map(([t, d]) => (
                  <div key={t} className="border-t border-[#0F0F15]/15 pt-4"><p className="font-black uppercase tracking-tight mb-2">{t}</p><p className="text-sm text-[#0F0F15]/70">{d}</p></div>
                ))}
              </div>
            </Cartao>
            <div className="mt-5 rounded-[2rem] bg-[#0F0F15] text-[#D8D4BD] p-8 md:p-10">
              <Rotulinho escuro>Sistema PROH</Rotulinho>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 mt-2">
                {['Origem', 'Forma', 'Voz', 'Alcance', 'Efeito'].map((p, k, a) => (
                  <React.Fragment key={p}>
                    <span className="text-lg md:text-2xl font-black uppercase text-white">{p}</span>
                    {k < a.length - 1 && <span className="text-[#D8D4BD]/40">→</span>}
                  </React.Fragment>
                ))}
              </div>
              <p className="mt-4 text-sm text-[#D8D4BD]/60">Do centro para fora — o método desenhado como uma propagação.</p>
            </div>
          </Capitulo>

          {/* ================= 02 TOM DE VOZ ================= */}
          <Capitulo id="voz" n="02" titulo="Tom de voz" lead="Claro, estratégico, humano e elegante. A PROH fala como quem entende do assunto e respeita quem escuta.">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Cartao>
                <Rotulinho>Somos</Rotulinho>
                <ul className="space-y-3">
                  {['Diretos, sem ser secos', 'Confiantes, sem prometer o impossível', 'Próximos, sem ser informais demais', 'Sofisticados, sem complicar', 'Engajados, sem apelação'].map((t) => <li key={t} className="flex gap-3"><Check className="w-5 h-5 shrink-0" />{t}</li>)}
                </ul>
              </Cartao>
              <Cartao escuro>
                <Rotulinho escuro>Não somos</Rotulinho>
                <ul className="space-y-3">
                  {['Barulhentos ou sensacionalistas', 'Técnicos a ponto de afastar', 'Genéricos (“soluções inovadoras”)', 'Apelativos com causas sociais', 'Donos de fórmulas mágicas'].map((t) => <li key={t} className="flex gap-3"><X className="w-5 h-5 shrink-0 text-white" />{t}</li>)}
                </ul>
              </Cartao>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Cartao>
                <Rotulinho>Palavras que usamos</Rotulinho>
                <div className="flex flex-wrap gap-2">{['propagar', 'valor', 'direção', 'clareza', 'consistência', 'alcance', 'impacto', 'construir', 'pessoas', 'relevância', 'movimento', 'estratégia'].map((t) => <span key={t} className="px-3 py-1.5 rounded-full bg-[#0F0F15] text-[#D8D4BD] text-sm font-bold">{t}</span>)}</div>
              </Cartao>
              <Cartao>
                <Rotulinho>Palavras que evitamos</Rotulinho>
                <div className="flex flex-wrap gap-2">{['hack', 'explodir vendas', 'viralizar', 'garantido', 'fórmula', 'segredo', 'imbatível', 'disruptivo', 'sinergia'].map((t) => <span key={t} className="px-3 py-1.5 rounded-full border border-[#0F0F15]/25 text-sm font-bold line-through decoration-[#0F0F15]/50 text-[#0F0F15]/60">{t}</span>)}</div>
              </Cartao>
            </div>
            <Cartao>
              <Rotulinho>Na prática</Rotulinho>
              <div className="divide-y divide-[#0F0F15]/10">
                {[
                  ['Explodimos as vendas da sua marca com estratégias imbatíveis!', 'Organizamos sua marca e sua mídia para gerar demanda com consistência.'],
                  ['Ajude essas crianças carentes que sofrem todos os dias.', 'Uma comunidade que planta o próprio futuro precisa de mais gente junto.'],
                  ['Somos uma agência full service com soluções 360º inovadoras.', 'Estratégia, marca, conteúdo e mídia trabalhando na mesma direção.'],
                ].map(([antes, depois]) => (
                  <div key={antes} className="grid md:grid-cols-2 gap-4 py-5">
                    <p className="flex gap-3 text-[#0F0F15]/55"><X className="w-5 h-5 shrink-0 mt-0.5" /><span className="line-through decoration-[#0F0F15]/30">{antes}</span></p>
                    <p className="flex gap-3 font-bold"><Check className="w-5 h-5 shrink-0 mt-0.5" />{depois}</p>
                  </div>
                ))}
              </div>
            </Cartao>
            <p className="mt-5 text-sm text-[#0F0F15]/60 max-w-2xl">Regras de escrita: nunca inventar cases, números ou resultados — “a marca não inventa valor”. Texto alinhado à esquerda; nada de blocos longos centralizados ou justificados. Palavras de uma ou duas letras não terminam linha.</p>
          </Capitulo>

          {/* ================= 03 LOGO ================= */}
          <Capitulo id="logo" n="03" titulo="Logo" lead="Dezoito arquivos oficiais. PRO e MEDIA sempre na mesma cor; o H é a única letra que pode destacar em outra cor oficial.">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
              {LOGOS.map(([nome, fundo]) => (
                <a key={nome} href={`/SVG/${nome}.svg`} download className="group rounded-[1.5rem] overflow-hidden border border-[#0F0F15]/10 bg-white">
                  <div className={`h-40 flex items-center justify-center p-8 ${fundo === 'claro' ? 'bg-[#E6E3D3]' : fundo === 'escuro' ? 'bg-[#0F0F15]' : 'bg-[#8a877a]'}`}>
                    <img src={`/SVG/${nome}.svg`} alt={nome} className="max-h-16 max-w-[80%]" />
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-xs font-bold">{nome}.svg</span>
                    <Download size={15} className="text-[#0F0F15]/40 group-hover:text-[#0F0F15]" />
                  </div>
                </a>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              <Cartao>
                <Rotulinho>Convenção dos nomes</Rotulinho>
                <ul className="text-sm space-y-2 text-[#0F0F15]/80">
                  <li><b>PROH</b> — escrita completa</li><li><b>PH</b> — abreviada</li><li><b>s-media</b> — sem a palavra MEDIA</li><li><b>bg-cor</b> — com fundo dessa cor</li><li>sem <b>bg</b> — a cor indicada é a das letras</li>
                </ul>
              </Cartao>
              <Cartao>
                <Rotulinho>Área de proteção</Rotulinho>
                <div className="relative mx-auto w-fit p-7 my-2 border border-dashed border-[#0F0F15]/35 rounded-lg">
                  <img src="/SVG/proh-black-s-media.svg" alt="" className="h-10" />
                  <span className="absolute -top-0 left-1/2 -translate-x-1/2 text-[0.6rem] font-bold text-[#0F0F15]/50 bg-[#FFFFFF] px-1 -translate-y-1/2">altura do H</span>
                </div>
                <p className="text-sm text-[#0F0F15]/70 mt-3">Espaço livre mínimo em volta = altura da letra H. A referência de centralização é o PROH; o MEDIA pendura abaixo.</p>
              </Cartao>
              <Cartao>
                <Rotulinho>Tamanho mínimo (proposta)</Rotulinho>
                <div className="flex items-end gap-6 my-3">
                  <div><img src="/SVG/proh-black.svg" alt="" className="h-[22px]" /><p className="text-[0.7rem] mt-2 font-bold">PROH · 80 px / 25 mm</p></div>
                  <div><img src="/SVG/ph-black-white.svg" alt="" className="h-[22px]" /><p className="text-[0.7rem] mt-2 font-bold">PH · 24 px / 8 mm</p></div>
                </div>
                <p className="text-sm text-[#0F0F15]/70">Abaixo disso, use a versão PH. Valores a validar em prova de impressão.</p>
              </Cartao>
            </div>
            <Cartao>
              <Rotulinho>Não fazer</Rotulinho>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  ['Distorcer', { transform: 'scaleX(1.5)' }, 'bg-[#E6E3D3]', 'proh-black'],
                  ['Girar', { transform: 'rotate(-12deg)' }, 'bg-[#E6E3D3]', 'proh-black'],
                  ['Efeitos e sombras', { filter: 'drop-shadow(4px 4px 0 #C2643A)' }, 'bg-[#E6E3D3]', 'proh-black'],
                  ['Fundo sem contraste', { opacity: 0.9 }, 'bg-[#C69A6C]', 'proh-off'],
                  ['Cores fora da paleta', { filter: 'invert(35%) sepia(90%) saturate(2000%) hue-rotate(200deg)' }, 'bg-[#E6E3D3]', 'proh-black'],
                ].map(([t, estilo, fundo, arq]) => (
                  <div key={t as string}>
                    <div className={`relative h-24 rounded-2xl flex items-center justify-center ${fundo}`}>
                      <img src={`/SVG/${arq}.svg`} alt="" className="h-8" style={estilo as React.CSSProperties} />
                      <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#0F0F15] text-white flex items-center justify-center"><X size={14} /></span>
                    </div>
                    <p className="text-xs font-bold mt-2">{t as string}</p>
                  </div>
                ))}
              </div>
            </Cartao>
          </Capitulo>

          {/* ================= 04 CORES ================= */}
          <Capitulo id="cores" n="04" titulo="Cores" lead="Três cores oficiais constroem a interface e a tipografia. Quatro tons de apoio, extraídos das próprias fotografias e texturas, trazem calor às imagens.">
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              {CORES.map((c) => <Amostra key={c.hex} cor={c} grande />)}
            </div>
            <Cartao className="mb-5">
              <Rotulinho>Proporção</Rotulinho>
              <div className="flex h-16 rounded-2xl overflow-hidden border border-[#0F0F15]/10">
                <div className="bg-[#D8D4BD] flex items-center px-4 text-xs font-bold" style={{ width: '55%' }}>Off-white 55%</div>
                <div className="bg-[#0F0F15] text-[#D8D4BD] flex items-center px-4 text-xs font-bold" style={{ width: '30%' }}>Preto 30%</div>
                <div className="bg-white flex items-center px-3 text-xs font-bold" style={{ width: '8%' }}>Branco</div>
                <div className="flex" style={{ width: '7%' }}>{APOIO.map((a) => <div key={a.hex} className="flex-1" style={{ background: a.hex }} />)}</div>
              </div>
              <p className="text-sm text-[#0F0F15]/65 mt-3">Os tons de apoio somam no máximo ~10% — e vivem em fotografia, textura, ilustração e peças de campanha. Interface, botões e texto continuam nas três oficiais.</p>
            </Cartao>
            <h3 className="text-xl font-black uppercase tracking-tight mt-10 mb-4">Tons de apoio · da imagem</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {APOIO.map((c) => <Amostra key={c.hex} cor={{ ...c, papel: c.origem, cmyk: '' }} />)}
            </div>
            <Cartao>
              <Rotulinho>Contraste (WCAG)</Rotulinho>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {CONTRASTES.map(([t, th, f, fh, r, n]) => (
                  <div key={t + f} className="rounded-2xl p-4 flex flex-col justify-between h-28" style={{ background: fh as string, color: th as string }}>
                    <span className="text-lg font-black">Aa {r}:1</span>
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider opacity-80">{t} / {f} · {n}</span>
                  </div>
                ))}
              </div>
            </Cartao>
          </Capitulo>

          {/* ================= 05 TIPOGRAFIA ================= */}
          <Capitulo id="tipografia" n="05" titulo="Tipografia" lead="Gotham carrega a leitura e os títulos. Mirano Extended é a assinatura: só no nome da marca e nos slogans.">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Cartao>
                <Rotulinho>Gotham · títulos e leitura</Rotulinho>
                <p className="text-7xl font-black tracking-tighter leading-none mb-4">Aa</p>
                <p className="text-sm text-[#0F0F15]/70 mb-5">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 — ç ã é ô ü !?</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="font-light">Light</span><span>Book</span><span className="font-medium">Medium</span><span className="font-bold">Bold</span><span className="font-black">Black</span>
                </div>
              </Cartao>
              <Cartao escuro>
                <Rotulinho escuro>Mirano Extended · marca e slogans</Rotulinho>
                <p className="font-mirano text-7xl font-bold leading-none mb-4 text-white">Aa</p>
                <p className="font-mirano text-sm text-[#D8D4BD]/80 mb-5">PROH · PH · PROPAGAR VALOR.</p>
                <p className="text-sm text-[#D8D4BD]/70">Nunca em títulos de seção ou textos longos. Números de capítulo podem usá-la como detalhe.</p>
              </Cartao>
            </div>
            <Cartao>
              <Rotulinho>Hierarquia</Rotulinho>
              <div className="divide-y divide-[#0F0F15]/10">
                {[
                  ['Display', 'Gotham Black · 72–96 px · -0,04em', <span key="d" className="text-5xl md:text-6xl font-black tracking-tighter">O que tem valor</span>],
                  ['Título', 'Gotham Black · 36–48 px · -0,02em', <span key="t" className="text-3xl md:text-4xl font-black tracking-tight">Antes de propagar, é preciso dar direção.</span>],
                  ['Subtítulo', 'Gotham Bold · 20–24 px', <span key="s" className="text-xl font-bold">Vamos transformar sua comunicação em movimento?</span>],
                  ['Corpo', 'Gotham Book · 16–18 px · entrelinha 1,6', <span key="c" className="text-base leading-relaxed text-[#0F0F15]/75">Identificamos o valor presente em uma marca e criamos as condições para que ela alcance as pessoas certas.</span>],
                  ['Rótulo', 'Gotham Bold · 11–12 px · caixa alta · +0,22em', <span key="r" className="v2-rotulo"><span className="font-mirano">05</span><span className="v2-linha-h"><i /></span>Método</span>],
                  ['Assinatura', 'Mirano Extended Bold', <span key="a" className="font-mirano text-xl font-bold">PROH. Propagar valor.</span>],
                ].map(([n, spec, ex]) => (
                  <div key={n as string} className="grid md:grid-cols-[11rem_1fr] gap-3 py-5 items-center">
                    <div><p className="font-black uppercase text-sm">{n as string}</p><p className="text-xs text-[#0F0F15]/55">{spec as string}</p></div>
                    <div>{ex}</div>
                  </div>
                ))}
              </div>
            </Cartao>
          </Capitulo>

          {/* ================= 06 ELEMENTOS ================= */}
          <Capitulo id="elementos" n="06" titulo="Elementos gráficos" lead="Cada elemento nasce do verbo da marca. Use um por composição como protagonista — nunca todos ao mesmo tempo.">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              <Elemento nome="Ondas de propagação" uso="Assinatura gráfica. Hero, capas, áreas de respiro. Anima devagar (12–18 s por ciclo).">
                <div className="relative w-40 h-40 text-[#D8D4BD]"><Ondas className="inset-0 w-full" aneis={6} animado dur={8} /><span className="v2-origem" style={{ left: '50%', top: '50%' }} /></div>
              </Elemento>
              <Elemento nome="Linha do H" uso="Divisor proprietário: duas hastes (negócio e humano) unidas por uma ponte. Rótulos, fechos, assinaturas." claro>
                <span className="v2-linha-h is-grande" aria-hidden="true"><i /></span>
              </Elemento>
              <Elemento nome="Rede do H" uso="O humano como hub. Ilustra conexões, comunidade, distribuição." claro>
                <Rede className="w-40 h-28" />
              </Elemento>
              <Elemento nome="Trajetória PRO" uso="Direção e progresso. Crescimento, metas, evolução de marca.">
                <Direcao className="w-40 h-28 text-[#D8D4BD]" />
              </Elemento>
              <Elemento nome="Marca-texto" uso="Uma palavra por título, a que carrega o sentido. Nunca uma frase inteira." claro>
                <p className="text-3xl font-black">com o <span className="v2-marca">humano</span></p>
              </Elemento>
              <Elemento nome="Etiqueta técnica" uso="Anotação editorial sobre fotos e diagramas. Curta, em caixa alta.">
                <div className="flex flex-col gap-3 items-center"><span className="v2-etiqueta"><b />Ponto de origem</span><span className="v2-etiqueta is-clara">Alcance em ondas <ArrowUpRight size={12} /></span></div>
              </Elemento>
              <Elemento nome="Barras de crescimento" uso="Resultado de negócio, demanda, dados — sem inventar números." claro>
                <Subida className="w-32 h-20" />
              </Elemento>
              <Elemento nome="Diagrama da distância" uso="Valor real × valor percebido. A tese da PROH em um gráfico.">
                <div className="w-56 space-y-4">
                  <div><p className="text-[0.6rem] font-bold uppercase tracking-widest text-white mb-2">Valor real</p><div className="h-2 rounded-full bg-[#D8D4BD]" /></div>
                  <div><p className="text-[0.6rem] font-bold uppercase tracking-widest text-white mb-2">Valor percebido</p><div className="relative h-2"><div className="absolute inset-0 rounded-full border border-dashed border-[#D8D4BD]/40" /><div className="absolute left-0 top-0 h-2 w-[42%] rounded-full bg-[#D8D4BD]/45" /></div></div>
                </div>
              </Elemento>
              <Elemento nome="Cartas sobrepostas" uso="Seções que deslizam umas sobre as outras com topo arredondado (40–48 px)." claro>
                <div className="relative w-48 h-32">
                  <div className="absolute inset-x-0 top-0 h-20 rounded-t-[1.25rem] bg-[#0F0F15]" />
                  <div className="absolute inset-x-0 top-10 h-20 rounded-t-[1.25rem] bg-[#D8D4BD] shadow-[0_-8px_20px_rgba(0,0,0,0.25)]" />
                  <div className="absolute inset-x-0 top-20 h-12 rounded-t-[1.25rem] bg-white shadow-[0_-8px_20px_rgba(0,0,0,0.15)]" />
                </div>
              </Elemento>
            </div>
          </Capitulo>

          {/* ================= 07 FOTOGRAFIA ================= */}
          <Capitulo id="fotografia" n="07" titulo="Fotografia" lead="Gente de verdade, em cor natural e quente. Realista, humana e brasileira — o valor das pessoas aparece antes de qualquer efeito.">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {FOTOS.map(([arq, t, d], k) => (
                <figure key={arq} className={`group relative rounded-[1.5rem] overflow-hidden ${k === 5 ? 'row-span-2' : ''} ${k === 0 ? 'col-span-2 md:col-span-2' : ''}`}>
                  <img src={`/img/marca/${arq}.webp`} alt={t} className={`w-full object-cover ${k === 5 ? 'h-full' : 'h-56 md:h-72'}`} loading="lazy" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0F0F15]/85 to-transparent text-white">
                    <p className="font-black uppercase text-sm tracking-tight">{t}</p><p className="text-xs text-white/80">{d}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Cartao>
                <Rotulinho>Direção</Rotulinho>
                <ul className="space-y-3">
                  {['Pessoas reais, de idades, corpos e tons de pele diversos', 'Momentos espontâneos: conversa, trabalho, riso, concentração', 'Luz natural, de preferência janela ou fim de tarde', 'Cor natural e quente: barro, madeira, linho, plantas', 'Contexto brasileiro sem clichê: ateliês, bairros, escritórios vivos', 'Dignidade sempre — protagonistas, nunca vítimas'].map((t) => <li key={t} className="flex gap-3"><Check className="w-5 h-5 shrink-0 mt-0.5" />{t}</li>)}
                </ul>
              </Cartao>
              <Cartao escuro>
                <Rotulinho escuro>Evitar</Rotulinho>
                <ul className="space-y-3">
                  {['Banco de imagem posado (aperto de mão, sorriso para a câmera sem contexto)', 'Filtros saturados, tons frios ou artificiais', 'Sofrimento como apelo em causas sociais', 'Símbolos políticos, religiosos ou marcas de terceiros', 'Fotos genéricas que poderiam ser de qualquer agência'].map((t) => <li key={t} className="flex gap-3"><X className="w-5 h-5 shrink-0 mt-0.5 text-white" />{t}</li>)}
                </ul>
              </Cartao>
            </div>
            <Cartao>
              <Rotulinho>Tratamento</Rotulinho>
              <div className="grid md:grid-cols-3 gap-5 items-center">
                <figure><img src="/img/marca/empreendedora-atelie.webp" alt="" className="h-40 w-full object-cover rounded-2xl" loading="lazy" /><figcaption className="text-xs font-bold mt-2">Padrão · cor natural quente</figcaption></figure>
                <figure><img src="/img/marca/empreendedora-atelie.webp" alt="" className="h-40 w-full object-cover rounded-2xl grayscale" loading="lazy" /><figcaption className="text-xs font-bold mt-2">Pontual · P&B editorial (manifesto, contraste)</figcaption></figure>
                <p className="text-sm text-[#0F0F15]/70">A cor natural é o padrão. O preto e branco vira recurso editorial — usado de propósito, em uma peça ou seção, nunca como regra para todas as fotos.</p>
              </div>
            </Cartao>
          </Capitulo>

          {/* ================= 08 RUÍDO E ONDA ================= */}
          <Capitulo id="texturas" n="08" titulo="Ruído e onda" lead="A marca não usa texturas de material. Usa duas camadas, ambas monocromáticas: o ruído fino sobre as cores lisas e a onda da calçada como assinatura brasileira.">
            <h3 className="text-xl font-black uppercase tracking-tight mb-4">Ruído · sobre as cores lisas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
              {[
                ['Preto · sutil', 'bg-[#0F0F15] text-[#D8D4BD]', 0.06, 'claro', 'Padrão em seções escuras'],
                ['Off-white · sutil', 'bg-[#D8D4BD] text-[#0F0F15]', 0.07, 'escuro', 'Padrão em seções claras'],
                ['Preto · máximo', 'bg-[#0F0F15] text-[#D8D4BD]', 0.12, 'claro', 'Capas e peças isoladas'],
                ['Excesso · evitar', 'bg-[#0F0F15] text-[#D8D4BD]', 0.3, 'claro', 'Vira sujeira — não usar'],
              ].map(([t, cls, op, tom, d], k) => (
                <div key={t as string} className="rounded-[1.75rem] overflow-hidden border border-[#0F0F15]/10 bg-white">
                  <div className={`relative h-40 flex items-end p-5 ${cls}`}>
                    <Ruido opacidade={op as number} tom={tom as string} />
                    <span className="relative text-sm font-black uppercase">{t as string}</span>
                    {k === 3 && <span className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white text-[#0F0F15] flex items-center justify-center"><X size={14} /></span>}
                  </div>
                  <div className="p-4 text-xs"><p className="font-bold">Opacidade {Math.round((op as number) * 100)}%</p><p className="text-[#0F0F15]/60">{d as string}</p></div>
                </div>
              ))}
            </div>
            <Cartao className="mb-10">
              <Rotulinho>Regras do ruído</Rotulinho>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {['Só sobre preto e off-white lisos — nunca sobre fotos', 'Grão fino (frequência 0,9), nunca manchas', 'No digital: 6–7%; em peças isoladas, até 12%', 'Seções brancas ficam limpas, sem ruído', 'Na impressão, aplicar como camada de ruído monocromático', 'Se o ruído chama atenção, está forte demais'].map((t) => <li key={t} className="flex gap-3"><Check className="w-4 h-4 shrink-0 mt-0.5" />{t}</li>)}
              </ul>
            </Cartao>
            <h3 className="text-xl font-black uppercase tracking-tight mb-4">Onda · calçada portuguesa</h3>
            <a href="/img/marca/textura-calcada-ondas.webp" download className="group block rounded-[1.75rem] overflow-hidden border border-[#0F0F15]/10 bg-white">
              <div className="v2-calcada h-40" />
              <div className="p-5 flex items-center justify-between">
                <div><p className="font-black uppercase tracking-tight">Calçada em ondas</p><p className="text-sm text-[#0F0F15]/65">A propagação em pedra — Brasil, ritmo e onda, em preto e marfim. Faixas, rodapés, capas e stories.</p></div>
                <Download size={16} className="text-[#0F0F15]/40 group-hover:text-[#0F0F15] shrink-0 ml-4" />
              </div>
            </a>
          </Capitulo>

          {/* ================= 09 ICONOGRAFIA ================= */}
          <Capitulo id="icones" n="09" titulo="Iconografia" lead="Linha fina (1,6), cantos arredondados, sempre dentro de um contêiner da marca. Família Lucide.">
            <Cartao>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-5">
                {[Compass, Fingerprint, PenLine, TrendingUp, MonitorSmartphone, HeartHandshake, Briefcase, UserRound, Landmark, HandHeart, MessageCircle, Sparkles, Users, Target, Megaphone, BarChart3, Lightbulb, Layers, Mail, Globe].map((I, k) => (
                  <div key={k} className="flex flex-col items-center gap-2">
                    <span className={`w-14 h-14 flex items-center justify-center ${k % 3 === 0 ? 'rounded-2xl bg-[#0F0F15] text-[#D8D4BD]' : k % 3 === 1 ? 'rounded-full border border-[#0F0F15]/25' : 'rounded-2xl bg-[#E6E3D3]'}`}><I size={22} strokeWidth={1.6} /></span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#0F0F15]/65 mt-6">Três contêineres: quadrado preto (serviços), círculo com contorno (públicos), quadrado claro (apoio). Ícone nunca sozinho como decoração.</p>
            </Cartao>
          </Capitulo>

          {/* ================= 10 APLICAÇÕES ================= */}
          <Capitulo id="aplicacoes" n="10" titulo="Aplicações" lead="O sistema em uso: redes sociais, papelaria e apresentações. Modelos prontos para servir de referência.">
            <div className="grid md:grid-cols-[1fr_0.62fr_1fr] gap-5 items-start mb-5">
              {/* Post de feed 4:5 */}
              <Peca rotulo="Post · feed 4:5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl text-white">
                  <img src="/img/marca/empreendedora-atelie.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F15]/90 via-[#0F0F15]/20 to-transparent" />
                  <img src="/SVG/proh-white-off-s-media.svg" alt="" className="absolute top-5 left-5 h-5" />
                  <span className="v2-etiqueta absolute top-4 right-4 !text-[0.55rem]"><b />Valor real</span>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-2xl font-black leading-tight mb-3">O que tem valor merece alcançar mais.</p>
                    <span className="v2-linha-h text-white/70"><i /></span>
                  </div>
                </div>
              </Peca>
              {/* Story 9:16 */}
              <Peca rotulo="Story · 9:16">
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#0F0F15] text-white flex flex-col">
                  <div className="h-[38%]" style={{ backgroundImage: 'url(/img/marca/textura-calcada-ondas.webp)', backgroundSize: '260px' }} />
                  <div className="flex-1 p-5 flex flex-col">
                    <p className="v2-rotulo is-escuro !text-[0.55rem] mb-3"><span className="v2-linha-h"><i /></span>Manifesto</p>
                    <p className="text-xl font-black leading-tight">Propagação não é barulho. É direção.</p>
                    <p className="font-mirano text-[0.6rem] font-bold mt-auto text-[#D8D4BD]">PROH. PROPAGAR VALOR.</p>
                  </div>
                </div>
              </Peca>
              {/* Carrossel em kraft */}
              <Peca rotulo="Carrossel · capa">
                <div className="v2-grao is-claro relative aspect-[4/5] overflow-hidden rounded-2xl p-7 flex flex-col bg-[#D8D4BD]">
                  <p className="v2-rotulo !text-[0.55rem] !text-[#0F0F15]/70 mb-4"><span className="font-mirano">01</span><span className="v2-linha-h"><i /></span>Diagnóstico</p>
                  <p className="text-2xl font-black leading-tight">Sua marca entrega bem, mas parece comum?</p>
                  <div className="relative w-24 h-24 mt-auto ml-auto text-[#0F0F15]/60"><Ondas className="inset-0 w-full" aneis={4} /></div>
                  <img src="/SVG/proh-black-s-media.svg" alt="" className="h-4 absolute bottom-7 left-7" />
                </div>
              </Peca>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {/* Cartão de visita */}
              <Peca rotulo="Cartão de visita · 90 × 50 mm">
                <div className="grid grid-cols-2 gap-3">
                  <div className="v2-grao relative aspect-[9/5] rounded-xl overflow-hidden bg-[#0F0F15] flex items-center justify-center">
                    <Ondas className="w-[140%] left-[60%] top-1/2 -translate-y-1/2 text-[#D8D4BD]/35" aneis={5} />
                    <img src="/SVG/proh-white-off.svg" alt="" className="relative h-7" />
                  </div>
                  <div className="v2-grao is-claro aspect-[9/5] rounded-xl p-4 flex flex-col justify-between text-[#0F0F15] bg-[#D8D4BD]">
                    <div><p className="text-xs font-black uppercase">Nome Sobrenome</p><p className="text-[0.55rem] font-bold uppercase tracking-widest text-[#0F0F15]/60">Cargo</p></div>
                    <div className="text-[0.55rem] font-medium text-[#0F0F15]/75 leading-relaxed">nome@proh.media<br />+55 19 99595-1316<br />proh.media</div>
                    <p className="font-mirano text-[0.45rem] font-bold">PROPAGAR VALOR.</p>
                  </div>
                </div>
              </Peca>
              {/* Assinatura de e-mail */}
              <Peca rotulo="Assinatura de e-mail">
                <div className="rounded-xl bg-white p-5 flex items-center gap-5">
                  <img src="/SVG/ph-bg-black.svg" alt="" className="w-14 h-14 rounded-xl" />
                  <div className="border-l-2 border-[#0F0F15] pl-4">
                    <p className="font-black text-sm uppercase">Nome Sobrenome</p>
                    <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#0F0F15]/55 mb-2">Cargo · PROH Media</p>
                    <p className="text-xs text-[#0F0F15]/75">proh.media · +55 19 99595-1316</p>
                    <p className="font-mirano text-[0.6rem] font-bold mt-1">Propagar valor.</p>
                  </div>
                </div>
              </Peca>
            </div>

            {/* Capa de apresentação 16:9 em terracota */}
            <Peca rotulo="Apresentação · capa 16:9">
              <div className="v2-grao relative aspect-video rounded-2xl overflow-hidden bg-[#0F0F15] text-white p-8 md:p-12 flex flex-col">
                <Ondas className="w-[70%] right-[-18%] top-1/2 -translate-y-1/2 text-[#D8D4BD]/30" aneis={7} />
                <div className="relative flex items-center justify-between">
                  <img src="/SVG/proh-white.svg" alt="" className="h-7" />
                  <span className="v2-etiqueta"><b />Proposta estratégica</span>
                </div>
                <div className="relative mt-auto max-w-lg">
                  <p className="text-3xl md:text-5xl font-black leading-[1.02] mb-4">Causas relevantes também merecem marcas fortes.</p>
                  <span className="v2-linha-h is-grande text-white/80"><i /></span>
                </div>
              </div>
            </Peca>
          </Capitulo>

          {/* ================= 11 DOWNLOADS ================= */}
          <Capitulo id="downloads" n="11" titulo="Downloads" lead="Arquivos-fonte do sistema. As fontes são licenciadas: instale a partir dos arquivos oficiais do projeto.">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ['Logos oficiais (18 SVG)', 'Pasta SVG/ do projeto', '/SVG/proh-black.svg'],
                ['Fotografias da marca (6)', 'public/img/marca/', '/img/marca/estrategia-equipe-parede.webp'],
                ['Onda · calçada portuguesa', 'public/img/marca/', '/img/marca/textura-calcada-ondas.webp'],
                ['Imagens-símbolo v2 (4)', 'public/img/v2/', '/img/v2/praca-ondas-pessoas.webp'],
                ['Fonte Mirano Extended', 'fonts/ (woff2)', '/fonts/MiranoExtended-Bold.woff2'],
                ['Fonte Gotham', 'fonts/GOTHAM/ (otf)', '/fonts/GOTHAM/Gotham-Black.otf'],
              ].map(([t, d, h]) => (
                <a key={t} href={h} download className="group rounded-[1.5rem] bg-[#E6E3D3] border border-white/60 p-6 flex items-center justify-between hover:bg-white transition-colors">
                  <div><p className="font-black uppercase tracking-tight text-sm">{t}</p><p className="text-xs text-[#0F0F15]/55 mt-1">{d}</p></div>
                  <Download size={18} className="text-[#0F0F15]/40 group-hover:text-[#0F0F15]" />
                </a>
              ))}
            </div>
            <p className="text-xs text-[#0F0F15]/50 mt-6">Os originais em alta resolução das imagens ficam em Fotos/ (fora do git).</p>
          </Capitulo>
        </main>
      </div>

      <footer className="bg-[#0F0F15] text-[#D8D4BD]">
        <div className="h-20" style={{ backgroundImage: 'url(/img/marca/textura-calcada-ondas.webp)', backgroundSize: '360px' }} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
          <img src="/SVG/proh-white-off.svg" alt="PROH Media" className="h-9" />
          <p className="font-mirano text-sm font-bold text-white">PROH. Propagar valor.</p>
        </div>
      </footer>
    </div>
  );
}

// ==========================================================================
// COMPONENTES DO KIT
// ==========================================================================
function Capitulo({ id, n, titulo, lead, children }) {
  return (
    <section id={id} className="pt-20 md:pt-28 scroll-mt-4">
      <p className="v2-rotulo mb-4"><span className="font-mirano">{n}</span><span className="v2-linha-h" aria-hidden="true"><i /></span>{titulo}</p>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-5">{titulo}</h2>
      <p className="text-lg md:text-xl text-[#0F0F15]/70 max-w-3xl mb-10">{lead}</p>
      {children}
    </section>
  );
}

function Cartao({ escuro = false, className = '', children }: { escuro?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-[2rem] p-7 md:p-9 ${escuro ? 'v2-grao bg-[#0F0F15] text-[#D8D4BD]' : 'bg-white/70 border border-white'} ${className}`}>
      {children}
    </div>
  );
}

function Rotulinho({ escuro = false, children }) {
  return <p className={`text-[0.68rem] font-bold uppercase tracking-[0.22em] mb-4 ${escuro ? 'text-[#D8D4BD]/55' : 'text-[#0F0F15]/50'}`}>{children}</p>;
}

function Amostra({ cor, grande = false }) {
  const [copiado, setCopiado] = useState(false);
  const copiar = () => {
    navigator.clipboard?.writeText(cor.hex).then(() => { setCopiado(true); setTimeout(() => setCopiado(false), 1400); }).catch(() => {});
  };
  return (
    <button type="button" onClick={copiar} className="text-left rounded-[2rem] overflow-hidden border border-[#0F0F15]/10 bg-white group">
      <div className={`${grande ? 'h-44' : 'h-32'} p-6 flex items-end justify-between`} style={{ background: cor.hex, color: cor.texto }}>
        <span className="text-2xl font-black">{cor.nome}</span>
        <span className="flex items-center gap-1 text-xs font-bold opacity-70 group-hover:opacity-100">{copiado ? <><Check size={14} /> copiado</> : <><Copy size={14} /> copiar</>}</span>
      </div>
      <div className="p-5 text-xs space-y-1">
        <p><b>HEX</b> {cor.hex}</p>
        <p><b>RGB</b> {cor.rgb}</p>
        {cor.cmyk && <p><b>CMYK</b> {cor.cmyk} <span className="text-[#0F0F15]/45">(referência — confirmar em prova)</span></p>}
        <p className="text-[#0F0F15]/60 pt-1">{cor.papel}</p>
      </div>
    </button>
  );
}

function Elemento({ nome, uso, claro = false, children }) {
  return (
    <div className="rounded-[2rem] overflow-hidden border border-[#0F0F15]/10 bg-white">
      <div className={`h-52 flex items-center justify-center relative overflow-hidden ${claro ? 'bg-[#E6E3D3] text-[#0F0F15]' : 'v2-grao bg-[#0F0F15] text-[#D8D4BD]'}`}>{children}</div>
      <div className="p-6"><p className="font-black uppercase tracking-tight mb-1">{nome}</p><p className="text-sm text-[#0F0F15]/65">{uso}</p></div>
    </div>
  );
}

function Ruido({ opacidade, tom }) {
  const cor = tom === 'claro' ? '0 0 0 0 1  0 0 0 0 1  0 0 0 0 1' : '0 0 0 0 0.06  0 0 0 0 0.06  0 0 0 0 0.08';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='${cor}  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>`;
  return <span className="absolute inset-0 pointer-events-none" style={{ opacity: opacidade, backgroundImage: `url("data:image/svg+xml;utf8,${svg}")` }} aria-hidden="true" />;
}

function Peca({ rotulo, children }) {
  return (
    <figure className="rounded-[2rem] bg-white/60 border border-white p-5">
      {children}
      <figcaption className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#0F0F15]/55 mt-4">{rotulo}</figcaption>
    </figure>
  );
}
