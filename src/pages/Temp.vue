<template>
  <div class="p-10 text-white text-center space-y-6">
    <transition name="fade-slide">
      <h1 v-if="showHello" class="text-5xl font-bold">still miss you</h1>
    </transition>

    <transition name="fade">
      <button v-if="showPrompt" @click="handleContinue" class="text-xl text-sky-300 hover:text-white transition">
        Click to Continue
      </button>
    </transition>

    <transition name="fade-slide">
      <div v-if="showNext" class="space-y-4">
        <h2 class="text-3xl text-gray-300">skinamawho?</h2>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showHello = ref(false);
const showPrompt = ref(false);
const showPrompt2 = ref(false);
const showNext = ref(false);
const showNext2 = ref(false);
const showNext3 = ref(false);

onMounted(() => {
  setTimeout(() => (showHello.value = true), 500);
  setTimeout(() => (showPrompt.value = true), 1300);
});

function handleContinue() {
  showPrompt.value = false;
  setTimeout(() => {
    showNext.value = true;
  }, 500);

  setTimeout(() => {
    showPrompt2.value = true;
  }, 1200);
}

function handleContinue2() {
  showPrompt2.value = false;
  setTimeout(() => {
    showNext2.value = true;
  }, 500);
  setTimeout(() => {
    showNext3.value = true;
  }, 1500);
}
</script>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.6s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
