<script setup lang="ts">
defineProps<{
  item: { when: string; title: string; sub: string; logo?: string }
  done?: boolean
}>()
</script>

<template>
  <div>
    <div class="text-green-400 font-mono text-xs tracking-widest">{{ item.when }}<span v-if="done"> ✓</span></div>
    <div class="flex items-center gap-2 mt-1">
      <div
        v-if="item.logo"
        class="w-6 h-6 bg-center bg-no-repeat bg-contain"
        :style="{ backgroundImage: `url(${item.logo})` }"
        role="img"
        :aria-label="item.title"
      />
      <div class="text-white text-xl">{{ item.title }}</div>
    </div>
    <div class="text-white/50 text-sm mt-1">{{ item.sub }}</div>
  </div>
</template>
