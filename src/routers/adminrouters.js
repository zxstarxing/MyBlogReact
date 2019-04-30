import EmptyComponent from "../components/empty/emptycomponent";
import MenuDetail from "../view/adminhome/menu/menudetail";
import AdminHomeIndex from "../view/adminhome/home/adminhomeindex";
import MenuList from "../view/adminhome/menu/menulist";
import ArticleList from "../view/adminhome/article/articlelist";
import ArticleDetail from "../view/adminhome/article/articledetail";
import React, { Component } from "react";
import Loadable from "react-loadable";
import { Spin } from "antd";

let Loading = () => {
  return (
    <>
      <Spin size="large" />
    </>
  );
};

const adminroutes = [
  {
    path: "/admin",
    component: Loadable({
      loader: () => import("../view/adminhome/home/adminhomeindex"),
      loading: Loading
    }),
    name: "首页",
    isShow: true
  },
  {
    path: "/admin/menu",
    component: Loadable({
      loader: () => import("../view/adminhome/menu/menulist"),
      loading: Loading
    }),
    name: "栏目管理",
    isShow: true
  },
  {
    path: "/admin/article",
    component: Loadable({
      loader: () => import("../view/adminhome/article/articlelist"),
      loading: Loading
    }),
    name: "内容管理",
    isShow: true
  },
  {
    path: "/admin/menu/add",
    component: MenuDetail,
    name: "新增栏目",
    isShow: false
  },
  {
    path: "/admin/article/add",
    component: Loadable({
      loader: () => import("../view/adminhome/article/articledetail"),
      loading: Loading
    }),
    name: "新增文章",
    isShow: false
  }
];
export default adminroutes;
