<template>
    <div class="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-200">
      <!-- Image -->
      <div class="h-48 w-full">
        <img
          :src="imagePath"
          alt="my projects image"
          class="object-cover w-full h-full"
        />
      </div>
  
      <!-- Text Content -->
      <div class="p-4 space-y-2">
        <h3 class="text-xl font-semibold text-white">{{ title }}</h3>
        <p class="text-gray-300 text-sm">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    imagePath: String
  })
  </script>
  