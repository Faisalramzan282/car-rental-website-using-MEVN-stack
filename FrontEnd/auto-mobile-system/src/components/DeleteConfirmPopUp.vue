<template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div class="bg-white p-4 rounded shadow-md">
        <p>Are you sure you want to delete?</p>
        <div class="flex justify-end m-4">
          <button @click="$emit('confirmDelete')" class="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mr-2">Yes</button>
          <button @click="$emit('cancelDelete')" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">No</button>
        </div>
      </div>
    </div>
  </template>
<script setup>

  </script>
  