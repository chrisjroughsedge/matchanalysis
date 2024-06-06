<template>
  <div id="app">
    <video id="video" controls="controls">
      <source src="http://www.w3schools.com/html/mov_bbb.mp4" /></video
    ><br />
    <button @click="capture()">Play and Capture</button>
    <div>------------------Show captured thumbnail below -----------------</div>
    <canvas id="canvas"></canvas>
  </div>
</template>


<script>

export default {
  data() {
    return {
      canvas: null,
      x: 0,
      y: 0
    };
  },
  mounted() {
    var c = document.getElementById("canvas");
    this.canvas = c.getContext('2d');
  },
  methods: {
    capture() {
      let videoCanvas = document.getElementById("canvas");
      let video = document.getElementById("video");
      videoCanvas.addEventListener('mousedown', function(event) {
          console.log(event);  
          const ctx = videoCanvas.getContext('2d')
          let rect = videoCanvas.getBoundingClientRect()
          console.log(rect.left)
          let x = event.clientX - rect.left;
          let y = event.clientY - rect.top;
          ctx.strokeRect(x / 4, y / 4, 10,10)
        }, false);

      videoCanvas
        .getContext("2d")
        .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    },
  },
};
</script>

<style>
#canvas {
  display: inline-block;
  top: 4px;
  position: relative;
  border: dotted 1px #ccc;
  padding: 2px;
  width: 100%;
}
</style>

