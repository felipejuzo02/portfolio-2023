<template>
  <div v-if="model" class="app-notify">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'AppNotify',

  props: {
    text: {
      type: String,
      default: 'Sucesso!'
    },

    modelValue: {
      type: Boolean
    }
  },

  data () {
    return {
      model: false
    }
  },

  methods: {
    showNotify () {
      this.model = true
      this.closeNotifyAfterTimer()
    },

    closeNotifyAfterTimer () {
      setTimeout(() => {
        this.closeNotify()
      }, 3000)
    },

    closeNotify () {
      this.model = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
// TODO, estudar inject para usar o notify
.app-notify {
  width: 38rem;
  line-height: 5rem;
  font-size: 1.4rem;
  text-align: center;
  background-color: $secondary;
  border-radius: 1rem;
  color: $white;

  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);

  animation: ease 1s; // TODO VALIDAR ANIMAÇÃO
}
</style>