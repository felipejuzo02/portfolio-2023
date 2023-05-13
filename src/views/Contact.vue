<template>
  <div class="page-contact py-xl">
    <div class="page-contact container">
      <form action="submit" class="page-contact__form pa-lg">
        <h3 class="mb-md">Send me a message</h3>

        <div 
          class="page-contact__input-box mb-lg"
          v-for="(input, index) in inputList"
          :key="index"
        >
          <app-input v-model="values[input.name]" :label="input.label"></app-input>
        </div>

        <app-button label="Send Message" />
      </form>

      <div class="page-contact__linkedin">
        <h3>Contact details</h3>
        <p class="my-md">Shall we have a coffee? Send me a message on linkedin and let's go!</p>

        <app-conect-card />
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '../components/AppInput.vue'
import AppButton from '../components/AppButton.vue'
import AppConectCard from '../components/AppConectCard.vue'

export default {
  name: 'Contact',

  components: {
    AppButton,
    AppInput,
    AppConectCard
  },

  data () {
    return {
      values: {
        email: ''
      }
    }
  },

  computed: {
    inputList () {
      return [
        { name: 'fullName', label: 'Full name' },
        { name: 'email', label: 'Your email' },
        { name: 'subject', label: 'Subject' },
        { name: 'message', label: 'Message' },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../style/app.scss';

.page-contact {
  background-color: $dark-1;
  color: $white;
  display: flex;
  width: 100%;
  gap: 48px;
  font-size: 1.6rem;

  &__form,
  &__linkedin {
    width: 50%;
  }

  &__form {
    background-color: $dark-2;
    -webkit-box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
    box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
    border-radius: .6rem;

    & > h3 {
      font-size: 2.2rem;
    }
  }

  &__input-box {
    display: flex;
    flex-direction: column;
  }
}
</style>