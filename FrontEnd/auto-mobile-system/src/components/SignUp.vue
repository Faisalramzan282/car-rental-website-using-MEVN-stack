<template>
     <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-96">
      <!-- loader  -->
        <LoaderComp v-show="!validationError && showLoader"/>
      <h2 class="text-2xl font-semibold mb-4 bg-red">SignUp</h2>
      <div>
        <ol>
          <li class="text-red-400 text-left" v-for="error in validationError" :key="error.index">{{ error }}</li>
        </ol>
      </div> 
      <div class="mb-4">
          <input
            type="text"
            v-model="formData.username"
            required
            class="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-400"
            placeholder="Enter your username"
          />
        </div>
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
          class="bg-slate-600 w-full text-white py-2 px-4 rounded hover:bg-slate-500 focus:outline-none "
          @click="signUpFormBtn"
          :disabled="showLoader"
        >
          Register
        </button>
        </div>
        <div class="mb-6">
          <button
          class="bg-slate-600 w-full text-white py-2 px-4 rounded hover:bg-slate-500 focus:outline-none "
          @click="loginBtn"
        >
          Login
        </button>
        </div>
       
    </div>
  </div> 

</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import LoaderComp from './LoaderCom.vue';
const store = useStore();
const router = useRouter();
const formData = ref({
  username: '',
  email: '',
  password: '',
  role: 'user'
})
const showLoader = ref(false);
let validationError = ref(null);
const signUpFormBtn = async()=>{
    showLoader.value = true;
    await store.dispatch('user/registerUser', formData.value);
    const res = store.getters['user/signUpValError'];
    console.log("response is ==>", res);
    if(res === null)  //means no error 
    {
       alert("Sign Up Successful")
       router.push({name: 'login'});
    }
  validationError.value = res;
  setTimeout(() => {
    validationError.value = null
  }, 5000)
  showLoader.value = false; //again reset the loader
}

const loginBtn = () => {
  router.push("/login");
};
</script>  
