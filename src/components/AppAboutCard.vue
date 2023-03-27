<template>
  <div class="app-about-card">
    <img class="app-about-card__image" :src="image" alt="Trocar aq">

    <div class="app-about-card__content mt-lg px-md">
      <p class="app-about-card__title mb-sm">{{ content.title }}</p>
      <p class="app-about-card__description">{{ content.description }}</p>
    </div>
  </div>
</template>

<script setup>
import database from '../assets/about/database.svg'
import hybrid from '../assets/about/hybrid.svg'
import mobile from '../assets/about/mobile.svg'
import uiux from '../assets/about/uiux.svg'

import { computed } from "vue";

const props = defineProps ({
  content: {
    type: Object,
    default: () => ({})
  }
})

const image = computed(() => {
  const images = {
    database,
    hybrid,
    mobile,
    uiux,
  }

  return images[props.content.name]
})

</script>

<style lang="scss" scoped>
@import '../style/app.scss';
.app-about-card {
  color: white;
  background-color: $dark-1;
  width: 24%;
  border-radius: 1rem;
  height: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 17px 17px 25px -16px rgba(0,0,0,0.75);
  -moz-box-shadow: 17px 17px 25px -16px rgba(0,0,0,0.75);
  box-shadow: 17px 17px 25px -16px rgba(0,0,0,0.75);

  &__image {
    width: 30%rem;
  }

  &__content {
    text-align: center;
  }

  &__title {
    font-weight: 600;
    font-size: 1.6rem;
  }

  &__description {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: $large-screen) {
  .app-about-card {
    width: 49%;
  }
}

@media only screen and (max-width: $medium-screen) {
  .app-about-card {
    width: 100%;
  }
}
</style>