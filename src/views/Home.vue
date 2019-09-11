<template>
  <div class="home">
    <Joke msg="Welcome to Your Vue.js App" />
    <Joke msg="Welcome to Your Vue.js App" />
    <Joke msg="Welcome to Your Vue.js App" />

  </div>
</template>

<script>
  // @ is an alias to /src
  import Joke from '@/components/Joke.vue'

  export default {
    name: 'home',
    components: {
      Joke
    }
  }
</script>