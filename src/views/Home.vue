<template>
  <div class="min-h-screen w-full flex flex-col items-center bg-white text-gray-800">
    <!-- Hero Section -->
    <div
      class="min-h-[500px] w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-12 max-w-6xl mx-auto">
      <!-- Right Content (Photo) - Ditaruh duluan untuk HP -->
      <div class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div class="w-48 h-48 rounded-full overflow-hidden">
          <img src="../../assets/beach-anime-self.png" alt="Foto Muhammad Yafi Akmal"
            class="w-full h-full object-cover">
        </div>
      </div>

      <!-- Left Content -->
      <div class="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h1 class="text-4xl font-bold">Muhammad Yafi Akmal</h1>
        <h3 class="text-xl text-red-500 font-bold">Interest in BackEnd Web Developer</h3>
        <h3 class="text-l text-gray-600 italic">
          Undergraduate student in Telkom University Purwokerto. Accustomed to working independently and collaboratively
          with structured teams. Experienced with basic concepts of programming languages such as Javascript,
          Typescript, Lua, C++, and Golang. Familiar with OOP concepts in Typescript or Javascript.
        </h3>
        <div class="flex justify-center md:justify-start space-x-4">
          <a href="https://github.com/Yafiakmal" class="text-gray-800 hover:text-blue-800">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammadyafiakmal" class="text-blue-600 hover:text-black">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>


    <!-- Projects Section -->
    <div class="w-full bg-gray-900 text-white py-12 px-6">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-semibold mb-8 md:mb-2 text-center">Projects</h1>
        <code><h4 class="hidden md:block text-lg text-white/50 text-center mb-8">SHIFT hold + scroll</h4></code>

        <!-- Carousel Container -->
        <div class="relative">
          <div class="flex space-x-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-1">
            <ProjectCard v-for="(project, i) in projects" :key="i" :imagePath="project.imagePath" :title="project.title"
              :description="project.description" :link="project.link" class="snap-start shrink-0 w-[90%] sm:w-[60%] md:w-1/3" />
          </div>

          <!-- Optional: Dot navigation placeholder -->
          <div class="flex justify-center mt-4 space-x-2">
            <span class="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span class="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span class="w-2 h-2 bg-white rounded-full opacity-50"></span>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>


<script setup>

import ProjectCard from '../components/ProjectCard.vue';
import projects from '../projects.json'
</script>
