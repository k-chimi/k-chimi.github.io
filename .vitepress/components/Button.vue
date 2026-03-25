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
    flex-direction: column;
    align-items: center;

    padding: 0.25rem 1rem;

    border: solid 1px black;
    border-bottom-width: 0.35rem;

    background: white;

    &:hover {
      border-top-width: 0.15rem;
      border-bottom-width: 0.2rem;
    }

    &:active {
      border-top-width: 0.35rem;
      border-bottom-width: 1px;
      background: lightgray;
    }
  }
</style>

