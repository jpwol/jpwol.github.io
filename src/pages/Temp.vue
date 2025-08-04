<template>
  <header class="fixed top-20 left-10 text-white">
    <h1 class="text-[50px]">Hello Trinity...</h1>
    <h2 class="text-[30px]">Can I take you to dinner? 🌹</h2>

    <div>
      <button class="clickme" @click="openLink">Maybe here?</button>
    </div>
  </header>
</template>

<script setup>
const openLink = () => {
  window.open('https://github.com/jpwol', '_blank')
}
</script>

<style>
@keyframes bounce {
  0% {
    transform: translateY(20px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(20px);
  }
}

.clickme {
  display: inline-block;
  transform: translateY(20px);
  font-size: 20px;
  /* transition: all 0.3s ease-in-out; */

  &:hover {
    animation: bounce 0.5s ease-in-out;
    padding: 0 10px 0 10px;
    background-color: pink;
    color: red;
    border-radius: 20px;
    box-shadow: 3px 10px 0 0 red;
  }
}
</style>
