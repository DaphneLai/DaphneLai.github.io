<template>
  <div class="project-card">
    <router-link :to="{ name: 'Details', params: { id: project.id } }">
      <h3>{{ project.summary }}</h3>
    </router-link>
    <p>{{ project.client }} * {{ project.date }}</p>
    <p v-for="link in project.links" :key="link">{{ link }}</p>
  </div>
</template>

<script>
import "./ProjectCard.css";

export default {
  props: ["project"],
};
</script>
