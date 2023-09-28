<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-96">
              <!-- loader  -->
              <LoaderComp v-show="!validationError && showLoader"/>
        <h2 class="text-2xl font-semibold mb-4 p-2">Login</h2>
        <div v-show="validationError != null">
          <li class="text-red-400 text-left" >{{ validationError }}</li>
       </div> 
        <form @submit.prevent="loginFormBtn">
          <div class="mb-4">
            <input
              type="email"
              v-model="formData.email"
              required
              class="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              v-model="formData.password"
              required
              class="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <div class="mb-4">
            <button
            type="submit"
            class="bg-blue-500 w-full text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            :disabled="showLoader">
            Login
          </button>
          </div>
           <div>
            <button
            @click="$router.push({name: 'sign-up'})"
            class="bg-blue-500 w-full text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Sign Up
          </button>
           </div>
        </form>
      </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import LoaderComp from "./LoaderCom.vue";
const store = useStore();
const formData = ref({
  email: '',
  password: ''
})
const showLoader= ref(false);
let validationError = ref(null);
const loginFormBtn = async ()=>{
  showLoader.value = true;
  await store.dispatch("user/authenticateUser", formData.value);
  const res = store.getters['user/loginValErrors'];
  validationError.value = res;
    setTimeout(()=>{
      validationError.value = null
    }, 5000)
    showLoader.value = false;
}
</script>