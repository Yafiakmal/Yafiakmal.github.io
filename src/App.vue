<script setup>

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- HEADER -->
    <header class="bg-gray-900 text-white sticky top-0 z-50">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">MYA</h1>
        <ul class="flex space-x-6">
          <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
          <li><router-link to="/projects" class="hover:text-gray-300">Projects</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- MAIN CONTENT -->
    <main>
      <div class="flex-1 container mx-auto min-w-screen">
        <router-view />
      </div>
    </main>

    <!-- FOOTER -->
    <footer class="bg-gray-100 text-center text-gray-600 text-sm py-4">
      © Muhammad Yafi Akmal 2025
    </footer>
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
