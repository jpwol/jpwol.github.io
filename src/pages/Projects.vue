<template>
  <div class="relative lg:top-20 lg:left-[50%] flex flex-col text-white">
    <transition-group
      name="project"
      tag="div"
      appear
      class="space-y-4 lg:w-[45%] mx-2"
    >
      <div
        v-for="(project, i) in projects"
        :key="project.slug"
        class="project-link"
        :style="{ transitionDelay: `${i * 50}ms` }"
      >
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
    </transition-group>
  </div>

  <router-view />
</template>

<script setup>
import projects from "../projects.js";
</script>

<style scoped>
.project-link {
  display: block;
  padding: 1rem;
  border: 3px solid var(--color-bg-dark);
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
  border-color: var(--color-border);
  transform: translateX(-2px);
}

.project-enter-active,
.project-leave-active {
  transition: all 0.5s ease;
}

.project-enter-from {
  opacity: 1;
  transform: translateX(400px);
}

.project-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
