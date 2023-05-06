import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router'
import './assets/main.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
