<template>
  <div class="app-project-card pa-md">
    <div>
      <img class="app-project-card__image mb-md" :src="getImageURL(content.name)" loading="lazy" alt="Image projeto"></div>
      <div class="app-project-card__description px-md">
        <h3>{{ content.name }}</h3>
        <p>{{ content.description }}</p>
      </div>

      <nav class="app-project-card__nav">
        <div class="app-project-card__links flex" @click="openRepositorie()">
          <img src="../assets/logo-github.svg" alt="Logo github">
          <p>Repositório</p>
        </div>
        <div v-if="content.homepage" class="app-project-card__links flex" @click="openProjectView()">
          <img src="../assets/www.svg" alt="Logo internet">
          <p>Visualizar</p>
        </div>
      </nav>

  </div>
</template>

<script>
export default {
  name: 'AppProjectCard',

  props: {
    content: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },

  data() {
    return {
      image: ''
    }
  },

  methods: {
    openRepositorie () {
      window.open(this.content.html_url, '_blank')
    },

    openProjectView () {
      window.open(this.content.homepage, '_blank')
    },

    getImageURL (name) {
      const url = new URL(`../assets/projects/${name}.png`, import.meta.url)

      if (url.pathname === '/undefined') {
        return url.origin + '/src/assets/projects/construcao.png'
      }
 
      return url.href
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/app.scss';

.app-project-card {
  color: $white;
  font-size: 1.4rem;
  width: 49%;
  max-width: 70rem;
  position: relative;
  background-color: $dark-1;
  border-radius: 1rem;

  &__image {
    width: 100%;
    height: 28rem;
    border-radius: 1rem;
    // aspect-ratio: 16/9;
  }

  &__nav {
    display: flex;
    justify-content: center;
    gap: 4rem;
  }

  &__links {
    cursor: pointer;

    &:hover {
      filter: grayscale(100%);
    }
  }

  &__description {
    position: absolute;
    top: 1.6rem;
    left: 1.6rem;
    width: calc(100% - 3.2rem);
    height: calc(100% - 7.5rem);

    background: rgba(0, 0, 0, 0.6);
    border-radius: 1rem;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    opacity: 0;

    & > * {
      transform: translateY(20px);
      transition: transform 0.5s;
    }

    &:hover {
      opacity: 1;

      & > * {
        transform: translateY(0);
      }
      
    }
  }
}

@media only screen and (max-width: $medium-screen) {
  .app-project-card {
    width: 100%;
  }
}
</style>