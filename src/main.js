import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "@/router";
import TypeNav from "@/pages/Home/TypeNav/TypeNav.vue";

const app = createApp(App);

app.component("TypeNav", TypeNav);

app.use(router);

app.mount("#app");

console.log(app);
