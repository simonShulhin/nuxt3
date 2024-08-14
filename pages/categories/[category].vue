<script setup lang="ts">
import { getCategoryDetailsUrl, type CategoryDetails } from '~/data/categories'
const postSlug = useRoute().params.category.toString()
const { data: categoryDetails } = await useFetch<CategoryDetails>(getCategoryDetailsUrl(postSlug))

definePageMeta({ layout: 'breadcrumbs' })

</script>

<template>
  <main>
    <template v-if="categoryDetails">
      <ul>
        <PostCard v-for="post in categoryDetails.posts" :key="post.id" :post="post" />
      </ul>
    </template>
  </main>
</template>
