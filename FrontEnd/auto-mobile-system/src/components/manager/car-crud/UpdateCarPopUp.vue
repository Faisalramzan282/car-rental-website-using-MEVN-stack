<template>
    <div class="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 class="text-xl font-semibold text-center mb-4">Update Car</h2>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-left text-sm font-medium text-gray-600">Name</label>
            <input v-model="carData.name" type="text" id="name" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4">
            <label for="model" class="block text-left text-sm font-medium text-gray-600">Model</label>
            <input v-model="carData.model" type="text" id="model" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4">
            <label for="colour" class="block text-left text-sm font-medium text-gray-600">Colour</label>
            <input v-model="carData.colour" type="text" id="colour" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4 flex">
            <div class="mr-10">
              <label class="block text-sm font-medium text-gray-600 text-left">Availability</label>
            </div>
            <div class="flex space-x-4">
              <label class="flex items-center">
                <input type="radio" v-model="carData.availability" value="available" class="form-radio" /> available
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="carData.availability" value="not available" class="form-radio" /> Not available
              </label>
            </div>
          </div>
        </form>
        <button @click="updateCarBtn" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">Update</button>
        <button @click="$emit('closePopUp')" class="bg-gray-500 mt-5 text-white py-2 px-4 rounded hover:bg-gray-600 w-full">Close</button>

      </div>
    </div>
</template>
<script setup>
import { ref, defineEmits} from 'vue';
const carData = ref({
    name: '', 
    model: '',
    colour: '',
    availability: ''
})
const emit = defineEmits(['carData']);
const updateCarBtn =()=>{
    console.log("form data is ==>", carData.value);
    emit('carData', carData.value);

}
</script>