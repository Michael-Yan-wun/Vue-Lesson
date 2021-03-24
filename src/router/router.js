import Vue from "vue";
import Router from "vue-router";
import lesson from "../pages/lesson.vue";
import Vbind from "../components/vbind.vue";
import Vmodel from "../components/vmodel.vue";
import Vif from "../components/vif.vue";
import Von from "../components/von.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path:"/",
      redirect:'/lesson'
    },
    {
      path: "/lesson",
      name: "lesson",
      component: lesson
    },
    {
      path: "/lesson/vbind",
      name: "Vbind",
      component: Vbind
    },
    {
      path: "/lesson/vmodel",
      name: "Vmodel",
      component: Vmodel
    },
    {
      path: "/lesson/vif",
      name: "Vif",
      component: Vif
    },{
      path: "/lesson/von",
      name: "Von",
      component: Von
    }
  ]
});
