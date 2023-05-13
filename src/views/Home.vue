<template>
  <main class="page-home" id="home">
    <div class="page-home__container container">
      <div class="page-home__informations">
        <p class="page-home__greetings">hey,</p>
        <h1 class="page-home__name">I'm <span>Luis</span> Juzo</h1>
        <p class="page-home__description mb-md">
          Frontend developer, with 3 years of experience, working mainly with VueJS, Quasar and Capacitor.
        </p>
        <app-button @click="downloadCV()" label="Download CV"></app-button>
      </div>

      <div class="page-home__container-image">
        <img class="page-home__image" src="../assets/me.jpg" loading="lazy" alt="Minha foto">
      </div>
    </div>
  </main>

  <section class="projects py-xl" id="projects">
    <div class="container">
      <app-section-description :content="sectionDescriptionContent.projects" />

      <app-project-list />
    </div>
  </section>
</template>

<script setup>
import AppButton from '../components/AppButton.vue'
import AppSectionDescription from '../components/AppSectionDescription.vue'
import AppProjectList from '../components/AppProjectList.vue'

const downloadCV = () => {
  const link = document.createElement('a')

  link.setAttribute('href', '../src/assets/cv.pdf')
  link.setAttribute('download', 'Luis Juzo - CV')
  link.setAttribute('id', 'cv')

  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const sectionDescriptionContent = {
  about: {
    section: 'hii',
    title: 'Um pequeno resumo sobre mim',
    subtitle: 'Atuando na área de desenvolvimento front-end desde 2021, sendo mais específico com a tecnologia VueJS e Quasar. Formado em Análise e Desenvolvimento de Sistemas pela Faculdade de Tecnologia de Ribeirão Preto (FATEC). Tenho facilidade em aprender, buscando sempre desafios.'
  },
  skills: {
    section: 'tecnologias',
    title: 'Todas as tecnologias que tenho experiência',
    subtitle: 'Abaixo, todas as tecnologias na qual tenho ou tive experiência, considerando tanto no ambiente acadêmico, quanto dentro do próprio dia a dia dentro do ambiente profissional.'
  },
  projects: {
    section: 'projects',
    title: 'Some projects I developed',
    subtitle: 'The projects listed are mainly projects carried out by me, not following courses and events, so that I can improve my skills in the technologies I work with.'
  },
  contact: {
    section: 'contato',
    title: 'Bora tomar um café?',
    subtitle: 'Caso tenha interesse em conversar, me chame no linkedin, vou estar sempre atento e prometo que respondo o mais breve possível, pois é claro, um bom café não se nega a ninguém!'
  }
}
</script>


<style lang="scss">
@import '../style/app.scss';

.page-home {
  background-color: $dark-1;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 6rem);
  }

  &__informations {
    color: $white;
    width: 50%;
  }

  &__greetings {
    color: $primary;
    font-size: 1.6rem;
  }

  &__name {
    font-size: 4.6rem;

    & > span {
      color: $primary;
    }
  }

  &__description {
    font-size: 1.6rem;
  }

  &__container-image {
    width: 50%;
  }

  &__image {
    max-width: 100%;
    border: 3px solid rgba(255, 255, 255, 0.4);
    filter: drop-shadow(-40px 20px 75px rgba(218, 241, 222, 0.1));
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    object-fit: cover;
    animation: animate-image 5s ease-in-out alternate infinite;

    @keyframes animate-image {
      0% {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }

      50% {
          border-radius: 30% 60% 70% 40% / 50% 60% 30%;
      }

      100% {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }
    }
  }
}

.projects {
  background-color: $dark-2;
}


@media only screen and (max-width: $large-screen) {
  .main {
    &__image {
      display: none;
    }

    &__informations {
      width: 100%;
      text-align: center;
    }

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
