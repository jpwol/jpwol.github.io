<template>
  <nav
    class="lg:fixed top-0 w-full z-50 bg-none text-white p-4 flex justify-between items-around"
  >
    <div class="text-xl font-bold pr-5 text-t-orange">
      {{ pageTitle }}
    </div>

    <div class="flex space-x-6">
      <router-link to="/" class="navItem">[ Home ]</router-link>
      <router-link to="/projects" class="navItem">[ Projects ]</router-link>
      <router-link to="/blog" class="navItem">[ Blog ]</router-link>
      <router-link to="/contact" class="navItem">[ Contact ]</router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageTitle = computed(() => route.meta.title);
</script>

<style scoped>
.navItem {
  color: var(--color-t-cyan);
  font-weight: bold;

  transition:
    transform 0.2s ease,
    color 0.2s ease;
}

.navItem:hover {
  color: var(--color-t-lightgreen);
  transform: translateX(-2px);
}

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
