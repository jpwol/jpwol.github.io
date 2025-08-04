<template>
  <nav class="bg-none text-white p-4 flex">
    <div class="text-xl font-bold pr-5">My Website</div>

    <div class="relative" ref="menuWrapper">
      <button class=" px-4 py-2 rounded hover:bg-gray-700" @click="toggleDropdown">
        Menu
      </button>

      <transition name="fade-slide">
        <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
          <router-link to="/" class="block px-4 py-2 hover:bg-gray-100">Home</router-link>
          <router-link to="/about" class="block px-4 py-2 hover:bg-gray-100">About</router-link>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dropdownOpen = ref(false)
const menuWrapper = ref(null)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const handleClickOutside = (event) => {
  if (
    dropdownOpen.value &&
    menuWrapper.value &&
    !menuWrapper.value.contains(event.target)
  ) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
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
