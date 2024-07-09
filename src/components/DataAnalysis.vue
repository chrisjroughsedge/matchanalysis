<template>
    <div id="container">


      <div class="jumbotron" style="background-color: white; color: #38404B;">
        <h1 class="display-4">Data Analysis</h1>
        <p class="lead">
          Gaining game winning insight using data analysis to gain a competitive edge. Taking StatsBomb, Wyscout, GPS and custom generated data to analyse player performance and areas for improvement
          during games and training. Analysing opposition data to pinpoint their strengths and weaknesses. Generating data in grass roots football to make data more accessible outside the football leagues.
        </p>

        <hr class="my-4">
        <!-- <p>Below is a small smaple of some of the reports created during the season 2023/2024.</p> -->
    </div>

    <div class="jumbotron">
      <div class="row">
          <div class="col-sm" style="margin-left: 50px; margin-top: 20px;">
            <h1 class="display-4">Advanced data <br />analysis</h1>
            Meaningful analysis of StatsBomb, WyScout event data, GPS tracking data and custom data. Combine event data and GPS tracking data to gain competitive edge.
          </div>
          <div class="col-sm">
              <img src="../assets/data_sample.png" width="798" height="462"/>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

    <div class="jumbotron" style="background-color: #F2F2F2; color: #38404B">
      <div class="row">
          <div class="col-sm" style="margin-left: 50px; margin-top: 20px;">
            <h1 class="display-4">Custom player<br />tracking</h1>
              Custom tracking software to track player movements and ball position through game clips. Enabling accurate data capture for analysis. 
          </div>
          <div class="col-sm">
              <img src="../assets/tracking.png" width="708" height="296"/>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

    <div class="jumbotron">
      <div class="row">
          <div class="col-sm" style="margin-left: 50px; margin-top: 20px;">
            <h1 class="display-4">Data analysis report <br />snapshot</h1>
            Small sample report from 2022 World cup
          </div>
          <div class="col-sm">
              <a class="btn btn-primary btn-lg" target="_blank" href="https://docs.google.com/presentation/d/12QC4PqUgynXJUOsmOrgazC4eovsA2_Ba/edit?usp=sharing&ouid=113336286407718545312&rtpof=true&sd=true"><img src="../assets/pass-data.png" width="627" height="302"/></a>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

      <!-- <div class="jumbotron" style="background-color: gray; opacity: 0.8" >
      <h1 class="display-4">Data Analysis</h1>
      <p class="lead">
        
      </p>
      <hr class="my-4">
      
      <p class="lead">
        <a class="btn btn-primary btn-lg" target="_blank" href="https://docs.google.com/presentation/d/12QC4PqUgynXJUOsmOrgazC4eovsA2_Ba/edit?usp=sharing&ouid=113336286407718545312&rtpof=true&sd=true" role="button" style="padding:20px;margin:3%;">Sample data report</a>
      </p>
    </div> -->
    </div>
  


    <!-- <div class="about">
      <h1>This data</h1>
      <p>Loading content from the API: hello {{ message }}</p> -->

      <!-- <v-stage ref="stage" :config="stageSize">
        <v-layer ref="layer">
          <v-text v-for="item in lst" :config="item" :key="item.text"></v-text>
        </v-layer>
        
      </v-stage> -->

    <!-- </div> -->
    <!-- <div id="container">
      <li v-for="item in lst">
          {{ item.text }}
      </li>
    </div> -->
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

</style>

<script>
const width = window.innerWidth;
const height = window.innerHeight;
export default ({
    name: 'DataAnalysisPage',
    props: {
      msg: String
    },
    data() {
      return {
        lst: [],
        message: "Hello",
        stageSize: {
          width: width,
          height: height
        }
      }
    },
    async mounted() {
      const list = await (await fetch("/api/match-analysis-api")).json();
      console.log(list)
      this.lst = list
    }
    
})
</script>