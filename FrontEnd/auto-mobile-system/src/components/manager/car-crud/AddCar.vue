<template>
    <div class="my-10 flex items-center justify-center">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4">Add Car For Rent</h2>
        <div>
        <ol>
          <li class="text-red-400 text-left" v-for="error in validationError" :key="error.index">{{ error }}</li>
        </ol>
       </div> 
        <form>
          <div class="mb-4 ">
            <label for="name" class="text-left block text-sm font-medium text-gray-600">Name</label>
            <input v-model="carData.name" type="text" id="name" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4">
            <label for="model" class="text-left block text-sm font-medium text-gray-600">Model</label>
            <input v-model="carData.model" type="text" id="model" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4">
            <label for="colour" class="text-left block text-sm font-medium text-gray-600">Colour</label>
            <input v-model="carData.colour" type="text" id="colour" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4 flex">
            <div class="mr-10">
                <label class="text-left block text-sm font-medium text-gray-600">Availability:</label>
            </div>
            <div class="flex space-x-4">
              <label class="flex items-center">
                <input type="radio" v-model="carData.availability" value="available" class="form-radio" /> Available
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="carData.availability" value="not available" class="form-radio" /> Not Available
              </label>
            </div>
          </div>
        </form>
        <button @click="addCarBtn" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">Add Car</button>
      </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import {useStore} from 'vuex';
const store = useStore();
const carData = ref({
  name: '',
  model: '',
  colour: '',
  availability: ''
}) 
const addCarBtn= async()=>{
  await store.dispatch('car/addCar', carData.value);
  console.log("car is ==>", carData.value);
}
</script>
  