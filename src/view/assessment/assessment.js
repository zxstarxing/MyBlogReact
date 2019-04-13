import React, { Component } from "react";
import "./assessment.css";
import Config from "../../config/config";

export default class Assessment extends Component {
  render() {
    return (
      <div className="assessment" style={{ width: Config.mainWidth }}>
        <p>大哥我就是一个菜鸡，来个大佬教教我</p>
        <p>本人熟悉React Vue等前端框架的单词拼写</p>
        <p>熟悉Windows Linux等系统的开关机</p>
        <p>本博客是是react技术栈(react,router4,mobx)和nodejs(express)及mysql</p>
        <p>react使用webpack4搭建未使用官方cli例如create-react-app，为啥不用redux写，我嫌烦</p>
      </div>
    );
  }
}
