<template>
  <div class="app-input">
    <label :for="name">
      <span class="app-input__label">{{ label }}</span>
      <input
        v-model="model"
        class="app-input__input"
        :name="name"
        type="text"
        @focus="handleFocus"
        @focusout="handleFocusOut"
      >
    </label>
    <!-- <textarea 
      class="app-input__input"
      name="" id="" label="Teste" rows="10">teste</textarea> -->
  </div>
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    modelValue: {
      type: [String, Number],
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

  emits: ['update:modelValue'],

  computed: {
    model: {
      get () {
        return this.modelValue
      },

      set (value) {
        return this.$emit('update:modelValue', value)
      }
    }
  },

  methods: {
    handleFocus ({ target }) {
      const label = target.previousElementSibling

      label.classList.add('app-input__label--active')
    },

    handleFocusOut ({ target }) {
      if (this.modelValue) return

      const label = target.previousElementSibling

      label.classList.remove('app-input__label--active')
    }
  }
}
</script>

<style lang="scss">
@import '../style/_app.scss';

.app-input {
  width: 100%;

  &__label {
    position: absolute;
    color: #b4b4b4;

    margin: 18px;
    cursor: text;
    transition: all .3s ease;

    &--active {
      font-size: 1rem;
      margin: 10px;
    }
  }

  &__input {
    width: 100%;
    padding: 25px 10px 10px;
    background-color: $dark-1;
    border: 2px solid $dark-2;
    color: $white;
    outline: none;

    &:focus {
      background-color: #2e2e2e;
      border-bottom: 2px solid #b4b4b4;
    }
  }
}
</style>