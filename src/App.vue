<template>
  <app-header class="header" />

  <main class="main">
    <div class="main__container container">
      <div class="main__informations">
        <p class="main__greetings">hello,</p>
        <h1 class="main__name">I'm <span>Luis</span> Juzo</h1>
        <p class="main__description mb-md">Front end developer, with 3 years of experience, working mainly with VueJs and Quasar.</p>
        <app-button @click="downloadCV()" label="Download CV"></app-button>
      </div>

      <div class="main__container-image">
          <img class="main__image" src="./assets/me.jpg" alt="Minha foto">
      </div>
    </div>
  </main>

  <section class="about py-xl">
    <div class="container">
      <app-section-description :content="sectionDescriptionContent.about" />

      <div class="about__card-container full-width">
        <app-about-card  v-for="(card, index) in aboutCardContent" :key="index" :content="card" />
      </div>
    </div>
  </section>

  <section class="skills py-xl">
    <div class="container">
      <app-section-description :content="sectionDescriptionContent.skills" />

      <div class="about__card-container full-width">
        <app-about-card  v-for="(card, index) in aboutCardContent" :key="index" :content="card" />
      </div>
    </div>
  </section>

  <section class="projects py-xl">
    <div class="container">
      <app-section-description :content="sectionDescriptionContent.projects" />
    </div>
  </section>

  <section class="contact py-xl">
    <div class="container">
      <app-section-description :content="sectionDescriptionContent.contact" />

      <div class="contact__messages">
        <div>
          <p>Vamos nos conectar?</p>
          <div>
            card de conexao
          </div>
        </div>

        <div>
          <p>Me mande uma mensagem</p>
          <form action="submit">
            <label for="teste">teste</label>
            <input id="teste" type="text">
          </form>
        </div>
      </div>
    </div>
  </section>

  <app-footer class="py-lg" />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppButton from './components/AppButton.vue'
import AppSectionDescription from './components/AppSectionDescription.vue'
import AppAboutCard from './components/AppAboutCard.vue'
import AppFooter from './components/AppFooter.vue'

const downloadCV = () => {
  const link = document.createElement('a')

  link.setAttribute('href', './assets/me.png')
  link.setAttribute('download', 'Luis Juzo - CV')
  console.log('link', link)

  link.click()
}

const sectionDescriptionContent = {
  about: {
    section: 'about',
    title: 'A little summary about me',
    subtitle: 'Atuando na área de desenvolvimento front-end desde 2021, sendo mais específico com a tecnologia VueJS e Quasar. Formado em Análise e Desenvolvimento de Sistemas pela Faculdade de Tecnologia de Ribeirão Preto (FATEC). Tenho facilidade em aprender, buscando sempre desafios.'
  },
  skills: {
    section: 'skills',
    title: 'All technologies que tenho expectientes',
    subtitle: 'Atuando na área de desenvolvimento front-end desde 2021, sendo mais específico com a tecnologia VueJS e Quasar. Formado em Análise e Desenvolvimento de Sistemas pela Faculdade de Tecnologia de Ribeirão Preto (FATEC). Tenho facilidade em aprender, buscando sempre desafios.'
  },
  projects: {
    section: 'projects',
    title: 'All projects make for me',
    subtitle: 'Atuando na área de desenvolvimento front-end desde 2021, sendo mais específico com a tecnologia VueJS e Quasar. Formado em Análise e Desenvolvimento de Sistemas pela Faculdade de Tecnologia de Ribeirão Preto (FATEC). Tenho facilidade em aprender, buscando sempre desafios.'
  },
  contact: {
    section: 'contact',
    title: 'Contact me for a coffee',
    subtitle: 'loren ipsunnn'
  }
}

const aboutCardContent = [
  {
    name: 'hybrid',
    title: 'Hybrid development',
    description: 'Using JavaScript, hybrid development experience through Capacitor/Cordova for Web, Android and IOS systems.'
  },
  {
    name: 'uiux',
    title: 'UI / UX Design',
    description: 'Ease and experience in creating interfaces for the best user experience.'
  },
  {
    name: 'database',
    title: 'SQL - Oracle',
    description: 'Oracle database certification, from modeling to manipulation.'
  },
  {
    name: 'mobile',
    title: 'Pensar em algo',
    description: 'Using JavaScript, hybrid development experience through Capacitor/Cordova for Web, Android and IOS systems.'
  },
]
</script>


<style lang="scss">
@import './style/variables.scss';

.main {
  position: relative;
  background-color: $dark-1;
  height: calc(100vh - 6rem);
  margin-top: 6rem;

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
    gap: 3%;
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

  &__messages {
    display: flex;
    justify-content: space-between;
  }
}
</style>
