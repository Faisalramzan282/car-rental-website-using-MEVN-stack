<template>
  <div class="m-5">
    <div class="bg-white md:mx-auto rounded-md shadow-md md:w-1/2 w-full p-5 md:m-8 md:p-8">
    <div class="flex items-center">
        <p class="py-4 text-start">First select car through car Filters Section if Not selected</p>
        <button @click="$router.push({name: 'car-filter'})" class="p-3 m-4 text-white rounded-md cursor-pointer bg-indigo-500 hover:bg-indigo-300">Click here</button>
    </div>
        <div class="flex flex-col  mb-4">
        <label class="text-start mb-2" for="pick-up-offices">Pick-up Office:</label>
        <select v-model="reservationData.pickUpLoc" id="pick-up-offices" class="focus:outline-none focus:border-blue-500 border border-gray-300 px-4 py-2 rounded-md">
            <option disabled selected>Select Location</option>
            <option>Lahore</option>
            <option>Karachi</option>
            <option>Islamabad</option>
        </select>
    </div>
    <div class="flex flex-col mb-4">
        <label class="text-start mb-2" for="drop-off-office">Drop-off Office:</label>
        <select v-model="reservationData.dropOffLoc" id="drop-off-office" class="focus:outline-none focus:border-blue-500 border border-gray-300 px-4 py-2 rounded-md">
            <option disabled selected>Select Location</option>
            <option>Lahore</option>
            <option>Karachi</option>
            <option>Islamabad</option>
        </select>
    </div>
    <div class="flex flex-col mb-4">
        <label class="text-start mb-2" for="pick-up-date">Pick-up Date:</label>
        <input v-model="reservationData.pickUpDate" class="focus:outline-none focus:border-blue-500 border border-gray-300 px-4 py-2 rounded-md" type="date" id="pick-up-date" name="pick-up-date">
    </div>
    <div class="flex flex-col mb-4 ">
        <label class="text-start mb-2"  for="drop-off-date">Drop-off Date:</label>
        <input v-model="reservationData.dropOffDate" class="focus:outline-none focus:border-blue-500 border border-gray-300 px-4 py-2 rounded-md" type="date" id="drop-off-date" name="drop-off-date">
    </div>
    <div class="flex flex-col">
        <button  v-if="reservationData.pickUpLoc && reservationData.dropOffLoc && reservationData.pickUpDate && reservationData.dropOffDate"
        @click="confirmResBtn"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
        Confirm Reservation
        </button>
    </div>
</div>
  </div>
</template>
<script setup>
import store from '@/store';
import {ref} from 'vue';
const reservationData= ref({
   pickUpLoc: '', 
   dropOffLoc: '',
   pickUpDate: '',
   dropOffDate: ''
});
const confirmResBtn=()=>{
    try {
    const pickUpDate = new Date(reservationData.value.pickUpDate);
    const dropOffDate = new Date(reservationData.value.dropOffDate);    
    const timeDifference = dropOffDate - pickUpDate;
    const noOfDays = timeDifference / (1000 * 60 * 60 * 24);
    let userCarObj = JSON.parse(localStorage.getItem('userCarObj'));
    let reservationCart= {
        ...reservationData.value, //pickup, drop-off date, loc etc
       daysForRent: noOfDays,
       userId: userCarObj.userId,  //userId
       carId: userCarObj.carId    //carId
    }
    store.dispatch('userFunctionalities/reserveCar', reservationCart)
    localStorage.setItem('userCarObj', null);
    } catch (error) {
        alert("First Reserve A car through filter Cars section");
    }
}
</script>