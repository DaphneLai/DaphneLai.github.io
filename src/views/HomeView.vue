<template>
  <div class="home">
    <HomeSloganVue />
    <ProjectList :projects="projects" />
  </div>
</template>

<script>
import { ref } from "vue";
import ProjectList from "../components/ProjectList/ProjectList.vue";
import HomeSloganVue from '../components/HomeSlogan/HomeSlogan.vue';
import getProjects from '../composables/getProjects'

export default {
  name: "HomeView",
  components: { HomeSloganVue, ProjectList },
  setup() { 
    const projects = ref(getProjects())
    
    return { projects }
  },
};
</script>
