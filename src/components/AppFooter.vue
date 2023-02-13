<template>
  <footer class="app-footer">
    <h3 class="app-footer__name">Luis Felipe Juzo</h3>

    <nav class="app-footer__nav">
      <ul class="app-footer__list py-md">
        <li class="app-footer__item">inicio</li>
        <li class="app-footer__item">sobre</li>
        <li class="app-footer__item">tecnologias</li>
        <li class="app-footer__item">projetos</li>
        <li class="app-footer__item">contato</li>
      </ul>

      <div>
        <img class="mr-md" src="../assets/logo-linkedin.svg" alt="Logo linkedin">
        <img src="../assets/logo-wpp.svg" alt="Logo WhatsApp">
      </div>
    </nav>

    <p class="mt-lg">@ 2023 - Created by luis-juzo</p>
  </footer>
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';

.app-footer {
  background-color: $dark-2;
  color: $white;
  text-align: center;

  &__name {
    font-size: 1.6rem;
  }

  &__list {
    text-decoration: none;
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 4rem;
  }
  
  &__item {
    text-decoration: none;
  }
}
</style>