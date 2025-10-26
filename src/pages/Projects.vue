<template>
  <div
    class="relative top-20 left-[50%] w-full flex flex-col items-start space-y-4 space-x-10 text-white"
  >
    <div v-for="project in projects" :key="project.slug" class="project-link">
      <router-link :to="`/projects/${project.slug}`">
        <div class="flex flex-row space-x-3">
          <img
            v-if="project.icon"
            :src="project.icon"
            alt=""
            class="relative top-1 w-6 h-6"
          />
          <h2 class="relative top-1">[ {{ project.name }} ]</h2>
        </div>
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
  width: 45%;
  padding: 1rem;
  border: 3px solid var(--color-border);
  background-color: var(--color-bg-dark);
  color: var(--color-fg);
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.project-link h2 {
  color: var(--color-t-cyan);
  font-weight: bold;
}

.project-link:hover {
  /* background-color: var(--color-border); */
  border-color: var(--color-t-lightgreen);
  transform: translateX(-2px);
}
</style>
