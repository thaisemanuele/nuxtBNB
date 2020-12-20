<script>
  import homes from '~/data/homes'

  export default {
    head() {
      return {
        title: 'Home',
        meta: [{
          name: 'description',
          content: 'Find the perfect place for your next adventure with NuxtBNB!',
          hid: 'description'
        }]
      }
    },
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
      <nuxt-link :to="`/home/${home.objectID}`" prefetch><home-card :home="home" /></nuxt-link>
    </div>
  </div>
</template>