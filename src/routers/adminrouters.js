import MenuList from "../view/adminhome/menu/menulist";
import AdminHomeIndex from "../view/adminhome/home/adminhomeindex";
import EmptyComponent from "../components/empty/emptycomponent";
import MenuDetail from "../view/adminhome/menu/menudetail";

const adminroutes = [
  { path: "/admin", component: AdminHomeIndex, name: "首页", isShow: true },
  {
    path: "/admin/menu",
    component: MenuList,
    name: "栏目管理",
    isShow: true
  },
  {
    path: "/admin/article",
    component: EmptyComponent,
    name: "内容管理",
    isShow: true
  },
  {
    path: "/admin/menu/add",
    component: MenuDetail,
    name: "新增栏目",
    isShow: false
  }
];
export default adminroutes;
