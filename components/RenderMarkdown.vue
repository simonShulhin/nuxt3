<script setup lang="ts">
import VueMarkdown from "vue-markdown-render";
import "highlight.js/styles/obsidian.css";

const { source } = defineProps<{ source: string }>();
</script>

<template>
  <VueMarkdown :source="source" />
</template>

<style lang="scss">
@use "@/assets/styles/colors.scss";

pre {
  margin: 15px 0px;
  padding: 10px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
}

pre code {
  font-size: 12pt;
  line-height: 16pt;
}

p {
  font-size: 14pt;
  line-height: 20pt;
  margin-bottom: 10px;
}

p > code {
  color: colors.$pink;
}
</style>
