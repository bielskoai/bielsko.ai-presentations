<script setup lang="ts">
// Oś czasu roadmapy rozbita na kilka slajdów (między punktami wchodzą zdjęcia).
// `from` — od którego punktu odsłaniamy klikami (wcześniejsze są już widoczne, wyszarzone),
// `to`   — do którego punktu (wyłącznie) pokazujemy; dalsze zajmują miejsce, ale są niewidoczne,
//          żeby układ nie skakał między slajdami.
withDefaults(defineProps<{ from?: number; to?: number }>(), { from: 0, to: 99 })

const items = [
  {
    when: 'CZERWIEC · 26.06',
    title: 'bielsko.ai meetup #001',
    sub: 'Pierwsze spotkanie. Nova Patria.',
  },
  {
    when: 'LIPIEC / SIERPIEŃ',
    title: 'Cafe Cursor',
    sub: 'Laptopy, kawa i wspólne rozwiązywanie realnych problemów.',
    logo: '/img/cursor-logo.png',
  },
  {
    when: 'WRZESIEŃ · 18.09 · DZIŚ',
    title: 'bielsko.ai meetup #002',
    sub: 'REKORD SI · część BBDays4.IT',
  },
  {
    when: 'JESIEŃ',
    title: 'Grok Bot Build Day × SpaceXAI',
    sub: 'Pół dnia wspólnego budowania z Grok Botem — bez wymagań, przynieś laptop.',
  },
  {
    when: 'LISTOPAD / GRUDZIEŃ',
    title: 'bielsko.ai meetup #003',
    sub: 'W partnerstwie z dużym graczem ze świata AI.',
  },
]
</script>

<template>
  <div class="border-l border-green-400/60 pl-8 space-y-4 mt-2">
    <template v-for="(it, i) in items" :key="it.title">
      <v-click v-if="i >= from && i < to">
        <RoadmapItem :item="it" />
      </v-click>
      <RoadmapItem v-else :item="it" :class="i < from ? 'opacity-50' : 'invisible'" :done="i < from" />
    </template>
  </div>
</template>
