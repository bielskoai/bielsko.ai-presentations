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

<div class="text-2xl text-white/80 font-light">Meetup #002</div>

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
Dziesięć dni IT w górach. Dzisiejszy meetup to jeden z punktów programu festiwalu.
</div>

<div class="source-strip mt-8">bbdays4.it</div>

::right::

<div class="glass">

<div class="h-12 w-32 mb-6 opacity-90 bg-left bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/bbdays4it-logo.svg)' }" role="img" aria-label="BBDays4.IT"></div>

<div class="font-mono text-xs tracking-widest text-green-400 mb-2">JUTRO · 19–20.09</div>
<div class="text-white text-2xl font-medium">Dwudniowy hackathon</div>
<div class="text-white/55 text-base mt-2 leading-snug">Festiwal trwa do niedzieli — jeśli po dzisiejszych prelekcjach zostanie Wam energia, jest gdzie ją spalić.</div>

</div>

<!--
Kontekst: meetup nie jest osobnym bytem — wpisuje się w festiwal BBDays4.IT
(10–20.09). Jutro startuje dwudniowy hackathon (sobota od 15:00, niedziela do 15:00),
szczegóły na bbdays4.it.
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
    <div class="text-white/55 text-sm">Filip Brodka · Qwen3.8-27B lokalnie na NVIDIA DGX Spark (128 GB unified memory)</div>
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
layout: two-cols
layoutClass: gap-16
---

# ROADMAP 2026

<div class="accent-line"></div>

<div class="text-xl text-white/70 leading-snug mt-8">Na #001 obiecaliśmy <span class="text-green-400">regularność</span>. Trzy miesiące później: drugi meetup, nowa lokalizacja i dwa kolejne terminy w kalendarzu.</div>

<div class="source-strip mt-18">Największy event AI-owy w Polsce — nadal w planach</div>

::right::

<Roadmap :from="0" :to="1" />

<!--
Klik: #001. Krótko — 26.06, Nova Patria, pierwsze spotkanie. Potem strzałka w prawo:
zdjęcia z #001.
-->

---
class: "!p-0"
---

<div class="h-full w-full grid grid-cols-6 grid-rows-2 gap-2 p-2">
  <div class="col-span-2 row-span-2 rounded-xl bg-center bg-cover" :style="{ backgroundImage: 'url(/bielskoai001/b001-03.jpg)' }" role="img" aria-label="bielsko.ai #001 — prelegent przy laptopie"></div>
  <div class="col-span-2 rounded-xl bg-center bg-cover" :style="{ backgroundImage: 'url(/bielskoai001/b001-02.jpg)' }" role="img" aria-label="bielsko.ai #001 — sala"></div>
  <div class="col-span-2 rounded-xl bg-center bg-cover" :style="{ backgroundImage: 'url(/bielskoai001/b001-04.jpg)' }" role="img" aria-label="bielsko.ai #001 — prelegent"></div>
  <div class="col-span-2 rounded-xl bg-center bg-cover" :style="{ backgroundImage: 'url(/bielskoai001/b001-01.jpg)' }" role="img" aria-label="bielsko.ai #001 — torby powitalne"></div>
  <div class="col-span-2 rounded-xl bg-center bg-cover" :style="{ backgroundImage: 'url(/bielskoai001/b001-05.jpg)' }" role="img" aria-label="bielsko.ai #001 — zespół"></div>
</div>

<div class="absolute bottom-6 left-8 z-10">
  <div class="inline-flex items-baseline gap-3 px-4 py-2 rounded-lg bg-black/60 backdrop-blur border border-white/10">
    <span class="font-mono text-green-400 text-xs tracking-widest">26.06.2026</span>
    <span class="text-white text-lg font-medium">bielsko.ai #001 · Nova Patria</span>
  </div>
</div>

<!--
Zdjęcia z #001. Jedno-dwa zdania wspomnienia i lecimy dalej.
-->

---
layout: two-cols
layoutClass: gap-16
---

# ROADMAP 2026

<div class="accent-line"></div>

<div class="text-xl text-white/70 leading-snug mt-8">Na #001 obiecaliśmy <span class="text-green-400">regularność</span>. Trzy miesiące później: drugi meetup, nowa lokalizacja i dwa kolejne terminy w kalendarzu.</div>

<div class="source-strip mt-18">Największy event AI-owy w Polsce — nadal w planach</div>

::right::

<Roadmap :from="1" :to="2" />

<!--
Klik: Cafe Cursor — lipiec/sierpień, laptopy i kawa w Nova Patria. Strzałka: zdjęcia.
-->

---
class: "!p-0"
---

<div class="h-full w-full grid grid-cols-5 gap-2 p-2">
  <div class="rounded-xl bg-center bg-cover" :style="{ backgroundImage: 'url(/cursor/crsr-01.jpg)' }" role="img" aria-label="Cafe Cursor — kubek z logo Cursor"></div>
  <div class="col-span-2 rounded-xl bg-center bg-cover" :style="{ backgroundImage: 'url(/cursor/crsr-02.jpg)' }" role="img" aria-label="Cafe Cursor — ludzie pracują przy laptopach"></div>
  <div class="rounded-xl bg-center bg-cover" :style="{ backgroundImage: 'url(/cursor/crsr-03.jpg)' }" role="img" aria-label="Cafe Cursor — kawa Cafe Cursor"></div>
  <div class="rounded-xl bg-center bg-cover" :style="{ backgroundImage: 'url(/cursor/crsr-04.jpg)' }" role="img" aria-label="Cafe Cursor — praca przy stole"></div>
</div>

<div class="absolute bottom-6 left-8 z-10">
  <div class="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-black/60 backdrop-blur border border-white/10">
    <div class="w-5 h-5 bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/cursor-logo.png)' }" role="img" aria-label="Cursor"></div>
    <span class="font-mono text-green-400 text-xs tracking-widest">LIPIEC / SIERPIEŃ</span>
    <span class="text-white text-lg font-medium">Cafe Cursor</span>
  </div>
</div>

<!--
Zdjęcia z Cafe Cursor. Format się sprawdził — wróci.
-->

---
layout: two-cols
layoutClass: gap-16
---

# ROADMAP 2026

<div class="accent-line"></div>

<div class="text-xl text-white/70 leading-snug mt-8">Na #001 obiecaliśmy <span class="text-green-400">regularność</span>. Trzy miesiące później: drugi meetup, nowa lokalizacja i dwa kolejne terminy w kalendarzu.</div>

<div class="source-strip mt-18">Największy event AI-owy w Polsce — nadal w planach</div>

::right::

<Roadmap :from="2" />

<!--
Kliki po kolei: dziś #002 (REKORD SI, BBDays4.IT) → jesień: Grok Build Day razem ze
SpaceXAI (format jak community Builder Days, np. Dublin w październiku) → listopad/grudzień:
#003 z dużym partnerem ze świata AI — nazwy jeszcze nie zdradzamy. Obserwujcie Discord,
tam pojawi się pierwsze.
-->

---
layout: two-cols
layoutClass: gap-16 items-center
---

<Eyebrow>DISCORD</Eyebrow>

# Żyjemy na <span class="text-green-400">Discordzie</span>

<div class="accent-line"></div>

<div class="text-white/60 text-lg -mt-2">Między meetupami — to tam dzieje się reszta.</div>

<div class="space-y-3 mt-6 text-white/70 text-base leading-snug max-w-md">
  <div v-click>🚀 <strong>Pochwal się projektem</strong> — demo z weekendu, niech ludzie zobaczą.</div>
  <div v-click>🔁 <strong>Zbierz feedback</strong> — szczere „działa / nie działa” od ludzi, którzy sami budują.</div>
  <div v-click>📣 <strong>Bądź pierwszy</strong> — terminy #003 i Build Day pojawią się tam przed socjalami.</div>
</div>

<div class="source-strip mt-6 max-w-md">Buduj głośno. 🌱 &nbsp;·&nbsp; <span class="text-green-400">bielsko.ai/discord</span></div>

::right::

<div class="flex flex-col items-center">
  <div class="w-72 h-72 rounded-2xl bg-white p-3 shadow-2xl">
    <div class="w-full h-full bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/qr-discord.png)' }" role="img" aria-label="QR — dołącz do Discorda bielsko.ai"></div>
  </div>
  <div class="font-mono text-sm text-white/55 tracking-widest mt-5">ZESKANUJ · DOŁĄCZ</div>
</div>

<!--
Zatrzymaj się na chwilę, niech ludzie zeskanują. QR prowadzi na bielsko.ai/discord
(redirect na zaproszenie discord.gg). Podkreśl: to tam najpierw lądują terminy.
-->

---
layout: two-cols
layoutClass: gap-12
---

<Eyebrow>NEWS UPDATE · 26.06 → 18.09</Eyebrow>

<h1 class="!text-4xl">Najciekawsze w AI<br><span class="text-green-400">od bielsko.ai #001</span></h1>

<div class="accent-line"></div>

<div class="text-lg text-white/70 leading-snug mt-6 max-w-md">
Dwanaście tygodni, w których agenci przestali być demo i stali się <span class="text-green-400">produktem</span>.
</div>

::right::

<div class="border-l border-green-400/60 pl-8 space-y-4 mt-2">
  <div v-click>
    <div class="text-green-400 font-mono text-xs tracking-widest">LIPIEC</div>
    <div class="text-white text-lg mt-1">Claude Fable 5 · Sonnet 5 · Opus 5</div>
    <div class="text-white/50 text-sm mt-0.5">Cała linia Claude'a przeskakuje na 5.</div>
  </div>
  <div v-click>
    <div class="text-green-400 font-mono text-xs tracking-widest">LIPIEC</div>
    <div class="text-white text-lg mt-1">Agenty OpenAI hakują Hugging Face</div>
    <div class="text-white/50 text-sm mt-0.5">~700 agentów treningowych dogadało się na własnym forum i weszło na serwery HF.</div>
  </div>
  <div v-click>
    <div class="text-green-400 font-mono text-xs tracking-widest">SIERPIEŃ</div>
    <div class="flex items-start gap-2 mt-1"><div class="w-5 h-5 mt-1 shrink-0 bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/cursor-logo.png)' }" role="img" aria-label="Cursor"></div><div class="text-white text-lg leading-snug">SpaceX przejmuje Cursora za $60B i wypuszcza Groka 4.6 i Grok Bota</div></div>
    <div class="text-white/50 text-sm mt-0.5">Grok Bot: agenci z własnym komputerem w chmurze.</div>
  </div>
  <div v-click>
    <div class="text-green-400 font-mono text-xs tracking-widest">WRZESIEŃ</div>
    <div class="text-white text-lg mt-1 leading-snug">GPT-6 Astra · NVIDIA kupuje Hugging Face ($12.9B)</div>
    <div class="text-white/50 text-sm mt-0.5">Do tego Claude Fable 5.1 i Meta Muse.</div>
  </div>
</div>

<!--
Szybki recap — nie wchodź w benchmarki.
Lipiec: Fable 5 / Sonnet 5 (30.06, cztery dni po #001), Opus 5 (24.07). Hack Hugging Face:
7–13.07, OpenAI ujawniło 21.07, raport METR/Redwood 26.08 — agenty w treningu RL znalazły
wspólny "message board", ~700 z nich włamało się na serwery HF (root na jednym).
Sierpień: Cursor w SpaceX (14.08), Grok 4.6 (12.08), Grok Bot (beta 11.08).
Wrzesień: Fable 5.1 (01.09), NVIDIA × Hugging Face (02.09, zamknięcie H1 2027), GPT-6 Astra
(03.09, "Welcome to the AGI era"), Muse (08.09). Przejście do następnego slajdu: agenci.
-->

---
layout: center
class: text-center
---

<Eyebrow>AGENCI · #001 → #002</Eyebrow>

# Na #001 pokazywaliśmy Hermesa i OpenClaw

<div class="accent-line mx-auto"></div>

<div class="flex items-center justify-center gap-6 mt-8">

  <div class="flex items-center gap-4">
    <div class="w-20 h-20 rounded-2xl overflow-hidden bg-white shadow-xl">
      <div class="w-full h-full bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/mascot-left.png)' }" role="img" aria-label="Hermes"></div>
    </div>
    <div class="w-20 h-20 rounded-2xl overflow-hidden bg-[#0e1211] border border-white/10 shadow-xl">
      <div class="w-full h-full bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/mascot-right.png)' }" role="img" aria-label="OpenClaw"></div>
    </div>
  </div>

  <div class="font-mono text-green-400 text-3xl px-4" v-click>→</div>

  <div class="grid grid-cols-3 gap-4 text-left">
    <div class="glass !p-4" v-click>
      <div class="font-mono text-green-400 text-xs tracking-widest">SPACEXAI · 11.08</div>
      <div class="text-white text-lg font-medium mt-1">Grok Bot</div>
      <div class="text-white/55 text-xs mt-1 leading-snug">Zespół agentów z własnym komputerem w chmurze. Pracują 24/7, wracają tylko po approve. W cenie Cursor Pro i SuperGrok.</div>
    </div>
    <div class="glass !p-4" v-click>
      <div class="font-mono text-green-400 text-xs tracking-widest">META · 08.09</div>
      <div class="text-white text-lg font-medium mt-1">Muse</div>
      <div class="text-white/55 text-xs mt-1 leading-snug">„Personal AI agent for everyone”. Maile, rezerwacje, zakupy — z WhatsAppa. Free, $20, $100.</div>
    </div>
    <div class="glass !p-4" v-click>
      <div class="font-mono text-green-400 text-xs tracking-widest">OPENAI · W BUDOWIE</div>
      <div class="text-white text-lg font-medium mt-1">ChatGPT + Codex</div>
      <div class="text-white/55 text-xs mt-1 leading-snug">Brockman łączy oba w jeden „agentic super app” — personal AGI. Bez daty. Plus urządzenie z Jonym Ive.</div>
    </div>
  </div>

</div>

<div class="source-strip mt-10 max-w-4xl mx-auto" v-click>Trzy miesiące temu „agent z własnym komputerem” to był side project. Dziś sprzedają go Meta, SpaceXAI i OpenAI.</div>

<!--
Odwołaj się do slajdu z #001 ("try them, they're fun"). Teraz to samo robią big techy:
Grok Bot (beta 11.08, na Grok 4.6, każdy bot ma własny cloud VM), Meta Muse (08.09, Muse
Secure VM, także przez WhatsApp), OpenAI — memo Brockmana o połączeniu ChatGPT i Codex
w jedną platformę agentową; dodatkowo pierwsze urządzenie z io/Jony Ive zapowiadane na
koniec roku. Hermes i OpenClaw dalej żyją — i dalej są fun.
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
