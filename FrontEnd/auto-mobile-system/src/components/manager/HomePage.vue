<template>
  <div class="dark:bg-gray-900 min-h-screen flex flex-col">
    <NavBar />
    <router-view></router-view>
    <template v-if="route.path === '/home-mang'">
      <SliderHome />
    </template>
    <footer class="mt-auto">
    <FooterMang />
  </footer>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import NavBar from './NavBar.vue';
import FooterMang from './FooterMang.vue';
import SliderHome from './SliderHome.vue';
const route = useRoute();
</script>