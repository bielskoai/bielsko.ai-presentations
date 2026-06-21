# Uzupełnienie prezentacji „Odnaleźć się w dobie AI” — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Uzupełnić istniejący deck Slidev o brakujące slajdy ze scenariusza, bez zmiany jego wizualnego języka i bez pozostawiania nieudokumentowanych placeholderów liczbowych.

**Architecture:** Jedynym plikiem prezentacji jest `slides.md`; sekcja merytoryczna zostanie rozbudowana w miejscu istniejących slajdów o agentach, adopcji, społecznym odbiorze i praktycznym wejściu w AI. Zachowujemy komponenty `Eyebrow` i `Photo` oraz klasy z `style.css`, dzięki czemu nowe treści spójnie dziedziczą aktualną oprawę.

**Tech Stack:** Slidev 52, Vue 3, Markdown, UnoCSS utility classes.

---

### Task 1: Przełożyć scenariusz na brakujące slajdy

**Files:**
- Modify: `slides.md`
- Reference: `plan-prezentacji-odnalezc-sie-w-dobie-ai.md`

**Step 1:** Zmapować obecne slajdy do punktów scenariusza i nie duplikować już obecnego intro, przykładów Hermesa, zdalnego sterowania ani finału.

**Step 2:** Rozwinąć część o zmianie interfejsu pracy: czat → współpraca → agent, granice horyzontu zadań oraz brief dla agenta.

**Step 3:** Dodać sekwencję o nierównej adopcji, barierach wejścia i społecznych napięciach wokół AI, z krótkimi linkami do wskazanych w scenariuszu źródeł.

**Step 4:** Rozwinąć „Code is cheap”, AI fatigue i zakończenie o konkretne, praktyczne kroki.

### Task 2: Zweryfikować deck

**Files:**
- Test: `slides.md`

**Step 1:** Uruchomić `bun run build`.

**Step 2:** Uruchomić eksport/rasteryzację dostępnego decku i sprawdzić reprezentatywne slajdy wizualnie.

**Step 3:** Skorygować przepełnienia lub błędy składni Slidev, jeśli wystąpią.
