<template>
<div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #38404B;padding: 20px;margin:0px">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" style="color:#F2F2F2">Match analysis</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/data-analysis" class="nav-link" style="color:#F2F2F2">Data Analysis</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/reporting" class="nav-link" style="color:#F2F2F2">Reports</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/software" class="nav-link" style="color:#F2F2F2">Software</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/aboutme" class="nav-link" style="color:#F2F2F2">About me</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

<div>
<router-view />


<footer class="d-flex flex-wrap justify-content-between align-items-center" style="background-color: #38404B; margin:0px;padding:10px">
    <p class="col-md-4 mb-0">© 2024 </p>


    <!-- <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-light">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul> -->
  </footer>  

</div>
</div>

</template>
<style scoped>
.container-fluid {
  width: 100%; padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;}
</style>
