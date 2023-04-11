import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//PrimeVue
import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-purple/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core
import "primeicons/primeicons.css"; // icons
import Button from "primevue/button";

const app = createApp(App);

app.component("Button", Button);
app.use(PrimeVue);
app.mount("#app");
