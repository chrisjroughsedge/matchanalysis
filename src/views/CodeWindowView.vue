<template>
  <div class="container">
    <div class="row" style="float:left;" >
     
      <div class="col-sm-8">
        <video id="myVideo" width="768" height="576" controls style="padding:-100px">
          <source src="../assets/ShortVid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <!-- <table>
          <thead>
            <th>Action</th>
            <th>Time</th>
          </thead>
          <tbody>
            <tr v-for='item in eventList'>
              <td>{{ item.action }}</td>
              <td>{{ item.actionTime }}</td>
            </tr>
          </tbody>
        </table> -->
      </div>
      <div class="col-sm-4" >
        <input type="text" id="tagname" name="tagname">
        <input type="button" value="Add Button" @click="AddToList()">

        <v-stage ref="stage" :config="stageSize" @click="handleClick">
          <v-layer ref="layer">
              <v-text
                @click="onclick"
                @dragstart="handleDragStart"
                @dragend="handleDragEnd"
                v-for="item in lst"
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
          </v-layer>
          <v-layer ref="dragLayer"></v-layer>
        </v-stage>
      </div>
    </div>


  </div>
</template>
<style scoped>
table {
  margin:50px;
}
td {
  width: 200px;
}
tr:nth-child(even) {
  background-color: #ddd;
}
tr {
  border-bottom: 1px solid #ddd;
}
</style>
<script>
const width = 500 //window.innerWidth;
const height = 500 //window.innerHeight;
export default ({
  name: 'CodeWindowView',
  data() {
    return {
      lst: [],
      eventList: [],
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
      let buttonName = document.getElementById("tagname").value;
      this.lst.push({
        id: '3', x: 10, y: 10, fill: 'blue', text: buttonName
      })
    },
    onclick(event) {
      let vid = document.getElementById("myVideo");
      console.log(event.target.attrs.id)
      console.log(vid.currentTime)
      const eventPlay = { action: event.target.attrs.text, actionTime: vid.currentTime }
      this.eventList.push(eventPlay)
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
      var p = this.lst.find(x => x.id === evt.target.attrs.id);
      const newpos = stage.getPointerPosition();
      p.x = newpos.x
      p.y = newpos.y

      console.log(circle)
      this.save()
    },

    load() {
      const data = localStorage.getItem('storage');
      if (data) this.lst = JSON.parse(data);
    },

    save() {
      localStorage.setItem('storage', JSON.stringify(this.lst));
    }
  },
  async mounted() {
    //this.load()
    console.log("Hello")
    const list1 = await (await fetch("/api/match-analysis-api")).json();
    console.log(list1)
    this.lst = list1
    console.log(this.lst)
  }
});
</script>