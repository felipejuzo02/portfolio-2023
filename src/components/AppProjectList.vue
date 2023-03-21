<template>
  <div class="app-project-list">
    <app-project-card v-for="(item, index) in repositories" :key="index" :content="item" />
  </div>
</template>

<script>
import AppProjectCard from './AppProjectCard.vue';

export default {
  components: {
    AppProjectCard
  },

  data () {
    return {
      repositories: []
    }
  },

  computed: {
    repositoriesToShow () {
      return [
        'page-djstudio',
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
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>