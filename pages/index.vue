<script setup lang="ts">
import { getPostsUrl, type Post } from "~/data/posts";

const counter = ref("");
const input = ref("");

const counterLength = computed(() => counter.value.length);
const getCounterLength = () => {
  console.log("counter length", counter.value);

  return counter.value.length;
};

const { data: posts, error } = await useFetch<Post[]>(getPostsUrl());

const { data: pokemon } = await useFetch("/api/dittso");
</script>

<template>
  <div v-if="!error">
    <h1>Nuxt js</h1>
    <!-- <ul>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </ul> -->
    <input type="text" v-model="input" />
    <input type="text" v-model="counter" />
    <p>{{ counterLength }}</p>

    <ul v-if="pokemon">
      <li>
        <img :src="pokemon.sprite" alt="pokemon" />
      </li>
      <li>{{ pokemon.id }}: {{ pokemon.name }}</li>
    </ul>
  </div>
  <div v-else>
    <pre>{{ error }}</pre>
  </div>
</template>
