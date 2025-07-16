<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
  >
    <div class="aspect-video bg-gray-200 dark:bg-gray-700 relative">
      <img
        v-if="project.data.heroImage"
        :src="project.data.heroImage"
        :alt="project.data.title"
        class="w-full h-full object-cover"
        @error="handleImageError"
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
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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

      <div class="flex gap-2">
        <a
          :href="`/portfolio/${project.slug}`"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium"
        >
          {{ showCaseStudyLink ? "View Case Study" : "View Project" }}
        </a>
        <a
          v-if="project.data.liveUrl"
          :href="project.data.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 font-medium"
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
</template>

<script setup lang="ts">
import type { CollectionEntry } from "astro:content";

interface Props {
  project: CollectionEntry<"portfolio">;
  showCaseStudyLink?: boolean;
}

const { project, showCaseStudyLink = true } = defineProps<Props>();

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.style.display = "none";
};
</script>

<style scoped>
/* Component-specific styles */
</style>
