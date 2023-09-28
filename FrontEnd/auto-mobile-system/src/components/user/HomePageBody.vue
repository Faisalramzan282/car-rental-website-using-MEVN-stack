<template>
     <div class="bg-gray-800 p-6 rounded-lg shadow-lg" >
      <img
        src="../../assets/car-user-home1.png"
        alt="car home"
        class="mx-auto mb-4"
      />
      <p class="text-white text-center">
        Whether you're looking for a car for a weekend getaway, a business trip,
        or a family vacation, [your company name] has the perfect car for you.
        We offer a wide selection of cars to choose from, including economy
        cars, SUVs, minivans, and luxury cars. Our cars are clean,
        well-maintained, and fully insured. We also offer a variety of
        convenient features, such as airport pickup and drop-off, and roadside
        assistance.
      </p>
      <div class="flex justify-center mt-4">
        <button @click="$router.push({name: 'reserve-car'})"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mx-2 rounded">
          Reserve a Car
        </button>
        <button @click="$router.push({name: 'car-available' })"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mx-2 rounded">
          Check Car Availability
        </button>
      </div>
    </div>
</template>
<script setup>
</script>