<template>
  <section class="py-16 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
        >
          About Me
        </h2>
        <p
          class="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
        >
          I'm a passionate developer who loves creating beautiful and functional
          web applications.
        </p>
      </div>
      <div class="mt-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="flex justify-center">
              <div class="bg-blue-100 dark:bg-blue-900 rounded-full p-3">
                <svg
                  class="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Development
            </h3>
            <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
              Full-stack development with modern technologies and best
              practices.
            </p>
          </div>
          <div class="text-center">
            <div class="flex justify-center">
              <div class="bg-green-100 dark:bg-green-900 rounded-full p-3">
                <svg
                  class="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Design
            </h3>
            <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
              User-centered design with a focus on accessibility and usability.
            </p>
          </div>
          <div class="text-center">
            <div class="flex justify-center">
              <div class="bg-purple-100 dark:bg-purple-900 rounded-full p-3">
                <svg
                  class="h-8 w-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Performance
            </h3>
            <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
              Optimized applications that load fast and provide great user
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props needed for this static component
</script>

<style scoped>
/* Component-specific styles */
</style>
