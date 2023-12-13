import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import './index.css';
import {createPinia} from 'pinia';

// import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primevue/resources/primevue.min.css'; /* Deprecated */
import 'primeicons/primeicons.css';

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(PrimeVue, {}).mount('#app');
