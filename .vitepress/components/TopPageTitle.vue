<template>
  <section class="top-section">
    <div class="page-title-wrapper">
      <div class="title-colors-wrapper">
        <div class="title-colors">
          <div class="color color-black" />
          <div class="color color-red" />
          <div class="color color-green" />
          <div class="color color-blue" />
        </div>
      </div>
      <h1 class="page-title">
        ケーチミのホームページ
      </h1>
      <span class="page-title-bottom">
        K-Chimi's Homepage
      </span>
    </div>
  </section>
</template>

<style scoped>
.top-section {
  display: flex;
  width: 100%;
  height: 16rem;

  align-items: center;
  justify-content: center;

  gap: 3rem;

  position: relative;

  background: white;
  color: black;

  &:has(.color-black:hover) {
    color: black;
  }

  &:has(.color-red:hover) {
    color: red;
  }

  &:has(.color-green:hover) {
    color: green;
  }

  &:has(.color-blue:hover) {
    color: blue;
  }

  &::before {
    position: absolute;
    top: 0rem;
    left: 0rem;

    display: block;
    content: '';
    
    border-top: solid 2rem black;
    border-right: solid 2rem transparent;
  }

  &::after {
    position: absolute;
    bottom: 0rem;
    right: 0rem;

    display: block;
    content: '';

    border-left: solid 2rem transparent;
    border-bottom: solid 2rem black;
  }
}

.title-colors-wrapper {
  position: relative;
  width: 0px;
  height: 0px;

  .title-colors {
    position: absolute;
    left: -4rem;
    top: -0.25rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .color {
    border-radius: 100%;

    width: 1rem;
    aspect-ratio: 1 / 1;
  }

  .color-black {
    background: black;
  }

  .color-red {
    background: red;
  }

  .color-green {
    background: green;
  }

  .color-blue {
    background: blue;
  }
}

.page-title-wrapper {
  display: flex;
  flex-direction: column;
}i

@property --title-border-delta {
  syntax: "<number>";
  inherits: true;
  initial-value: 0.0;
}

@keyframes title-border-delta {
  0% {
    --title-border-delta: 0.5;
  }
  
  5% {
    --title-border-delta: 0.35;
  }

  100% {
    --title-border-delta: 1;
  }
}

.page-title {
  position: relative;
  animation: 1s linear 0s 1 running title-border-delta both;
  
  --title-border-delta: 0.0;

  &::before {
    position: absolute;
    top: calc(-0.5em - 0.2em * var(--title-border-delta));
    left: calc(-0.5em - 0.2em * var(--title-border-delta));

    content: '';
    
    border: 1px solid #777;
    
    width: calc(100% + 1em);
    height: calc(100% + 1em);

    transition: top 0.15s ease-out, left 0.15s ease-out;
  }

  &::after {
    position: absolute;
    top: calc(-0.5em + 0.2em * var(--title-border-delta));
    left: calc(-0.5em + 0.2em * var(--title-border-delta));

    content: '';
    
    border: 1px solid #777;
    
    width: calc(100% + 1em);
    height: calc(100% + 1em);

    transition: top 0.15s ease-out, left 0.15s ease-out;
  }
}

.page-title-bottom {
  display: flex;
  align-items: center;

  position: relative;

  width: calc(100% + 4rem);
  left: -2rem;
  padding-top: 0.5rem;

  gap: 0.5rem;

  &::before {
    display: block;
    content: '';

    border-top: 1px solid #777;
    width: 1rem;
  }
  
  &::after {
    display: block;
    content: '';

    border-top: 1px solid #777;
    width: stretch;
    flex: 1;
  }
}
</style>
