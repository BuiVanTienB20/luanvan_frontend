import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./assets/main.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "primevue/resources/themes/aura-light-green/theme.css";

import "primeicons/primeicons.css";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// createApp(App).mount('#app')
createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(Antd)
  .use(ToastService)
  .mount("#app");
