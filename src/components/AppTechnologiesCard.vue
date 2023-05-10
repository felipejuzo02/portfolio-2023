<template>
  <div class="app-technologies-card" @click="redirectTechnologyDoc">
    <img class="app-technologies-card__image" :src="images" alt="Logo vue">
    <span class="app-technologies-card__tooltip py-xs">{{ content.name }}</span>
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
  },

  methods: {
    redirectTechnologyDoc () {
      console.log('Redirecionar para a documentação')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

.app-technologies-card {
  background-color: $white;
  width: 100%;
  height: 16rem;
  border-radius: .6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all .3s;
  position: relative;
  cursor: pointer;

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
    background-color: rgba($color: $dark-1, $alpha: .4);
    color: $white;
    font-size: 1.2rem;
    width: 100%;
    position: absolute;
    bottom: 0rem;
    display: none;
  }
}
</style>