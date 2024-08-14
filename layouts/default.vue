<template>
  <div class="layout">
    <nav class="nav">
      <NuxtLink class="link" to="/" :class="{ current: $route.path === '/' }"> Home </NuxtLink>
      <NuxtLink class="link" to="/categories" :class="{ current: $route.path === '/categories' }"> Categories </NuxtLink>
      <NuxtLink class="link" to="/login" :class="{ current: $route.path === '/login' }"> Log in </NuxtLink>
    </nav>
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/colors.scss";

.layout {
  width: 620px;
  margin: 0px auto 50px;
}

.nav {
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;

  .link {
    color: colors.$green-medium;
    display: inline-block;
    font-size: 14pt;
    margin-right: 20px;
  }

  .link.current {
    color: colors.$green-light;
    pointer-events: none;
    text-decoration: underline;
  }
}
</style>
