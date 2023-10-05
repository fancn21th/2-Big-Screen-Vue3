import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/Router.js';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import { animationDirective } from '@/directives/animation';

const app = createApp(App);

app.directive('stagger', animationDirective);

app.use(router);
app.use(VueQueryPlugin);
app.use(createPinia());

app.mount('#app');
