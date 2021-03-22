import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Page2 from "../views/Page2.vue";
import inputAddDelete from "../views/inputAddDelete.vue";
import VuexAdd from "../views/VuexAdd.vue";


Vue.use(VueRouter);
const routes = [
  {

    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Page2",
    name: "Page2",
    component: Page2
  },
  {
    path: "/inputAddDelete",
    name: "inputAddDelete",
    component: inputAddDelete
  },
  {
    path: "/VuexAdd",
    name: "VuexAdd",
    component: VuexAdd
  }
  
];

const router = new VueRouter({
  routes
});

export default router;
