<template>
  <div class="app-technologies-card">
    <img class="app-technologies-card__image" :src="images" alt="Logo vue">
    <span class="app-technologies-card__tooltip">{{ content.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppTechnologiesCard',

  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    images () {
      return new URL(`../assets/technologies/${this.content.image}.svg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

.app-technologies-card {
  background-color: $white;
  width: 16rem;
  height: 16rem;
  border-radius: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all .5s;

  &__image {
    width: 70%;
    max-width: 8rem;
  }

  &:not(:hover) {
    filter: grayscale(100%);
  }

  &:hover &__tooltip {
    display: block;
  }

  &__tooltip {
    position: absolute;
    bottom: -2.6rem;
    background-color: $dark-2;
    color: $white;
    font-size: 1.2rem;
    padding: .2rem 2rem;
    border-radius: .8rem;
    display: none;
  }
}
</style>