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

import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Dropdown from "primevue/dropdown";

import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';

import i18n from "./locales/i18n.js";

const app = createApp(App);

app.component("Button", Button);
app.component('pv-inputText', InputText);
app.component('inputMask', InputMask)
app.component('pv-dropdown',Dropdown)
app.component('Calendar',Calendar);
app.component('InputNumber',InputNumber);
app.component('Checkbox',Checkbox);
app.component('RadioButton',RadioButton);
app.component('Textarea',Textarea)

app.use(PrimeVue);
app.use(i18n);
app.mount("#app");
