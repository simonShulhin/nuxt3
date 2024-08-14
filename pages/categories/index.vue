<script setup lang="ts">
import { getCategoriesUrl, type Category } from '~/data/categories'

const { data: categories } = useFetch<Category[]>(getCategoriesUrl())
</script>

<template>
  <div>
    <h1>Categories</h1>
    <div>
      <CategoryLink v-for="category in categories" :key="category.id" class="category" :category="category" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .category {
    padding-block: 10px;
  }
</style>
