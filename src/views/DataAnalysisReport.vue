<template>
    <div id="container" :style="{ backgroundImage: 'url(' + require('../assets/pitch.jpg') + ')'}">


      <div class="jumbotron" style="background-color: transparent;padding:40px;margin: 0;">
        <h1 class="display-4">Euro 2024 data snapshot</h1>
        <hr class="my-4">
        <p class="lead">
          This data snapshot shows a small segment of data that shows how the Spanish national team overcame a low block and in comparison why and how England struggled 
          to do that during the tournament. The sample is data from Spain vs Georgia and England vs Slovenia, courtesy of StatsBomb.
        </p>
    </div>

    <div class="jumbotron">
      <div class="row">
          <div class="col-sm" style="padding: 50px;">
            <h1 class="display-4">England's low block struggles</h1><br />
            England consistently struggled to overcome a low block. It could be observed that England never really troubled Slovenia as all play was in front
            of the Slovenia back 4 and often in front of the midfield 4 too. There was a lack of movement and none of the England players stretching the Slovenia 
            back line making it easy for Slovenia to defend against. The graphic shows a single pass from the first half and 1 from the second half. Each graphic is consistent 
            for numerous passes in both halves.
          </div>
          <div class="col-sm">
              <img src="../assets/EngPass.png" width="100%" height="auto"/>
          </div>

      </div>  

      
      <p class="lead">
      </p>
    </div>

    <div class="jumbotron" style="background-color: #F2F2F2; color: #38404B;">
      <div class="row">
          <div class="col-sm" style="padding: 50px;">
            <h1 class="display-4">Data summary of England positioning</h1>
                The graphic shows the percentage of time England players were positioned in those cells when other English players had the ball in the highlighted section.
                It shows that England did have men in forward positions but had a much higher percentage of men level or behind the ball. This may back up accusations that 
                England were a little cautious especially against teams positioned in a low block.
          </div>
          <div class="col-sm">
              <img src="../assets/englandsummary.png" width="100%" height="auto"/>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

    <div class="jumbotron">
      <div class="row">
          <div class="col-sm" style="padding: 50px;">
            <h1 class="display-4">No such trouble for Spain</h1>
                Georgia had been exremely resolut and solid through the tournament which troubled other teams.
                Spain's answer to this was to tie up their 3 centre backs with the striker and 2 attacaking midfielders positioned narrow with wingers and/or full backs both wide leaving the Georgian full backs 
                with lots of space to cover and often an overload where the 3 narrow Georgian midfielders struggled to get out to help. This not only emptied the area around Georgians tight midfield 3 but 
                also allowed quick movement and opportunities to play between the Georigan outside centre backs and full backs. 
                The 2 graphics are typical of player positions when passes are made 
                inside the Georigan half during the match.
          </div>
          <div class="col-sm">
              <img src="../assets/SpainPass.png" width="100%" height="auto"/>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

    <div class="jumbotron" style="background-color: #F2F2F2; color: #38404B;">
      <div class="row">
          <div class="col-sm" style="padding: 50px;">
            <h1 class="display-4">Spanish bravery</h1>
                Although Spain were hit on the break against Georgia and went a goal behind they stuck to their plan. They didn't panic and continued to advance men forward 
                to get back into the game and eventually overwhelm Georgia. They were brave with and without the ball and got their deserved rewards. <br />
                The graphic shows the percentage of time Spain players were positioned in those cells when other Spainsh players had the ball in the highlighted section.
                You can see from the graphic that they continued to push men forward and make it extremely difficult for Georgia to defend against.
          </div>
          <div class="col-sm">
              <img src="../assets/spainsummary.png" width="100%" height="auto"/>
          </div>
      </div>  

      
      <p class="lead">
      </p>
    </div>

    <div class="jumbotron" style="margin-bottom: 0px;padding-bottom:10px">
      <div class="row">
          <div class="col-sm" style="padding: 50px;">
            <h1 class="display-4">Summary</h1>
                Data analysis is mostly used to back up observations. In this case the data analysis backs up observations made about both Spain and England. 
                Whilst being brave and pushing men forward were not the only reasons that Spain eased past Georgia it did play part in that performance.
                Simlarly for England, being cautious and having more men behind the ball was not the only reason England struggled to break down teams but 
                was enough to get to the final. A final statistic shows that from the above data summaries Spain had men in advanced positions of the ball 414% 
                of the time which was almost as many as England had behind the ball (425%) when in organised attack.
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
}

.col-sm {
  padding:20px;
  text-align: left;
}

</style>
<script>
export default ({
    name: 'DataAnalysisReportPage',
})
</script>