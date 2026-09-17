# bielsko.ai — prezentacje

Jedno repo [Slidev](https://sli.dev) z osobnym deckiem na każdy meetup.

```
decks/
  001/            # Meetup #001 (26.06.2026, NovaPatria)
    slides.md     # entry decka
    public/img/   # obrazy tego decka (dostępne jako /img/...)
    PLAN.md, content/, ai_prezentacje/, docs/   # materiały robocze
  002/            # Meetup #002 (w przygotowaniu)
    slides.md
    public/img/
    PLAN.md, content/
shared/           # wspólny branding — lokalny addon Slidev
  components/     # <Eyebrow>, <Photo>
  style.css       # motyw "Premium Dark"
```

## Praca z deckami

```bash
pnpm install

pnpm dev:002        # dev server dla #002 (http://localhost:3030)
pnpm dev:001        # dev server dla #001
pnpm build:002      # statyczny build do dist/
pnpm export:002     # PDF (wymaga `pnpm add -D playwright-chromium`)
```

Skrypty bez sufiksu (`dev`, `build`, `export`) używają zmiennej `DECK`
(domyślnie `002`), np. `DECK=001 pnpm build`.

## Nowy deck

1. Skopiuj `decks/002/` jako `decks/003/` i wyczyść treść `slides.md`.
2. Dodaj skrypty `dev:003`, `build:003`, `export:003` do `package.json`.
3. Obrazy wrzucaj do `decks/003/public/img/` i odwołuj się do nich jako `/img/...`.

## Jak działa współdzielenie

Slidev traktuje katalog pliku `slides.md` jako root projektu — to stamtąd
bierze `public/`, `components/`, `style.css` itd. Dlatego każdy deck ma własny
`public/`, a wspólne komponenty i style siedzą w `shared/` i są podpinane w
headmatterze każdego decka:

```yaml
addons:
  - ../shared
```

Ścieżka jest względem katalogu **nadrzędnego** decka (`decks/`), nie względem
samego `slides.md` — tak rozwiązuje addony obecna wersja Slidev.

Konfiguracja headmatter (fonty, `colorSchema`, `transition`) jest per deck —
przy nowym decku skopiuj ją z poprzedniego.

## Hosting

Netlify (`netlify.toml`) i Vercel (`vercel.json`) budują deck wskazany przez
`DECK` i publikują go pod główną domeną. Po zamknięciu #002 podbij `DECK`
w obu plikach. Slajdy używają absolutnych ścieżek `/img/...`, więc każdy deck
musi być hostowany w root domeny (osobna domena/subdomena lub osobny site),
a nie w podkatalogu.
