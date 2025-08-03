<template>
  <div class="shadow" :style="{
    left: mouseX + 'px',
    top: mouseY + 'px',
  }" />
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
