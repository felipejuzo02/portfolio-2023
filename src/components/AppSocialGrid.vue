<template>
  <div class="app-social-grid my-lg">
    <app-social-cards 
      v-for="(item, index) in socialList"
      :key="index" 
      :content="item"
    />
  </div>
</template>

<script>
import AppSocialCards from './AppSocialCards.vue';

export default {
  name: 'AppSocialGrid',

  components: {
    AppSocialCards
  },

  computed: {
    socialList () {
      return [
        {
          image: 'logo-linkedin',
          url: 'https://www.linkedin.com/in/luis-felipe-juzo/'
        },
        {
          image: 'logo-insta',
          url: 'https://www.linkedin.com/in/luis-felipe-juzo/'
        },
        {
          image: 'logo-github',
          url: 'https://github.com/felipejuzo02'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.app-social-grid {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
</style>