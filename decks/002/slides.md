---
theme: default
# Lokalny addon z brandingiem bielsko.ai (komponenty Eyebrow/Photo + style.css).
# Uwaga: Slidev rozwiązuje ścieżki addonów względem katalogu nadrzędnego decka (decks/),
# stąd `../shared`, a nie `../../shared`.
addons:
  - ../shared
title: bielsko.ai — Meetup #002
colorSchema: dark
fonts:
  sans: Space Grotesk
  mono: JetBrains Mono
  weights: '300,400,500,600,700'
info: |
  ## bielsko.ai Meetup #002
  Intro do drugiego meetupu — 18.09.2026, REKORD SI, Bielsko-Biała.
  Część festiwalu BBDays4.IT.
class: text-left
drawings:
  persist: false
transition: fade
mdc: true
duration: 10min
---

<div class="h-full grid grid-cols-[1.15fr_1fr] gap-12 items-center">

<div>

<Eyebrow>&lt;AI_COMMUNITY /&gt; PODBESKIDZIA</Eyebrow>

<div class="text-8xl font-bold text-white tracking-tight leading-none">bielsko<span class="text-green-400">.ai</span></div>

<div class="accent-line"></div>

<div class="text-2xl text-white/80 font-light">Meetup #002 · druga edycja</div>

<div class="mt-10 font-mono text-sm text-white/60 tracking-wide leading-relaxed">
  18.09.2026 &nbsp;·&nbsp; 17:00<br />
  REKORD SI, ul. Kasprowicza 3, Bielsko-Biała
</div>

</div>

<div class="aspect-square w-full max-h-[80vh] rounded-2xl border border-white/10 shadow-2xl bg-center bg-cover" :style="{ backgroundImage: 'url(/img/luma-cover.jpg)' }" role="img" aria-label="Plakat bielsko.ai #002"></div>

</div>

<!--
Slajd otwierający. Powitaj salę. Jedno zdanie: "#001 było o oswajaniu AI —
dziś idziemy bardziej praktycznie". Podziękuj REKORD SI za nową lokalizację.
-->

---
layout: two-cols
layoutClass: gap-16 items-center
---

<Eyebrow>10–20 WRZEŚNIA · FESTIWAL</Eyebrow>

# Jesteśmy częścią <span class="text-green-400">BBDays4.IT</span>

<div class="accent-line"></div>

<div class="text-lg text-white/70 leading-snug mt-6 max-w-md">
Dziesięć dni IT w górach — konferencje, warsztaty, hackathon, wyjścia w teren.
bielsko.ai to jeden z punktów programu.
</div>

<div class="source-strip mt-8">bbdays4.it</div>

::right::

<div class="glass">

<div class="h-12 w-32 mb-6 opacity-90 bg-left bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/bbdays4it-logo.svg)' }" role="img" aria-label="BBDays4.IT"></div>

<div class="font-mono text-xs tracking-widest text-white/45 mb-4">W PROGRAMIE M.IN.</div>

<v-clicks>

- BBConf4.IT — Konferencja IT w Górach
- Hackathon
- UXchange powered by ICE
- HerStory in IT
- Startup Podbeskidzie
- BBDays4.IT × SoDA — wyjście na Kozią Górę
- <span class="text-green-400 font-medium">bielsko.ai #002</span> — czyli my, dziś

</v-clicks>

</div>

<!--
Kontekst: meetup nie jest osobnym bytem — wpisuje się w festiwal BBDays4.IT
(10–20.09). Zachęć, żeby sprawdzić resztę programu na bbdays4.it, bo festiwal
trwa jeszcze do niedzieli.
-->

---
layout: center
---

<Eyebrow>#001 → #002</Eyebrow>

# Tym razem <span class="text-green-400">bardziej praktycznie</span>

<div class="accent-line"></div>

<div class="grid grid-cols-3 gap-5 mt-8 max-w-4xl">

<div class="glass" v-click>
  <div class="font-mono text-green-400 text-sm mb-2">DEVELOPMENT</div>
  <div class="text-white/75 text-base leading-snug">Agenci, benchmarki, realne projekty i stack, na którym pracujecie na co dzień.</div>
</div>

<div class="glass" v-click>
  <div class="font-mono text-green-400 text-sm mb-2">LOKALNIE</div>
  <div class="text-white/75 text-base leading-snug">Duże modele na własnym sprzęcie — czy da się na tym faktycznie pracować?</div>
</div>

<div class="glass" v-click>
  <div class="font-mono text-green-400 text-sm mb-2">PROJEKTOWANIE</div>
  <div class="text-white/75 text-base leading-snug">AI w procesie projektowym i tworzeniu — nie tylko dla programistów.</div>
</div>

</div>

<!--
#001 było o odnalezieniu się w dobie AI. #002: budujesz, eksperymentujesz
z modelami/agentami, używasz AI w projektowaniu — pokażemy, jak inni robią to
w praktyce.
-->

---
layout: center
---

<Eyebrow>RUN ~/meetup-02 · AGENDA</Eyebrow>

# W programie

<div class="accent-line"></div>

<div class="grid grid-cols-1 gap-4 mt-6 max-w-3xl">

<div class="glass flex items-baseline gap-4" v-click>
  <span class="font-mono text-green-400 text-sm">01</span>
  <div>
    <div class="text-white text-xl font-medium">10xBench — firmowy benchmark AI</div>
    <div class="text-white/55 text-sm">Przemek Smyrdek · współzałożyciel 10xDevs</div>
  </div>
</div>

<div class="glass flex items-baseline gap-4" v-click>
  <span class="font-mono text-green-400 text-sm">02</span>
  <div>
    <div class="text-white text-xl font-medium">13 tokenów na sekundę to za mało</div>
    <div class="text-white/55 text-sm">Qwen3.8-27B lokalnie na NVIDIA DGX Spark (128 GB unified memory)</div>
  </div>
</div>

<div class="glass flex items-baseline gap-4" v-click>
  <span class="font-mono text-green-400 text-sm">03</span>
  <div>
    <div class="text-white text-xl font-medium">Networking</div>
    <div class="text-white/55 text-sm">Zasada Pac‑Mana obowiązuje</div>
  </div>
</div>

</div>

<!--
01 — Przemek pokaże prosty sposób na benchmark AI dopasowany do Waszego stacku
i frameworków, zamiast ogólnych rankingów. Wyniki potrafią zaskoczyć; narzędzie
do samodzielnego użycia.

02 — DGX Spark jest na miejscu. Qwen3.8-27B się mieści — pytanie, czy da się
na nim pracować.

03 — Przypomnij zasadę Pac‑Mana: zostaw lukę w kółku, żeby ktoś mógł dołączyć.
-->

---
layout: center
class: text-center
---

<Photo src="/img/sunset.jpg" center />

<div class="on-photo">
<Eyebrow>DO ZOBACZENIA</Eyebrow>
<h1 class="text-6xl">Dziękujemy.</h1>
<div class="accent-line mx-auto"></div>
<div class="mx-auto mt-6 w-44 h-44 rounded-xl bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/qr-connect.png)' }" role="img" aria-label="QR — zapisz się i obserwuj socjale"></div>
<div class="font-mono text-white/55 text-sm tracking-widest mt-6">
  bielsko.ai · DZIĘKUJEMY · #002
</div>
</div>

<!--
Pointa + zaproszenie na networking i do socjali.
-->
