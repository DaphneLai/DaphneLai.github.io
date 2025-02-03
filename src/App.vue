<script setup lang="ts">
import Hero from './components/Hero.vue';
import HelloWorld from './components/Hero.vue'
import ProjectCard from './components/Project-card.vue';
import TheWelcome from './components/Project-card.vue'
</script>


<template>
  <body>
    <Hero />
    
  </body>

</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex; 
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
