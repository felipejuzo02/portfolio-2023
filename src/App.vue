<template>
  <app-header class="header" />

  <main class="main">
    <div class="main__container container">
      <div class="main__informations">
        <p class="main__greetings">hello,</p>
        <h1 class="main__name">I'm <span>Luis</span> Juzo</h1>
        <p class="main__description">Front end developer, with 3 years of experience, working mainly with VueJs and Quasar.</p>
        <app-button label="Download CV"></app-button>
      </div>

      <div class="main__container-image">
        <img src="./assets/me.png" alt="Minha foto">
      </div>
    </div>
  </main>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppButton from './components/AppButton.vue'
</script>


<style lang="scss">
@import './style/variables.scss';

.main {
  position: relative;
  background-color: $dark-1;
  height: calc(100vh - 6rem);
  margin-top: 6rem;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__informations {
    color: $white;
    width: 50%;
    // position: absolute;
    // top: 50%;
    // transform: translateY(calc(-50% - 6rem));
  }

  &__greetings {
    color: $primary;
    font-size: 1.6rem;
  }

  &__name {
    font-size: 4.6rem;

    & > span {
      color: $primary;
    }
  }

  &__description {
    font-size: 1.6rem;
  }

  &__container-image {
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 0;

    & img {
      width: 70%;
    }
  }
}
</style>
