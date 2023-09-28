<template>
   <div class="slider bg-gray-800 text-white py-4">
    <div class="container mx-auto text-center md:flex md:justify-between">
      <div class="slider-container overflow-hidden w-full  ">
        <div class="slider-inner flex" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div
            v-for="(image, index) in sliderImages"
            :key="index"
            class="slider-item w-full  flex-shrink-0 md:mr-4"
          >
            <div class="h-96 md:h-screen overflow-hidden">
              <img
                :src="require(`@/assets/${image}`)"
                :alt="'Car Image ' + (index + 1)"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { ref, reactive, onMounted } from 'vue';
  
  export default {
    setup() {
      const currentIndex = ref(0);
      const sliderImages = reactive([
        'car-img1.jpg',
        'car-img2.jpg',
        'car-img3.jpg',
      ]);
      const autoSlide = () => {
        setInterval(() => {
          currentIndex.value = (currentIndex.value + 1) % sliderImages.length;
        }, 5000);
      };
  
      onMounted(() => {
        autoSlide();
      });
  
      return {
        currentIndex,
        sliderImages,
      };
    },
  };
  </script>