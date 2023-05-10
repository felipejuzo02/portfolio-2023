<template>
  <div class="app-social-cards" @click="openSocialMedia">
    <img :src="getImageURL" alt="Icone do github" loading="lazy">
  </div>
</template>

<script>
export default {
  name: 'AppSocialCards',

  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    getImageURL () {
      return new URL(`../assets/${this.content.image}.svg`, import.meta.url)
    }
  },

  methods: {
    openSocialMedia () {
      window.open(this.content.url, '_blank')
    }
  }
}
</script>

<style lang="scss">
@import '../style/variables.scss';

.app-social-cards {
  background-color: $dark-1;
  width: 65px;
  height: 65px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: .6rem;
  cursor: pointer;

  &:hover > img {
    // fill: red;
    // color: $primary;
    // background-color: red;
  }
}
</style>