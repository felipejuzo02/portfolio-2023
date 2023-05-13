<template>
  <div class="app-connect-card pa-md">
    <div class="app-connect-card__initial">
      <img class="app-connect-card__linkedin-logo" src="../assets/logo-linkedin.svg" alt="Logo linkedin">

      <div>
        <p class="app-connect-card__name mt-md">Luis Felipe Juzo</p>
        <p class="app-connect-card__responsibility mt-xs mb-md">Frontend Developer</p>
      </div>
    </div>

    <button class="app-connect-card__circle-button" @click="openLinkedinProfile">
      <img src="../assets/arrow.svg" alt="">
    </button>
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

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &__initial {
    gap: 24px;
    display: flex;
    align-items: center;
  }

  &__linkedin-logo {
    width: 9rem;
  }

  &__responsibility {
    font-size: 1.2rem;
  }

  &__name {
    font-size: 1.6rem;
    font-weight: 600;
  }

  &__link {
    text-decoration: none;
    color: $white;
    font-size: 1.8rem;
    border: 1px solid $primary;
    padding: 0.6rem;
  }

  &__circle-button {
    width: 48px;
    height: 48px;
    background-color: $primary;
    border-radius: 50%;
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    border: none;

    &:hover {
      background-color: $secondary;
    }
  }
}
</style>