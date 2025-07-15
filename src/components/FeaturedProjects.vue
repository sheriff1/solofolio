<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Featured Projects
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Some of my best work showcasing different technologies and approaches.
        </p>
      </div>
      
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.slug"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="aspect-video bg-gray-200 dark:bg-gray-700 relative">
            <img
              v-if="project.data.heroImage"
              :src="project.data.heroImage"
              :alt="project.data.title"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-full flex items-center justify-center text-gray-400"
            >
              <svg
                class="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              {{ project.data.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.data.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.data.technologies"
                :key="tech"
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-4">
              <a
                v-if="project.data.liveUrl"
                :href="project.data.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium"
              >
                Live Demo
              </a>
              <a
                v-if="project.data.githubUrl"
                :href="project.data.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a
          href="/portfolio"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          View All Projects
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PortfolioProject {
  slug: string;
  data: {
    title: string;
    description: string;
    heroImage?: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
  };
}

interface Props {
  projects?: PortfolioProject[];
}

const { projects = [] } = defineProps<Props>();
</script>

<style scoped>
/* Component-specific styles */
</style>
