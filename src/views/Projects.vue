<template>
    <div class="w-full h-full bg-gray-100 text-white py-12 px-6">
        <div class="max-w-6xl mx-auto">
            <h1 class="text-3xl font-semibold mb-8 text-gray-900">Projects</h1>
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard imagePath="/path/to/image" title="Project 1" description="lorem ipsum" />
                <ProjectCard imagePath="/path/to/image" title="Project 2" description="lorem ipsum" />
                <ProjectCard imagePath="/path/to/image" title="Project 3" description="lorem ipsum" />
                <ProjectCard imagePath="/path/to/image" title="Project 4" description="lorem ipsum" />
                <ProjectCard imagePath="/path/to/image" title="Project 5" description="lorem ipsum" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue';
</script>

<style scoped></style>