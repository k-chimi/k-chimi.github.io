<template>
  <section class="section-window">
    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
  .section-window {  
    position: relative;

    border: solid 1px black;

    &::before {
      display: block;
      content: '';
      
      width: 100%;
      height: 1.5rem;

      background: linear-gradient(black 0%, 20%, gray 20%, 40%, black 0%);
    }
  }

  .section-content {
    padding: 1rem;    
  }
</style>
