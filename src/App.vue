<template>
  <div>
    <Nav v-if="showNavbar" />
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const showNavbar = computed(() => route.path != "/");
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 400ms ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.page-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.page-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
