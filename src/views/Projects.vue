<template>
    <div class="w-full h-full bg-gray-100 text-white py-12 px-6">
        <div class="max-w-6xl mx-auto">
            <h1 class="text-3xl font-semibold mb-8 text-gray-900">Projects</h1>
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard v-for="(project, i) in projects" :key="i" :imagePath="project.imagePath" :title="project.title"
              :description="project.description"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import projects from '../projects.json'
</script>

<style scoped></style>