import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import VueKonva from 'vue-konva';


const app = createApp(App);
app.use(router)
app.use(bootstrap)
app.use(VueKonva)
app.mount('#app')
//createApp(App).use(router).mount('#app')
