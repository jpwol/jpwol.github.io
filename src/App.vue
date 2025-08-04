<template>
  <div>
    <CursorShadow />
    <Nav />
    <router-view />
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import CursorShadow from './components/CursorShadow.vue'
</script>
