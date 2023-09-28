<template>
  <div>
    <div class="flex items-center space-x-2 p-10">
      <input
        type="text"
        class="bg-white border border-gray-300 rounded-md py-4 px-6 focus:outline-none w-full"
        placeholder="Search cars by name, model, colour..."
        v-on:input="searchMethod">
    </div>
    <!-- filted-cars -->
    <div v-show="filterCarData">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        <template  v-if="allCars === null || allCars.length === 0">
          <p class="text-white text-3xl">Nothing to filter out</p>
        </template>
        <template v-else>
          <div
            v-for="(car, index) in allCars"
            :key="index"
            class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:shadow-xl card">
            <img
              src="../../assets/car-img.png"
              alt="car-img"
              class="w-full h-40 object-cover object-center rounded-t-lg"/>
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2 text-gray-800">
                {{ car.name }}
              </h2>
              <p class="text-sm text-gray-600 mb-2">Model: {{ car.model }}</p>
              <p class="text-sm text-gray-600 mb-2">Color: {{ car.colour }}</p>
              <p
                class="text-sm text-gray-600 mb-2 availability animate-bounce transition-all duration-300 ease-in-out"
              >
                Availability: {{ car.availability }}
              </p>
              <div>
                <button v-if="car.availability === 'available'" @click="reserveCarBtn(car)"
                class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200">
                    Reserve a car
              </button>
                <button v-else @click="notAvailBtn"
                class="relative z-20 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200" >
                 Not Available
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from "@/router";
import { onMounted, computed, ref} from "vue";
import { useStore } from "vuex";
const store = useStore();
const showReserveCar = ref(false);  
let filterCarData = ref([]);
const allCars = computed(() => store.getters["userFunctionalities/getAllCarss"]);
onMounted(async () => {
  try{
  await store.dispatch("userFunctionalities/getAllCars");
  }catch (error) {
    console.error("Error fetching cars:", error);
  }
});
const searchMethod= async (event)=>{
  // console.log("in local component",event.target.value);
  await store.dispatch('userFunctionalities/getAllCars', event.target.value);
}
const notAvailBtn =()=>{
    alert('car is not available')
}
const reserveCarBtn=(car)=>{
    const userLoginData = JSON.parse(localStorage.getItem('userLoginData')) || null;
    if(userLoginData === null)
    {
        router.push({name: 'login'});
    }
    else{
        const userCarIds ={
            carId: car._id,
            userId: userLoginData.userId
        }
        localStorage.setItem('userCarObj', JSON.stringify(userCarIds));// set userId and carId here  
        showReserveCar.value = true;
        router.push('/reserve-car');
    }
}
</script>