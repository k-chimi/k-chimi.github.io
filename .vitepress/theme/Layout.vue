<script setup lang="ts">
import { useData, useRouter, withBase } from 'vitepress';
import Header from './components/Header.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, theme } = useData();
const { route } = useRouter();
</script>

<template>
  <Header class="header" logo="/icon.svg" :pathname="route.path" />
  <div class="content-wrapper">
  <div class="content">
    <Content />
  </div>
  </div>
</template>

<style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .content-wrapper {
    display: flex;
    justify-content: center;
    max-width: 100vw;
    padding: 0 1rem;
  }

  .content {
    padding-bottom: 50vh;
    max-width: 100%;
  }

  .center {
    text-align: center;
  }
</style>

