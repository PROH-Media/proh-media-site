import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Check, Loader2, Menu, X, ChevronDown } from 'lucide-react';
import { Proh, Rotulo, Ondas, Faixa } from '../v2/AppV2';
import { IconeVivo } from '../v2/IconeVivo';
import logoClaro from '../SVG/proh-black-white.svg';
import logoEscuro from '../SVG/proh-white-off.svg';
// sobre seções brancas o H branco sumiria: logo toda preta (versão oficial)
import logoBranco from '../SVG/proh-black.svg';

// ==========================================================================
// PROH — Landing page v2.1
// Construída a partir do brand kit. Em relação à v2:
// · nenhuma informação espera animação: Método e FAQ com tudo à vista
// · fotos só com pessoas alegres, em cor natural (nenhuma cena sem gente)
// · ícones de conceito são todos IconeVivo (hover: vai ao estado final)
// · um elemento gráfico protagonista por seção
// · marca-texto em uma palavra; Mirano só na marca e nos slogans
// · vidro só no que flutua sobre imagem; cores só da paleta oficial
// ==========================================================================

const WHATSAPP_NUMBER = '5519995951316';
const geminiProxyUrl = (import.meta as any).env?.VITE_GEMINI_PROXY_URL ?? '/api/gemini.php';

const NAV = [
  { id: 'conceito', rotulo: 'Conceito' },
  { id: 'solucoes', rotulo: 'Soluções' },
  { id: 'metodo', rotulo: 'Método' },
  { id: 'impacto', rotulo: 'Impacto' },
  { id: 'contato', rotulo: 'Contato' },
];

const METODO = [
  { titulo: 'Origem', texto: 'Compreendemos a história, o contexto, o público, os objetivos e o valor real da organização.' },
  { titulo: 'Forma', texto: 'Transformamos essência em posicionamento, identidade, mensagem e experiência.' },
  { titulo: 'Voz', texto: 'Criamos narrativas, conteúdos e campanhas que tornam a marca reconhecível.' },
  { titulo: 'Alcance', texto: 'Levamos a mensagem aos canais, públicos e oportunidades certas.' },
  { titulo: 'Efeito', texto: 'Acompanhamos resultados, aprendizados, crescimento, reputação e impacto.' },
];

const FAQ = [
  [<>A <Proh /> é uma agência de branding ou de performance?</>, <>A <Proh /> trabalha com as duas dimensões. O branding organiza percepção, posicionamento e identidade. A performance amplia alcance, demanda e conversão. As estratégias são integradas para que o resultado imediato também fortaleça a marca no longo prazo.</>],
  ['Os serviços podem ser contratados separadamente?', 'Sim. Os serviços podem ser organizados como projetos pontuais, sprints, consultorias ou parcerias recorrentes. A recomendação depende do momento, da estrutura e dos objetivos de cada cliente.'],
  [<>A <Proh /> atende empresas e organizações sociais?</>, 'Sim. A agência trabalha com marcas, negócios, profissionais, instituições e projetos de impacto. O ponto em comum é a existência de valor real e a necessidade de comunicá-lo com mais direção.'],
  [<>A <Proh /> também executa sites, campanhas e mídia paga?</>, <>Sim. A <Proh /> integra estratégia, branding, conteúdo, design, experiências digitais, campanhas e mídia. O escopo é definido conforme a necessidade do projeto.</>],
  ['Como um projeto começa?', <>Todo projeto começa por uma conversa de diagnóstico. A <Proh /> busca compreender contexto, objetivos, desafios, público, momento da marca e resultado esperado. A partir disso, é apresentada uma recomendação de escopo e formato de parceria.</>],
  [<>A <Proh /> trabalha apenas com projetos de alto padrão?</>, <>A <Proh /> trabalha com alto padrão de pensamento, estratégia e execução. Isso não significa atender apenas marcas de luxo. Significa trabalhar com organizações que valorizam qualidade, clareza, consistência e responsabilidade.</>],
];

// --------------------------------------------------------------------------
export default function AppV21() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [headerEscuro, setHeaderEscuro] = useState(false);
  const [headerBranco, setHeaderBranco] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState('');
  usePagina(setHeaderEscuro, setHeaderBranco, setSecaoAtiva);
  useTipografia();
  const fechar = () => setMenuAberto(false);
  const atraso = (ms: number) => ({ '--atraso': `${ms}ms` } as React.CSSProperties);

  return (
    <div className="bg-[#D8D4BD] text-[#0F0F15] overflow-x-hidden">
      {/* ================= MENU (vidro) ================= */}
      <header className="fixed top-0 left-0 right-0 z-[200] px-4 sm:px-6 md:px-12 pt-4 md:pt-5">
        <div className={`v2-vidro max-w-7xl mx-auto overflow-hidden rounded-[2rem] transition-colors duration-500 ${headerEscuro ? 'is-escuro' : ''}`}>
          <div className="flex items-center justify-between gap-4 py-3 px-5 lg:pl-[19px] lg:pr-3">
            <a href="#inicio" onClick={fechar} className="h-[1.9rem] flex items-start shrink-0" aria-label="PROH Media — início">
              <img src={headerEscuro ? logoEscuro : headerBranco ? logoBranco : logoClaro} alt="PROH Media" className="h-[131%] w-auto" />
            </a>
            <nav className={`hidden lg:flex items-center gap-1 text-[0.8rem] font-bold tracking-wider uppercase ${headerEscuro ? 'text-[#D8D4BD]' : 'text-[#0F0F15]'}`}>
              {NAV.map(({ id, rotulo }) => (
                <a key={id} href={`#${id}`} className={`px-4 py-2 rounded-full transition-colors ${secaoAtiva === id ? (headerEscuro ? 'bg-white/10' : 'bg-[#0F0F15]/10') : 'hover:opacity-60'}`}>{rotulo}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a href="#contato" className={`hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${headerEscuro ? 'bg-[#D8D4BD] text-[#0F0F15] hover:bg-white' : 'bg-[#0F0F15] text-[#D8D4BD] hover:bg-black'}`}>Começar um projeto</a>
              <button type="button" className={`lg:hidden w-11 h-11 rounded-full flex items-center justify-center ${headerEscuro ? 'text-[#D8D4BD]' : 'text-[#0F0F15]'}`} onClick={() => setMenuAberto((v) => !v)} aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuAberto}>
                {menuAberto ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
          <div className={`v2-abre lg:hidden ${menuAberto ? 'is-aberto' : ''}`}>
            <div>
              <nav className={`flex flex-col px-6 pb-6 pt-1 text-sm font-bold uppercase tracking-widest ${headerEscuro ? 'text-[#D8D4BD]' : 'text-[#0F0F15]'}`}>
                {NAV.map(({ id, rotulo }) => <a key={id} href={`#${id}`} onClick={fechar} className={`py-3 border-b ${headerEscuro ? 'border-white/10' : 'border-[#0F0F15]/10'}`}>{rotulo}</a>)}
                <a href="#contato" onClick={fechar} className={`mt-5 text-center px-5 py-4 rounded-full ${headerEscuro ? 'bg-[#D8D4BD] text-[#0F0F15]' : 'bg-[#0F0F15] text-[#D8D4BD]'}`}>Começar um projeto</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* ================= HERO — rede de pessoas em ondas ================= */}
      <section id="inicio" data-tema="claro" className="v2-carta is-primeira v2-grao is-claro z-[10] bg-[#D8D4BD] min-h-screen flex flex-col justify-center pt-28 md:pt-32 pb-36">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-10 items-center">
          <div>
            <p className="v2-rotulo v2-revela mb-7"><span className="v2-linha-h" aria-hidden="true"><i /></span>Agência estratégica de marca, mídia e impacto</p>
            {/* três linhas em qualquer tela: cada linha é inquebrável e o corpo
                acompanha a largura no desktop */}
            <h1 className="v2-revela text-[2.6rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[clamp(3.6rem,5.6vw,5.2rem)] font-black tracking-tighter mb-8" style={atraso(80)}>
              <span className="whitespace-nowrap">O que tem</span><br />
              <span className="whitespace-nowrap">valor merece</span><br />
              <span className="v2-sublinhado whitespace-nowrap">alcançar mais.</span>
            </h1>
            <p className="v2-revela text-base sm:text-lg md:text-xl text-[#0F0F15]/75 max-w-xl mb-10 font-medium leading-relaxed" style={atraso(160)}>
              A <Proh /> une branding, conteúdo, mídia e performance para transformar
              marcas, projetos e causas em presença, crescimento e impacto real.
            </p>
            <div className="v2-revela flex flex-col sm:flex-row gap-3 mb-12" style={atraso(240)}>
              <a href="#contato" className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#0F0F15] text-[#D8D4BD] px-7 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-black transition-colors group">
                Quero propagar valor <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#metodo" className="inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 border-[#0F0F15] px-7 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#0F0F15] hover:text-[#D8D4BD] transition-colors">
                Conhecer o método
              </a>
            </div>
            <div className="v2-revela flex items-center gap-4" style={atraso(320)}>
              <span className="v2-linha-h text-[#0F0F15]/50" aria-hidden="true"><i /></span>
              <p className="font-mirano text-xs uppercase tracking-[0.3em] font-bold text-[#0F0F15]/60">PROH. Propagar valor.</p>
            </div>
          </div>
          <RedeDePessoas />
        </div>
        <div className="absolute bottom-[calc(var(--raio-secao)+1rem)] left-0 right-0" aria-hidden="true"><Faixa /></div>
      </section>

      {/* ================= 01 CONCEITO — a distância ================= */}
      <section id="conceito" data-tema="escuro" className="v2-carta v2-grao v2-sombra-escura z-[20] bg-[#0F0F15] text-[#D8D4BD] md:min-h-screen flex flex-col justify-center py-24">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="v2-revela">
            <Rotulo n="01" escuro>Conceito</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5 mb-7">
              Propagar não é aparecer mais. É <span className="text-white">fazer sentido</span> para mais pessoas.
            </h2>
            <p className="text-base md:text-lg text-[#D8D4BD]/70 mb-6">Existem marcas, negócios e projetos que já possuem valor, mas ainda não conseguem demonstrá-lo com clareza.</p>
            <ul className="space-y-3 text-base md:text-lg text-[#D8D4BD]/80">
              {['Entregam bem, mas parecem comuns.', 'Geram impacto, mas não conseguem comunicá-lo.', 'Produzem conteúdo, mas não constroem posicionamento.', 'Investem em mídia, mas não possuem uma mensagem forte.'].map((t) => (
                <li key={t} className="flex items-start gap-4"><span className="mt-2 w-3 h-3 rounded-full border border-[#D8D4BD]/50 shrink-0" aria-hidden="true" />{t}</li>
              ))}
            </ul>
          </div>
          {/* protagonista: o diagrama da distância, ancorado numa pessoa real */}
          <div className="v2-revela flex flex-col gap-5" style={atraso(150)}>
            <figure className="v2-foto-moldura relative rounded-[var(--raio)] h-56 md:h-60 shadow-2xl">
              <img src="/img/marca/empreendedora-atelie.webp" alt="Ceramista sorri enquanto organiza peças feitas à mão no seu ateliê" className="v2-foto absolute inset-0" style={{ objectPosition: '50% 30%' }} loading="lazy" />
              <span className="v2-etiqueta absolute left-4 top-4"><b />Valor real</span>
            </figure>
            <div className="rounded-[var(--raio)] bg-[#1A1A21] border border-[#D8D4BD]/12 p-8 sm:p-10">
              <div className="space-y-6 mb-9">
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3"><span className="text-white">Valor real</span><span className="text-[#D8D4BD]/50">existe</span></div>
                  <div className="v2-barra bg-[#D8D4BD] w-full" />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3"><span className="text-white">Valor percebido</span><span className="text-[#D8D4BD]/50">ainda não chega</span></div>
                  <div className="relative h-[0.625rem]"><div className="absolute inset-0 rounded-full border border-dashed border-[#D8D4BD]/35" /><div className="v2-barra absolute left-0 top-0 bg-[#D8D4BD]/40 w-[42%]" /></div>
                  <p className="flex justify-end mt-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#D8D4BD]/80"><span className="w-8 border-t border-dashed border-[#D8D4BD]/60 mr-2 self-center" aria-hidden="true" />A distância</p>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-white mb-4">A <Proh /> existe para resolver essa distância</h3>
              <p className="text-base md:text-lg leading-relaxed text-[#D8D4BD]/80 mb-7">Identificamos o valor presente em uma marca, damos forma à sua mensagem e criamos as condições para que ela alcance as pessoas certas e produza efeitos reais.</p>
              <p className="text-lg md:text-xl font-black text-white leading-snug">PROH é o nome.<br />Propagar é a missão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 02 O NOME — protagonista: a tipografia ================= */}
      <section id="significado" data-tema="claro" className="v2-carta v2-grao is-claro v2-sombra-clara z-[30] bg-[#D8D4BD] py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
          <div className="v2-revela mb-12">
            <Rotulo n="02">O significado</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5">
              <span className="md:whitespace-nowrap">Comunicação a favor do progresso,</span> <span className="md:whitespace-nowrap">com o <span className="v2-marca">humano</span> no centro.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 rounded-[var(--raio)] overflow-hidden shadow-xl mb-12">
            <div className="v2-revela v2-grao bg-[#0F0F15] text-[#D8D4BD] p-9 md:p-12">
              <p className="font-mirano font-black text-7xl md:text-8xl tracking-tighter text-white leading-none mb-8">PRO</p>
              <p className="text-lg mb-3">Representa <strong className="text-white">direção, progresso, propósito e construção</strong>.</p>
              <p className="text-[#D8D4BD]/65">É comunicação a favor do que precisa avançar: uma marca, um negócio, uma ideia, um projeto ou uma causa.</p>
            </div>
            <div className="v2-revela bg-white p-9 md:p-12" style={atraso(120)}>
              <p className="font-mirano font-black text-7xl md:text-8xl tracking-tighter leading-none mb-8">H</p>
              <p className="text-lg mb-3">Representa o <strong>humano</strong> e o <strong>hub</strong>.</p>
              <p className="text-[#0F0F15]/65">Pessoas estão no centro de toda decisão, enquanto conexões ampliam o alcance e transformam mensagens em movimentos.</p>
            </div>
          </div>
          <p className="v2-revela flex items-center gap-5 text-lg md:text-2xl font-bold">
            <span className="v2-linha-h is-grande hidden sm:inline-flex" aria-hidden="true"><i /></span>
            <span><Proh /> transforma valor em percepção, presença, crescimento e impacto.</span>
          </p>
        </div>
      </section>

      {/* ================= 03 DUAS DIMENSÕES — protagonista: as pessoas ================= */}
      <section id="dimensoes" data-tema="branco" className="v2-carta v2-sombra-clara z-[40] bg-white py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
          <div className="v2-revela mb-12">
            <Rotulo n="03">Duas dimensões do valor</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5 mb-5">Resultado e humanidade não precisam caminhar <span className="v2-marca">separados</span>.</h2>
            <p className="text-lg md:text-xl text-[#0F0F15]/70 max-w-3xl">A comunicação pode gerar crescimento sem se tornar fria. Pode falar de impacto sem perder estratégia. Pode construir desejo sem abrir mão da responsabilidade.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              { claro: true, foto: '/img/marca/estrategia-equipe-parede.webp', alt: 'Equipe diante de uma parede de referências; uma estrategista aponta uma imagem e os colegas riem', icone: 'trending-up', rotulo: 'Valor de negócio', titulo: 'Propagar crescimento', intro: 'Organizamos marcas e campanhas para gerar:', itens: ['Posicionamento e autoridade', 'Demanda e vendas', 'Reputação e consistência', 'Percepção de valor'], res: 'Resultado: marcas mais fortes, desejadas e sustentáveis.' },
              { claro: false, foto: '/img/marca/projeto-social-horta.webp', alt: 'Vizinhos de várias idades plantam juntos numa horta comunitária; uma avó ensina duas crianças', icone: 'heart-handshake', rotulo: 'Valor humano', titulo: 'Propagar impacto', intro: 'Construímos comunicação capaz de gerar:', itens: ['Conexão e confiança', 'Conscientização e mobilização', 'Oportunidades e pertencimento', 'Transformação'], res: 'Resultado: pessoas alcançadas e relações que permanecem.' },
            ].map((d, k) => (
              <article key={d.titulo} className={`v2-revela group rounded-[var(--raio)] overflow-hidden ${d.claro ? 'v2-grao is-claro bg-[#E6E3D3]' : 'v2-grao bg-[#0F0F15] text-[#D8D4BD]'}`} style={atraso(k * 120)}>
                <figure className="v2-foto-moldura relative h-56 md:h-64">
                  <img src={d.foto} alt={d.alt} className="v2-foto absolute inset-0" loading="lazy" />
                </figure>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${d.claro ? 'bg-[#0F0F15] text-[#D8D4BD]' : 'bg-[#D8D4BD] text-[#0F0F15]'}`}><IconeVivo nome={d.icone} /></span>
                    <p className={`text-xs font-bold uppercase tracking-[0.22em] ${d.claro ? 'text-[#0F0F15]/55' : 'text-[#D8D4BD]/55'}`}>{d.rotulo}</p>
                  </div>
                  <h3 className={`text-2xl font-black uppercase tracking-tight mb-4 ${d.claro ? '' : 'text-white'}`}>{d.titulo}</h3>
                  <p className={`mb-5 ${d.claro ? 'text-[#0F0F15]/75' : 'text-[#D8D4BD]/80'}`}>{d.intro}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5">{d.itens.map((t) => <li key={t} className="flex items-start gap-2.5"><Check className={`w-5 h-5 mt-0.5 shrink-0 ${d.claro ? '' : 'text-white'}`} /><span>{t}</span></li>)}</ul>
                  <p className={`mt-7 pt-5 border-t font-bold ${d.claro ? 'border-[#0F0F15]/10' : 'border-[#D8D4BD]/10 text-white'}`}>{d.res}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="v2-revela mt-12 flex items-center gap-5 text-base md:text-xl font-bold">
            <span className="v2-linha-h is-grande hidden sm:inline-flex" aria-hidden="true"><i /></span>
            O resultado não precisa ser apenas um número. Ele também pode ser relevância.
          </p>
        </div>
      </section>

      {/* ================= 04 SOLUÇÕES — protagonista: os ícones vivos ================= */}
      <section id="solucoes" data-tema="claro" className="v2-carta v2-grao is-claro v2-sombra-clara z-[50] bg-[#D8D4BD] py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
          <div className="v2-revela mb-12">
            <Rotulo n="04">Soluções</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5 mb-5">Tudo o que uma marca precisa para se posicionar, comunicar e crescer com coerência.</h2>
            <p className="text-lg md:text-xl text-[#0F0F15]/70">A <Proh /> integra diferentes competências em uma única direção estratégica.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {[
              ['compass', 'Estratégia', 'Direcionamento para compreender o cenário, organizar objetivos e definir os caminhos da comunicação.', ['Diagnóstico', 'Planejamento', 'Posicionamento', 'Proposta de valor']],
              ['fingerprint', 'Marca', 'Estrutura para transformar essência em uma identidade reconhecível e relevante.', ['Naming e branding', 'Identidade visual e verbal', 'Manifesto', 'Brandbook']],
              ['pen-line', 'Conteúdo', 'Narrativas e formatos que constroem presença, relacionamento e autoridade.', ['Planejamento editorial', 'Social media', 'Roteiros e campanhas', 'Direção criativa']],
              ['trending-up', 'Mídia e performance', 'Distribuição estratégica para aumentar alcance, demanda e conversão.', ['Tráfego pago', 'Funis e campanhas', 'Otimização', 'Dados e relatórios']],
              ['monitor-smartphone', 'Digital', 'Experiências que conectam marca, informação e conversão.', ['Sites e landing pages', 'Portais e interfaces', 'Automações', 'Apresentações digitais']],
              ['heart-handshake', 'Impacto', 'Comunicação para organizações e causas que desejam mobilizar pessoas e demonstrar transformação.', ['Campanhas sociais', 'Captação', 'Relatórios de impacto', 'Comunicação institucional']],
            ].map(([ic, t, d, it], k) => (
              <article key={t as string} className="v2-revela group rounded-[var(--raio)] bg-[#E6E3D3] border border-white/60 p-7 md:p-8 flex flex-col hover:bg-white transition-colors duration-500" style={atraso((k % 3) * 90)}>
                <div className="flex items-center justify-between mb-7">
                  <span className="w-12 h-12 rounded-2xl bg-[#0F0F15] text-[#D8D4BD] flex items-center justify-center"><IconeVivo nome={ic as string} /></span>
                  <span className="text-[0.7rem] font-bold tracking-[0.22em] text-[#0F0F15]/40">S—0{k + 1}</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">{t as string}</h3>
                <p className="text-[#0F0F15]/70 leading-relaxed mb-6">{d as string}</p>
                <ul className="mt-auto flex flex-wrap gap-2">{(it as string[]).map((x) => <li key={x} className="text-xs font-bold px-3 py-1.5 rounded-full border border-[#0F0F15]/12 text-[#0F0F15]/75">{x}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="v2-revela"><SimuladorIA /></div>
        </div>
      </section>

      {/* ================= 05 MÉTODO — protagonista: os anéis ================= */}
      <section id="metodo" data-tema="escuro" className="v2-carta v2-grao v2-sombra-escura z-[60] bg-[#0F0F15] text-[#D8D4BD] py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12"><Metodo /></div>
      </section>

      {/* ================= 06 POR QUE A PROH — protagonista: a equipe ================= */}
      <section id="diferenciais" data-tema="branco" className="v2-carta v2-sombra-clara z-[70] bg-white py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
          <div className="v2-revela mb-10">
            <Rotulo n="06">Diferenciais</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5">
              <span className="md:whitespace-nowrap">Não entregamos peças isoladas.</span> Construímos sistemas de <span className="v2-marca">propagação</span>.
            </h2>
          </div>
          <figure className="v2-revela v2-foto-moldura relative rounded-[var(--raio)] shadow-xl h-60 sm:h-72 md:h-96 mb-14">
            <img src="/img/cocriacao-em-equipe.jpg" alt="Equipe diversa e sorridente reunida em volta de uma mesa, cocriando um projeto com impressos e anotações" className="v2-foto absolute inset-0" style={{ objectPosition: '50% 40%' }} loading="lazy" />
            <figcaption className="v2-vidro is-fosco absolute left-4 bottom-4 right-4 sm:right-auto sm:max-w-sm rounded-[1.5rem] p-5">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#0F0F15]/60 mb-2">Um mesmo centro</p>
              <p className="text-base md:text-lg font-bold leading-snug">Estratégia, marca, conteúdo e mídia conectados na mesma direção.</p>
            </figcaption>
          </figure>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {[
              ['lightbulb', 'Estratégia antes da execução', 'Cada projeto começa pela compreensão do que precisa ser percebido, por quem e com qual objetivo.'],
              ['layers', 'Marca e performance integradas', 'Construímos reputação enquanto geramos alcance, demanda e conversão.'],
              ['sparkles', 'Sofisticação com clareza', 'Criamos marcas premium sem recorrer a discursos complicados ou distantes.'],
              ['users', 'Negócio e humano', 'Entendemos indicadores, vendas e crescimento sem desconsiderar pessoas, relações e comunidades.'],
              ['hand-heart', 'Impacto com dignidade', 'Traduzimos causas sociais sem apelação, exploração ou narrativas artificiais.'],
              ['message-circle', 'Proximidade estratégica', 'Participamos das decisões e não apenas da execução das peças.'],
            ].map(([ic, t, d], k) => (
              <div key={t} className="v2-revela group flex gap-5" style={atraso((k % 3) * 90)}>
                <span className="w-12 h-12 rounded-full border border-[#0F0F15]/20 flex items-center justify-center shrink-0 group-hover:bg-[#E6E3D3] transition-colors"><IconeVivo nome={ic} /></span>
                <div><h3 className="text-lg font-black uppercase tracking-tight mb-2">{t}</h3><p className="text-[#0F0F15]/70 leading-relaxed">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 07 PARA QUEM ================= */}
      <section id="publicos" data-tema="claro" className="v2-carta v2-grao is-claro v2-sombra-clara z-[80] bg-[#D8D4BD] py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
          <div className="v2-revela mb-12">
            <Rotulo n="07">Para quem</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5">Trabalhamos com quem possui valor real e deseja comunicá-lo com mais direção.</h2>
          </div>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                ['briefcase', 'Empresas e marcas de serviço', 'Para negócios que precisam aumentar percepção, autoridade e demanda.'],
                ['user-round', 'Profissionais e lideranças', 'Para especialistas, executivos e fundadores que desejam transformar conhecimento em influência.'],
                ['landmark', 'Instituições e projetos sociais', 'Para organizações que precisam mobilizar pessoas, captar recursos e demonstrar impacto.'],
                ['hand-heart', 'Empresas com responsabilidade social', 'Para marcas que desejam comunicar ações e compromissos com credibilidade.'],
              ].map(([ic, t, d], k) => (
                <div key={t} className="v2-revela group rounded-[var(--raio)] bg-[#E6E3D3] border border-white/60 p-7 flex flex-col gap-4 hover:bg-white transition-colors duration-500" style={atraso((k % 2) * 90)}>
                  <span className="w-11 h-11 rounded-full border border-[#0F0F15]/20 flex items-center justify-center"><IconeVivo nome={ic} /></span>
                  <h3 className="text-lg font-black uppercase tracking-tight">{t}</h3>
                  <p className="text-[#0F0F15]/70 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="v2-revela v2-grao bg-[#0F0F15] rounded-[var(--raio)] text-[#D8D4BD] overflow-hidden flex flex-col" style={atraso(150)}>
              <figure className="v2-foto-moldura relative h-64">
                <img src="/img/marca/retrato-lideranca.webp" alt="Retrato de uma líder de sorriso sereno em um escritório com plantas" className="v2-foto absolute inset-0" style={{ objectPosition: '50% 22%' }} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F15] via-transparent to-transparent" />
              </figure>
              <div className="p-8 md:p-10 pt-2">
                <p className="v2-rotulo is-escuro mb-6">Perfil</p>
                <h3 className="text-xl font-bold text-white mb-7">A <Proh /> é para quem:</h3>
                <ul className="space-y-4">{['Entende comunicação como investimento', 'Valoriza estratégia e consistência', 'Deseja construir marca, não apenas publicar', 'Busca crescimento com responsabilidade', 'Está aberto a processos, dados e direcionamento'].map((t) => <li key={t} className="flex items-start gap-3"><Check className="w-5 h-5 mt-0.5 text-white shrink-0" /><span>{t}</span></li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 08 IMPACTO — protagonista: a comunidade ================= */}
      <section id="impacto" data-tema="escuro" className="v2-carta v2-grao v2-sombra-escura z-[90] bg-[#0F0F15] text-[#D8D4BD] py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="v2-revela">
            <Rotulo n="08" escuro>Impacto</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5 mb-7 text-white">Propósito<span className="hidden md:inline"><br /></span> também precisa<span className="hidden md:inline"><br /></span> de estratégia.</h2>
            <p className="text-base md:text-lg text-[#D8D4BD]/75 mb-5">Projetos sociais não devem depender apenas de boas intenções. Para alcançar pessoas, parceiros, patrocinadores e apoiadores, uma causa precisa de clareza, posicionamento, narrativa, identidade, evidências, confiança, distribuição e continuidade.</p>
            <p className="text-base md:text-lg text-[#D8D4BD]/75 mb-8">A <Proh /> aplica o mesmo padrão estratégico e criativo utilizado no mercado para fortalecer organizações e iniciativas de impacto.</p>
            <ul className="space-y-3 mb-10">{['Sem reduzir pessoas a histórias de sofrimento', 'Sem comunicação apelativa', 'Sem perder humanidade'].map((t) => <li key={t} className="flex items-start gap-3"><Check className="w-5 h-5 mt-0.5 text-white shrink-0" /><span>{t}</span></li>)}</ul>
            <a href="#contato" className="inline-flex items-center gap-2 bg-[#D8D4BD] text-[#0F0F15] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors group">Propagar uma causa <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
          </div>
          <div className="v2-revela grid grid-cols-5 gap-4" style={atraso(150)}>
            <figure className="v2-foto-moldura relative col-span-5 rounded-[var(--raio)] shadow-2xl aspect-[3/2]">
              <img src="/img/refeicao-comunitaria-criancas.jpg" alt="Crianças sorrindo durante uma refeição coletiva em um projeto comunitário" className="v2-foto absolute inset-0" loading="lazy" />
              <figcaption className="v2-vidro is-escuro is-fosco absolute left-4 right-4 bottom-4 sm:right-auto sm:max-w-xs rounded-[1.5rem] p-5">
                <p className="text-lg font-black text-white leading-snug">Causas relevantes também merecem marcas fortes.</p>
              </figcaption>
            </figure>
            <figure className="v2-foto-moldura relative col-span-3 rounded-[1.5rem] shadow-xl aspect-[4/3]">
              <img src="/img/v2/voz-comunidade.webp" alt="Mulher fala para um círculo de vizinhos de várias idades num centro comunitário" className="v2-foto absolute inset-0" loading="lazy" />
            </figure>
            <figure className="v2-foto-moldura relative col-span-2 rounded-[1.5rem] shadow-xl">
              <img src="/img/marca/projeto-social-horta.webp" alt="Mulher sorri com as mãos na terra numa horta comunitária" className="v2-foto absolute inset-0" style={{ objectPosition: '92% 40%' }} loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      {/* ================= 09 COMO COMEÇAMOS + FORMATOS ================= */}
      <section id="modelos" data-tema="claro" className="v2-carta v2-grao is-claro v2-sombra-clara z-[100] bg-[#D8D4BD] py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
          <div className="v2-revela mb-12">
            <Rotulo n="09">Como começamos</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5">
              <span className="md:whitespace-nowrap">Diferentes formas de começar.</span> <span className="md:whitespace-nowrap">Uma mesma direção.</span>
            </h2>
          </div>
          {/* do primeiro contato à propagação — tudo à vista, sem clique */}
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              ['message-circle', 'Conversa', 'Você conta o momento da sua marca, do seu projeto ou da sua causa.'],
              ['fingerprint', 'Diagnóstico', 'Compreendemos contexto, objetivos, desafios, público e resultado esperado.'],
              ['layers', 'Recomendação', 'Apresentamos o escopo e o formato de parceria mais adequados.'],
              ['trending-up', 'Propagação', 'Estratégia, marca, conteúdo e mídia passam a trabalhar na mesma direção.'],
            ].map(([ic, t, d], k) => (
              <li key={t} className="v2-revela group relative rounded-[var(--raio)] bg-white/70 border border-white p-7" style={atraso(k * 90)}>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#0F0F15] text-[#D8D4BD] flex items-center justify-center"><IconeVivo nome={ic} /></span>
                  <span className="font-mirano text-sm text-[#0F0F15]/35">0{k + 1}</span>
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">{t}</h3>
                <p className="text-[#0F0F15]/70 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
          <h3 className="v2-revela text-xl font-black uppercase tracking-tight mb-5">Formatos de parceria</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              ['target', 'Projetos estratégicos', 'Para demandas com escopo e entrega definidos.', ['Branding e naming', 'Site', 'Reposicionamento', 'Campanhas']],
              ['users', 'Parceria recorrente', 'Para quem precisa de comunicação contínua.', ['Estratégia', 'Social media', 'Conteúdo e mídia', 'Relatórios']],
              ['megaphone', 'Sprint de propagação', 'Para objetivos concentrados e períodos específicos.', ['Lançamentos', 'Eventos', 'Campanhas', 'Captação']],
              ['compass', 'Consultoria e direção', 'Para equipes internas que precisam de orientação.', ['Planejamento', 'Governança de marca', 'Processos', 'Direção de fornecedores']],
            ].map(([ic, t, d, it], k) => (
              <div key={t as string} className="v2-revela group rounded-[var(--raio)] bg-[#E6E3D3] border border-white/60 p-7 flex flex-col hover:bg-white transition-colors duration-500" style={atraso(k * 80)}>
                <span className="w-11 h-11 rounded-full border border-[#0F0F15]/20 flex items-center justify-center mb-6"><IconeVivo nome={ic as string} /></span>
                <h4 className="text-lg font-black uppercase tracking-tight mb-3">{t as string}</h4>
                <p className="text-[#0F0F15]/70 leading-relaxed mb-6">{d as string}</p>
                <ul className="mt-auto space-y-2 border-t border-[#0F0F15]/12 pt-5">{(it as string[]).map((x) => <li key={x} className="flex items-center gap-2 text-sm font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#0F0F15]/60" />{x}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="v2-revela text-center">
            <a href="#contato" className="inline-flex items-center gap-2 bg-[#0F0F15] text-[#D8D4BD] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-black transition-colors group">Encontrar o formato ideal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
          </div>
        </div>
      </section>

      {/* ================= 10 MANIFESTO — protagonista: as ondas ================= */}
      <section id="manifesto" data-tema="escuro" className="v2-carta v2-grao v2-sombra-escura z-[110] bg-[#0F0F15] text-[#D8D4BD] py-24 md:py-32">
        <Ondas className="w-[70rem] -right-[24rem] top-1/2 -translate-y-1/2 text-[#D8D4BD] opacity-[0.22]" aneis={8} animado dur={18} />
        <div className="relative max-w-7xl w-full mx-auto px-6 md:px-12 grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20 items-start">
          <div className="v2-revela md:sticky md:top-28">
            <Rotulo n="10" escuro>Manifesto</Rotulo>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-white mt-6">Propagação não é barulho.<br />É direção.</h2>
            <span className="v2-linha-h is-grande text-[#D8D4BD]/60 mt-10 inline-flex" aria-hidden="true"><i /></span>
            <p className="mt-8 font-mirano text-lg md:text-xl font-bold uppercase tracking-widest text-white">PROH. Propagar valor.</p>
          </div>
          <div className="max-w-[60ch]">
            <ul className="v2-revela space-y-4 text-lg md:text-xl font-medium text-[#D8D4BD]/85">{['Nem tudo que aparece permanece.', 'Nem tudo que alcança gera impacto.', 'Nem toda mensagem se transforma em movimento.'].map((t) => <li key={t} className="flex items-start gap-4"><span className="mt-2.5 w-3 h-3 rounded-full border border-[#D8D4BD]/50 shrink-0" aria-hidden="true" />{t}</li>)}</ul>
            <p className="v2-revela mt-10 text-base md:text-lg text-[#D8D4BD]/70">Para propagar, não basta falar mais alto. É preciso ter:</p>
            <p className="v2-revela mt-4 text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">Verdade. Forma.<br />Direção. Consistência.</p>
            <div className="v2-revela mt-10 space-y-6 text-base md:text-lg leading-relaxed text-[#D8D4BD]/70">
              <p>Acreditamos em marcas que constroem, empresas que geram oportunidades, pessoas que lideram e causas que transformam realidades.</p>
              <p>Acreditamos que estratégia e humanidade podem caminhar juntas. Que crescimento pode produzir valor. Que influência pode ser usada com responsabilidade. Que comunicação pode gerar negócios e, ao mesmo tempo, gerar significado.</p>
            </div>
            <p className="v2-revela mt-10 text-lg md:text-xl font-bold text-white border-l-4 border-[#D8D4BD] pl-5 [text-wrap:balance]">A <Proh /> existe para fazer o que tem valor alcançar mais.</p>
          </div>
        </div>
      </section>

      {/* ================= 11 FAQ — respostas à vista, sem clique ================= */}
      <section id="faq" data-tema="branco" className="v2-carta v2-sombra-clara z-[120] bg-white py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
          <div className="v2-revela mb-12">
            <Rotulo n="11">Perguntas frequentes</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5">O que você precisa saber antes de começar.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {FAQ.map(([q, a], k) => (
              <div key={k} className="v2-revela border-t border-[#0F0F15]/15 pt-6" style={atraso((k % 2) * 90)}>
                <h3 className="text-lg md:text-xl font-bold mb-3">{q}</h3>
                <p className="text-[#0F0F15]/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 12 CONTATO ================= */}
      <section id="contato" data-tema="claro" className="v2-carta v2-grao is-claro v2-sombra-clara z-[130] bg-[#D8D4BD] py-24 md:py-28">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="v2-revela lg:sticky lg:top-28">
            <Rotulo n="12">Contato</Rotulo>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[0.98] mt-5 mb-6">O que tem valor não deveria permanecer <span className="v2-marca">invisível</span>.</h2>
            <p className="text-xl md:text-2xl font-bold mb-4">Vamos transformar sua comunicação em movimento?</p>
            <p className="text-base md:text-lg text-[#0F0F15]/70 max-w-xl mb-10">Estratégia, marca, conteúdo e mídia trabalhando na mesma direção para gerar crescimento, reputação e impacto. Conte brevemente sobre sua marca, projeto ou causa — a <Proh /> entrará em contato para compreender o momento e indicar o melhor caminho.</p>
            <figure className="v2-foto-moldura relative rounded-[var(--raio)] h-60 md:h-72 shadow-xl">
              <img src="/img/marca/conversa-cliente.webp" alt="Estrategista anota enquanto um empresário explica seu negócio, rindo, numa mesa de café" className="v2-foto absolute inset-0" loading="lazy" />
              <span className="v2-etiqueta absolute left-4 bottom-4"><b />Tudo começa com uma conversa</span>
            </figure>
          </div>
          <div className="v2-revela" style={atraso(150)}><Formulario /></div>
        </div>
      </section>

      {/* ================= RODAPÉ ================= */}
      <footer className="v2-grao relative z-[140] bg-[#0F0F15] text-[#D8D4BD] pb-12 overflow-hidden rounded-t-[var(--raio-secao)] -mt-[var(--raio-secao)] shadow-[0_-20px_50px_rgba(0,0,0,0.45)]">
        <div className="v2-calcada h-16 md:h-20 mb-16" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-14">
            <div>
              <img src={logoEscuro} alt="PROH Media" className="h-10 w-auto mb-6" />
              <p className="text-sm uppercase tracking-widest font-bold text-[#D8D4BD]/70">Estratégia, marca, mídia e impacto.</p>
              <p className="text-sm uppercase tracking-widest font-bold font-mirano text-white mt-1">Propagar valor.</p>
            </div>
            <nav aria-label="Navegação do rodapé">
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#D8D4BD]/40 mb-5">Navegação</p>
              <div className="flex flex-col gap-3 text-sm font-bold uppercase tracking-widest text-[#D8D4BD]/65">{NAV.map(({ id, rotulo }) => <a key={id} href={`#${id}`} className="hover:text-white transition-colors w-fit">{rotulo}</a>)}</div>
            </nav>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#D8D4BD]/40 mb-5">Fale com a PROH</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#D8D4BD]/80 hover:text-white transition-colors">
                <span className="w-10 h-10 rounded-full border border-[#D8D4BD]/25 flex items-center justify-center"><IconeVivo nome="message-circle" size={18} /></span>WhatsApp
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-[#D8D4BD]/10 flex flex-col sm:flex-row justify-between gap-3 text-xs uppercase tracking-widest text-[#D8D4BD]/40">
            <span>© {new Date().getFullYear()} PROH Media</span>
            <span className="font-mirano">PROH. Propagar valor.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================================================
// HERO — rede de pessoas nas ondas: o valor no centro, gente alegre nos anéis
// ==========================================================================
const ROSTOS = [
  ['rosto-lideranca', 'Líder sorrindo', 23, 20, 25],
  ['rosto-ceramista', 'Ceramista sorrindo no ateliê', 78, 17, 21],
  ['rosto-empresario', 'Empresário rindo numa conversa', 87, 56, 19],
  ['rosto-avo-horta', 'Avó sorrindo numa horta comunitária', 66, 85, 23],
  ['rosto-criador', 'Criador de conteúdo sorrindo', 24, 79, 20],
  ['rosto-estrategista', 'Estrategista sorrindo', 10, 49, 16],
] as const;

function RedeDePessoas() {
  return (
    <figure className="v2-revela relative w-full max-w-[36rem] mx-auto aspect-square" style={{ '--atraso': '200ms' } as React.CSSProperties} aria-label="Pessoas sorrindo distribuídas em anéis em volta de um ponto central: o valor no centro e o alcance em ondas">
      <Ondas className="w-full inset-0 text-[#0F0F15]/45" aneis={6} animado dur={16} />
      {/* linhas finas do centro a cada pessoa: o H como hub */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#0F0F15]/20" aria-hidden="true">
        {ROSTOS.map(([id, , x, y]) => <line key={id} x1="50" y1="50" x2={x} y2={y} stroke="currentColor" strokeWidth="0.25" />)}
      </svg>
      <span className="v2-origem !bg-[#0F0F15] !shadow-[0_0_0_7px_rgba(15,15,21,0.12)]" style={{ left: '50%', top: '50%' }} />
      <span className="v2-vidro absolute left-1/2 top-[58%] -translate-x-1/2 rounded-full px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] whitespace-nowrap">O seu valor</span>
      {ROSTOS.map(([id, alt, x, y, t], k) => (
        // o posicionamento (translate) fica no span de fora; a entrada
        // (.v2-revela também usa transform) fica no de dentro
        <span key={id} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%`, width: `${t}%` }}>
          <span className="v2-revela v2-foto-moldura block aspect-square rounded-full ring-4 ring-[#D8D4BD] shadow-xl" style={{ '--atraso': `${300 + k * 90}ms` } as React.CSSProperties}>
            <img src={`/img/v21/${id}.webp`} alt={alt} className="v2-foto absolute inset-0" />
          </span>
        </span>
      ))}
      <figcaption className="sr-only">O valor no centro; o alcance se espalha em ondas até as pessoas.</figcaption>
    </figure>
  );
}

// ==========================================================================
// MÉTODO — anéis do centro para fora. Tudo à vista; o hover só acende o anel
// ==========================================================================
function Metodo() {
  const [passo, setPasso] = useState<number | null>(null);
  const raios = [40, 80, 120, 160, 196];
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="v2-revela">
        <Rotulo n="05" escuro>Método</Rotulo>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mt-5 mb-5 text-white">Antes de propagar, é preciso dar direção.</h2>
        <p className="text-lg md:text-xl text-[#D8D4BD]/70 mb-10">O Sistema <Proh /> organiza estratégia e execução em cinco movimentos — do centro para fora.</p>
        <ol className="border-t border-[#D8D4BD]/12" onMouseLeave={() => setPasso(null)}>
          {METODO.map((m, k) => (
            <li key={m.titulo} className="border-b border-[#D8D4BD]/12 py-4 grid grid-cols-[3.25rem_1fr] cursor-default" onMouseEnter={() => setPasso(k)}>
              <span className={`font-mirano text-sm pt-1 transition-colors ${passo === k ? 'text-white' : 'text-[#D8D4BD]/45'}`}>0{k + 1}</span>
              <div>
                <p className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-1">{m.titulo}</p>
                <p className="text-[#D8D4BD]/80 leading-relaxed max-w-md">{m.texto}</p>
              </div>
            </li>
          ))}
        </ol>
        <a href="#contato" className="mt-10 inline-flex items-center gap-2 bg-[#D8D4BD] text-[#0F0F15] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors group">Aplicar o Sistema <Proh /> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
      </div>
      <div className="v2-revela relative mx-auto w-full max-w-[34rem]" style={{ '--atraso': '150ms' } as React.CSSProperties}>
        <svg viewBox="0 0 420 420" className="w-full h-auto" role="img" aria-label={`Sistema PROH em anéis, do centro para fora: ${METODO.map((m) => m.titulo).join(', ')}.`}>
          {[...raios].reverse().map((r, idx) => {
            const k = raios.length - 1 - idx;
            const ativo = passo === k;
            return <circle key={r} cx="210" cy="210" r={r} className="v2-anel" fill={ativo ? '#24242C' : '#0F0F15'} stroke={ativo ? '#FFFFFF' : 'rgba(216,212,189,0.3)'} strokeWidth={ativo ? 2 : 1} onMouseEnter={() => setPasso(k)} onMouseLeave={() => setPasso(null)} />;
          })}
          <circle cx="210" cy="210" r="190" fill="none" stroke="#D8D4BD" strokeWidth="1" className="v2-pulso" pointerEvents="none" />
          {METODO.map((m, k) => (
            <text key={m.titulo} x="210" y={k === 0 ? 214 : 210 - raios[k] + 24} textAnchor="middle" pointerEvents="none" className="v2-anel-rotulo" fill={passo === k ? '#FFFFFF' : 'rgba(216,212,189,0.7)'} style={{ fontSize: k === 0 ? 11 : 10, fontWeight: 700, letterSpacing: '0.18em', fontFamily: 'Gotham, sans-serif' }}>
              {`0${k + 1} ${m.titulo.toUpperCase()}`}
            </text>
          ))}
        </svg>
        <span className="v2-etiqueta absolute left-0 bottom-2 sm:bottom-6"><b />Do centro para fora</span>
      </div>
    </div>
  );
}

// ==========================================================================
// SIMULADOR COM IA — mesmo proxy (/api/gemini.php); ondas em vez da gota
// ==========================================================================
function SimuladorIA() {
  const [segmento, setSegmento] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [resultado, setResultado] = useState<any>(null);
  const [erro, setErro] = useState<string | null>(null);
  const gerar = async () => {
    if (!segmento.trim() || carregando) return;
    setCarregando(true); setErro(null); setResultado(null);
    const esperas = [1000, 2500, 5000];
    for (let t = 0; t <= esperas.length; t++) {
      try {
        const r = await fetch(geminiProxyUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ niche: segmento.trim() }) });
        if (!r.ok) throw new Error('falha');
        const d = await r.json();
        if (d && (d.resultado || d.valor)) { setResultado(d); break; }
        throw new Error('vazio');
      } catch {
        if (t < esperas.length) await new Promise((ok) => setTimeout(ok, esperas[t]));
        else setErro('Não foi possível gerar as ideias agora. Tente novamente em instantes.');
      }
    }
    setCarregando(false);
  };
  return (
    <div className="v2-grao rounded-[var(--raio)] bg-[#0F0F15] text-[#D8D4BD] overflow-hidden shadow-2xl grid lg:grid-cols-[0.85fr_1.15fr]">
      <div className="relative min-h-[15rem] overflow-hidden" aria-hidden="true">
        <Ondas className="w-[150%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D8D4BD]/60" aneis={7} animado dur={carregando ? 5 : 16} />
        <span className="v2-origem" style={{ left: '50%', top: '50%' }} />
        <span className="group v2-etiqueta absolute left-5 top-5 !gap-2"><IconeVivo nome="sparkles" size={14} /> IA da PROH</span>
      </div>
      <div className="p-7 sm:p-10 md:p-12">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white mb-4">Veja seu valor se propagar em duas direções.</h3>
        <p className="text-[#D8D4BD]/70 mb-8 leading-relaxed max-w-lg">Digite o segmento da sua empresa e receba, na hora, uma ideia de crescimento e uma ideia de impacto — as duas dimensões do valor que a <Proh /> propaga.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="v21-segmento" className="sr-only">Segmento da empresa</label>
          <input id="v21-segmento" type="text" value={segmento} onChange={(e) => setSegmento(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && gerar()} placeholder="Ex.: clínica de estética, marca de roupas…" className="flex-1 min-w-0 px-6 py-4 rounded-full bg-white/[0.06] border border-[#D8D4BD]/20 focus:outline-none focus:border-[#D8D4BD]/60 text-white placeholder:text-[#D8D4BD]/40 font-medium" />
          <button type="button" onClick={gerar} disabled={carregando || !segmento.trim()} className="group bg-[#D8D4BD] text-[#0F0F15] px-6 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap">
            {carregando ? <Loader2 size={18} className="animate-spin" /> : <IconeVivo nome="sparkles" size={18} />}
            {carregando ? 'Propagando…' : 'Gerar ideias'}
          </button>
        </div>
        <div className="min-h-[2.75rem] pt-3" aria-live="polite">{erro && <p className="text-sm font-bold text-white/90">{erro}</p>}</div>
        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          {[['01 · Propagar crescimento', 'trending-up', resultado?.resultado, 'Uma ideia de crescimento para o seu mercado aparece aqui.'], ['02 · Propagar impacto', 'heart-handshake', resultado?.valor, 'Uma ideia de impacto humano aparece aqui.']].map(([t, ic, v, vazio], k) => (
            <div key={k} className={`group rounded-2xl p-5 border transition-colors duration-500 ${v ? 'bg-[#D8D4BD] text-[#0F0F15] border-transparent' : 'border-[#D8D4BD]/15 text-[#D8D4BD]/65'}`}>
              <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] mb-3"><IconeVivo nome={ic} size={16} />{t}</p>
              <p className="font-medium leading-relaxed text-sm md:text-base">{carregando ? 'Analisando…' : (v || vazio)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================================================
// FORMULÁRIO — mesma entrega (/api/whatsapp.php, wa.me de reserva)
// ==========================================================================
function validarCelularBR(texto: string) {
  let d = String(texto).replace(/\D+/g, '');
  if (d.startsWith('55') && d.length >= 12) d = d.slice(2);
  return d.length === 11 && Number(d.slice(0, 2)) >= 11 && d[2] === '9';
}

function Formulario() {
  const [f, setF] = useState({ nome: '', empresa: '', email: '', whatsapp: '', tipo: '', desafio: '', momento: '' });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [viaWhats, setViaWhats] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const at = (c: string) => (e: any) => setF((v) => ({ ...v, [c]: e.target.value }));
  const abrirWhatsApp = () => {
    const corpo = ['Olá, PROH! Quero propagar valor.', '', `*Nome:* ${f.nome}`, `*Empresa ou projeto:* ${f.empresa || '—'}`, `*E-mail:* ${f.email}`, `*WhatsApp:* ${f.whatsapp || '—'}`, `*Tipo de projeto:* ${f.tipo}`, `*Momento:* ${f.momento}`, '', '*Principal desafio:*', f.desafio].join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(corpo)}`, '_blank', 'noopener');
  };
  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (enviando || enviado) return;
    if (!f.tipo || !f.momento) { setErro('Selecione o tipo e o momento do projeto.'); return; }
    if (f.whatsapp.trim() !== '' && !validarCelularBR(f.whatsapp)) { setErro('Confira o WhatsApp: DDD + 9 dígitos (ex.: 19 99999-9999).'); return; }
    setErro(null); setEnviando(true);
    let entregue = false;
    try {
      const r = await fetch('/api/whatsapp.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
      const d = await r.json().catch(() => null);
      entregue = r.ok && !!(d && d.ok);
      if (!entregue && r.status === 400 && d && d.error) { setErro(d.error); setEnviando(false); return; }
    } catch { /* rede fora: segue para o wa.me */ }
    if (!entregue) abrirWhatsApp();
    setViaWhats(!entregue); setEnviando(false); setEnviado(true);
  };
  const campo = 'w-full px-6 py-4 rounded-full bg-white border border-[#0F0F15]/10 focus:outline-none focus:border-[#0F0F15]/40 placeholder:text-[#0F0F15]/40 font-medium';
  const rot = 'block text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-2 text-[#0F0F15]/65';
  return (
    <form onSubmit={enviar} className="rounded-[var(--raio)] bg-[#E6E3D3] border border-white/70 p-6 sm:p-8 md:p-10 shadow-xl">
      <div className="flex items-center justify-between mb-8"><h3 className="text-2xl font-black uppercase tracking-tight">Vamos começar</h3><span className="v2-linha-h text-[#0F0F15]/40" aria-hidden="true"><i /></span></div>
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div><label htmlFor="v21-nome" className={rot}>Nome</label><input id="v21-nome" required placeholder="Seu nome" className={campo} value={f.nome} onChange={at('nome')} /></div>
        <div><label htmlFor="v21-empresa" className={rot}>Empresa ou projeto</label><input id="v21-empresa" placeholder="Empresa ou marca" className={campo} value={f.empresa} onChange={at('empresa')} /></div>
        <div><label htmlFor="v21-email" className={rot}>E-mail</label><input id="v21-email" type="email" required placeholder="seu@email.com" className={campo} value={f.email} onChange={at('email')} /></div>
        <div><label htmlFor="v21-whats" className={rot}>WhatsApp</label><input id="v21-whats" type="tel" placeholder="(19) 99999-9999" className={campo} value={f.whatsapp} onChange={at('whatsapp')} /></div>
      </div>
      <div className="mb-5"><label htmlFor="v21-tipo" className={rot}>Tipo de projeto</label><Selecao id="v21-tipo" valor={f.tipo} aoMudar={(v) => setF((x) => ({ ...x, tipo: v }))} opcoes={['Estratégia', 'Branding', 'Conteúdo', 'Social media', 'Mídia e performance', 'Site ou landing page', 'Comunicação de impacto', 'Projeto completo', 'Ainda não sei']} /></div>
      <div className="mb-5"><label htmlFor="v21-desafio" className={rot}>Principal desafio</label><textarea id="v21-desafio" required rows={4} placeholder="Conte brevemente o que precisa ser resolvido." className="w-full px-6 py-4 rounded-[1.75rem] bg-white border border-[#0F0F15]/10 focus:outline-none focus:border-[#0F0F15]/40 placeholder:text-[#0F0F15]/40 font-medium" value={f.desafio} onChange={at('desafio')} /></div>
      <div className="mb-8"><label htmlFor="v21-momento" className={rot}>Momento do projeto</label><Selecao id="v21-momento" valor={f.momento} aoMudar={(v) => setF((x) => ({ ...x, momento: v }))} opcoes={['Preciso começar imediatamente', 'Dentro dos próximos 30 dias', 'Dentro dos próximos três meses', 'Estou pesquisando possibilidades']} /></div>
      <button type="submit" disabled={enviando || enviado} className="group w-full bg-[#0F0F15] text-[#D8D4BD] px-8 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
        {enviando ? <Loader2 className="w-4 h-4 animate-spin" /> : <IconeVivo nome="message-circle" size={18} />}
        {enviado ? 'Mensagem enviada' : enviando ? 'Enviando…' : 'Enviar mensagem'}
        {!enviando && !enviado && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </button>
      <p className="mt-3 text-xs font-medium text-[#0F0F15]/50 text-center">Respondemos em até um dia útil.</p>
      {erro && <p className="v2-fade-in mt-4 flex items-center justify-center gap-2 rounded-full bg-[#0F0F15] text-[#D8D4BD] px-5 py-3 text-sm font-bold" role="alert"><X size={16} className="shrink-0" />{erro}</p>}
      {enviado && <p className="v2-fade-in mt-4 text-sm font-medium text-[#0F0F15]/80 text-center">{viaWhats ? 'Abrimos o WhatsApp com sua mensagem pronta — é só apertar enviar. Em breve, entraremos em contato.' : 'Recebemos seu projeto! Em breve entraremos em contato para entender como podemos propagar esse valor.'}</p>}
    </form>
  );
}

function Selecao({ id, valor, aoMudar, opcoes }: { id: string; valor: string; aoMudar: (v: string) => void; opcoes: string[] }) {
  const [aberto, setAberto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fora = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setAberto(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setAberto(false); };
    document.addEventListener('mousedown', fora);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', fora); document.removeEventListener('keydown', esc); };
  }, []);
  return (
    <div ref={ref} className="relative">
      <button type="button" id={id} aria-haspopup="listbox" aria-expanded={aberto} onClick={() => setAberto((v) => !v)} className="w-full px-6 py-4 rounded-full bg-white border border-[#0F0F15]/10 focus:outline-none focus:border-[#0F0F15]/40 text-left font-medium flex items-center justify-between gap-3">
        <span className={valor ? '' : 'text-[#0F0F15]/40'}>{valor || 'Selecione uma opção'}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-[#0F0F15]/50 transition-transform ${aberto ? 'rotate-180' : ''}`} />
      </button>
      {aberto && (
        <ul role="listbox" className="v2-fade-in absolute z-30 mt-2 w-full bg-white rounded-[1.5rem] border border-[#0F0F15]/10 shadow-2xl py-2 max-h-72 overflow-auto">
          {opcoes.map((o) => (
            <li key={o} role="option" aria-selected={o === valor}>
              <button type="button" onClick={() => { aoMudar(o); setAberto(false); }} className={`w-full text-left px-6 py-3 font-medium hover:bg-[#D8D4BD]/45 ${o === valor ? 'bg-[#D8D4BD]/55 font-bold' : 'text-[#0F0F15]/80'}`}>{o}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ==========================================================================
// COMPORTAMENTOS DA PÁGINA
// ==========================================================================
function usePagina(setHeaderEscuro: (v: boolean) => void, setHeaderBranco: (v: boolean) => void, setSecaoAtiva: (v: string) => void) {
  useEffect(() => {
    const secoes = Array.from(document.querySelectorAll('[data-tema]')) as HTMLElement[];
    const aoRolar = () => {
      let tema = 'claro';
      for (const el of secoes) { const r = el.getBoundingClientRect(); if (r.top <= 64 && r.bottom > 64) tema = el.dataset.tema || 'claro'; }
      setHeaderEscuro(tema === 'escuro');
      setHeaderBranco(tema === 'branco');
    };
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('load', aoRolar);
    aoRolar();
    requestAnimationFrame(() => requestAnimationFrame(aoRolar));

    const obsNav = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setSecaoAtiva(e.target.id); }), { rootMargin: '-20% 0px -60% 0px' });
    NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el) obsNav.observe(el); });

    // entrada uma vez só
    const obsRevela = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visivel'); obsRevela.unobserve(e.target); } }), { threshold: 0.15 });
    document.querySelectorAll('.v2-revela').forEach((el) => obsRevela.observe(el));

    const cartas = Array.from(document.querySelectorAll('.v2-carta')) as HTMLElement[];
    const ajustar = () => {
      const desktop = window.matchMedia('(min-width: 768px)').matches;
      const vh = window.innerHeight;
      cartas.forEach((el) => { el.style.top = desktop ? Math.min(0, vh - el.offsetHeight) + 'px' : ''; });
    };
    ajustar();
    window.addEventListener('resize', ajustar);
    window.addEventListener('load', ajustar);
    const ro = 'ResizeObserver' in window ? new ResizeObserver(ajustar) : null;
    if (ro) cartas.forEach((el) => ro.observe(el));

    return () => {
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('load', aoRolar);
      window.removeEventListener('resize', ajustar);
      window.removeEventListener('load', ajustar);
      ro?.disconnect(); obsNav.disconnect(); obsRevela.disconnect();
    };
  }, []);
}

// Palavras de 1–2 letras nunca terminam linha (NBSP); 3 letras também, se o
// grupo seguinte tiver até 4 letras.
function useTipografia() {
  useEffect(() => {
    const raiz = document.getElementById('root') || document.body;
    const w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if (!p || p.closest('script, style, textarea, input, select, option, svg')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const curtas = /(^|[\s ])([A-Za-zÀ-ÿ]{1,2})[ ]+/g;
    const tres = /(^|[\s ])([A-Za-zÀ-ÿ]{3})[ ]+(?=((?:[A-Za-zÀ-ÿ]{1,2} )*[A-Za-zÀ-ÿ]{1,2})(?![A-Za-zÀ-ÿ]))/g;
    const nos: Node[] = [];
    let n;
    while ((n = w.nextNode())) nos.push(n);
    nos.forEach((t) => {
      const v = t.nodeValue || '';
      let novo = v.replace(curtas, (m, a, p) => a + p + ' ');
      novo = novo.replace(tres, (m, a, w3, g) => (g.replace(/ /g, '').length <= 4 ? a + w3 + ' ' : m));
      if (novo !== v) t.nodeValue = novo;
    });
  }, []);
}
