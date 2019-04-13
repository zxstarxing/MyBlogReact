import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Store from "./stores/Store";
import TodoStore from "./stores/TodoStore";
import { LocaleProvider } from "antd";

import RouterVar from "./contants/Router";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import { Provider } from "mobx-react";

let store = new Store();
let todoStore = new TodoStore();
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./router/router";

ReactDOM.render(
  <Provider store={store} todoStore={todoStore}>
    <Router>
      <LocaleProvider locale={zh_CN}>
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
      </LocaleProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
