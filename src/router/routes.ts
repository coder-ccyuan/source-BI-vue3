import {RouteRecordRaw} from "vue-router";
import BIView from "../views/BIView/FormView.vue";

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: "BIData",
        component: BIView,
    }
    ];
