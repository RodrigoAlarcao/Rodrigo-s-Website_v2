**PRD**

*Product Requirements Document*

rodrigoalarcao.pt · v1.0 · Rodrigo Alarcão

# **0. Meta do Projecto**

| Campo | Valor |
| :---- | :---- |
| Nome do projecto | rodrigo-alarcao-portfolio |
| Tipo | Portfolio / Landing pessoal |
| Foundation a usar | FOUNDATION_LANDING.md |
| Autor | Rodrigo Alarcão |
| Data | 2026-04-08 |
| Versão PRD | v1.0 |
| Status | Em desenvolvimento |

## **0.1 Derogações ao FOUNDATION**

| Regra do FOUNDATION | Derogação aplicada | Justificação |
| :---- | :---- | :---- |
| Proibição de Inter como fonte | Usar Satoshi (ou DM Sans) como body — ambas são distintas do default AI | Body font escolhida pelo contraste com Special Gothic Expanded One, não por ser Inter. Derogação preventiva para clareza. |
| Hierarquia de motion: GSAP primário | Adicionar Unicorn Studio como layer visual independente (canvas/WebGL) | Unicorn Studio vive em canvas separado, não interfere com GSAP. É background atmosférico, não animação de layout. |
| next/font para todas as fontes Google | Special Gothic Expanded One via Google Fonts + Satoshi via font file (não está no Google Fonts) | Satoshi requer self-hosting. Usar next/localFont para Satoshi, next/font/google para Special Gothic. |
| Layout padrão max-w-[1200px] | Permitir secções full-bleed e hero com largura total | Direcção editorial pede quebras de container. Container de 1200px mantém-se para conteúdo de texto. |

# **1. Contexto e Objectivo**

## **1.1 O problema ou oportunidade**

| Rodrigo é Product Designer com 7 anos de experiência B2B que se reposicionou como "Product Designer & Builder" — alguém que leva ideias de conceito a MVP em semanas usando AI e uma metodologia própria. O portfolio anterior comunicava "front-end designer com AI". O novo site precisa de comunicar "product person que pensa, desenha e constrói" — orientado a incubadores, venture studios e early-stage founders. |
| :---- |

## **1.2 A solução**

| Portfolio pessoal editorial e tipográfico que demonstra processo, metodologia e produtos lançados — focado em credibilidade e conversão para oportunidades de trabalho embedded com founders. |
| :---- |

## **1.3 Público-alvo**

| Segmento | Descrição |
| :---- | :---- |
| Primário | Incubadores e venture studios em Portugal e Europa que procuram design + product embedded |
| Secundário | Early-stage founders que precisam de alguém para levar uma ideia a MVP |
| Terciário | Scale-ups com R&D interno que precisam de product design + prototipagem rápida |
| Excluído | Agências criativas à procura de front-end freelancer, empresas com procurement longo |

## **1.4 Objectivos de sucesso**

* Site publicado no Vercel com domínio rodrigoalarcao.pt em 2-3 semanas
* Lighthouse Performance > 90 em mobile
* Bilingue EN/PT com toggle funcional
* Pelo menos 1 contacto qualificado nos primeiros 30 dias
* Case studies de Palco Democrático e EcoReport com profundidade

# **2. Identidade Visual**

| VIBE-PRD — Fonte de verdade para identidade visual |
| :---- |
| Palavras-guia: Editorial · Peso · Directo · Respirável · Credível |
| Qualquer decisão visual deve passar no teste: "Isto é editorial? Isto tem peso?" |

## **2.1 Tom e Personalidade**

| Atributo | Definição |
| :---- | :---- |
| Tom visual | Editorial neutro — tipografia como protagonista, composição de revista de design |
| Emoção alvo | "Este tipo sabe o que faz e tem processo" — credibilidade imediata |
| Elemento mais memorável | O contraste tipográfico (bold/light/itálico) + o background Unicorn Studio no hero |
| Tema | Light mode only (fundo branco/warm com contraste dark) |

## **2.2 Tipografia**

| Papel | Fonte escolhida | Notas |
| :---- | :---- | :---- |
| Display / Títulos | **Special Gothic Expanded One** (Google Fonts) | Bold expandida, editorial. Usar em H1, hero, section headers. Nunca abaixo de 32px. |
| Body / Texto corrido | **Satoshi** (self-hosted via Fontshare/localFont) | Clean, moderna, boa amplitude de pesos (Light 300, Regular 400, Medium 500, Bold 700). Alternativa: DM Sans se Satoshi criar problemas de licença. |
| Mono / Labels | **IBM Plex Mono** (Google Fonts) | Para labels, tags, metadata, números de processo (01, 02, 03...) |

**Contraste tipográfico — regra central deste projecto:**

O site vive do contraste de pesos dentro da mesma família e entre famílias. Usar activamente:
* Special Gothic Expanded One (bold, uppercase) para headings de impacto
* Satoshi Light (300) + Satoshi Bold (700) para criar tensão no body
* Satoshi Italic para citações, emphasis, e momentos de tom pessoal
* IBM Plex Mono para metadata, números, labels — contraste de textura

**Escalas tipográficas:**

| Elemento | Desktop | Mobile |
| :---- | :---- | :---- |
| Hero H1 | clamp(4rem, 8vw, 7rem) | clamp(2.5rem, 10vw, 4rem) |
| Section H2 | clamp(2.5rem, 5vw, 4rem) | clamp(1.75rem, 6vw, 2.5rem) |
| Process numbers (01, 02...) | text-8xl (6rem) font-light | text-6xl (3.75rem) font-light |
| Body | text-base (16px) / text-lg (18px) | text-base (16px) |
| Label / Mono | text-xs (12px) uppercase tracking-[0.12em] | text-xs (12px) |
| Caption / Dim | text-sm (14px) | text-sm (14px) |

## **2.3 Paleta de Cores — Sandstone Soft**

| Papel | Hex | CSS Variable |
| :---- | :---- | :---- |
| Background principal | #FAFAF8 | --color-bg |
| Background secundário / surface | #F0EDE8 | --color-surface |
| Background warm / cards | #D9D3CB | --color-warm |
| Texto principal | #1A1A19 | --color-text |
| Texto secundário / dim | #6B6560 | --color-dim |
| Texto terciário / muted | #9C9690 | --color-muted |
| Border / separator | rgba(26, 26, 25, 0.08) | --color-border |
| Accent (hover, links, active states) | #1A1A19 | --color-accent |

**Notas sobre a paleta:**
* Sem cor de accent cromática — o accent é o preto. O contraste vem da tipografia e do peso, não da cor.
* Os warm grays (#F0EDE8, #D9D3CB) criam a sensação de Sandstone — pedra quente, não frio digital.
* Se necessário um accent cromático no futuro (ex: hover diferenciado), considerar um warm terracota (#C4653A) ou charcoal muted (#3D3832).

## **2.4 Referências Visuais**

* danielgamble.com.au — Processo numerado, texto rotativo, accordion, tom estratégico
* igorsokoltsov.com — Minimalismo editorial, hero de texto puro, espaço negativo
* rachelhow.com — Posicionamento pessoal claro, fundo branco, organização limpa

# **3. Estrutura e Conteúdo**

## **3.1 Mapa de Páginas / Rotas**

| Rota | Descrição |
| :---- | :---- |
| / (home) | Página principal com todas as secções |
| /work/palco-democratico | Case study do Palco Democrático |
| /work/ecoreport | Case study do EcoReport |
| — (futuro V2) | /lab — Vibe Tests / explorações |

## **3.2 Anatomia da Página Principal**

| # | Secção | Objectivo / Conteúdo | Animação |
| :---- | :---- | :---- | :---- |
| 1 | Nav | Logo "RA" + links (About, Process, Work, Contact) + toggle EN/PT | Entrada: gsap.from, y:-20, opacity:0. Sticky on scroll com bg blur. |
| 2 | Hero | Nome + título rotativo (designer · builder · methodologist) + statement curto | Timeline GSAP: nome → título rotativo → statement, stagger. Background: UnicornBackground component com fallback visual (V1 sem asset, ready para plug-in futuro). |
| 3 | About / Statement | Parágrafo pessoal — quem é, de onde vem, para onde vai. Tom conversacional, 1ª pessoa. Sem foto. | Scroll reveal com GSAP, text por linhas com opacidade progressiva (estilo teleprompter leve, não full SplitText como antes). |
| 4 | Methodology / Process | 4 steps numerados: 01 Discovery → 02 Strategy → 03 Design & Build → 04 Launch. Cada step com título + 2-3 frases. | Scroll-driven: cada step revela ao scroll com número grande (font-light) + conteúdo. Possível Unicorn Studio como background desta secção. |
| 5 | Work / Projects | Cards de Palco Democrático e EcoReport. Cada card com: nome, tipo, stack, frase de impacto, thumbnail, link para case study. | Hover com escala suave. Scroll reveal staggered. |
| 6 | Background / Experience | Timeline ou lista compacta: ComparaJá (Product Designer, 2022–presente), BI4ALL (UX/UI, 2021–22), IADE (Mestrado), FBAUL (Licenciatura). Skills como tags. | Scroll reveal simples, sem complexidade. |
| 7 | Contact / CTA final | Statement de fecho + email directo (alarcao.rodrigo@gmail.com) + links LinkedIn/Portfolio. Simples, sem formulário. | Entrada suave. Possível animação de texto no email ou hover effect. |
| 8 | Footer | © + links sociais + "Built with methodology" ou similar | Simples, sem animação. |

## **3.3 Conteúdo do Hero — Texto Rotativo**

O hero deve funcionar assim:

```
Rodrigo Alarcão

[designer]     ← rota entre estas três palavras
[builder]
[methodologist]

I take ideas from concept to MVP in weeks.
```

A rotação deve ser suave — não scramble, não flash. Slide vertical (y) com fade, ritmo de ~2.5s por palavra. A palavra activa deve ter weight diferente ou estilo diferente (ex: itálico) para marcar a transição.

## **3.4 Conteúdo da Secção Methodology**

Apresentar em formato "cliente-friendly", não técnico:

| Step | Título | Descrição (2-3 frases) |
| :---- | :---- | :---- |
| 01 | Discovery | Understanding the idea, the market, and the emotional core of the product. What should it feel like before what should it do. |
| 02 | Strategy | Defining the technical path, design system, and decision framework. Every choice documented before the first line of code. |
| 03 | Design & Build | From wireframes to working product using AI-assisted development. Design and code evolve together — no handoff, no gap. |
| 04 | Launch | Deploy, test, iterate. A working MVP in production, not a prototype in Figma. |

**Nota:** Este copy é EN. A versão PT será traduzida no i18n. O tom deve ser directo, sem buzzwords.

## **3.5 Case Study Pages — Estrutura**

Cada case study (Palco Democrático, EcoReport) segue esta estrutura:

| Secção | Conteúdo |
| :---- | :---- |
| Header | Nome do projecto + tipo + stack + data de lançamento + link live |
| Overview | 2-3 frases sobre o que é e porquê existe |
| Timeline | "Concept to launch in X days" — número de impacto |
| Problem | O que existia antes (ou não existia) |
| Solution | O que foi construído e como |
| Process | 3-4 screenshots ou imagens do processo (wireframes, decisões, iterações) |
| Result | Resultado — feedback, números, estado actual |
| CTA | Link para o produto live + voltar ao portfolio |

# **4. Animações GSAP — Especificações**

## **4.1 Animações Obrigatórias**

| Localização | Padrão GSAP | Descrição do comportamento |
| :---- | :---- | :---- |
| Nav | Entrada | gsap.from: y:-20, opacity:0, duration:0.6, ease:power3.out, delay:0.1 |
| Hero — nome | Timeline | gsap.from: y:60, opacity:0, duration:0.9, ease:power3.out |
| Hero — texto rotativo | Loop GSAP | Slide vertical (y:30 → 0 → -30) com opacity fade, duration:0.6, repeat:-1, repeatDelay:2.5 |
| Hero — statement | Timeline | gsap.from: y:30, opacity:0, duration:0.8, delay após nome |
| About — texto | ScrollTrigger | Reveal por blocos de texto com opacidade progressiva, start:'top 80%' |
| Methodology — números | ScrollTrigger | Números grandes (01, 02...) revelam com y:40, opacity:0, stagger:0.15 |
| Methodology — conteúdo | ScrollTrigger | Conteúdo de cada step revela após o número, delay:0.1 |
| Work — cards | ScrollTrigger | Stagger reveal: y:30, opacity:0, stagger:0.12 |
| Background — items | ScrollTrigger | Reveal simples: y:20, opacity:0, stagger:0.08 |
| Contact — CTA | ScrollTrigger | gsap.from: y:40, opacity:0, duration:0.8 |

## **4.2 Animações Opcionais**

* Nav sticky com background blur transition ao scroll (CSS transition, não GSAP)
* Hover nos cards de projecto: escala 1.02 + shadow transition (CSS, não GSAP)
* Underline reveal nos links de navegação (CSS scaleX, ver SKILL_MICROINTERACTIONS)
* Magnetic button no email de contacto (GSAP, ver SKILL_MICROINTERACTIONS)
* Smooth scroll com Lenis (integração obrigatória com ScrollTrigger via ticker)

## **4.3 Unicorn Studio — Integração (preparada, não activa na V1)**

| ⚠️ Os assets Unicorn Studio ainda não existem. O projecto deve ser construído com a estrutura pronta para os receber, mas a V1 lança sem eles. Quando os projectIds estiverem disponíveis, basta adicioná-los ao componente UnicornBackground.tsx — zero refactoring necessário. |
| :---- |

**Localizações previstas:**

| Localização | projectId | Comportamento |
| :---- | :---- | :---- |
| Hero background | `null` (a definir) | Canvas behind do hero, z-index -1. Atmosférico — não distrair do texto. |
| Methodology background (opcional) | `null` (a definir) | Se existir segunda cena, background da secção de processo. |

**O que construir agora (sem assets):**

1. Criar o componente `UnicornBackground.tsx` com prop `projectId: string | null`
2. Se `projectId` é `null` → renderizar o fallback (ver abaixo)
3. Se `projectId` existe → renderizar `<UnicornScene>` com lazy load
4. O hero funciona com ou sem Unicorn Studio — o texto rotativo e o statement são o protagonista

**Fallback visual (estado V1 sem Unicorn Studio):**

O hero background sem Unicorn Studio deve ter presença visual, não ser apenas branco vazio. Opções por ordem de preferência:
* Gradient subtil com as cores Sandstone: radial-gradient de --color-bg para --color-surface, centrado no terço direito
* Ou: padrão de noise/grain SVG sobre --color-bg (ver FOUNDATION_LANDING secção 3.3)
* Ou: simplesmente --color-bg sólido — o contraste tipográfico é forte o suficiente para funcionar sozinho

**Regras Unicorn Studio (para quando os assets existirem):**
* Instalar: `npm install unicornstudio-react`
* SDK URL: `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.6/dist/unicornStudio.umd.js`
* DPI: 1.5 (balance qualidade/performance)
* Componente deve ter loading state — não mostrar cena vazia
* Responsive: ajustar width/height com container queries ou 100vw/100vh
* Performance: lazy load da cena — não bloquear TTI
* Fallback: manter o fallback visual definido acima se a cena falhar a carregar

## **4.4 Acessibilidade de Animações**

| Obrigatório: implementar prefers-reduced-motion |
| :---- |
| Se activo: desactivar todas as animações GSAP, Unicorn Studio, e texto rotativo. Mostrar estado final estático. O texto rotativo deve mostrar as três palavras separadas por " · " em vez de rotar. |

# **5. Funcionalidades e Requisitos**

## **5.1 Must Have (MVP / V1)**

* Hero com nome, título rotativo, e statement
* Secção About com texto conversacional
* Secção Methodology com 4 steps numerados
* Secção Work com cards para Palco Democrático e EcoReport
* Pages de case study para cada projecto
* Secção Background / Experience compacta
* Secção Contact com email directo
* i18n toggle EN/PT (mesma URL, toggle client-side)
* Responsivo: 375px, 768px, 1280px, 1440px
* Deploy no Vercel com domínio rodrigoalarcao.pt
* Lighthouse Performance > 90
* Componente UnicornBackground.tsx preparado com fallback (sem assets na V1 — ver secção 4.3)
* Smooth scroll com Lenis

## **5.2 Should Have (V1.1)**

* Unicorn Studio assets activos no hero (quando projectIds estiverem prontos — plug-and-play)
* Segunda cena Unicorn Studio na secção methodology
* Open Graph meta tags para partilha (título + descrição + og:image por página)
* Vercel Analytics
* Segunda cena Unicorn Studio na secção methodology
* Nav com indicador de secção activa ao scroll
* Transição de página animada (hero → case study)

## **5.3 Won't Have (V2 / Futuro)**

* Secção Vibe Tests / Lab (placeholder para futuro)
* Blog
* CMS ou painel de administração
* Dark mode
* Formulário de contacto (V1 é email directo)
* Custom cursor

# **6. Notas Técnicas Específicas do Projecto**

## **6.1 Dependências adicionais**

```bash
# Core (FOUNDATION_LANDING)
npm install gsap
npm install @studio-freight/lenis
npm install lucide-react

# Unicorn Studio (instalar agora, activar quando assets existirem)
npm install unicornstudio-react

# i18n (lightweight, client-side)
npm install next-intl
# Alternativa mais leve: usar JSON files + React context sem biblioteca

# Se necessário para case studies
npm install next-mdx-remote  # se o conteúdo dos case studies for em MDX
```

## **6.2 i18n — Abordagem Técnica**

| Decisão | Valor |
| :---- | :---- |
| Abordagem | Client-side toggle, mesma URL |
| Default language | EN |
| Storage | localStorage para preferência |
| Ficheiros | /messages/en.json + /messages/pt.json |

**Regras:**
* Todo o copy vive nos ficheiros de tradução — nunca hardcoded no JSX
* O toggle deve ser visível na nav (ex: "EN / PT" com o activo em bold)
* Mudar língua não deve recarregar a página nem resetar scroll position

## **6.3 Variáveis de Ambiente**

| Variável | Propósito |
| :---- | :---- |
| NEXT_PUBLIC_SITE_URL | https://rodrigoalarcao.pt — URL base para Open Graph e canonical |

## **6.4 SEO e Meta**

| Campo | Valor (EN) | Valor (PT) |
| :---- | :---- | :---- |
| Title | Rodrigo Alarcão — Product Designer & Builder | Rodrigo Alarcão — Product Designer & Builder |
| Description | I take ideas from concept to MVP in weeks. Product design, methodology, and AI-assisted development. | Levo ideias de conceito a MVP em semanas. Product design, metodologia e desenvolvimento assistido por AI. |
| OG Image | /og-image.png (1200x630px) — tipografia bold sobre fundo sandstone | Mesmo |
| Canonical URL | https://rodrigoalarcao.pt | Mesmo |
| Lang | en (default) | pt |

## **6.5 Estrutura de Ficheiros**

```
app/
  page.tsx                    ← homepage com todas as secções
  layout.tsx                  ← fonts, metadata, SmoothScroll, nav
  work/
    palco-democratico/
      page.tsx                ← case study
    ecoreport/
      page.tsx                ← case study
components/
  layout/
    Nav.tsx                   ← navigation + language toggle
    Footer.tsx
  sections/
    HeroSection.tsx           ← hero com texto rotativo + Unicorn Studio
    AboutSection.tsx          ← statement pessoal
    MethodologySection.tsx    ← 4 steps numerados
    WorkSection.tsx           ← cards de projecto
    BackgroundSection.tsx     ← experiência + educação
    ContactSection.tsx        ← CTA final
  ui/
    LanguageToggle.tsx        ← toggle EN/PT
    ProjectCard.tsx           ← card reutilizável para projetos
    RotatingText.tsx          ← componente do texto rotativo
    SmoothScroll.tsx          ← Lenis + ScrollTrigger sync
    UnicornBackground.tsx     ← wrapper Unicorn Studio com loading + fallback
hooks/
  useIsomorphicLayoutEffect.ts
  useLanguage.ts              ← hook de i18n
messages/
  en.json                     ← todas as strings EN
  pt.json                     ← todas as strings PT
public/
  fonts/
    Satoshi-Light.woff2
    Satoshi-Regular.woff2
    Satoshi-Medium.woff2
    Satoshi-Bold.woff2
    Satoshi-Italic.woff2
    Satoshi-LightItalic.woff2
  images/
    projects/                 ← thumbnails e screenshots dos projetos
  og-image.png
```

# **7. Critérios de Qualidade e Entrega**

## **7.1 Checklist de QA antes do Deploy**

* Lighthouse Performance > 90 (mobile e desktop)
* Sem erros na consola do browser
* Responsivo: testado em 375px, 768px, 1280px, 1440px
* Todas as animações GSAP com cleanup (gsap.context().revert())
* prefers-reduced-motion implementado
* next/font para Special Gothic Expanded One, next/localFont para Satoshi
* i18n funcional — todo o copy muda ao toggle, sem reload
* Unicorn Studio: UnicornBackground.tsx renderiza fallback quando projectId é null, pronto para activar
* Lenis + ScrollTrigger sincronizados (ticker integration)
* Links de case study funcionais
* Open Graph tags configuradas (testar em opengraph.xyz)
* Deploy no Vercel sem erros de build

## **7.2 Definição de "Completo"**

Este projecto está completo quando:
* Todos os Must Have da secção 5.1 estão implementados
* Checklist de QA 7.1 está completo
* Site está publicado em rodrigoalarcao.pt
* Ambos os case studies têm conteúdo real (não placeholder)
* i18n tem todo o copy em ambas as línguas

# **8. Timeline e Fases**

| Fase | Duração estimada | Entregável | Notas |
| :---- | :---- | :---- | :---- |
| Setup | 1 dia | Repo + Vercel + estrutura + fonts + globals.css | Seguir FOUNDATION_LANDING setup steps 1-7 |
| Hero + Nav | 2-3 dias | Hero animado com texto rotativo + Unicorn Studio + nav | Componente mais complexo — fazer primeiro |
| About + Methodology | 2 dias | Secções com scroll animations | Escrever copy EN/PT em paralelo |
| Work + Case Studies | 3-4 dias | Cards + 2 páginas de case study | Recolher screenshots e conteúdo real |
| Background + Contact + Footer | 1 dia | Secções finais | Mais simples, menos animação |
| i18n | 1 dia | Toggle funcional + ficheiros de tradução | Extrair todo o copy hardcoded |
| QA + Polish | 2 dias | Responsivo + performance + deploy final | Checklist 7.1 completo |
| **Total estimado** | **~2 semanas** | **Site publicado** | |

# **9. Prompt de Início para o Claude Code**

| Usar este prompt ao iniciar o projecto no Claude Code: |
| :---- |
| "Vou criar o meu portfolio pessoal — rodrigoalarcao.pt. Tens três documentos: |
| 1. FOUNDATION_LANDING.md — stack, design e padrões técnicos para landing pages. |
| 2. VIBE-PRD_PORTFOLIO.md — camada emocional: palavras-guia, personalidade, referências, anti-vibes. |
| 3. PRD_PORTFOLIO.md — requisitos específicos deste projecto: estrutura, tipografia, paleta, animações, i18n. |
| |
| Lê os três antes de começar. Cadeia de precedência: VIBE-PRD > FOUNDATION > PRD (excepto derogações na secção 0.1 do PRD). |
| |
| Stack: Next.js 14 + Tailwind CSS v3 + GSAP. TypeScript sem strict mode. |
| Hierarquia de motion: CSS → GSAP. Unicorn Studio preparado na estrutura mas sem assets na V1 — construir componente com fallback. |
| |
| ESTÉTICA (proibições absolutas): |
| - Nunca Inter, Roboto, Arial como fonte — usar Special Gothic Expanded One (display) + Satoshi (body) + IBM Plex Mono (labels) |
| - Fundo light (#FAFAF8), paleta Sandstone Soft — nunca dark mode, nunca gradientes cromáticos |
| - Contraste tipográfico é o elemento visual principal — bold/light/italic |
| - Unicorn Studio: construir UnicornBackground.tsx com prop projectId (null na V1) + fallback visual. Quando assets existirem, é plug-and-play. |
| |
| PERFORMANCE (regras fixas): |
| - Animar apenas transform e opacity |
| - next/font para Google Fonts, next/localFont para Satoshi |
| - Zero document.querySelector — usar sempre refs React |
| - gsap.context().revert() em todos os cleanup |
| - Unicorn Studio com lazy load e fallback |
| |
| Começa pelo setup: cria o projecto, instala dependências, configura globals.css com os design tokens da secção 2.3 do PRD, e configura as fontes." |

*PRD · rodrigoalarcao.pt · v1.0 · Rodrigo Alarcão*
