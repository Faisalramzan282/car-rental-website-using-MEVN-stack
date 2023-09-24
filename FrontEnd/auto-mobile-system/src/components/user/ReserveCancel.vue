<template>
   <div>
    <p class="text-white text-2xl font-bold mb-4">Reservation Cancel</p>
    <div class="p-5 sm:w-1/2 mx-auto">
      <div v-for="(reservation, index) in allReserveCars.value" :key="index" class="bg-white rounded shadow p-4 mb-4 border border-red">
        <p class="text-gray-800 text-lg font-semibold mb-2">Reservation {{ index + 1 }}</p>
        <div class="flex items-center mb-2">
          <p class="text-gray-600 mr-2">Pick-up Location:</p>
          <p class="text-gray-800">{{ reservation.pickUpLoc }}</p>
        </div>
        <div class="flex items-center mb-2">
          <p class="text-gray-600 mr-2">Drop-off Location:</p>
          <p class="text-gray-800">{{ reservation.dropOffLoc }}</p>
        </div>
        <div class="flex items-center mb-2">
          <p class="text-gray-600 mr-2">Pick-up Date:</p>
          <p class="text-gray-800">{{ reservation.pickUpDate }}</p>
        </div>
        <div class="flex items-center mb-2">
          <p class="text-gray-600 mr-2">Drop-off Date:</p>
          <p class="text-gray-800">{{ reservation.dropOffDate }}</p>
        </div>
        <div class="flex items-center mb-4">
          <p class="text-gray-600 mr-2">Days for Rent:</p>
          <p class="text-gray-800">{{ reservation.daysForRent }}</p>
        </div>
        <button @click="cancelReservationBtn(reservation)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancel Reservation</button>
        <DeleteConfirmation v-show="showDelConfirmPopUp" @confirmDelete="confrimDeleteHandler"  @cancelDelete="showDelConfirmPopUp=false"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed, onMounted, ref} from 'vue';
import DeleteConfirmation  from '../DeleteConfirmPopUp.vue';
import { useStore } from 'vuex';
const store = useStore();
const allReserveCars = ref(null);
const showDelConfirmPopUp = ref(false);
const storeCancelResObj = ref(null);
allReserveCars.value = computed(()=>store.getters['userFunctionalities/getAllReserveCars'])
onMounted(() => {
    store.dispatch('userFunctionalities/getReserveCars');
})
const cancelReservationBtn=(reservation)=>{
    storeCancelResObj.value = reservation;
    showDelConfirmPopUp.value = true;
}
const confrimDeleteHandler= async()=>{
//    console.log("storeCancelResObj==>", storeCancelResObj);
    await store.dispatch('userFunctionalities/cancelReserveCar', storeCancelResObj.value);
   showDelConfirmPopUp.value = false;
}
</script>