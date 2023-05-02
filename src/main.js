import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import './assets/main.css'
import "primevue/resources/themes/lara-light-indigo/theme.css"; 
import "primevue/resources/primevue.min.css";

import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.component('pv-card', Card);
app.component('pv-button', Button);
app.component('pv-inputText', InputText);
app.mount('#app')
