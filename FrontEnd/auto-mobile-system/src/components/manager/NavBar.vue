<template>
  <div class="dark:bg-gray-900 ">
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="/home-mang" class="flex items-center">
          <img
            src="../../assets/car-deal.png"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
        </a>
        <div
          class="relative inline-block text-left"
          @mouseleave="userDropMenu = false"
        >
          <button
            @mouseover="userDropMenu = true"
            class="text-gray-200 hover:text-white font-medium focus:outline-none"
          >
            User
          </button>
          <div
            v-if="userDropMenu"
            @mouseover="userDropMenu = true"
            @mouseleave="userDropMenu = false"
            class="absolute w-44 rounded-md shadow-lg bg-gray-800 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-700 dark:divide-gray-600 z-[100]"
          >
            <div
              @mouseover="userDropMenu = true"
              class="py-1 text-white"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
        
              <router-link
                @mouseover="userDropMenu = true"
                to="/home-mang/create-user"
                class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                role="menuitem"
                >Create User</router-link
              >
              <router-link
                @mouseover="userDropMenu = true"
                to="/home-mang/update-del-users"
                class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                role="menuitem"
                >Update and Delete User</router-link
              >
            </div>
          </div>
        </div>
        <!-- Car Menu -->
        <div
          class="relative inline-block text-left"
          @mouseleave="carDropMenu = false"
        >
          <button
            @mouseover="carDropMenu = true"
            class="text-gray-200 hover:text-white font-medium focus:outline-none"         >
            Cars
          </button>
          <div
            v-if="carDropMenu"
            @mouseover="carDropMenu = true"
            @mouseleave="carDropMenu = false"
            class="absolute  w-44 rounded-md shadow-lg bg-gray-800 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-700 dark:divide-gray-600 z-[100]"
          >
            <div
              @mouseover="carDropMenu = true"
              class="py-1 text-white"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <router-link
                @mouseover="carDropMenu = true"
                to="/home-mang/add-car"
                class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                role="menuitem"
                >Add Car</router-link
              >
              <router-link
                @mouseover="carDropMenu = true"
                to="/home-mang/update-del-car"
                class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                role="menuitem"
                >Update and Delete Car</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="relative inline-block text-left"
          @mouseleave="reservationDropMenu = false"
        >
          <button
            @mouseover="reservationDropMenu = true"
            class="text-gray-200 hover:text-white font-medium focus:outline-none"
          >
            Reservation
          </button>
          <div
            v-if="reservationDropMenu"
            @mouseover="reservationDropMenu = true"
            @mouseleave="reservationDropMenu = false"
            class="absolute right-0 w-44 rounded-md shadow-lg bg-gray-800 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-700 dark:divide-gray-600 z-[100]"
          >
            <div
              @mouseover="reservationDropMenu = true"
              class="py-1 text-white"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <router-link
                @mouseover="reservationDropMenu = true"
                to="/home-mang/reserve-cars"
                class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                role="menuitem"
                >Reserve Cars</router-link
              >
              <router-link
                @mouseover="reservationDropMenu = true"
                to="/home-mang/users-reserve-car"
                class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                role="menuitem"
                >Users who Reserved cars </router-link>
              
            </div>
          </div>
        </div>
        <div>
          <button class="text-white" @click="logoutBtn">Logout</button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import router from "@/router";
import { ref } from "vue";
const userDropMenu = ref(false);
const carDropMenu = ref(false);
const reservationDropMenu = ref(false);
const logoutBtn=()=>{
  localStorage.removeItem('managerDetail');
  router.push({name: 'unauthorize'});
}
</script>