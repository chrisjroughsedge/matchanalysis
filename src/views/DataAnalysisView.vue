<template>
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <DataAnalysis msg="Data Analysis"/>
    </div>
  </template>
  
  <script>
  // const imgUrl = new URL('./assets/logo.png', import.meta.url).href
  // @ is an alias to /src
  import DataAnalysis from '@/components/DataAnalysis.vue'
  export default {
    name: 'DataAnalysisView',
    components: {
      DataAnalysis
    },
  }
  </script>