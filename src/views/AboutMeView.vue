<template>
<div id="container" :style="{ backgroundImage: 'url(' + require('../assets/pitch.jpg') + ')'}">

  <div class="jumbotron" style="background-color: transparent; color: #F2F2F2;padding:40px;margin: 0;" >
      <h1 class="display-4">About me</h1>
      <p class="lead">
        My skills and achievements
      </p>
      <hr class="my-4">
      
      <p class="lead">

      </p>
    </div>

<div class="row" style="padding-left: 20px;padding-right: 20px;">
  <div class="col-sm" >
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">PFSA Qualifications</h5>
        <p class="card-text">
          <ul class="list-group" >
            <li class="list-group-item">Level 1 PFSA Technical scout</li>
            <li class="list-group-item">Level 1 PFSA Data Analyst</li>
            <li class="list-group-item">Level 2 PFSA Performance Analyst</li>
            <li class="list-group-item">Level 2 PFSA Opposition Analyst</li>
          </ul>
        </p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">FC Barcelona</h5>
        <p class="card-text">
          <ul class="list-group">
            <li class="list-group-item">Tactical analysis diploma</li>
            <li class="list-group-item">Set Piece analysis</li>
            <li class="list-group-item">Opposition analysis</li>
            <li class="list-group-item">Self analysis</li>
            <li class="list-group-item">Creating coaching sessions inline with coaching philosophies, opposition analysis and data analysis.</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">English FA</h5>
        <p class="card-text">
          <ul class="list-group">
            <li class="list-group-item">Introduction to First Aid in Football (IFAiF)</li>
            <li class="list-group-item">Safeguarding Children Course</li>
            <li class="list-group-item">Introduction to coaching football</li>
          </ul>
        </p>
      </div>
    </div>
  </div>

  <div class="col-sm">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Player &amp; coach</h5>
        <p class="card-text">
          <ul class="list-group">
            <li class="list-group-item">Youth player in Crewe Alexandra academy</li>
            <li class="list-group-item">Youth player for England</li>
            <li class="list-group-item">Youth player for Cheshire</li>
            <li class="list-group-item">Managed and coached youth and adult teams</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</div>

<div class="row" style="padding-left: 20px;padding-right: 20px;padding-top: 30px;">
  <div class="col-sm">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Data analysis</h5>
        <p class="card-text">
          <ul class="list-group">
            <li class="list-group-item">Experience with StatsBomb and Wyscout data</li>
            <li class="list-group-item">Data analysis of GPS data</li>
            <li class="list-group-item">Combining GPS data with event data</li>
            <li class="list-group-item">Event data creation</li>
          </ul>
        </p>
        <router-link to="/data-analysis" class="btn btn-primary">View sample data report</router-link>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Reporting</h5>
        <p class="card-text">
          <ul class="list-group">
            <li class="list-group-item">Opposition analyst reports for EFL1</li>
            <li class="list-group-item">Opposition analyst reports for EFL2</li>
            <li class="list-group-item">Opposition analyst reports for National League clubs</li>
            <li class="list-group-item">Opposition analyst reports for MLS</li>
          </ul>
        </p>
        <router-link to="/reporting" class="btn btn-primary">View sample reports</router-link>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Software</h5>
        <p class="card-text">
          <ul class="list-group">
            <li class="list-group-item">Bespoke code window creation</li>
            <li class="list-group-item">Recording events</li>
            <li class="list-group-item">Using AI for player tracking</li>
            <li class="list-group-item">Opposition analyst reports for MLS</li>
          </ul>
        </p>
        <router-link to="/software" class="btn btn-primary">View software</router-link>
      </div>
    </div>
  </div>

</div> 

</div>  


</template>
<style scoped>
.card{
  background-color: transparent;
  border: transparent;
}
.card-body {
  color:#38404B
}
.list-group {
  background-color: transparent;
}
.list-group-item {
  background-color: transparent;
  border: transparent;
  color: #38404B
}
.col-sm {
  border-radius: 25px;
  background-color: #F2F2F2;
  margin: 20px;
}
</style>
