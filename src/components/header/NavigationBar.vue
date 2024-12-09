<template>
  <nav class="navbar navbar-expand-lg bg-none py-3">
    <div class="container">
      <div>
        <img src="../../assets/images/logo.svg" alt="" />
      </div>
      <navigation-menu></navigation-menu>
      <signup-menu></signup-menu>
    </div>
  </nav>
</template>

<script setup>
import NavigationMenu from "../header/NavigationMenu.vue";
import SignupMenu from "../header/SignupMenu.vue"
</script>
