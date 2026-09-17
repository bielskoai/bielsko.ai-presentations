<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  pos?: string
  center?: boolean
  tint?: boolean
}>(), {
  pos: 'center',
  center: false,
  tint: true,
})
</script>

<template>
  <div class="photo-bg" :style="{ backgroundImage: `url(${src})`, backgroundPosition: pos }">
    <div class="photo-overlay" :class="{ center }" />
    <div v-if="tint" class="photo-tint" />
    <div class="photo-grain" />
  </div>
</template>
