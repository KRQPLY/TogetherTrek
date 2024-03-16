import "@/styles/main.scss";
import "https://unpkg.com/feather-icons";

import { createApp } from "vue";
import { createPinia } from "pinia";
import VueFeather from "vue-feather";
import VueSmoothScroll from "vue3-smooth-scroll";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component(VueFeather.name, VueFeather);

app.use(createPinia());
app.use(VueSmoothScroll);
app.use(router);

app.mount("#app");
