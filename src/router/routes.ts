import {RouteRecordRaw} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

export const routes: Array<RouteRecordRaw> = [{
    path: '/hello',
    name: "hello",
    component: HelloWorld,
}];
