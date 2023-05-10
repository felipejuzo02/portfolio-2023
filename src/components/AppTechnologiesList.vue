<template>
  <div class="app-technologies-list">
    <app-technologies-card v-for="(item, index) in technologiesList" :key="index" :content="item" />
  </div>
</template>

<script>
import AppTechnologiesCard from './AppTechnologiesCard.vue';

export default {
  components: { AppTechnologiesCard },

  computed: {
    technologiesList () {
      return [
        { image: 'vue', name: 'VueJS' },
        { image: 'javascript', name: 'JavaScript' },
        { image: 'ionic', name: 'Ionic Framework' },
        { image: 'html', name: 'HTML' },
        { image: 'css', name: 'CSS' },
        { image: 'sass', name: 'Sass / Scss' },
        { image: 'quasar', name: 'Quasar' },
        { image: 'vite', name: 'Vite' },
        { image: 'node', name: 'Node JS' },
        { image: 'postgresql', name: 'PostgreSQL' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-technologies-list {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}
</style>