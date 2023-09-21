<template>
   <div class="p-8 mx-auto">
     <h2 class="text-2xl font-semibold mb-4 text-white">User List</h2>
     <div class="overflow-x-auto">
       <table class="min-w-full">
         <thead>
           <tr>
             <th class="text-left py-2 px-4 text-white">Username</th>
             <th class="text-left py-2 px-4 text-white">Email</th>
             <th class="text-left py-2 px-4 text-white">Role</th>
             <th></th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="(user, index) in allUsers" :key="index" >
             <td class="py-2 px-4 text-left text-white">{{ user.username }}</td>
             <td class="text-left py-2 px-4 text-white">{{ user.email }}</td>
             <td class="text-left py-2 px-4 text-white">{{ user.role }}</td>
             <td class="mr-auto ">
               <button @click="updateUser(user)" class="bg-blue-500 text-white py-3 px-5 rounded hover:bg-blue-600 mr-5">Update</button>
               <UpdateDelUser v-show="showUpdatePopUp" @userData="updateUserData" @closePopUp="showUpdatePopUp=false" :userToUpdate="userToUpdate"/>
               <button @click="onConfirmDelete(user)" class="bg-red-500 text-white py-3 px-5 rounded hover:bg-red-600">Delete</button>
               <DeleteConfirmPopUp  v-show="showDelConfirm" @confirmDelete="onConfirmDeleteHandler" @cancelDelete="showDelConfirm=false" :userToDelete="userToDelete"/>
             </td>
           </tr>
         </tbody>
       </table>
     </div>
   </div>
 </template>
<script setup>
import DeleteConfirmPopUp from '@/components/DeleteConfirmPopUp.vue';
import UpdateDelUser from './UpdateUserPopUp.vue';
import {onMounted, ref, provide, defineProps} from 'vue';
import { useStore } from 'vuex';
const showDelConfirm = ref(false);
const showUpdatePopUp = ref(false);
const userToDelete = ref(null); 
const userToUpdate = ref(null);
let allUsers = ref([]);
const store = useStore();
const props = defineProps({
  userToDelete: {
    type: Object,
    required: true,
  },
});
provide('userData', props.userToDelete);
onMounted(async () => {
  try {
    await store.dispatch('user/getUsers');
   allUsers.value = store.getters['user/getAllUsers'];
  }catch (error) {
    console.error('Error fetching users:', error);
  }
});
const onConfirmDelete= (user)=>{
   showDelConfirm .value = true;
   userToDelete.value = user
}
const onConfirmDeleteHandler= async()=>{
   await store.dispatch('user/deleteUser', userToDelete.value._id);
   await store.dispatch('user/getUsers');
   allUsers.value = store.getters['user/getAllUsers'];
   showDelConfirm .value = false;
   alert(`username: ${userToDelete.value.username} deleted`)
}
const updateUser=(user)=>{
  userToUpdate.value = user;
  showUpdatePopUp.value = true;

}
const updateUserData= async (value)=>{
  value = {
    ...value,
    id: userToUpdate.value._id
  }
  await store.dispatch('user/updateUser', value);
  await store.dispatch('user/getUsers');
  allUsers.value = store.getters['user/getAllUsers'];
  showUpdatePopUp.value = false;
}
</script>