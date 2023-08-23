import { createApp } from "vue";
import PortalVue from "portal-vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/Router.js";

const app = createApp(App);

app.use(router);
app.use(PortalVue);

app.mount("#app");
