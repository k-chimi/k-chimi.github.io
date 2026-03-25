<script setup lang="ts">
import { useData, useRouter, withBase } from 'vitepress';
import TopPageTitle from '../components/TopPageTitle.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, theme, frontmatter } = useData();
const { route } = useRouter();
</script>

<template>
  <header style="padding: 1rem">
    <TopPageTitle />
  </header>
  
  <aside class="nav">
    <input class="navbar-opener" name="navbar-opener" type="checkbox" />
    <nav class="nav-menu">
      <ul>
        <li>
          <a href="/"> トップ </a>
        </li>
        <li>
          <a href="/posts"> 記事 </a>
        </li>
        <li>
          <a href="/works"> 作品等 </a>
        </li>
      </ul>
    </nav>
  </aside>
  
  <main class="main-content">
    <Content class="VPDoc" />
  </main>
</template>

<style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .nav {
    .navbar-opener {
      display: none;
    }
  }

  @media (width > 700px) {
    .nav {
      display: block;
      padding: 0.5rem 0;
      width: 100%;
    
      border: solid 1px black;
      border-left: 0;
      border-right: 0;
    
      text-align: center;

      .nav-menu > ul {
        display: flex;
        gap: 1rem;
        justify-content: center;

        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
      }
    }    
  }

  @media (width <= 700px) {
    .nav {
        position: absolute;
        z-index: 1;

      .nav-menu {
        display: block;
      
        position: fixed;
        top: -100%;
        right: 0.5rem;

        transition: 0.25s top var(--EaseOutCubic);

        background: #eee;
        padding: 1rem;
        padding-top: 2rem;

        min-width: 50%;
      }

      .nav-menu > ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-left: 1rem;
      }

      &:has(.navbar-opener:checked) .nav-menu {
        top: 0;
      }

      .navbar-opener {
        display: block;
        position: fixed;
        
        top: 0.5rem;
        right: 1rem;

        z-index: 1;

        padding: 0.25rem;

        border: solid 1px black;
        border-radius: 0;
        
        width: 1.5rem;
        aspect-ratio: 1 / 1;
      }
    }
  }
</style>

