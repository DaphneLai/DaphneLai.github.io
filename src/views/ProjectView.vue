<template>
  <div class="project">
    <h1>{{ project.client }}</h1>
    <p>{{ project.summary }}</p>
  </div>
</template>

<script>
import getProject from "../composables/getProject";
import { useRoute } from 'vue-router'

export default {
  name: "ProjectView",
  props: ["id"],
  setup() {
    const route = useRoute();
    const project = getProject(route.params.id);

    return { project };
  },
};
</script>
