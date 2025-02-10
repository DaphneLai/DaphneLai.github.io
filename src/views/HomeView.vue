<template>
  <div class="home">
    <h1>Home</h1>
    <ProjectList :projects="projects" />
  </div>
</template>

<script>
import { ref } from "vue";
import ProjectList from "../components/ProjectList.vue";

export default {
  name: "HomeView",
  components: { ProjectList },
  setup() {
    const projects = ref([
      { id: 1, summary: "fancy text 1", client: "company 1", date: "date 1", links: ["l1", "l2"] },
      { id: 2, summary: "fancy text 2", client: "company 2", date: "date 2", links: ["l1", "l2"]},
      { id: 3, summary: "fancy text 3", client: "company 3", date: "date 3", links: ["l1", "l2, l3"] },
      { id: 4, summary: "fancy text 4", client: "company 4", date: "date 4", links: ["l1", "l2"] },
      { id: 5, summary: "fancy text 5", client: "company 5", date: "date 5", links: ["l1", "l2", "l3"] },
      { id: 6, summary: "fancy text 6", client: "company 6", date: "date 6", links: ["l1"]},
    ]);

    return { projects };
  },
};
</script>
