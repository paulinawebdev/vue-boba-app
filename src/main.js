import Vue from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faPlus, faMinus, faTrash, faCheck, faCalendar, faUser} from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus, faTrash, faCheck, faCalendar, faUser);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
