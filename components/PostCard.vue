<script setup lang="ts">
import { type Post } from '~/data/posts'

const { post } = defineProps<{ post: Post }>()
const isHover = ref(false)
</script>

<template>
  <li class="card" :class="{ hover: isHover }">
    <h2 class="title">
      {{ post.title }}
    </h2>
    <CategoryLink :category="post.category" />
    <RenderMarkdown :source="post.intro" />
    <NuxtLink
      class="more"
      :to="`posts/${post.slug}`"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      More...
    </NuxtLink>
  </li>
</template>

<style scoped lang="scss">
@use "@/assets/styles/colors.scss";

.card {
  padding: 15px 15px 30px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size: 12pt;
  list-style-type: none;
  position: relative;

  .title {
    font-size: 20pt;
  }

  .more {
    color: colors.$green-medium;
    font-size: 12pt;
    padding: 5px 10px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

.card.hover {
  border-color: colors.$green-medium;

  .more,
  .title {
    color: colors.$green-light;
  }
}
</style>
