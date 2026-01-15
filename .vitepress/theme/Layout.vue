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
  }

  .content {
    padding: 0 1rem;
  }

  .center {
    text-align: center;
  }
</style>

