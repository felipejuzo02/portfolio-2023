<template>
  <header class="app-header">
    <div class="app-header__container container">
      <p class="app-header__title">
        <span>&#60;</span>luis-juzo <span>/&#62;</span>
      </p>

      <nav class="app-header__nav">
        <ul>
          <li v-for="(item, index) in sectionsList" :key="index">
            <a :href="`#${item.id}`">{{ item.label }}</a>
          </li>
        </ul>

        <div class="app-header__social-media">
          <a href="https://www.linkedin.com/in/luis-felipe-juzo/" target="_blank">
            <img src="../assets/logo-linkedin.svg" alt="Logo Linkedin">
          </a>

          <a href="https://github.com/felipejuzo02" target="_blank">
            <img src="../assets/logo-github.svg" alt="Logo Github">
          </a>
        </div>
      </nav>


      <div class="app-header__more-icon" @click="handlerDrawer">
        <span class="material-icons md-18">{{ drawerIcon }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  data () {
    return {
      drawerIcon: 'menu'
    }
  },

  computed: {
    sectionsList () {
      return [
        { label: 'inicio', id: 'home' },
        { label: 'sobre', id: 'about' },
        { label: 'tecnologias', id: 'skills' },
        { label: 'projetos', id: 'projects' },
        { label: 'contato', id: 'contact' },
      ]
    },
  },

  methods: {
    toggleDrawerIcon () {
      this.drawerIcon = this.drawerIcon === 'menu' ? 'close' : 'menu'
    },

    handlerDrawer () {
      const nav = document.querySelector('.app-header__nav')
      const currentWidth = nav.style.width;

      nav.style.width = currentWidth === '100%' ? null : '100%'

      this.toggleDrawerIcon()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/_app.scss';

.app-header {
  background-color: $dark-1;
  color: $white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;

  -webkit-box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
  box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
  
  &__container {
    display: flex; 
    align-items: center;
    height: 6rem;
    justify-content: space-between;
  }

  &__title {
    font-size: 2rem;
    cursor: pointer;

    & span {
      color: $primary;
    }
  }

  &__more-icon {
    display: none;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 50%;
    transition: all 0.2s;
    z-index: 100;

    &:hover {
      background-color: $dark-2;
    }
  }

  &__nav {
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    & a {
      
    }

    & ul li {
      display: inline-block;
      margin-left: 3rem;
      position: relative;

      & a {
        text-decoration: none;
        color: $white;

        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 3px;
          background-color: $primary;
          bottom: -0.5rem;
          transition: 0.5s;
        }
  
        &:hover::before {
          width: 100%;
        }
  
        &:hover {
          color: $primary;
          cursor: pointer;
        }
      }
    }
  }

  &__social-media {
    display: flex;
    gap: 1rem;
    position: relative;

    & img {
      width: 1.8rem;

      &:hover {
        cursor: pointer;
      }
    }

    &::before {
      content: "";
      position: absolute;
      height: 2rem;
      width: 2px;
      background-color: $white;
      left: -1.6rem;
    }
  }
}

@media only screen and (max-width: $large-screen) {
  .app-header {
    &__more-icon {
      display: block;
    }

    &__nav {
      width: 0;
      height: 100%;
      background-color: $dark-2;
      z-index: 99;
      position: fixed;
      top: 0;
      right: 0;
      overflow-x: hidden;
      transition: all 0.5s;

      flex-direction: column;
      justify-content: center;

      & ul li{
        display: block;
        margin: 0 0 3rem 0;
        text-align: center;

        & > a {
          position: relative;
        }
      }
    }

    &__social-media {
      margin-top: 2rem;

      &::before {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: $white;
        left: 0;
        top: -2.6rem;
      }
    }
  }
}
</style>