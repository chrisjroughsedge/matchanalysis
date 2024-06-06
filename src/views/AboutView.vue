<template>
  <div>
    Click on canvas to create a cirlce.
    <a href=".">Reload the page</a>. Circles should stay here.
    
    <v-stage ref="stage"
      :config="stageSize"
      @click="handleClick"
    >
      <v-layer ref="layer">
        <v-image :config="{
            image: image
          }" @click="onclick"/>

        <v-circle
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          draggable: true
          v-for="item in list"
          :key="item.id"
          :config="item" draggable="true"></v-circle>

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

          <v-text
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          :config="{
            text: 'Draggable Text',
            x: 50,
            y: 50,
            draggable: true,
            fill: isDragging ? 'green' : 'black'
          }"
        />
        
      </v-layer>
      <v-layer ref="dragLayer"></v-layer>
    </v-stage>
  </div>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;
export default {
  data() {
    return {
      list: [{ x: 100, y: 100, radius: 50, fill: 'blue' }],
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
    onclick(event) {
      console.log(event)
      
    console.log(event.evt.offsetX)
    console.log(event.evt.offsetY)
    },
    handleClick(evt) {
      const stage = evt.target.getStage();
      const pos = stage.getPointerPosition();
      this.list.push({
        radius: 50,
        fill: 'red',
        ...pos
      });

      this.save();
    },
    handleDragStart() {
      this.isDragging = true;
    },
    handleDragEnd(evt) {
      const stage = evt.target.getStage();
      const circle = evt.target
      this.isDragging = false;
      var p = this.list.find(x => x.fill === 'blue');
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