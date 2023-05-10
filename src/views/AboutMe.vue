<template>
  <div class="page-about">
    <section class="page-about__description py-xl container">
      <div class="page-about__personal-photo" />

      <div>
        <p>The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </div>
    </section>

    <section class="page-about__stats">
      <ul class="container py-xl">
        <li class="page-about__stats-item">
          <p>3</p>
          <span>Years of experience</span>
        </li>

        <li class="page-about__stats-item">
          <p>5</p>
          <span>Personal projects completed</span>
        </li>

        <li class="page-about__stats-item">
          <p>20+</p>
          <span>Pensar em algo aqui</span>
        </li>

        <li class="page-about__stats-item">
          <p>3</p>
          <span>Years of experience</span>
        </li>
      </ul>
    </section>

    <section class="page-about__technologies py-xl container">
      <h2 class="app-section-description__title mb-lg">Some technologies I have experience</h2>

      <app-technologies-list />
    </section>
  </div>
</template>

<script>
import AppTechnologiesList from '../components/AppTechnologiesList.vue';

export default {
  name: 'AboutMe',

  components: {
    AppTechnologiesList
  }
}
</script>

<style lang="scss">
@import '../style/app.scss';

.page-about {
  background-color: $dark-1;
  color: $white;
  font-size: 1.6rem;

  &__description {
    display: flex;
    gap: 22px;

    & p {
      line-height: 2.6rem;
    }
  }

  &__personal-photo {
    background-image: url('../assets/me.jpg');
    min-width: 250px;
    height: 300px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    border-radius: .6rem;
    -webkit-box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
    box-shadow: -1px 3px 20px -7px rgba(0,0,0,0.75);
  }

  &__stats {
    background-color: $dark-2;

    & ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      text-align: center;
    }
  }

  &__stats-item {
    & > p {
      font-size: 4rem;
      font-weight: 600;
    }

    & > span {
      color: $grey-1;
      font-size: 1.2rem;
    }
  }

  &__technologies {
    text-align: center;
  }
}

</style>