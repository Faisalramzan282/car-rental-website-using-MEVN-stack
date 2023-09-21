<template>
  <div class="dark:bg-gray-900">
    <NavBar />
    <router-view></router-view>
    <template v-if="route.path === '/home-mang'">
      <SliderHome />
    </template>
    <FooterMang />
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import NavBar from './NavBar.vue';
import FooterMang from './FooterMang.vue';
import SliderHome from './SliderHome.vue';
const route = useRoute();

</script>