<template>
  <div>
    <NavBarUser />
    <template v-if="route.path === '/'">
        <HomePageBody  />
    </template>
    <router-view></router-view>
    <FooterMang />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import FooterMang from "../manager/FooterMang.vue";
import HomePageBody from "./HomePageBody.vue";
import NavBarUser from "./NavBarUser.vue";
const route = useRoute();
</script>