<script setup lang="ts">
import { defineProps, watch } from "vue";

const props = defineProps<{
  pathname: string;
  logo: string;
}>();

const items: { href: string; name: string; target?: string; }[] = [
  {
    href: "/",
    name: "ホーム"
  },
  {
    href: "https://gitlab.com/k_chimi",
    name: "GitLab",
    target: "_blank"
  }
]

function somePath(a: string, b: string) {
  return a.replace(/\..+$/, "") == b.replace(/\..+$/, "")
}

watch(() => props.pathname, console.log)
</script>

<template>
  <div class="wrapper">
    <ul class="menu">
      <li>
        <img class="logo" :src="logo" />
      </li>
      <li v-for="item in items"><a :data-is-current-path="somePath(pathname, item.href)" :href="item.href" :target="item.target">
        {{ item.name }}
      </a></li>
    </ul>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .menu {
    display: flex;
    width: 100%;
    max-width: 80rem;
    margin: 0;
    padding: 0.5rem 1rem;

    gap: 1rem;
  
    list-style: none;

    align-items: center;

    background: rgb(var(--color-bg) / 0.1);
    backdrop-filter: blur(1.5rem);
    box-shadow:
        inset 0 0rem 0.25rem 0.125rem rgb(var(--color-shadow) / 0.1)
      , inset 0 -0.1rem 0.5rem 0.25rem rgb(var(--color-light) / 0.9)
      , 0 0 0.5rem 0.25rem rgb(var(--color-shadow) / 0.1)
      ;
  }

  .menu > li {
    display: contents;
  }

  @keyframes header-logo-anim {
    0% {
      object-position: 0 0;      
    }
    50% {
      object-position: 0 0.25rem;
    }
    80% {
      object-position: 0 -0.25rem;
    }
    100% {
      object-position: 0 0rem;
    }
  }

  .logo {
    aspect-ratio: 1 / 1;
    height: 3rem;
    border-radius: 100%;
    background: white;
    box-shadow:
        inset 0 0.25rem 0.25rem rgb(var(--color-shadow) / 0.15)
      ;

    &:hover, &:active {
      animation: 0.5s header-logo-anim ease 0s 1 running;
    }
  }

  a {
    display: flex;

    align-items: center;
  
    color: rgb(var(--color-text));
    text-decoration: none;

    width: 100%;
    padding: 0.75rem 1rem;
    
    background-color: rgb(var(--color-light) / 0.65);

    border-radius: 0.5rem;

    box-shadow:
        0 0.25rem 0.5rem rgb(var(--color-shadow) / 0.1)
      , inset 0 0 0.2rem rgb(var(--color-light))
      , inset 0 0 0.5rem rgb(var(--color-light))
      ;

    transition: box-shadow 0.1s, background-color 0.1s;
    view-transition-name: layout-header;

    user-select: none;

    &[data-is-current-path="true"] {
      background-color:
        color-mix(
          in srgb
        , rgb(var(--color-light) / 0.65)
        , rgb(var(--color-accent) / 0.15)
        )
        ;
    }

    &:hover {      
      box-shadow:
          0 0.25rem 0.8rem rgb(var(--color-accent) / 0.15)
        , inset 0 0 0.2rem rgb(var(--color-light))
        , inset 0 0 0.5rem rgb(var(--color-light))
        ;
    }
  }
</style>
