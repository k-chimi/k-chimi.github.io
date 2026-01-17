<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["click"])
</script>

<template>
  <button @click="emit('click')" class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
  .btn {
    display: flex;

    align-items: center;
  
    color: rgb(var(--color-text));
    text-decoration: none;

    width: 100%;
    padding: 0.35rem 0.5rem;
    
    background-color: rgb(var(--color-light) / 0.25);

    border: none;
    border-radius: 0.5rem;

    box-shadow:
        0 0.25rem 0.5rem rgb(var(--color-shadow) / 0.25)
      , inset 0 0 0.2rem 0.1rem rgb(var(--color-light))
      , inset 0 0 0.5rem rgb(var(--color-light))
      ;

    transition: box-shadow 0.05s, background-color 0.05s, transform 0.05s;
    view-transition-name: layout-header;

    user-select: none;

    backdrop-filter: blur(0.5rem);

    &:hover {      
      box-shadow:
          0 0.25rem 0.8rem rgb(var(--color-accent) / 0.15)
        , inset 0 0 0.2rem rgb(var(--color-light))
        , inset 0 0 0.5rem rgb(var(--color-light))
        ;
    }

    &:active {
      background-color:
        color-mix(
          in srgb
        , rgb(var(--color-light) / 0.65)
        , rgb(var(--color-accent) / 0.15)
        )
        ;
        
      box-shadow:
          0 0.25rem 0.8rem rgb(var(--color-accent) / 0.15)
        , inset 0 0.25rem 0.5rem rgb(var(--color-shadow) / 0.25)
        , inset 0 0 0.2rem 0.1rem rgb(var(--color-light))
        , inset 0 0 0.5rem rgb(var(--color-light))
        ;

        transform: translateY(0.25rem);
    }
  }
</style>

