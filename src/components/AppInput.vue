<template>
  <div class="app-input">
    <label :for="name" class="app-input__label mb-sm">{{ label }}</label>
    <input v-model="model" type="text" class="app-input__input full-width" :id="name" :placeholder="label"/>
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppInput',

  emits: ['update:model-value'],

  props: {
    modelValue: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    }
  },

  computed: {
    model: {
      get () {
        return this.modelValue
      },

      set (modelValue) {
        return this.$emit('update:model-value', modelValue)
      }
    },
  },

  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }

      return 'This is required';
    }
  }
}
</script>

<style lang="scss" scoped>
.app-input {
  &__label {
    font-size: 1.2rem;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
    transform: translateY(0rem);
    color: white;
    font-size: 1.4rem;
  }

  &__input {
    color: #333;
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    border: none;
    width: 90%;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;

    &:placeholder-shown + .app-label {
      opacity: 0;
      visibility: hidden;
      -webkit-transform: translateY(-4rem);
      transform: translateY(-4rem);
    }
  }
}
</style>