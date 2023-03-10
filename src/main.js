import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./utils/rem.js";
const app = createApp(App).use(createPinia()).use(router);

// app.use(createPinia());
// app.use(router);

app.mount("#app");
