<template>
    <div class="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 class="text-xl font-semibold text-center mb-4">Edit User</h2>
        <form>
          <div class="mb-4">
            <label for="username" class="block text-left text-sm font-medium text-gray-600">Username:</label>
            <input v-model="formData.username" type="text" id="username" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-left text-sm font-medium text-gray-600">Email:</label>
            <input v-model="formData.email" type="email" id="email" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-left text-sm font-medium text-gray-600">Password:</label>
            <input v-model="formData.password" type="password" id="password" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4 flex">
            <div class="mr-10">
              <label class="block text-sm font-medium text-gray-600 text-left">Role:</label>
            </div>
            <div class="flex space-x-4">
              <label class="flex items-center">
                <input type="radio" v-model="formData.role" value="user" class="form-radio" /> User
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.role" value="manager" class="form-radio" /> Manager
              </label>
            </div>
          </div>
        </form>
        <button @click="submitFormBtn" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">Update</button>
        <button @click="$emit('closePopUp')" class="bg-gray-500 mt-5 text-white py-2 px-4 rounded hover:bg-gray-600 w-full">Close</button>
        <!-- {{userData2}}; -->
      </div>
    </div>
</template>
<script setup>
import { ref, defineEmits} from 'vue';
const formData = ref({
    username: '', 
    email: '',
    password: '',
    role: ''
})
const emit = defineEmits(['userData']);
const submitFormBtn =()=>{
    console.log("form data is ==>", formData.value);
    emit('userData', formData.value);

}
</script>