<template>
  <main class="main" id="home">
    <div class="main__container container">
      <div class="main__informations">
        <p class="main__greetings">opaa,</p>
        <h1 class="main__name">Sou o <span>Luis</span> Juzo</h1>
        <p class="main__description mb-md">Desenvolvedor Frontend, com 3 anos de experiência, trabalhando principalmente com VueJS, Quasar e Capacitor.</p>
        <app-button @click="downloadCV()" label="Baixar meu CV"></app-button>
      </div>

      <div class="main__container-image">
        <img class="main__image" src="../assets/me.jpg" loading="lazy" alt="Minha foto">
      </div>
    </div>
  </main>

  <section class="projects py-xl" id="projects">
    <div class="container">
      <app-section-description :content="sectionDescriptionContent.projects" />

      <app-project-list />
    </div>
  </section>

  <app-notify ref="notify" text="Seu contato foi enviado com sucesso!!" :model-value="true" />
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppButton from '../components/AppButton.vue'
import AppNotify from '../components/AppNotify.vue'
import AppSectionDescription from '../components/AppSectionDescription.vue'
import AppAboutCard from '../components/AppAboutCard.vue'
import AppProjectList from '../components/AppProjectList.vue'
import AppConectCard from '../components/AppConectCard.vue'
import AppFooter from '../components/AppFooter.vue'
import AppTechnologiesList from '../components/AppTechnologiesList.vue'

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
    section: 'sobre',
    title: 'Um pequeno resumo sobre mim',
    subtitle: 'Atuando na área de desenvolvimento front-end desde 2021, sendo mais específico com a tecnologia VueJS e Quasar. Formado em Análise e Desenvolvimento de Sistemas pela Faculdade de Tecnologia de Ribeirão Preto (FATEC). Tenho facilidade em aprender, buscando sempre desafios.'
  },
  skills: {
    section: 'tecnologias',
    title: 'Todas as tecnologias que tenho experiência',
    subtitle: 'Abaixo, todas as tecnologias na qual tenho ou tive experiência, considerando tanto no ambiente acadêmico, quanto dentro do próprio dia a dia dentro do ambiente profissional.'
  },
  projects: {
    section: 'projetos',
    title: 'Alguns projetos que desenvolvi',
    subtitle: 'Os projetos listados, são principalmente projetos realizados por mim, não seguindo cursos e eventos, para que eu possa aprimorar minhas habilidades nas tecnologias que atuo.'
  },
  contact: {
    section: 'contato',
    title: 'Bora tomar um café?',
    subtitle: 'Caso tenha interesse em conversar, me chame no linkedin, vou estar sempre atento e prometo que respondo o mais breve possível, pois é claro, um bom café não se nega a ninguém!'
  }
}

const aboutCardContent = [
  {
    name: 'hybrid',
    title: 'Desenvolvimento híbrido',
    description: 'Sempre com base em JavaScript no desenvolvimento web, tenho experiência no desenvolvimento de aplicações híbridas, utilizando principalmente Capacitor/Cordova.'
  },
  {
    name: 'uiux',
    title: 'UI / UX Design',
    description: 'Como sou uma pessoa visual, sempre gostei e tenho facilidade no desenvolvimento de interfaces gráficas, prezando sempre os conceitos de UI/UX.'
  },
  {
    name: 'database',
    title: 'SQL - Oracle',
    description: 'Sou certificado Oracle, com o processo ministrado pela FATEC. Capaz de modelagem, criação e manipulação de bancos de dados relacional.'
  },
  {
    name: 'mobile',
    title: 'Gestão ágil de projetos',
    description: 'Experiência e conhecimento na gestão ágil de projetos, já atuando como Agile Lead e com diversos frameworks e metodologias, como Scrum, Kanban e XP.'
  },
]
</script>


<style lang="scss">
@import '../style/app.scss';

.main {
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

.about {
  background-color: $dark-2;

  &__card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }
}

.skills {
  background-color: $dark-1;
}

.projects {
  background-color: $dark-2;
}

.contact {
  background-color: $dark-1;

  &__connect-label, &__send-message {
    color: $white;
    font-size: 1.8rem;
    text-align: center;
  }

  &__connect-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__button {
    position: absolute;
    right: 4rem;
  }
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
