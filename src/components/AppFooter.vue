<template>
  <footer class="app-footer">
    <h3 class="app-footer__name">Luis Felipe Juzo</h3>

    <nav class="app-footer__nav">
      <ul class="app-footer__list py-md">
        <li v-for="(item, index) in sectionsList" :key="index">
          <a :href="`#${item.id}`">{{ item.label }}</a>
        </li>
      </ul>

      <div>
        <a href="https://www.linkedin.com/in/luis-felipe-juzo/" target="_blank">
          <img src="../assets/logo-linkedin.svg" alt="Logo Linkedin">
        </a>

        <a class="pl-sm" href="https://github.com/felipejuzo02" target="_blank">
          <img src="../assets/logo-github.svg" alt="Logo Github">
        </a>
      </div>
    </nav>

    <p class="mt-lg">@ 2023 - Created by luis-juzo</p>
  </footer>
</template>

<script>
export default {
  computed: {
    sectionsList () {
      return [
        { label: 'inicio', id: 'home' },
        { label: 'sobre', id: 'about' },
        { label: 'tecnologias', id: 'skills' },
        { label: 'projetos', id: 'projects' },
        { label: 'contato', id: 'contact' },
      ]
    }
  }
}
</script>

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

    & li a {
      text-decoration: none;
      color: $white;
    }
  }
}
</style>