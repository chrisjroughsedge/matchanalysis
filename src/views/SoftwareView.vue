<template>
    <div id="container" :style="{ backgroundImage: 'url(' + require('../assets/pitch.jpg') + ')'}">


      <div class="jumbotron" style="background-color: transparent;padding:40px;margin: 0;">
        <h1 class="display-4">Software</h1>
        <p class="lead">
          Custom built software to gain the competitive edge. Creating code windows inline with playing objectives, capturing clips to be re-played to the team and creating data 
          to be used for analysis using a combination of manual and top AI platforms.
        </p>

        <hr class="my-4">
        <!-- <p>Below is a small smaple of some of the reports created during the season 2023/2024.</p> -->
    </div>

    <div class="jumbotron">
      <div class="row">
          <div class="col-sm" style="margin-left: 50px; margin-top: 20px;">
            <h1 class="display-4">Code your games<br />and training sessions</h1>
            Create a code window, upload your game or training session and code in line with your club philosophies.
          </div>
          <div class="col-sm">
              <img src="../assets/code_window.png" width="681" height="268"/>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

    <div class="jumbotron" style="background-color: #F2F2F2; color: #38404B; margin-left:40px;margin-right:200px">
      <div class="row">
          <div class="col-sm" style="margin-left: 50px; margin-top: 20px;">
            <h1 class="display-4">Capture videos and <br />game events</h1>
              Capture snippets of video to analyse further whilst also recording game events that can be used to create data driven reports. 
          </div>
          <div class="col-sm">
              <img src="../assets/data_flow.png" width="785" height="382"/>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

    <div class="jumbotron" style="margin-bottom: 0px;padding-bottom:10px">
      <div class="row">
          <div class="col-sm" style="margin-left: 50px; margin-top: 20px;">
            <h1 class="display-4">Transform data <br />capture</h1>
                Use the data captured from the code window and provide meaninigul insight on player and team performance.
          </div>
          <div class="col-sm">
              <img src="../assets/software-3.png" width="810" height="413"/>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

    </div>

  </template>
<style scoped>
img {
    border-radius: 15px;
}
a, a:hover {
  background-color: transparent;border-color: transparent;
  
}
.jumbotron {
  background-color: #38404B; 
  border-radius: 25px;
  color: #F2F2F2;
  margin: 40px;
  margin-left:200px
}

.col-sm {
  padding:20px;
  text-align: left;
}

</style>

<script>
export default ({
    name: 'SoftwarPage',
})
</script>