<template>
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <ReportsPage msg="Reports"/>
    </div>
  </template>
  <!-- https://docs.google.com/presentation/d/12QC4PqUgynXJUOsmOrgazC4eovsA2_Ba/edit?usp=sharing&ouid=113336286407718545312&rtpof=true&sd=true -->
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