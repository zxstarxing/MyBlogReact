import MyHome from "../view/home/MyHome";
import MyTime from "../view/time/MyTime";
import Assessment from "../view/assessment/Assessment";
import MyArticle from "../view/article/myarticle";

const routes = [
  { path: "/", component: MyHome },
  { path: "/time", component: MyTime },
  { path: "/assessment", component: Assessment },
  { path: "/myarticle/:type", component: MyArticle }
];
export default routes;
