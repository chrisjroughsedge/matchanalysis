<template>
    <div class="about">
      <h1>This data</h1>
      <p>Loading content from the API: hello {{ message }}</p>

      <!-- <v-stage ref="stage" :config="stageSize">
        <v-layer ref="layer">
          <v-text v-for="item in lst" :config="item" :key="item.text"></v-text>
        </v-layer>
        
      </v-stage> -->

    </div>
    <div id="container">
      <li v-for="item in lst">
          {{ item.text }}
      </li>
    </div>
  </template>

<script>



const width = window.innerWidth;
const height = window.innerHeight;
export default ({
    name: 'ReportsPage',
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