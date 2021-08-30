import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";

import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App)
  .use(store, key)
  .use(router)
  .use(Vant)
  .mount("#app");
export default app;
