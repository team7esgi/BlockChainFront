import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Home from './views/Home'
import MyHouses from './views/MyHouses'
import VueRouter  from "vue-router";

Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/myhouses",
    component: MyHouses,
  },  
];

const router = new VueRouter({
  routes,
  mode: "history",
});


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
