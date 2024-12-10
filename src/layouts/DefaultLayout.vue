<!-- src/layouts/DefaultLayout.vue -->
<template>
    <div class="default-layout">
      <Navigation />
        <router-view class="mt-3"></router-view>
    </div>
  </template>
  
  <script>
  import Navigation from '../components/Navigation.vue'
  
  export default {
    name: 'DefaultLayout',
    components: {
      Navigation
    }
  }
  </script>
  
  <style scoped>

  </style>