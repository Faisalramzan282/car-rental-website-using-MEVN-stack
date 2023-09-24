<template>
    <div class="p-8 mx-auto">
      <h2 class="text-2xl font-semibold mb-4 text-white">Cars List</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="text-left py-2 px-4 text-white">Name</th>
              <th class="text-left py-2 px-4 text-white">Model</th>
              <th class="text-left py-2 px-4 text-white">Colour</th>
              <th class="text-left py-2 px-4 text-white">Availability</th>
            </tr>
          </thead>
          <tbody>
             <tr v-for="(car, index) in allCars.value" :key="index" >
              <td class="py-2 px-4 text-left text-white">{{ car.name }}</td>
              <td class="text-left py-2 px-4 text-white">{{ car.model }}</td>
              <td class="text-left py-2 px-4 text-white">{{ car.colour }}</td>
              <td class="text-left py-2 px-4 text-white">{{ car.availability }}</td>
              <td class="mr-auto "> 
               <button @click="updateCarBtn(car)" class="bg-blue-500 text-white py-3 px-5 rounded hover:bg-blue-600 mr-5">Update</button>
                <UpdateCarPopUp v-show="showUpdatePopUp"   @carData="UpdateCarHandler"   @closePopUp="showUpdatePopUp=false" />
                <button @click="deleteBtn(car)" class="bg-red-500 text-white py-3 px-5 rounded hover:bg-red-600">Delete</button>
                <DeleteConfirmPopUp  v-show="showDelConfirm" @confirmDelete="onConfirmDeleteHandler" @cancelDelete="showDelConfirm=false"/> 
               </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
 <script setup>
import {onMounted, ref, computed} from 'vue';
import DeleteConfirmPopUp from '@/components/DeleteConfirmPopUp.vue';
import UpdateCarPopUp from './UpdateCarPopUp.vue';
import  {useStore} from 'vuex';
const store = useStore();
const allCars = ref(null);
const showDelConfirm = ref(false);
const showUpdatePopUp = ref(false);
const carToDelete  = ref(null);
const carToUpdate = ref(null);
 allCars.value = computed(()=> store.getters['car/getAllCars'])
onMounted(async () => {
   try {
     await store.dispatch('car/getCars');
    //  allCars.value = store.getters['car/getAllCars'];
   }catch (error) {
     console.error('Error fetching cars:', error);
   }
 });
const deleteBtn=(car)=>{
    showDelConfirm.value = true;
    carToDelete.value = car;
}
const onConfirmDeleteHandler = async ()=>{
    await store.dispatch('car/deleteCar', carToDelete.value);
    // await store.dispatch('car/getCars');
    // allCars.value = store.getters['car/getAllCars'];
    showDelConfirm.value = false;
}
const updateCarBtn =(car)=>{
  showUpdatePopUp.value = true;
  carToUpdate.value = car;
  console.log(car)
}
const UpdateCarHandler=async (value)=>{
   const payload = {
    ...value,
    _id: carToUpdate.value._id
   }
   await store.dispatch('car/updateCar', payload)
   showUpdatePopUp.value = false;
   
  }
 </script>