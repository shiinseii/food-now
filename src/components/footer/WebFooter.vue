<template>
  <footer>
    <div class="container" style="margin-top: 100px">
      <hr />
      <div class="mt-5 mb-4 d-flex justify-content-between p-2">
        <!-- Alt Logo Component -->
        <social-media></social-media>
        
        <!-- navigation component -->
        <navigation-footer></navigation-footer>

        <!-- Contact component -->
        <contact-menu></contact-menu>

        <!-- Location Component -->
        <location-menu></location-menu>
      </div>
      <hr>
      <!-- Copyright Component -->
      <copyright-menu></copyright-menu>
    </div>
  </footer>
</template>

<script setup>

import SocialMedia from "../footer/SocialMedia.vue"
import NavigationFooter from "./NavigationFooter.vue";
import ContactMenu from "./ContactMenu.vue";
import LocationMenu from "./LocationMenu.vue";
import CopyrightMenu from "./CopyrightMenu.vue";

</script>

