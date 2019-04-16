import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import AdminHome from "./view/adminhome/adminhome";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routers/routers";
import AdminRoutes from "./routers/adminrouters";

const isAdmin = window.location.href.includes("/admin");

const foreground = (
  <App>
    {Routes.map(item => {
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.path}
        />
      );
    })}
  </App>
);

const background = (
  <AdminHome>
    {
      AdminRoutes.map(item => {
      if (!!item.children && item.children.length > 0) {
        item.children.map(child => {
          return (
            <Route
              exact
              path={child.path}
              component={child.component}
              key={child.path}
            />
          );
        });
      }
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.path}
        />
      );
    })}
  </AdminHome>
);

let ShowPage = isAdmin ? background : foreground;

ReactDOM.render(
  <Provider>
    <Router>
      <LocaleProvider locale={zh_CN}>{ShowPage}</LocaleProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
