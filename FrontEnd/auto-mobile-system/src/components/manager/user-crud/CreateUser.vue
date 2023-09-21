<template>
    <div class="my-10 flex items-center justify-center">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4">User Registration Form</h2>
        <div>
        <ol>
          <li class="text-red-400 text-left" v-for="error in validationError" :key="error.index">{{ error }}</li>
        </ol>
       </div> 
        <form>
          <div class="mb-4 ">
            <label for="username" class="text-left block text-sm font-medium text-gray-600">Username:</label>
            <input v-model="formData.username" type="text" id="username" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4">
            <label for="email" class="text-left block text-sm font-medium text-gray-600">Email:</label>
            <input v-model="formData.email" type="email" id="email" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4">
            <label for="password" class="text-left block text-sm font-medium text-gray-600">Password:</label>
            <input v-model="formData.password" type="password" id="password" class="mt-1 p-2 w-full border rounded" required />
          </div>
          <div class="mb-4 flex">
            <div class="mr-10">
                <label class="text-left block text-sm font-medium text-gray-600">Role:</label>
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
        <button @click="submitFormBtn" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">Create</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  const formData = ref({
    username: '',
    email: '',
    password: '',
    role: '', 
  });
  const store = useStore();
  const router = useRouter();
let validationError = ref(null);
const submitFormBtn = async () => {
    await store.dispatch('user/registerUser', formData.value);
    const res = store.getters['user/signUpValError'];
    if(res === null)  //means no error 
    {
       alert("Create Successful")
       router.push({name: 'home-mang'});
    }
  validationError.value = res;
  setTimeout(() => {
    validationError.value = null
  }, 5000)
  };
</script>
  