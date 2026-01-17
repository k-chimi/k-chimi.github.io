<script setup lang="ts">
import { useTemplateRef } from "vue";
import Button from "./Button.vue";

const picturesRef = useTemplateRef("pictures");

function scrollLeft() {
  const pictures = picturesRef.value;
  if (!pictures || !(pictures instanceof HTMLElement)) return;

  for (const e of [...pictures.children].reverse()) {
    if (!(e instanceof HTMLElement)) continue;
        
    const left = e.offsetLeft - pictures.offsetLeft;

    if (left < pictures.scrollLeft) {
      pictures.scrollTo({
        behavior: "smooth",
        left: left
      })
      
      break;
    }
  }
}

function scrollRight() {
  const pictures = picturesRef.value;
  if (!pictures || !(pictures instanceof HTMLElement)) return;

  for (const e of [...pictures.children]) {
    if (!(e instanceof HTMLElement)) continue;
        
    const left = e.offsetLeft - pictures.offsetLeft;

    if (left > pictures.scrollLeft) {
      pictures.scrollTo({
        behavior: "smooth",
        left: left
      })
      
      break;
    }
  }  
}
</script>

<template>
  <div class="wrapper">
    <div class="shadow-wrapper">
      <div class="shadow"></div>
      <div ref="pictures" class="pictures">
        <slot></slot>
      </div>
    </div>
    <div class="scroll-buttons">
      <Button @click="scrollLeft()">左へ</Button>
      <Button @click="scrollRight()">右へ</Button>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
    
    width: 100%;
    max-width: 32rem;
  }

  .shadow-wrapper {
    position: relative;    
  }

  .shadow {
    position: absolute;
  
    display: block;
  
    width: 100%;
    height: 100%;

    background-image: linear-gradient(to right, rgb(var(--color-shadow) / 0.1), transparent 0.5rem, transparent calc(100% - 0.5rem), rgb(var(--color-shadow) / 0.1));
    
    pointer-events: none;
  }

  .scroll-buttons {
    display: flex;
    gap: 1rem;
  }

  .scroll-buttons button {
    width: 100%;
  }

  .pictures {
    display: flex;
    aspect-ratio: 16 / 9;
    width: 100%;

    gap: 1rem;

    overflow-x: auto;
    overflow-y: hidden;

    scroll-snap-type: x mandatory;
  }

  .pictures :slotted(img) {
    display: block;
    min-width: 100%;

    scroll-snap-align: start;

    object-fit: contain;
  }
</style>
