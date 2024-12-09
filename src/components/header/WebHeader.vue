<template>
  <header id="headerImg" class="d-flex">
    <div class="w-100">
      <navigation-bar></navigation-bar>
    </div>
    <div
      class="d-flex align-items-center justify-content-center w-100"
      style="height: 320px"
    >
      <div class="display-1 fw-bold" style="color: rgb(231, 126, 35)">
        Pizza Order
      </div>
    </div>
  </header>
</template>

<script setup>
import NavigationBar from "../header/NavigationBar.vue";
</script>

<style scoped>
#headerImg {
  background-image: url("../../assets/images/hero.png");
  min-height: 100vh;
  min-width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
}
</style>
