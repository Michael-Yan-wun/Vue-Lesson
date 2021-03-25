import Vue from "vue";
import Router from "vue-router";
import lesson from "../pages/lesson.vue";
import Vbind from "../components/syntax/vbind.vue";
import Vmodel from "../components/syntax/vmodel.vue";
import Vif from "../components/syntax/vif.vue";
import Von from "../components/syntax/von.vue";
import Vfor from "../components/syntax/vfor.vue";
import Vlife from "../components/structure/life.vue";
import Vcomputed from "../components/structure/computed.vue"
import Vwatch from "../components/structure/watch.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/lesson",
        },
        {
            path: "/lesson",
            name: "lesson",
            component: lesson,
        },
        {
            path: "/lesson/vbind",
            name: "Vbind",
            component: Vbind,
        },
        {
            path: "/lesson/vmodel",
            name: "Vmodel",
            component: Vmodel,
        },
        {
            path: "/lesson/vif",
            name: "Vif",
            component: Vif,
        },
        {
            path: "/lesson/von",
            name: "Von",
            component: Von,
        },
        {
            path: "/lesson/vfor",
            name: "Vfor",
            component: Vfor,
        },
        {
            path: "/lesson/vlife",
            name: "Vlife",
            component: Vlife,
        },
        {
            path: "/lesson/computed",
            name: "Vcomputed",
            component: Vcomputed,
        },
        {
            path: "/lesson/watch",
            name: "Vwatch",
            component: Vwatch,
        },
    ],
});
