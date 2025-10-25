<template>
  <div
    class="cursor_shadow"
    :style="{
      left: mouseX + 'px',
      top: mouseY + 'px',
    }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);

function handleMouseMove(e) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}
onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
.cursor_shadow {
  position: fixed;
  width: calc(var(--spacing) * 150);
  height: calc(var(--spacing) * 150);
  background-color: rgba(21, 35, 38, 0.1);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: -1;
}
</style>
