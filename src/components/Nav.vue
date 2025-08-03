<template>
  <nav class="bg-none text-white p-4 flex">
    <div class="text-xl font-bold pr-5">My Website</div>

    <div class="relative" ref="menuWrapper">
      <button class=" px-4 py-2 rounded hover:bg-gray-700" @click="toggleDropdown">
        Menu
      </button>

      <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Home</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">About</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Contact</a>
      </div>
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
