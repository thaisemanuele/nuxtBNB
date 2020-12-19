<script>
  import homes from '~/data/homes'

  export default {
    data() {
      return {
        homes: homes.slice(0,3)
      }
    }
  }
</script>

<template>
  <div>
    <div v-for="home in homes" :key="home.objectID">
      <home-card :home="home" />
    </div>
  </div>
</template>