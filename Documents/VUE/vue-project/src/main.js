import './assets/style/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import router from '../routes/indexRouter';
import './assets/style/tailwind.css'

createApp(App).mount('#app')
createApp(Home).use(router).mount('#home');
