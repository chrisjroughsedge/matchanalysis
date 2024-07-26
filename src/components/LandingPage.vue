<template>
  <div id="container" :style="{ backgroundImage: 'url(' + require('../assets/pitch.jpg') + ')'}">
    <div class="jumbotron" style="background-color: transparent;padding:40px;margin: 0;">
      <h1 class="display-4" style="padding-top: 50px;">Match analysis</h1>
      <hr class="my-4">
      <p class="lead" style="padding-bottom: 50px;">
        Football and match analysis comprises of lots of different areas of analysis. I have been conducting analysis in all forms over the last 3 years, more 
        prominantly in data and opposition analysis.
      </p>
    </div>
    
      <div class="jumbotron" style="background-color: #F2F2F2; color: #38404B">
        <div class="row">
            <div class="col-sm-4" style="padding:50px">
              <h1 class="display-4">Data analysis</h1>
            </div>
            <div class="col-sm-6" style="padding:50px">
                Data is captured in lots of different ways from different football platforms. GPS data is now captured along with event data. I have been 
                working primarily with StatsBomb data but have also used Wyscout data and GPS data. The issue with data commonly available at the moment 
                is that there is no context so a pass completed doesn't mean a lot without the context. This is where combining GPS and event data comes in handy. Not just
                that but using my own custom build data capture tools I can also capture the context of any given event without access to that platform owned data.
            </div>
        </div>  
        <p class="lead">
        </p>
      </div>

      <div class="jumbotron">
      <div class="row">
          <div class="col-sm-6" style="padding: 50px;">
              Opposition and team analysis is increasingly more important in todays game. The ability to scrutinise opposition teams providing strengths and
              weaknesses to the coaching staff can be the difference between winning and losing. I have been providing reports over the last 3 years for clubs 
              in the MLS, EFL2, EFL1 and more recently in the National League. 
          </div>
          <div class="col-sm-4">
            <h1 class="display-4" style="padding:50px">Opposition and team analysis</h1>
          </div>
      </div>  
      <p class="lead">
      </p>
    </div>


    <div class="jumbotron" style="background-color: #F2F2F2; color: #38404B;margin-bottom: 0px;padding-bottom:10px">
        <div class="row">
            <div class="col-sm-4" style="padding:50px">
              <h1 class="display-4">Contact us</h1>
            </div>
            <div class="col-sm-6" style="padding:50px">
              If you would like to contact us and talk about our analysis to see what we can offer then please feel free to email us at
              any time and we will get straight back to you.<br />
              Email: <a href="mailto:chrisjr.analyst@gmail.com">chrisjr.analyst@gmail.com</a>
            </div>
        </div>  
        <p class="lead">
        </p>
      </div>



   
    
</div>
</template>
<style scoped>
  .jumbotron {
  background-color: #38404B; 
  border-radius: 25px;
  color: #F2F2F2;
  margin: 40px;
}
</style>

