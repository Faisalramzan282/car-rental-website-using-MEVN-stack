<template>
  <div class="min-h-screen flex flex-col">
    <NavBarUser />
    <template v-if="route.path === '/'">
        <HomePageBody  />
    </template>
    <router-view></router-view>
    <footer class="mt-auto">
      <FooterMang />
    </footer>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import FooterMang from "../manager/FooterMang.vue";
import HomePageBody from "./HomePageBody.vue";
import NavBarUser from "./NavBarUser.vue";
const route = useRoute();
</script>