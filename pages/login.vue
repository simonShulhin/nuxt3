<script setup lang="ts">
definePageMeta({
  layout: false,
});

const auth = useCookie("app-auth");

// console.log(auth.value);

function authenticate() {
  auth.value = "hello";
}
</script>

<template>
  <h1>Login</h1>
  <button @click="authenticate">Log in</button>
  <button @click="auth = undefined">Log out</button>
</template>
