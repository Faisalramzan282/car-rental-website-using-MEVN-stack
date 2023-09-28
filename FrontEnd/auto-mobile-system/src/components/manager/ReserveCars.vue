<template>
  <div>
    <div v-show="showLoader" class="mb-5">
      <LoaderCom />
    </div>
      <div v-if="reserveCar.value">
        <h1 class="text-2xl font-bold mb-4 text-white">Reservations</h1>
        <div class="sm:w-3/4 mx-auto gap-4 justify-items-center  max-h-96 overflow-y-scroll no-scrollbar">
          <div
            v-for="(item, index) in reserveCar.value"
            :key="index"
            class="sm:w-3/4 mx-auto  bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <p><strong>Username:</strong> {{ item.username }}</p>
            <p><strong>Email:</strong> {{ item.email }}</p>
            <p><strong>Name:</strong> {{ item.name }}</p>
            <p><strong>Model:</strong> {{ item.model }}</p>
            <p><strong>Days for Rent:</strong> {{ item.daysForRent }}</p>
            <p><strong>Pick-Up Date:</strong> {{ item.pickUpDate }}</p>
            <p><strong>Drop-Off Date:</strong> {{ item.dropOffDate }}</p>
            <p><strong>Pick-Up Location:</strong> {{ item.pickUpLoc }}</p>
            <p>
              <strong>Drop-Off Location:</strong> {{ item.dropOffLoc }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center" v-else>
        <h2 class="text-2xl text-white">No reservations yet</h2>
      </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import LoaderCom from "./LoaderComp.vue";
const showLoader = ref(false);
const store = useStore();
const reserveCar = ref(null);
reserveCar.value = computed(() => store.getters["car/showReserveCars"]);
onMounted(async () => {
  showLoader.value = true;
  await store.dispatch("car/getReservedCars");
  showLoader.value = false;
});
</script>