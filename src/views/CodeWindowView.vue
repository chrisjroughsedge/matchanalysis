<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      
        <video id="myVideo" width="320" height="240" controls>
        <source src="../assets/ShortVid.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>

      <div class="flex m-10">
     
      <h1>People</h1>
      <draggable class='dragArea' v-model='peopleList' group="people">
  
              <button v-for='person in peopleList' :key='person.id' v-on:click="greet(person, $event)" >{{ person.name }}</button>
  
      </draggable>
  
      <h1>Emp List</h1>
      <draggable class='dragArea' v-model='employeeList'  group="people">
              <button v-for='person in employeeList' :key='person.id' v-on:click="greet(person, $event)" >{{ person.name }}</button>
      </draggable>
  
      <h1>
        Edit
      </h1>
  
  
    </div>
    </div>
  </template>
  
  <script>
  
  import { defineComponent } from 'vue'
  import { VueDraggableNext } from 'vue-draggable-next'
  export default defineComponent ({
    name: 'LandingPage',
    props: {
      msg: String
    },
    components: {
      draggable: VueDraggableNext,
    },
    data() {
        return {
          editOffset: -1,
          editPost: {},
          editPostOri: {},
          employees: [{ id: 6, name: 'Pass Start' },
                      { id: 7, name: 'Pass Complete' }],
          people: [
            { id: 1, name: 'Bob' },
            { id: 2, name: 'Mary' },
            { id: 3, name: 'Jane' },
            { id: 4, name: 'Alex' },
            { id: 5, name: 'Jim' }
          ],
          
        }
    },
    computed: {
      employeeList: {
        get () {
          return this.employees
        },
        set (value) {
          this.employees = value
        }
      },
      peopleList: {
        get () {
          return this.people
        },
        set (value) {
          this.people = value
        }
      }
    },
    methods: {
      greet: function(x, event) {
        let vid = document.getElementById("myVideo");
        // alert(x.name)
        if (x.name == "Pass Start" || x.name == "Pass Complete") {
          alert(vid.currentTime);
        }
        var p = this.people.find(x => x.id === 1);
        p.name = "Bobby"
        // var person =  {
        //   "id": 6,
        //   "name": "Chris"
        // }
        // this.people.push(person)
          
  
        if (event) {
          // alert(event.target.tagName)
        }
      },
    }
  
  })
  
  
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  
  </style>
  