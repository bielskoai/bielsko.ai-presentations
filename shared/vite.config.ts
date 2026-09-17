import { defineConfig } from 'vite'

// Decki budują się do wspólnego `dist/` w root repo, czyli poza rootem Vite
// (którym jest katalog decka). Bez tego Vite odmawia czyszczenia katalogu
// i po przełączeniu DECK zostają w nim pliki poprzedniego decka.
export default defineConfig({
  build: {
    emptyOutDir: true,
  },
})
