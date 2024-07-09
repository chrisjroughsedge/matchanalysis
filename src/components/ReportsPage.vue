<template>
 
    <div id="container">
      
      <div class="jumbotron" style="background-color: white; color: #38404B;">
        <h1 class="display-4">Reports</h1>
        <p class="lead">
          Over the last few years I have created reports that are specific to the needs of the club for their manager, coaching staff and analysts
          ensuring the right amount of information is displayed to the high standards they expect.
        </p>

        <hr class="my-4">
        <p>Below is a small smaple of some of the reports created during the season 2023/2024.</p>
    </div>

    <div class="jumbotron">
      <div class="row">
          <div class="col-sm" style="margin-left: 50px; margin-top: 20px;">
            <h1 class="display-4">1 game observation <br />report</h1>
            Sample report from 2023/2024 season game from the National league.
          </div>
          <div class="col-sm">
              <a class="btn btn-primary btn-lg" target="_blank" href="https://docs.google.com/document/d/18knKUcbDPyC5lf893VteUKANdMP06yvf/edit?usp=sharing&ouid=113336286407718545312&rtpof=true&sd=true"><img src="../assets/1-image.png" width="564" height="346"/></a>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

    <div class="jumbotron" style="background-color: #F2F2F2; color: #38404B">
      <div class="row">
        <div class="col-sm" style="margin-left: 50px; margin-top: 20px;">
          <h1 class="display-4">3 game observation <br />report</h1>
          Sample report from 2023/2024 season game from EFL2.
        </div>
        <div class="col-sm">
          <a class="btn btn-primary btn-lg" target="_blank" href="https://docs.google.com/presentation/d/11iSU-Tll9QlaM6OCOTfSm9ZqkCGu3-RF/edit?usp=sharing&ouid=113336286407718545312&rtpof=true&sd=true"><img src="../assets/3-image.png" width="625" height="305" /></a>  
        </div>
    </div>
      
      <p class="lead">
      </p>
    </div>
</div> 
  </template>

<style scoped>
a, a:hover {
  background-color: transparent;border-color: transparent;
  
}
.jumbotron {
  background-color: #38404B; 
  border-radius: 25px;
  color: #F2F2F2;
  margin-bottom: 40px;
}

.col-sm {
  padding:20px;
  text-align: left;
}
  /* .cont {
    background-image: url("../assets/trainingpitch.jpg");
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  } */

</style>

<script>
export default ({
    name: 'ReportsPage',
    props: {
      msg: String
    }
    })
</script>