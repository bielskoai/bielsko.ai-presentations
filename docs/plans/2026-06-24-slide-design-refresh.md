# Slide Design Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the repetitive card-based visual treatment with a varied, coherent slide system that prioritizes narrative contrast and legible data.

**Architecture:** Keep `slides.md` as the presentation source and `style.css` as the shared visual language. Introduce two project-local images for high-impact narrative beats, then apply Slidev’s `full`, `image-*`, `quote`, `fact`, and `two-cols` layouts across the deck. Use CSS-native bars and timelines for data so the deck needs no additional runtime dependency.

**Tech Stack:** Slidev 52, Vue 3, Markdown, UnoCSS, project-local PNG assets.

---

### Task 1: Build a visual vocabulary

**Files:**
- Modify: `style.css`
- Create: `public/img/community-collaboration.png`
- Create: `public/img/human-ai-collaboration.png`

**Step 1:** Add reusable styling for data bars, numbered pillars, timeline rails, and image-overlay panels.

**Step 2:** Generate and save two wide editorial images with usable negative space for slide copy.

### Task 2: Diversify the core narrative slides

**Files:**
- Modify: `slides.md:447-938`

**Step 1:** Convert comparison and adoption content from repeated cards into a timeline, a bar chart, and a quiet source treatment.

**Step 2:** Use full-bleed visual slides for the human–AI and community conclusions.

**Step 3:** Replace selected card grids with numbered pillars, a rail, and asymmetric editorial compositions.

### Task 3: Verify output

**Files:**
- Test: `slides.md`

**Step 1:** Run `bun run build` and fix all compilation failures.

**Step 2:** Review expanded states of all redesigned slides in the Slidev browser preview.
