<template>
  <app-header />

  <div class="router-view">
    <router-view ></router-view>
    <app-footer class="py-lg" />
  </div>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
.router-view {
  position: relative;
  height: calc(100vh - 6rem);
  margin-top: 6rem;
}
</style>