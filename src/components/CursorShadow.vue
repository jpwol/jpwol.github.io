<template>
  <div class="cursor_shadow" :style="{
    left: mouseX + 'px',
    top: mouseY + 'px',
  }"></div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
};
</script>

<style scoped>
.cursor_shadow {
  position: fixed;
  width: calc(var(--spacing) * 150);
  height: calc(var(--spacing) * 150);
  background-color: rgba(30, 48, 138, 0.1);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  filter: blur(300px);
  pointer-events: none;
  z-index: -1;
}
</style>
