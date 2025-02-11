<template>
  <div class="project-list">
    <div v-for="project in projects" :key="project.id">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<script>
import ProjectCard from "../ProjectCard/ProjectCard.vue";
import "./ProjectList.css";

export default {
  props: ["projects"],
  components: { ProjectCard },
};
</script>
