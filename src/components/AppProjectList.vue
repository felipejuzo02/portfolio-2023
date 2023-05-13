<template>
  <div class="app-project-list">
    <div class="app-project-list__grid">
      <app-project-card
        v-for="(item, index) in repositories"
        :key="index"
        :content="item"
      />
    </div>

    <app-button class="app-project-list__button mt-lg" label="Load more" />
  </div>
</template>

<script>
import AppProjectCard from './AppProjectCard.vue';
import AppButton from './AppButton.vue';

export default {
  components: {
    AppProjectCard,
    AppButton
  },

  data () {
    return {
      repositories: [],
      quantityRepositoriesShow: 2
    }
  },

  computed: {
    repositoriesToShow () {
      return [
        'blog-v2',
        'habitue-project',
        'message-encryption',
        'todo-list',
      ]
    }
  },

  created () {
    this.fetchGithubProjects()
  },

  methods: {
    fetchGithubProjects () {
      fetch('https://api.github.com/users/felipejuzo02/repos')
        .then(async res => {
          const data = await res.json()

          this.repositories = this.filterRepositories(data)
        }).catch(error => console.log(error))
    },

    filterRepositories(data) {
      return data.filter(item => this.repositoriesToShow.some(repoName => repoName === item.name))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-project-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>