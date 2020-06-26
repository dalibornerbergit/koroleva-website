import Vue from 'vue';
import App from './App.vue';
import AOS from "aos";
import "aos/dist/aos.css";
import VueRouter from 'vue-router';
import Routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
  router: router
}).$mount('#app')
