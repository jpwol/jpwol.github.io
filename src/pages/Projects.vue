<template>
  <div
    class="relative top-15 w-full flex flex-col items-start space-y-4 space-x-10 text-white"
  >
    <div v-for="project in projects" :key="project.slug" class="project-link">
      <router-link :to="`/projects/${project.slug}`">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </router-link>
    </div>
  </div>

  <router-view />
</template>

<script setup>
import projects from "../projects.js";
</script>

<style scoped>
.project-link {
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #666;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  transition:
    background-color 0.2s,
    transform 0.2s;
}
.project-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
</style>
