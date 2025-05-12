<template>
    <div class="min-h-screen w-full flex flex-col items-center bg-white text-gray-800">
        <!-- Hero Section -->
        <div class="h-[500px] w-full flex flex-col md:flex-row justify-between items-center px-6 py-12 max-w-6xl">
            <!-- Left Content -->
            <div class="md:w-1/2 space-y-4">
                <h1 class="text-4xl font-bold">My Name</h1>
                <h3 class="text-xl text-gray-600 italic">Quotes</h3>
                <div class="flex space-x-4">
                    <a href="#" class="text-blue-600 hover:text-blue-800">logo linkedin</a>
                    <a href="#" class="text-gray-800 hover:text-black">logo github</a>
                </div>
            </div>

            <!-- Right Content (Photo) -->
            <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <div class="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
                    My Photo
                </div>
            </div>
        </div>

        <!-- Projects Section -->
        <div class="w-full bg-gray-900 text-white py-12 px-6">
            <div class="max-w-6xl mx-auto">
                <h1 class="text-3xl font-semibold mb-8">Projects</h1>

                <!-- Horizontal Scroll Container -->
                <div class="relative">
                    <div class="flex space-x-6 overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory">
                        <ProjectCard v-for="(project, i) in projects" :key="i" :imagePath="project.imagePath"
                            :title="project.title" :description="project.description"
                            class="snap-start shrink-0 w-80" />
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

<style scoped></style>