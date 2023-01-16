<template>
  <button class="app-button">{{ label }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  
  props: {
    label: {
      type: String,
      default: 'Iniciar'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

.app-button {
  background-color: $primary;
  border: none;
  border-radius: 0.6rem;
  color: $white;
  cursor: pointer;
  padding: 1rem 4rem;
  transition: 0.3s;

  &:hover {
    background-color: $secondary;
  }
}
</style>