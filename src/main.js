import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//PrimeVue
import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-purple/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core
import "primeicons/primeicons.css"; // icons
import Button from "primevue/button";
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
const app = createApp(App);

app.component("Button", Button);
app.component('Calendar',Calendar);
app.component('InputNumber',InputNumber);
app.component('Checkbox',Checkbox);
app.component('RadioButton',RadioButton);
app.component('Textarea',Textarea)

app.use(PrimeVue);
app.mount("#app");
