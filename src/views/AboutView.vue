<template>
  <div class="container">
    <div class="row">
     
      <div class="col-sm-8">
        <!-- <video id="myVideo" width="960" height="720" controls> -->
      <video id="myVideo" width="768" height="576" controls>
        <source src="../assets/ShortVid.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      </div>
    <div class="col-sm-4">



      <v-stage ref="stage"
      :config="stageSize"
      @click="handleClick"
    >


      <v-layer ref="layer">

        
    <v-text 
      @click="AddToList"
      :config="{
        text: 'Add new button'
      }" />

        <!-- <v-image :config="{
            image: image,
            x: 150,
            y:150
          }" @click="onclick"/> -->

        <!-- <v-button
        @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          draggable: true
          v-for="item in list"
          :key="item.id"
          :config="item" draggable="true"></v-button> -->


        <!-- <v-circle
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          draggable: true
          v-for="item in list"
          :key="item.id"
          :config="item" draggable="true"></v-circle> -->

          <!-- <v-circle
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          v-for="item in list"
          :key="item.id"
          :config="{
            item,
            x: 50,
            y: 50,
            draggable: true,
            fill: isDragging ? 'green' : 'black'}">
          </v-circle> -->

          <!-- <v-rect
            :config="{
              width: 100,
              height: 50,
              fill: 'red',
              stroke: 'black',
              x: 100,
              y: 100
            }"
          >
          </v-rect> -->

          <v-text
          @click="onclick"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          v-for="item in list"
          :key="item.id"
          :config="{
            id: item.id,
            text: item.text,
            x: item.x,
            y: item.y,
            draggable: true,
            fill: item.fill,
            fontSize:30
          }" />

          <!-- <v-text
          @click="onclick"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          :config="{
            text: 'Draggable Text',
            x: 50,
            y: 50,
            draggable: true,
            fill: isDragging ? 'green' : 'black'
          }" 
        />-->
        
      </v-layer>
      <v-layer ref="dragLayer"></v-layer>
    </v-stage>

    </div>
    </div>  
    <!--Click on canvas to create a cirlce.
     <a href=".">Reload the page</a>. Circles should stay here. -->
   
    
  </div>
</template>

<script>
const width = 500 //window.innerWidth;
const height = 300 //window.innerHeight;
export default {
  data() {
    return {
      list: [
        { id: '1', x: 10, y: 10, fill: 'blue', text: "Shot" },
        { id: '2', x: 10, y: 30, fill: 'red', text: "Pass" },
      ],
      stageSize: {
        width: width,
        height: height
      },
      isDragging: false,
      image: null
    };
  },
  created() {
    const image = new window.Image();
    image.src = "https://konvajs.org/assets/yoda.jpg";
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };
  },
  methods: {
    AddToList() {
      this.list.push({
        id: '3', x: 10, y: 10, fill: 'blue', text: "Save"
      })
    },
    onclick(event) {
      let vid = document.getElementById("myVideo");
      console.log(event.target.attrs.id)
      console.log(vid.currentTime)
      // console.log(event.evt.offsetX)
      // console.log(event.evt.offsetY)

    },
    handleClick(evt) {
      const stage = evt.target.getStage();
      const pos = stage.getPointerPosition();
      console.log(pos)
      // this.list.push({
      //   radius: 50,
      //   fill: 'red',
      //   ...pos
      // });

      this.save();
    },
    handleDragStart() {
      this.isDragging = true;
    },
    handleDragEnd(evt) {
      const stage = evt.target.getStage();
      const circle = evt.target
      this.isDragging = false;
      var p = this.list.find(x => x.id === evt.target.attrs.id);
      const newpos = stage.getPointerPosition();
      p.x = newpos.x
      p.y = newpos.y

      console.log(circle)
      this.save()
    },

    load() {
      const data = localStorage.getItem('storage');
      if (data) this.list = JSON.parse(data);
    },

    save() {
      localStorage.setItem('storage', JSON.stringify(this.list));
    }
  },
  mounted() {
    this.load();
  }
};
</script>