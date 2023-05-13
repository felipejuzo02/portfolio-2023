<template>
  <section class="page-projects py-xl">
    <div class="container">
      <app-section-description :content="sectionDescription" />

      <app-project-list />
    </div>
  </section>
</template>

<script>
import AppSectionDescription from '../components/AppSectionDescription.vue'
import AppProjectList from '../components/AppProjectList.vue'

export default {
  name: 'Projects',

  components: {
    AppSectionDescription,
    AppProjectList
  },

  computed: {
    sectionDescription () {
      return {
        section: 'projects',
        title: 'Some projects I developed',
        subtitle: 'The projects listed are mainly projects carried out by me, not following courses and events, so that I can improve my skills in the technologies I work with.'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../style/app.scss';

.page-projects {
  background-color: $dark-2;
}
</style>