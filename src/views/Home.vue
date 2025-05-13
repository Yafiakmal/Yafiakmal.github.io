<template>
  <div class="min-h-screen w-full flex flex-col items-center bg-white text-gray-800">
    <!-- Hero Section -->
    <div class="h-[500px] w-full flex flex-col md:flex-row justify-between items-center px-20 py-12 max-w-6xl">
      <!-- Left Content -->
      <div class="md:w-1/2 space-y-4">
        <h1 class="text-4xl font-bold">Muhammad Yafi Akmal</h1>
        <h3 class="text-xl text-red-500 font-bold">Interest in BackEnd Web Developer</h3>
        <h3 class="text-l text-gray-600 italic">Undergraduate student in Telkom University Purwokerto. accustomed to working independently and collaboratively with structured teams. Experienced with basic concepts of programming languages such as Javascript, Typescript, lua, C++ and Golang. and familiar with OOP concepts in Typescript or Javascript</h3>
        <div class="flex space-x-4">
          <a href="https://github.com/Yafiakmal" class="text-gray-800 hover:text-blue-800"><i
              class="fab fa-github fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/muhammadyafiakmal" class="text-blue-600 hover:text-black"><i
              class="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>

      <!-- Right Content (Photo) -->
      <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div class="w-48 h-48 rounded-full overflow-hidden">
          <img src="../../assets/beach-anime-self.png" alt="Foto Muhammad Yafi Akmal"
            class="w-full h-full object-cover">
        </div>
      </div>

    </div>

    <!-- Projects Section -->
    <div class="h-[500px] w-full bg-gray-900 text-white py-12 px-25">
      <div class="max-w-6xl mx-auto ">
        <h1 class="text-3xl font-semibold mb-8 text-center">Projects</h1>

        <!-- Horizontal Scroll Container -->
        <div class="relative">
          <div class="flex space-x-6 overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory">
            <ProjectCard v-for="(project, i) in projects" :key="i" :imagePath="project.imagePath" :title="project.title"
              :description="project.description" class="snap-start shrink-0 w-80" />
          </div>

          <!-- Dot Navigation (manual, optional: needs logic to track active index) -->
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
const projects = [
  {
    imagePath: "/path/to/image1.jpg",
    title: "Project 1",
    description: "Deskripsi project 1"
  },
  {
    imagePath: "/path/to/image2.jpg",
    title: "Project 2",
    description: "Deskripsi project 2"
  },
  {
    imagePath: "/path/to/image3.jpg",
    title: "Project 3",
    description: "Deskripsi project 3"
  },
  {
    imagePath: "/path/to/image4.jpg",
    title: "Project 4",
    description: "Deskripsi project 4"
  },
  {
    imagePath: "/path/to/image5.jpg",
    title: "Project 5",
    description: "Deskripsi project 5"
  }
];
</script>
