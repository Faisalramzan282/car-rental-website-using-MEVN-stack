<template>
 <div>
    <div  v-show="showLoader"  class="mb-5 ">
      <LoaderComp />
   </div>
  <div class="bg-white rounded-lg shadow-md p-4 mb-4">
    <div class="flex justify-around">
      <h2 class="text-lg font-semibold">Username</h2>
      <h2 class="text-lg font-semibold">Email</h2>
      <h2 class="text-lg font-semibold">Role</h2>
    </div>
    <div v-for="user in usersReserveCar.value" :key="user._id" class="flex justify-around	">
      <h2 class="text-lg font-semibold">{{ user.username }}</h2>
      <p class="text-gray-600">{{ user.email }}</p>
      <p class="text-sm text-gray-500">{{ user.role }}</p>
    </div> 
  </div>
 </div>
</template>
<script setup>
import {computed, onMounted, ref} from 'vue';
import { useStore } from 'vuex';
import LoaderComp from './LoaderComp.vue';
const store = useStore();
const usersReserveCar = ref(null);
const showLoader = ref(false);
usersReserveCar.value = computed(()=>store.getters['car/showUsersReserveCar']);
onMounted(async ()=>{
   showLoader.value= true;
   await store.dispatch('car/userReserveCars');
   showLoader.value = false;
})
</script>