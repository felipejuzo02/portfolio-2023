<template>
  <header class="app-header">
    <div class="app-header__container container">
      <p class="app-header__title">
        <span>&#60;</span>luis-juzo <span>/&#62;</span>
      </p>

      <nav class="app-header__nav">
        <ul>
          <li>inicio</li>
          <li>sobre</li>
          <li>tecnologias</li>
          <li>projetos</li>
          <li>contato</li>
        </ul>
  
        <div class="app-header__social-media">
          <img src="../assets/logo-linkedin.svg" alt="Logo Linkedin">
          <img src="../assets/logo-wpp.svg" alt="Logo WhatsApp">
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';

.app-header {
  background-color: $dark-1;
  color: $white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;

  -webkit-box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
  box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
  
  &__container {
    display: flex; 
    align-items: center;
    height: 6rem;
    justify-content: space-between;
  }

  &__title {
    font-size: 2rem;
    cursor: pointer;

    & span {
      color: $primary;
    }
  }

  &__nav {
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    
    & ul li {
      display: inline-block;
      margin-left: 3rem;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 3px;
        background-color: $primary;
        bottom: -0.5rem;
        transition: 0.5s;
      }

      &:hover::before {
        width: 100%;
      }

      &:hover {
        color: $primary;
        cursor: pointer;
      }
    }
  }

  &__social-media {
    display: flex;
    gap: 1rem;
    position: relative;

    & img {
      width: 1.8rem;

      &:hover {
        cursor: pointer;
        // background-color: red;
      }
    }

    &::before {
      content: "";
      position: absolute;
      height: 2rem;
      width: 2px;
      background-color: $white;
      left: -1.6rem;
    }
  }
}
</style>