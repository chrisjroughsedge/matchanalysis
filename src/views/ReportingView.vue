<template>
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <ReportsPage msg="Reports"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ReportsPage from '@/components/ReportsPage.vue'
  
  export default {
    name: 'ReportingView',
    components: {
      ReportsPage
    },
  }
  </script>