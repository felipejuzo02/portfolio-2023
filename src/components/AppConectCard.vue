<template>
  <div class="app-connect-card pa-lg">
    <img class="app-connect-card__linkedin-logo" src="../assets/logo-linkedin.svg" alt="Logo linkedin">

    <div>
      <p class="app-connect-card__linkedin mt-md">Linkedin</p>
      <p class="app-connect-card__name mt-xs mb-md">Luis Felipe Juzo</p>
      <app-button label="Conectar" @click="openLinkedinProfile()" />
    </div>
  </div>
</template>

<script>
import AppButton from '../components/AppButton.vue'

export default {
  name: 'AppConnectCard',

  components: {
    AppButton
  },

  methods: {
    openLinkedinProfile () {
      window.open('https://www.linkedin.com/in/luis-felipe-juzo/', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

.app-connect-card {
  color: $white;
  background-color: $dark-2;
  border-radius: 1rem;

  width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__linkedin-logo {
    width: 3.6rem;
  }

  &__linkedin {
    font-size: 1.6rem;
    font-weight: 600;
  }

  &__name {
    font-size: 1.2rem;
  }

  &__link {
    text-decoration: none;
    color: $white;
    font-size: 1.8rem;
    border: 1px solid $primary;
    padding: 0.6rem;
  }
}
</style>