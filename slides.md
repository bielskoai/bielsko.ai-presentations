---
theme: default
title: bielsko.ai — Meetup #001
colorSchema: dark
fonts:
  sans: Space Grotesk
  mono: JetBrains Mono
  weights: '300,400,500,600,700'
info: |
  ## bielsko.ai Meetup #001
  AI zmieni nasze życie i naszą rolę — bawmy się tym do woli i miejmy frajdę.
class: text-left
drawings:
  persist: false
transition: fade
mdc: true
duration: 35min
---

<Photo src="/img/bielsko-palace-cover.png" pos="center" />

<div class="on-photo h-full flex flex-col justify-center">

<Eyebrow>&lt;AI_COMMUNITY /&gt; PODBESKIDZIA</Eyebrow>

<div class="text-8xl font-bold text-white tracking-tight leading-none">bielsko<span class="text-green-400">.ai</span></div>

<div class="accent-line"></div>

<div class="text-2xl text-white/80 font-light">Meetup #001 · pierwsza edycja</div>

<div class="mt-10 font-mono text-sm text-white/60 tracking-wide">
  26.06.2026 &nbsp;·&nbsp; 17:00 &nbsp;·&nbsp; NovaPatria, Bielsko-Biała
</div>

</div>

<!--
Slajd otwierający. Powitaj salę energetycznie. Jedno zdanie: "AI zmieni nasze życie
i naszą rolę — bawmy się tym do woli." Potem płynnie do agendy.
-->

---
layout: center
---

<Eyebrow>RUN ~/meetup-01 · AGENDA</Eyebrow>

# W programie

<div class="accent-line"></div>

<div class="grid grid-cols-1 gap-4 mt-6 max-w-3xl">

<div class="glass flex items-baseline gap-4" v-click>
  <span class="font-mono text-green-400 text-sm">01</span>
  <div>
    <div class="text-white text-xl font-medium">Odnaleźć się w dobie AI</div>
    <div class="text-white/55 text-sm">Intro &amp; prezentacja — team bielsko.ai</div>
  </div>
</div>

<div class="glass flex items-baseline gap-4" v-click>
  <span class="font-mono text-green-400 text-sm">02</span>
  <div>
    <div class="text-white text-xl font-medium">Unlocking Potential with AI</div>
    <div class="text-white/55 text-sm">Tyberiusz Wylon</div>
  </div>
</div>

<div class="glass flex items-baseline gap-4" v-click>
  <span class="font-mono text-green-400 text-sm">03</span>
  <div>
    <div class="text-white text-xl font-medium">Od pomysłu do incydentu w jeden weekend</div>
    <div class="text-white/55 text-sm">Łukasz Gaweł</div>
  </div>
</div>

</div>

<div class="mt-8 text-white/45 text-sm" v-click>
  Po wszystkim — <span class="text-green-400">networking</span> &amp; kawa od Nova Patria ☕
</div>

<!--
Szybki przegląd wieczoru. Po prezentacjach networking. Housekeeping: wifi, toalety,
hashtag do zdjęć — wrzuć na żywo.
-->

---

<Eyebrow>MANIFEST · 01</Eyebrow>

# Czym jest bielsko.ai

<div class="accent-line"></div>

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

<v-clicks>

- Lokalna **społeczność wokół AI** w Bielsku-Białej
- Miejsce do **nauki i wymiany doświadczeń**
- Miejsce, gdzie możesz **dzielić się swoimi projektami**
- Dla **wszystkich** — nie tylko dla developerów

</v-clicks>

</div>

<div v-click class="glass self-center">
  <div class="font-mono text-green-400 text-xs tracking-widest mb-2">// MISJA</div>
  <div class="text-white text-xl leading-snug">
    Let's make the first <em>AI NATIVE CITY</em> — together.
  </div>
</div>

</div>

<!--
Dwa zdania o wizji. Podkreśl "dla wszystkich" — biznes, marketing, kreatywni, nie tylko IT.
-->

---
layout: image-right
image: /img/team.png
backgroundSize: contain
class: text-left
---

<Eyebrow>ORIGIN STORY</Eyebrow>

# Story behind

<div class="accent-line"></div>

<v-clicks>

- **Skąd pomysł** — brakowało lokalnej przestrzeni dla osób ciekawych AI
- **Kto za tym stoi** — my
- **Dlaczego teraz** — moment, w którym AI realnie zmienia codzienność

</v-clicks>

<div v-click class="mt-8 text-white/55 italic">
  „ej dawajcie zrobimy meetup moze przyjdzie z 20 os"
</div>

<!--
Ludzie zostają dla "why" i dla ludzi, nie dla agendy. Opowiedz to osobiście, z emocją.
-->

---
layout: two-cols
layoutClass: gap-16
---

# ROADMAP 2026

<div class="accent-line"></div>

<div class="text-xl text-white/70 leading-snug mt-8">Zaczynamy od czegoś małego — ale zróbmy z tego <span class="text-green-400">największy event AI-owy w Polsce</span>.</div>

<div class="source-strip mt-18">Albo przynajmniej regularny</div>

::right::

<div class="border-l border-green-400/60 pl-8 space-y-7 mt-2">
  <div v-click>
    <div class="text-green-400 font-mono text-xs tracking-widest">CZERWIEC · 26.06</div>
    <div class="text-white text-2xl mt-2">bielsko.ai meetup #001</div>
    <div class="text-white/50 text-sm mt-1">Pierwsze spotkanie. Poznajmy się.</div>
  </div>
  <div v-click>
    <div class="text-green-400 font-mono text-xs tracking-widest">LIPIEC / SIERPIEŃ</div>
    <div class="flex items-center gap-2 mt-2"><div class="w-7 h-7 bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/cursor-logo.png)' }" role="img" aria-label="Cursor"></div><div class="text-white text-2xl">Cafe Cursor</div></div>
    <div class="text-white/50 text-sm mt-1">Laptopy, kawa i wspólne rozwiązywanie realnych problemów.</div>
  </div>
  <div v-click>
    <div class="text-green-400 font-mono text-xs tracking-widest">WRZESIEŃ</div>
    <div class="text-white text-2xl mt-2">bielsko.ai meetup #002</div>
    <div class="text-white/50 text-sm mt-1">Kolejny pełny meetup — wnioski, demo i nowe osoby.</div>
  </div>
  <div v-click>
    <div class="text-green-400 font-mono text-xs tracking-widest">JESIEŃ · WYBIERAMY RAZEM</div>
    <div class="text-white text-2xl mt-2">Następny format</div>
    <div class="flex flex-wrap gap-2 mt-3"><span class="chip">Hackathon</span><span class="chip">Build night</span><span class="chip">Workshops</span></div>
  </div>
</div>

<!--
Podkreśl: to nie jest sztywny kalendarz. Po dwóch pierwszych wydarzeniach wybieramy
następny format wspólnie z community.
-->

---
layout: center
class: text-center
---

<Eyebrow>DISCORD</Eyebrow>

# Vibeujcie i <span class="text-green-400">Shareujcie</span>

<div class="accent-line mx-auto"></div>

<div class="text-xl text-white/70 max-w-3xl mx-auto mt-6">Discord to nie tylko gadka. To miejsce, gdzie pokazujesz, co zbudowałeś — i patrzysz, jak to żyje dalej między meetupami.</div>

<div class="grid grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto text-left">
  <div class="glass" v-click>
    <div class="text-3xl mb-2">🚀</div>
    <div class="text-white text-lg font-medium">Pochwal się projektem</div>
    <div class="text-white/55 text-sm mt-2">Uvajbowałeś apkę w weekend? Wrzuć demo, niech ludzie zobaczą.</div>
  </div>
  <div class="glass" v-click>
    <div class="text-3xl mb-2">🔁</div>
    <div class="text-white text-lg font-medium">Zbierz feedback</div>
    <div class="text-white/55 text-sm mt-2">Szczere „działa / nie działa" od ludzi, którzy sami budują.</div>
  </div>
  <div class="glass" v-click>
    <div class="text-3xl mb-2">🤝</div>
    <div class="text-white text-lg font-medium">Złap pierwszych userów</div>
    <div class="text-white/55 text-sm mt-2">A może i pierwszych klientów swojej świeżej aplikacji?</div>
  </div>
</div>

<div class="source-strip mt-10 max-w-5xl mx-auto">Buduj głośno. Pokaż, zapytaj, popraw — i rób to razem z nami. 🌱 &nbsp;·&nbsp; <span class="text-green-400">bielsko.ai/discord</span></div>

<!--
Discord to miejsce, gdzie projekty żyją dalej. Podkreśl pętlę: pokaż → feedback →
pierwsi użytkownicy. Zachęć, żeby budować na widoku, nie do szuflady.
-->

---
layout: center
class: text-center
---

<Eyebrow>APLIKACJA</Eyebrow>

# Wszystko w jednej aplikacji

<div class="accent-line mx-auto"></div>

<div class="text-white/70 mt-2 mb-8 text-lg max-w-2xl mx-auto">Społeczność, wydarzenia i Twój progres — w jednym miejscu.</div>

<div class="flex justify-center items-end gap-5 mt-6">

<div class="rounded-[1.6rem] border border-white/15 p-1 bg-black/40 shadow-xl" v-click>
  <div class="w-[8.1rem] h-[17.4rem] rounded-[1.3rem] bg-center bg-cover bg-no-repeat" :style="{ backgroundImage: 'url(/img/app-1.png)' }" role="img" aria-label="Pulpit aplikacji"></div>
</div>

<div class="rounded-[1.6rem] border border-white/15 p-1 bg-black/40 shadow-xl" v-click>
  <div class="w-[8.1rem] h-[17.4rem] rounded-[1.3rem] bg-center bg-cover bg-no-repeat" :style="{ backgroundImage: 'url(/img/app-5.png)' }" role="img" aria-label="Szczegóły wydarzenia"></div>
</div>

<div class="rounded-[1.6rem] border border-white/15 p-1 bg-black/40 shadow-xl" v-click>
  <div class="w-[8.1rem] h-[17.4rem] rounded-[1.3rem] bg-center bg-cover bg-no-repeat" :style="{ backgroundImage: 'url(/img/app-4.png)' }" role="img" aria-label="Odznaki"></div>
</div>

<div class="rounded-[1.6rem] border border-white/15 p-1 bg-black/40 shadow-xl" v-click>
  <div class="w-[8.1rem] h-[17.4rem] rounded-[1.3rem] bg-center bg-cover bg-no-repeat" :style="{ backgroundImage: 'url(/img/app-2.png)' }" role="img" aria-label="Karty kolekcjonerskie"></div>
</div>

<div class="rounded-[1.6rem] border border-white/15 p-1 bg-black/40 shadow-xl" v-click>
  <div class="w-[8.1rem] h-[17.4rem] rounded-[1.3rem] bg-center bg-cover bg-no-repeat" :style="{ backgroundImage: 'url(/img/app-3.png)' }" role="img" aria-label="Społeczność"></div>
</div>

</div>

<!--
Pokaż aplikację na żywo, jeśli się da. Najmocniejsze: awatary, odznaki i karty
kolekcjonerskie — to one budują powracalność. Slajd jest skrótem, szczegóły w demie.
-->

---
layout: center
class: text-center
---

<Eyebrow>DOŁĄCZ DO NAS</Eyebrow>

# Bądź częścią pierwszej edycji

<div class="accent-line mx-auto"></div>

<div class="text-white/70 mt-2 mb-10 text-lg">Obserwuj, przyjdź ponownie, zgłoś swoją prelekcję.</div>

<div class="mx-auto mt-2 w-56 h-56 rounded-xl bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/qr-connect.png)' }" role="img" aria-label="QR — zapisz się i obserwuj socjale"></div>

<!--
Mocne CTA domykające intro. Powiedz wprost co zrobić: zeskanuj kod / zapisz się / wpadnij następnym razem.
-->

---
layout: center
class: text-center
---

<Photo src="/img/cafe.jpg" center />

<div class="on-photo">
<div class="kicker-num">02 / PARTNER MIEJSCA</div>
<h1 class="mt-4 text-6xl">Nova Patria</h1>
<div class="text-white/70 mt-4 text-lg max-w-xl mx-auto">
  Dziękujemy za możliwość zorganizowania inauguracyjnego meetupu. Zapraszamy do przetestowania deserów, lodów i kawy ☕
</div>
<div class="mx-auto mt-8 w-44 h-44 rounded-xl bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/qr-novapatria.png)' }" role="img" aria-label="QR — Nova Patria na Instagramie"></div>
<div class="mt-3 font-mono text-green-400 text-xs tracking-widest">DAJ FOLLOW NA INSTAGRAMIE</div>
</div>

<!--
Przerywnik sponsorski. Krótkie, szczere podziękowanie. TODO: logo Nova Patria, info o ofercie.
-->

---
layout: center
class: text-center
---

<Photo src="/img/bielsko-aerial-pop.png" center />

<div class="on-photo">
<div class="kicker-num">01 / INTRO</div>
<h1 class="mt-4 text-6xl">Odnaleźć się w dobie AI</h1>
<div class="text-white/60 mt-4">Co się właśnie zmienia i jak się w tym nie zgubić.</div>
</div>

<!--
Slajd-przerywnik sekcji. Krótka pauza, łyk wody, lecimy.
-->

---
layout: center
---

<Eyebrow>WARM-UP · PODNIEŚ RĘKĘ</Eyebrow>

# Kto jest dzisiaj z nami?

<div class="accent-line"></div>

<div class="text-lg text-white/70 mb-6">Podnieście rękę, jeśli:</div>

<v-clicks>

- piszecie **kod** na co dzień
- używacie **AI** w pracy
- prowadzicie **własny biznes**
- jesteście tu **pierwszy raz** 👋

</v-clicks>

<!--
Interaktywny start — rozluźnia salę i od razu czujesz publiczność.
Zareaguj na każdy las rąk ("o, sporo founderów!").
-->

---

<Eyebrow>TEMPO ZMIAN</Eyebrow>

# ~18 miesięcy, które zmieniły sposób, w jaki <span class="text-green-400">pracujemy</span>

<div class="accent-line"></div>

<div class="grid grid-cols-[1.05fr_0.95fr] gap-14 items-center mt-8">
  <div>
    <div class="stat-num leading-none">co ~5 tygodni</div>
    <div class="text-xl text-white/75 mt-4 leading-snug">nowa duża wersja <span class="text-green-400">Claude</span> albo <span class="text-green-400">GPT</span> — nieprzerwanie od początku 2025.</div>
    <div class="source-strip mt-6">Ponad 15 flagowych premier dwóch laboratoriów. Zanim zdążysz oswoić jedną — jest następna.</div>
  </div>
  <div class="grid grid-cols-2 gap-6">
    <div class="glass" v-click>
      <div class="text-green-400 text-5xl font-bold">10</div>
      <div class="text-white text-sm font-medium mt-2">premier Claude</div>
      <div class="text-white/50 text-xs mt-1">3.7 Sonnet → Opus 4 … 4.8 → Fable 5</div>
    </div>
    <div class="glass" v-click>
      <div class="text-green-400 text-5xl font-bold">6</div>
      <div class="text-white text-sm font-medium mt-2">premier GPT</div>
      <div class="text-white/50 text-xs mt-1">GPT-4.5 → GPT-5 → 5.5</div>
    </div>
  </div>
</div>

<div class="source-strip mt-7">Okno: XII 2024 – VI 2026 (~18 mies., w zaokrągleniu). Źródła: <a href="https://support.claude.com/en/articles/12138966-release-notes" target="_blank">Anthropic — release notes</a> · <a href="https://help.openai.com/en/articles/9624314-model-release-notes" target="_blank">OpenAI — model release notes</a></div>

<!--
Mocny akcent: nie ranking firm, tylko tempo. Przez 18 miesięcy frontier-laby dorzucały
nową dużą wersję średnio co ~5 tygodni (≈16 premier Claude+GPT w 78 tygodni).
Pointa: zmienił się nie jeden model, ale tempo, w jakim zmienia się nasza praca.

▸ Weryfikacja przed talkiem: policzone z osi czasu Anthropic (≈10: 3.7 Sonnet, Opus 4/4.1/4.5/4.6/4.7/4.8,
Haiku 4.5, Sonnet 4.6, Fable 5) i OpenAI (≈6: GPT-4.5, GPT-5, 5.1, 5.2, 5.4, 5.5). Liczby przybliżone.
-->

---
layout: center
---

<Eyebrow>GITHUB · TEMPO ROZWOJU</Eyebrow>

<div class="mx-auto mt-2 w-full max-w-6xl aspect-[16/9] bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/github-acceleration.png)' }" role="img" aria-label="GitHub Record Acceleration: pull requesty 90M, commity 1,4B, nowe repozytoria 20M na miesiąc — gwałtowny wzrost 2023–2026"></div>

<div class="source-strip mt-4 max-w-5xl mx-auto">Źródło: <a href="https://github.blog/news-insights/company-news/an-update-on-github-availability/" target="_blank">GitHub — An update on GitHub availability</a></div>

<!--
Mocne otwarcie części technicznej i namacalny dowód „eksplozji": realna ilość
tworzonego oprogramowania. Pull requesty, commity i nowe repozytoria biją rekordy —
krzywa zadziera w górę dokładnie w erze agentów AI. Pointa: tworzenie softu właśnie
gwałtownie przyspieszyło.
-->

---
layout: two-cols
layoutClass: gap-16
---

<Eyebrow>DRUGA STRONA TEMPA</Eyebrow>

# Szybciej znaczy też <span class="text-green-400">więcej niepokoju</span>

<div class="accent-line"></div>

<div class="text-xl text-white/70 leading-snug mt-8">To samo tempo, które ekscytuje, jednych onieśmiela. Połowa Amerykanów jest dziś bardziej <span class="text-white">zaniepokojona</span> niż podekscytowana AI — i ten odsetek urósł.</div>

<div class="source-strip mt-12">Niepokój to nie wróg. To sygnał, że warto rozmawiać, oswajać i robić to razem — zamiast zostawiać ludzi z tyłu.</div>

::right::

<div class="mx-auto w-full max-w-xs -mt-10 rounded-xl overflow-hidden bg-white">
  <div class="w-full h-[460px] bg-top bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/pew-ai-concern.png)' }" role="img" aria-label="Pew Research: 50% Amerykanów bardziej zaniepokojonych niż podekscytowanych rosnącym użyciem AI; odsetek wzrósł z 37% (2021) do 50% (2025)"></div>
</div>

<!--
Druga strona eksplozji: im szybciej, tym więcej obaw. Pokaż trend — „bardziej
zaniepokojeni" wzrosło z 37% (2021) do ~50% (2025). Nie bagatelizuj tego; to punkt
zaczepienia dla roli community: oswajać, tłumaczyć, robić razem.
Źródło: Pew Research Center, „How Americans View AI…", VI 2025.
-->

---

<Eyebrow>OPÓR ≠ TECHNOLOGIA</Eyebrow>

# Hejt rzadko jest o technologii

<div class="accent-line"></div>

<div class="text-xl text-white/75 max-w-4xl">Pod „nie znoszę AI" prawie zawsze siedzi coś bardziej ludzkiego — strach o pracę, dumę z własnej roboty albo brak zaufania. To <span class="text-white">nie</span> spór o narzędzie.</div>

<div class="grid grid-cols-3 gap-6 mt-9 text-left">
  <div class="glass" v-click>
    <div class="font-mono text-green-400 text-xs tracking-widest mb-2">PRACA</div>
    <div class="text-white text-lg font-medium">„Czy nadal będę potrzebny?"</div>
    <div class="text-white/55 text-sm mt-2">Strach o utrzymanie i status. <span class="text-white/80">~52%</span> pracowników martwi się wpływem AI na ich pracę.</div>
  </div>
  <div class="glass" v-click>
    <div class="font-mono text-green-400 text-xs tracking-widest mb-2">AUTORSTWO</div>
    <div class="text-white text-lg font-medium">„Czy to jeszcze moje?"</div>
    <div class="text-white/55 text-sm mt-2">Duma z rzemiosła i pytanie, czy to nie ściema. Większość boi się utraty <span class="text-white/80">ludzkiego pierwiastka</span> w tworzeniu.</div>
  </div>
  <div class="glass" v-click>
    <div class="font-mono text-green-400 text-xs tracking-widest mb-2">ZAUFANIE</div>
    <div class="text-white text-lg font-medium">„Kto za to odpowiada?"</div>
    <div class="text-white/55 text-sm mt-2">Czyje dane, czyja decyzja, czyja wina. Tylko <span class="text-white/80">~1/4</span> ufa, że firmy użyją AI odpowiedzialnie.</div>
  </div>
</div>

<div class="source-strip mt-8">Dane: Pew Research Center, „How Americans View AI…" (2023–2025).</div>

<!--
Nowe ujęcie: hejt to objaw, nie przyczyna. Trzy realne sterowniki: praca, autorstwo,
zaufanie — każdy z punktem zaczepienia w danych Pew. Nie wyśmiewaj obaw; rolą community
jest je nazwać i oswoić. Pointa łączy się z poprzednim slajdem (50% bardziej zaniepokojonych).

▸ Weryfikacja liczb przed talkiem: ~52% pracowników zaniepokojonych wpływem AI na pracę
oraz ~1/4 ufających odpowiedzialnemu użyciu AI — to rzędy wielkości z raportów Pew,
potwierdź dokładne wartości w źródle.
-->

---
layout: center
---

<Eyebrow>CACHE INVALIDATION</Eyebrow>

# Nie cache'uj opinii o narzędziach

<div class="accent-line"></div>

<div class="text-xl text-white/70 max-w-3xl mt-6">„Próbowałem, słabe" sprzed miesiąca to nieaktualny wpis w cache. Modele i aplikacje zmieniają się z tygodnia na tydzień — Twój sąd nie nadąża.</div>

<div class="grid grid-cols-3 gap-6 mt-12 max-w-5xl">
  <div class="glass" v-click>
    <div class="font-mono text-green-400 text-xs tracking-widest mb-2">TTL: 1 MIESIĄC</div>
    <div class="text-white text-lg font-medium">Opinia ma datę ważności</div>
    <div class="text-white/55 text-sm mt-2">To, co nie działało, dziś może być standardem.</div>
  </div>
  <div class="glass" v-click>
    <div class="font-mono text-green-400 text-xs tracking-widest mb-2">RE-FETCH</div>
    <div class="text-white text-lg font-medium">Wracaj do tych samych narzędzi</div>
    <div class="text-white/55 text-sm mt-2">Daj im drugą szansę co jakiś czas, zanim ostatecznie skreślisz.</div>
  </div>
  <div class="glass" v-click>
    <div class="font-mono text-green-400 text-xs tracking-widest mb-2">INVALIDATE</div>
    <div class="text-white text-lg font-medium">Testuj od nowa, nie z pamięci</div>
    <div class="text-white/55 text-sm mt-2">Sprawdź dziś, zamiast powtarzać wrażenie sprzed wersji temu.</div>
  </div>
</div>

<div class="source-strip mt-10 max-w-5xl">Najdroższy bug w pracy z AI to opinia, której nigdy nie odświeżyłeś.</div>

<!--
Najczęstszy błąd: „raz sprawdziłem, było słabe" zostaje na zawsze. Tempo zmian sprawia,
że stare wrażenie szybko się dezaktualizuje. Zachęć do okresowego re-testu tych samych
narzędzi — zwłaszcza tych, które kiedyś odrzucili.
-->

---
layout: two-cols
layoutClass: gap-12
---

<Eyebrow>STATYSTYKI · ADOPCJA</Eyebrow>

# Duża, ale bardzo nierówna

<div class="accent-line"></div>

<div class="text-xl text-white/70 leading-snug mt-8">Dyfuzja AI rośnie wszędzie, ale dystans między liderami a resztą jest ogromny — od <span class="text-white">70,1%</span> w ZEA po jednocyfrowe wyniki na końcu stawki.</div>

<div class="mt-8 rounded-xl border border-green-400/30 bg-green-400/5 px-6 py-5" v-click>
  <div class="flex items-baseline gap-3">
    <span class="text-3xl">🇵🇱</span>
    <span class="text-2xl font-semibold text-white">Polska — 31,0%</span>
  </div>
  <div class="text-white/70 mt-2">24. miejsce w rankingu dyfuzji AI (I kw. 2026, ↑ 2,5 pp.)</div>
</div>

<div class="source-strip mt-10">
  Źródło: <a href="https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/" target="_blank">Microsoft — The State of Global AI Diffusion in 2026</a>
</div>

::right::

<div class="mx-auto w-full max-w-xl rounded-xl overflow-hidden bg-white px-4 py-3">
  <div class="w-full h-[470px] bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/ai-diffusion-2026.png)' }" role="img" aria-label="AI diffusion over time by economy — ranking dyfuzji AI wg gospodarek: H2 2025 vs Q1 2026. ZEA 70,1%, Singapur 63,4%, … Polska 24. miejsce 31,0%."></div>
</div>

<!--
Nie udawaj jednej precyzyjnej miary adopcji: liczby zależą od metodologii.
Wzorzec: użycie rośnie wszędzie, ale rozrzut między krajami jest ogromny.
Polska w I kw. 2026: 24. miejsce, 31,0% (wzrost o 2,5 pp. względem H2 2025) — tuż za Niemcami, przed Włochami.
-->

---
layout: center
class: text-center
---

# Pisanie kodu właśnie staniało.

<div class="accent-line mx-auto"></div>

<div class="text-3xl text-white/80 font-light mt-2">Wiedza, <span class="text-green-400">co</span> i <span class="text-green-400">po co</span> budować — nie.</div>

<div class="grid grid-cols-5 gap-4 text-left mt-12">
  <div v-click><div class="text-green-400 font-mono text-xs">PROBLEM</div><div class="text-white/60 text-sm mt-2">Co w ogóle warto rozwiązać?</div></div>
  <div v-click><div class="text-green-400 font-mono text-xs">SYSTEM</div><div class="text-white/60 text-sm mt-2">Jak to działa, gdy skończy się demo?</div></div>
  <div v-click><div class="text-green-400 font-mono text-xs">JAKOŚĆ</div><div class="text-white/60 text-sm mt-2">Czy to sprawdzone i niezawodne?</div></div>
  <div v-click><div class="text-green-400 font-mono text-xs">BEZPIECZEŃSTWO</div><div class="text-white/60 text-sm mt-2">Czyje dane, sekrety, podatności?</div></div>
  <div v-click><div class="text-green-400 font-mono text-xs">ODPOWIEDZIALNOŚĆ</div><div class="text-white/60 text-sm mt-2">Kto bierze to na siebie?</div></div>
</div>

<div v-click class="text-white/75 mt-10 text-lg">Łatwo wygenerować kod. Równie łatwo wygenerować <span class="text-green-400">podatność</span>. Skoro szkic jest prawie darmowy — celuj <em>wyżej</em>, nie tylko <em>szybciej</em>.</div>

<div v-click class="text-white/45 mt-6 font-mono text-sm tracking-widest">
  → wejście do prelekcji Tyberiusza Wylona
</div>

<!--
Kod nadal ma znaczenie — jego koszt produkcji spada. Wartość przesuwa się w stronę
problemu, architektury, danych, bezpieczeństwa i decyzji produktowych.

▸ Dyrekcja: tworzenie staje się tańsze i szybsze — więc wykorzystaj to, żeby
zrobić coś fajnego, a nie tylko więcej tego samego.
-->

---

<Eyebrow>TA SAMA ZMIANA · INNE BRANŻE</Eyebrow>

# Pierwszy draft tanieje. Wartość zmienia miejsce.

<div class="accent-line"></div>

<div class="grid grid-cols-[1.1fr_1fr_1fr] gap-x-6 gap-y-3 text-sm mt-7">
  <div class="font-mono text-white/40 tracking-widest">OBSZAR</div>
  <div class="font-mono text-white/40 tracking-widest">„TANIE”</div>
  <div class="font-mono text-green-400 tracking-widest">CENNIEJSZE</div>

  <div class="border-t border-white/10 pt-3 text-white">Marketing</div><div class="border-t border-white/10 pt-3 text-white/55">copy i warianty</div><div class="border-t border-white/10 pt-3 text-white">strategia, marka, odbiorca</div>
  <div class="border-t border-white/10 pt-3 text-white">Design</div><div class="border-t border-white/10 pt-3 text-white/55">eksploracje wizualne</div><div class="border-t border-white/10 pt-3 text-white">taste, system, UX</div>
  <div class="border-t border-white/10 pt-3 text-white">Analiza</div><div class="border-t border-white/10 pt-3 text-white/55">pierwsza synteza</div><div class="border-t border-white/10 pt-3 text-white">pytania, metodologia, decyzja</div>
  <div class="border-t border-white/10 pt-3 text-white">Edukacja</div><div class="border-t border-white/10 pt-3 text-white/55">odpowiedź i ćwiczenia</div><div class="border-t border-white/10 pt-3 text-white">myślenie, feedback, relacja</div>
  <div class="border-t border-white/10 pt-3 text-white">Programowanie</div><div class="border-t border-white/10 pt-3 text-white/55">szkic implementacji</div><div class="border-t border-white/10 pt-3 text-white">kontekst, jakość, bezpieczeństwo</div>
</div>

<!--
W wielu branżach łatwiejszy jest pierwszy szkic. To nie obniża znaczenia ludzi:
zmienia miejsce, w którym tworzy się największą wartość.

▸ Dyrekcja: lepsze copy.
-->

---
layout: image-right
image: /img/phone.jpg
class: text-left
---

<Eyebrow>REMOTE CONTROL</Eyebrow>

# Od pomysłu do POC — w minuty/godziny

<div class="accent-line"></div>

<div class="text-lg text-white/75">
  Idziesz ulicą, wpada Ci pomysł. <span class="text-green-400">Pyk</span> — telefon, prompt, agent rusza w tle. Zanim dojdziesz na miejsce, jest pierwszy POC.
</div>

<div class="mt-6 text-white/55">
  Koniec z odkładaniem idei „na kiedyś" i rozmyślaniem nad nią tygodniami. Dystans między „a gdyby tak…" a „o, działa" to dziś minuty/godziny, nie miesiące.
</div>

<div v-click class="mt-6"><span class="chip">DEMO NA ŻYWO</span></div>

<!--
TODO: demo "prompt on phone" — sterowanie agentem zdalnie. Pokaż na realnym telefonie, jeśli się da.

▸ Dyrekcja: główny przekaz — od pomysłu do jego realizacji dzielą cię dziś
minuty, a nie tygodnie/miesiące/lata.
-->

---
layout: center
class: text-center
---

<Photo src="/img/mountains.jpg" center />

<div class="on-photo max-w-2xl mx-auto">
<Eyebrow>AI FATIGUE</Eyebrow>
<h1 class="text-5xl">Nie musisz nadążać za wszystkim</h1>
<div class="text-white/75 mt-5 text-lg">
  Nowy model co tydzień. Nowy agent co miesiąc. Kolejny „must-have" tool codziennie.
  Jeśli czujesz, że odpadasz — spokojnie, <span class="text-green-400">wszyscy odpadamy</span>. To tempo jest nieludzkie, a nie Ty jesteś do tyłu. 🌿
</div>
</div>

<!--
Nie trzeba testować wszystkiego. Ważniejsze od śledzenia każdej premiery jest
znalezienie jednego lub dwóch problemów, w których AI naprawdę pomaga.

▸ Dyrekcja: ten slajd jest git — zostaje bez zmian.
-->

---
layout: center
---

<Eyebrow>MAŁY, ZDROWY PLAN</Eyebrow>

# Zacznij od własnego problemu

<div class="accent-line"></div>

<div class="relative mt-14">
  <div class="absolute left-4 right-4 top-4 h-px bg-gradient-to-r from-green-400 via-green-400/30 to-transparent"></div>
  <div class="grid grid-cols-5 gap-5 text-sm">
    <div class="relative pt-10" v-click><div class="absolute top-0 left-0 h-8 w-8 rounded-full border-2 border-green-400 bg-[#080a09] text-center leading-7 text-green-400 font-mono">1</div><div class="text-white">Wybierz <span class="text-green-400">jeden realny problem</span> ze swojego biurka.</div></div>
    <div class="relative pt-10" v-click><div class="absolute top-0 left-0 h-8 w-8 rounded-full border-2 border-green-400 bg-[#080a09] text-center leading-7 text-green-400 font-mono">2</div><div class="text-white">Rzuć na niego jedno narzędzie i po prostu spróbuj.</div></div>
    <div class="relative pt-10" v-click><div class="absolute top-0 left-0 h-8 w-8 rounded-full border-2 border-green-400 bg-[#080a09] text-center leading-7 text-green-400 font-mono">3</div><div class="text-white">Nie działa? Odpuść i bierz następne — bez żalu.</div></div>
    <div class="relative pt-10" v-click><div class="absolute top-0 left-0 h-8 w-8 rounded-full border-2 border-green-400 bg-[#080a09] text-center leading-7 text-green-400 font-mono">4</div><div class="text-white">Pokaż wynik komuś i zderz doświadczenia.</div></div>
    <div class="relative pt-10" v-click><div class="absolute top-0 left-0 h-8 w-8 rounded-full border-2 border-green-400 bg-[#080a09] text-center leading-7 text-green-400 font-mono">5</div><div class="text-white">Jest wartość? Idź dalej. Nie ma? Zostaw i wróć do 1.</div></div>
  </div>
</div>

<div class="mt-9 text-white/60">To pętla, nie lista do odhaczenia. Jeden problem, jeden tydzień, jeden wniosek — i tyle wystarczy, żeby ruszyć.</div>

<!--
To ma być konkretne antidotum na FOMO. Nie zaczynaj od listy stu narzędzi;
zacznij od problemu, który możesz realnie ocenić po tygodniu.

▸ Dyrekcja: poprowadź jako prosty flow — wybierz problem → przetestuj narzędzie
→ nie działa? wybierz inne → pokaż wyniki komuś → idź dalej, gdy widzisz wartość.
-->

---
layout: two-cols
layoutClass: gap-16
---

<Eyebrow>BRIEF DLA AGENTA</Eyebrow>

# Najważniejsza umiejętność: dobrze oddać stery

<div class="accent-line"></div>

<div class="text-2xl text-white/75 leading-snug mt-8">Zlecanie to nie magia promptu. To jasne przekazanie odpowiedzialności za <em>konkretny kawałek pracy.</em></div>

<div class="source-strip mt-15">„Zrób mi coś fajnego” nie daje agentowi kierunku ani Tobie podstawy do oceny wyniku.</div>

::right::

<div class="border-l border-green-400/60 pl-8 space-y-7 mt-4">
  <div v-click><div class="text-green-400 font-mono text-xs tracking-widest">01 / CEL</div><div class="text-white text-xl mt-2">Co dokładnie ma się wydarzyć?</div></div>
  <div v-click><div class="text-green-400 font-mono text-xs tracking-widest">02 / KONTEKST</div><div class="text-white text-xl mt-2">Jakie dane i realia są istotne?</div></div>
  <div v-click><div class="text-green-400 font-mono text-xs tracking-widest">03 / OGRANICZENIA</div><div class="text-white text-xl mt-2">Czego nie wolno lub nie warto robić?</div></div>
  <div v-click><div class="text-green-400 font-mono text-xs tracking-widest">04 / WERYFIKACJA</div><div class="text-white text-xl mt-2">Skąd wiemy, że wynik jest dobry?</div></div>
</div>

<!--
Zdefiniowanie problemu, podanie kontekstu, ocena jakości i odpowiedzialność za
decyzję są kompetencjami przydatnymi nie tylko programistom.

▸ Dyrekcja: główny przekaz — odłóż ego na bok i nie skupiaj się na pierdołach.
Liczy się oddanie sterów i jasny cel, a nie obrona „swojego sposobu”.
-->

---
layout: center
class: text-center
---

<Photo src="/img/tech.jpg" center />

<div class="on-photo">
<h1 class="mt-4 text-5xl max-w-3xl mx-auto leading-tight">Nie pytasz o odpowiedź.<br>Zlecasz zadanie i mówisz, <span class="text-green-400">co znaczy „zrobione”</span>.</h1></div>

<!--
Slajd-teza całej prezentacji zespołu. Zapowiedz, że do tego zdania wrócimy.

▸ Dyrekcja: inne copy — przemyśleć mocniejsze ujęcie tej tezy.
-->

---
layout: center
class: text-center
---

<div class="flex items-start justify-center gap-16">
  <div class="flex flex-col items-center">
    <div class="w-52 h-52 rounded-3xl overflow-hidden bg-white shadow-xl">
      <div class="w-full h-full bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/mascot-left.png)' }" role="img" aria-label="Logo — Hermes"></div>
    </div>
    <a href="https://hermes-agent.nousresearch.com/" target="_blank" class="mt-4 font-mono text-sm text-green-400">hermes-agent.nousresearch.com</a>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-52 h-52 rounded-3xl overflow-hidden bg-[#0e1211] border border-white/10 shadow-xl">
      <div class="w-full h-full bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/mascot-right.png)' }" role="img" aria-label="Logo — OpenClaw"></div>
    </div>
    <a href="https://openclaw.ai/" target="_blank" class="mt-4 font-mono text-sm text-green-400">openclaw.ai</a>
  </div>
</div>

<h1 class="mt-12 text-6xl">Try them — <span class="text-green-400">they're fun</span>.</h1>

<!--
Dwa nasze asystenty / projekty. Bez przegadania — pokaż logo, rzuć „try them, they're fun"
i ewentualnie powiedz jednym zdaniem co robią. Zachęć do wejścia na Discord po linki.
-->

---
layout: center
class: text-center
---

<Photo src="/img/sunset.jpg" center />

<div class="on-photo">
<Eyebrow>DO ZOBACZENIA</Eyebrow>
<h1 class="text-6xl">Bawmy się tym.</h1>
<div class="text-white/80 mt-5 text-xl max-w-2xl mx-auto font-light">
  AI nigdzie nie zniknie — ale najważniejsze to mieć z tą technologią <span class="text-green-400">fun</span>. Baw się nią, próbuj, psuj i próbuj dalej. 🌿
</div>
<div class="accent-line mx-auto"></div>
<div class="font-mono text-white/55 text-sm tracking-widest">
  bielsko.ai · DZIĘKUJEMY · #001
</div>
</div>

<!--
Pozytywna pointa. Zaproś na networking, przypomnij o socjalach i kawie od Nova Patria.

▸ Dyrekcja: najważniejsze — dobrze się przy tym bawić i nie zniechęcać.
Dorzuć myśl: AI nie zniknie. To nowa technologia, z którą musimy nauczyć się żyć.
-->

---
layout: center
class: text-center
---

<div class="mx-auto w-64 h-64 bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: 'url(/img/portal.png)' }" role="img" aria-label="bielsko.ai portal"></div>

<h1 class="mt-8 text-6xl">Meetup to tylko <span class="text-green-400">początek</span>.</h1>

<!--
Slajd-przejście. Logo jako brama: meetup to wejście, nie cała droga. Krótka pauza,
potem zaproszenie do dołączenia.
-->

---

<!-- pusty slajd (placeholder / przerwa) -->

---

<!-- pusty slajd (placeholder / przerwa) -->

---
layout: center
class: text-center
---

<Photo src="/img/server-room.png" center />

<div class="on-photo">

# Networking <span class="text-green-400">w dobie AI</span>

</div>

<!--
Bait & switch: serwerownia na tle sugeruje techniczny talk o sieciach — potem przyznaj,
że chodzi o ludzi na meetupie. Lekko, z przymrużeniem oka.
-->

---
layout: center
---

<Eyebrow>NETWORKING · PAC-MAN RULE</Eyebrow>

# Zasada Pac‑Mana

<div class="accent-line mx-auto"></div>

<div class="grid grid-cols-2 gap-16 max-w-xl mx-auto mt-8 items-start">

  <div class="text-center">
    <svg viewBox="0 0 340 350" class="w-full max-w-[190px] mx-auto" role="img" aria-label="Źle: ludzie stoją w zamkniętym kręgu, nie ma miejsca by dołączyć">
      <circle cx="170" cy="170" r="94" fill="rgba(244,248,246,0.06)"/>
      <circle cx="170" cy="46"  r="26" fill="rgba(244,248,246,0.42)"/>
      <circle cx="258" cy="82"  r="26" fill="rgba(244,248,246,0.42)"/>
      <circle cx="294" cy="170" r="26" fill="rgba(244,248,246,0.42)"/>
      <circle cx="258" cy="258" r="26" fill="rgba(244,248,246,0.42)"/>
      <circle cx="170" cy="294" r="26" fill="rgba(244,248,246,0.42)"/>
      <circle cx="82"  cy="258" r="26" fill="rgba(244,248,246,0.42)"/>
      <circle cx="46"  cy="170" r="26" fill="rgba(244,248,246,0.42)"/>
      <circle cx="82"  cy="82"  r="26" fill="rgba(244,248,246,0.42)"/>
    </svg>
    <div class="font-mono text-xs tracking-widest text-white/45 mt-3">ŹLE · ZAMKNIĘTY KRĄG</div>
  </div>

  <div class="text-center">
    <svg viewBox="0 0 410 350" class="w-full max-w-[215px] mx-auto" role="img" aria-label="Dobrze: ludzie stoją w otwartym C jak Pac-Man, a nowa osoba dołącza przez wolne miejsce">
      <path d="M170,170 L244.6,118.5 A94,94 0 1 0 244.6,221.5 Z" fill="#3ef08f" fill-opacity="0.9"/>
      <circle cx="240" cy="68"  r="26" fill="#f4f8f6"/>
      <circle cx="170" cy="46"  r="26" fill="#f4f8f6"/>
      <circle cx="100" cy="68"  r="26" fill="#f4f8f6"/>
      <circle cx="56"  cy="128" r="26" fill="#f4f8f6"/>
      <circle cx="56"  cy="212" r="26" fill="#f4f8f6"/>
      <circle cx="100" cy="272" r="26" fill="#f4f8f6"/>
      <circle cx="170" cy="294" r="26" fill="#f4f8f6"/>
      <circle cx="240" cy="272" r="26" fill="#f4f8f6"/>
      <line x1="350" y1="170" x2="312" y2="170" stroke="#3ef08f" stroke-width="4" stroke-linecap="round"/>
      <polygon points="300,170 314,161 314,179" fill="#3ef08f"/>
      <circle cx="378" cy="170" r="26" fill="#3ef08f"/>
    </svg>
    <div class="font-mono text-xs tracking-widest text-green-400 mt-3">DOBRZE · WOLNY PORT</div>
  </div>

</div>

<!--
Sedno przewodnika: grupy na evencie mają wyglądać jak Pac‑Man, nie jak zamknięte koło.
Zielone koło to wolny port — miejsce, w które bez wysiłku wchodzi nowa osoba.
Pokaż na sobie: pół kroku w tył, lekki obrót, zostaw lukę.
-->

---

<Eyebrow>NETWORKING · OPENERY</Eyebrow>

# Śmieszne openery do rozmowy

<div class="accent-line"></div>

<div class="text-white/60 mb-6">Używaj odpowiedzialnie. Część jest przeklęta.</div>

<v-clicks>

- „Ile tokenów kosztował Cię już ten event?”
- „Jaki masz ulubiony model — i czemu to akurat ten, który faktycznie działa?”
- „Jesteś tu, żeby się uczyć, networkować, czy po cichu benchmarkować wszystkich?”
- „Jaki jest Twój aktualny <em>side quest</em> w AI?”
- „Też masz 47 niedokończonych projektów AI w `~/projects`?”
- „Co zautomatyzowałeś, co spokojnie mogło zostać manualne?”

</v-clicks>

<div class="source-strip mt-6">Awaryjny fallback: „Co Cię tu dziś przywiało?” — nudne, ale niepokonane.</div>

<!--
Zaproś ludzi, żeby zrobili screena albo wybrali jeden opener przed networkingiem.
-->
