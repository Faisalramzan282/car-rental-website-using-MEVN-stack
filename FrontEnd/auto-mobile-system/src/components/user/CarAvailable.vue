<template>
 <div class="container mx-auto p-4">
       <LoaderComp v-show="showLoader"/>     
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div v-for="(car, index) in allCars.value" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:shadow-xl card">
            <img src="../../assets/car-img.png" alt="car-img" class="w-full h-40 object-cover object-center rounded-t-lg">
            <div class="p-4">
                <h2 class="text-xl font-semibold mb-2 text-gray-800">{{ car.name }}</h2>
                <p class="text-sm text-gray-600 mb-2">Model: {{ car.model }}</p>
                <p class="text-sm text-gray-600 mb-2">Color: {{ car.colour }}</p>
                <p class="text-sm text-gray-600 mb-2 availability animate-bounce transition-all duration-300 ease-in-out">Availability: {{ car.availability }}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import LoaderComp from '../manager/LoaderComp.vue';
const store = useStore();
const allCars = ref(null);
const showLoader = ref(false);
allCars.value = computed(()=>store?.getters['userFunctionalities/getAllAvailableCars'])
onMounted(async ()=>{
  try {
    showLoader.value = true;
    await store.dispatch('userFunctionalities/getAvailableCars');
    showLoader.value = false;
  }catch (error) {
    console.error('Error fetching users:', error);
  }
})
</script>