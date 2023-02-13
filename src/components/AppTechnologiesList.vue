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
        { image: 'node', name: 'Node JS' },
        { image: 'vite', name: 'Vite' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-technologies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  justify-content: center;
}
</style>