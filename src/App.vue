<template>
  <div>
    <!-- <CursorShadow /> -->
    <Nav v-if="showNavbar" />
    <router-view />
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
// import CursorShadow from "./components/CursorShadow.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const showNavbar = computed(() => route.path != "/");
</script>
