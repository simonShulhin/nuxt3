<script setup lang="ts">
import { getPostDetailsUrl, type PostDetails } from '~/data/posts'

const postSlug = useRoute().params.post.toString()

const { data: post } = await useFetch<PostDetails>(getPostDetailsUrl(postSlug))
</script>

<template>
  <main>
    <template v-if="post">
      <h1>{{ post.title }} <CategoryLink :category="post.category" /></h1>
      <RenderMarkdown :source="post.content" />
    </template>
  </main>
</template>
