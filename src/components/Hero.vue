<script setup lang="ts">
// No need for baseUrl anymore since we're using absolute paths
</script>

<template>
  <section
    class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span class="text-yellow-300">Jim</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          A passionate developer creating beautiful and functional web
          applications with modern technologies.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/portfolio"
            class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            View My Work
          </a>
          <a
            href="/contact"
            class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Component-specific styles */
</style>
