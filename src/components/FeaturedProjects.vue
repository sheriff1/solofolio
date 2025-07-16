<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
        >
          Featured Projects
        </h2>
        <p
          class="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
        >
          Some of my best work showcasing different technologies and approaches.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
          :show-case-study-link="true"
        />
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
import type { CollectionEntry } from "astro:content";
import ProjectCard from "./ProjectCard.vue";

interface Props {
  projects?: CollectionEntry<"portfolio">[];
}

const { projects = [] } = defineProps<Props>();
</script>

<style scoped>
/* Component-specific styles */
</style>
