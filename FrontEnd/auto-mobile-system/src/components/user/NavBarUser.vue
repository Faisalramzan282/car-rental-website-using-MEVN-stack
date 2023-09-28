<template>
    <div class="dark:bg-gray-900 ">
      <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <router-link to="/" class="flex items-center cursor-pointer">
            <img
              src="../../assets/car-deal.png"
              class="h-8 mr-3 rounded-lg"
              alt="Flowbite Logo"
            />
          </router-link>
          <div
            class="relative inline-block text-left"
            @mouseleave="userDropMenu = false"
          > 
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
                  :to="{ name: 'car-available' }"
                  class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                  role="menuitem"
                  >Car availability</router-link
                >
                <router-link
                  @mouseover="carDropMenu = true"
                  :to="{ name: 'car-filter' }"
                  class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                  role="menuitem"
                  >Filter Cars</router-link
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
                  :to="{ name: 'reserve-car' }"
                  class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                  role="menuitem"
                  >Reserve a car</router-link
                >
                <router-link
                  @mouseover="reservationDropMenu = true"
                  :to="{ name: 'reserve-cancel' }"
                  class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600"
                  role="menuitem"
                  >Reserve Cancellation</router-link
                >
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
  import { ref } from "vue";
  import router from "@/router";
  const userDropMenu = ref(false);
  const carDropMenu = ref(false);
  const reservationDropMenu = ref(false);
  const logoutBtn=()=>{
  localStorage.removeItem('userLoginData');
   router.push({name: 'login'});
  }
  </script>
  