<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
        >
          Recent Blog Posts
        </h2>
        <p
          class="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
        >
          Latest thoughts and insights from my development journey.
        </p>
      </div>
      <div class="mt-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="post in posts"
            :key="post.slug"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="p-6">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
              >
                {{ post.data.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ post.data.description }}
              </p>
              <div
                class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4"
              >
                <time :datetime="post.data.pubDate.toISOString()">
                  {{ formatDate(post.data.pubDate) }}
                </time>
                <span class="mx-2">·</span>
                <span>5 min read</span>
              </div>
              <a
                :href="`/blog/${post.slug}`"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 text-center">
          <a
            href="/blog"
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CollectionEntry } from "astro:content";

interface Props {
  posts: CollectionEntry<"blog">[];
}

const { posts } = defineProps<Props>();

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>

<style scoped>
/* Component-specific styles */
</style>
