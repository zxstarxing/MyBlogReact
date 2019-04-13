import MyHome from "../view/home/MyHome";
import MyTime from "../view/time/MyTime";
import Assessment from "../view/assessment/Assessment";

const routes = [
  { path: "/", component: MyHome },
  { path: "/time", component: MyTime },
  { path: "/assessment", component: Assessment }
];
export default routes;
