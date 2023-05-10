<template>
  <footer class="app-footer">
    <h3 class="app-footer__name">Follow me</h3>

    <app-social-grid />

    <p>@ 2023 - Created by Luis Felipe Juzo</p>
  </footer>
</template>

<script>
import AppSocialGrid from './AppSocialGrid.vue';

export default {
  name: 'AppFooter',

  components: {
    AppSocialGrid
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

.app-footer {
  background-color: $dark-1;
  color: $white;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;
    left: 0;
    background-color: $grey-1;
  }

  &__name {
    font-size: 2rem;
  }
}
</style>