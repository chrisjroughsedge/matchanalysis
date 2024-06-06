<template>
    <div class="about">
      <h1>This is a {{ msg }} page</h1>
    </div>
    <div id="container">
    </div>
  </template>
  
<script>
export default ({
    name: 'ReportsPage',
    props: {
      msg: String
    },})
</script>