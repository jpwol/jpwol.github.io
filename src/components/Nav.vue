<template>
  <nav
    class="lg:fixed top-0 w-full z-50 bg-none text-white p-4 flex justify-between items-around"
  >
    <div class="text-xl font-bold pr-5">{{ pageTitle }}</div>

    <div class="flex space-x-6">
      <router-link to="/" class="hover:underline">Home</router-link>
      <router-link to="/projects" class="hover:underline">Projects</router-link>
      <!-- <router-link to="/temp" class="hover:underline">For You</router-link> -->
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageTitle = computed(() => route.meta.title);
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
