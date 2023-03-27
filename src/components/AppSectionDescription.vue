<template>
  <div class="app-section-description mb-lg">
    <p class="app-section-description__section">{{ content.section }}</p>
    <h2 class="app-section-description__title">{{ content.title }}</h2>
    <p class="app-section-description__subtitle mt-sm">{{ content.subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppSectionDescription',

  props: {
    content: {
      type: Object,
      default: () => ({}),
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/app.scss';

.app-section-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $white;
  text-align: center;

  &__section {
    color: $primary;
    font-size: 1.6rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 4rem;
      background-color: $primary;
      top: 0.9rem;
      right: -4.6rem;
    }

    &::before {
      content: "";
      position: absolute;
      height: 2px;
      width: 4rem;
      background-color: $primary;
      top: 0.9rem;
      left: -4.6rem;
    }
  }

  &__title {
    font-size: 3.6rem;
  }

  &__subtitle {
    text-align: center;
    font-size: 1.4rem;
  }
}
</style>