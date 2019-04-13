import React, { Component } from "react";
import { Card } from "antd";
import "./myhome.css";
import Config from "../../config/config";
import ArticleList from "../../components/article/articleList";
import MyCard from "../../components/home/mycard/MyCard";
import HotTag from "../../components/home/hottag/HotTag";
const tabList = [
  {
    key: "React",
    tab: "React"
  },
  {
    key: "Vue",
    tab: "Vue"
  }
];

const contentList = {
  React: <ArticleList />,
  Vue: <p>content2</p>
};

export default class MyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "tab1",
      noTitleKey: "app"
    };
  }
  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div className="MyHome" style={{ width: Config.mainWidth }}>
        <div className="Left">
          <Card>欢迎来到我的博客</Card>
          <Card
            style={{ width: "100%" }}
            title="前段技术学习"
            extra={<a href="#">更多</a>}
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={key => {
              this.onTabChange(key, "key");
            }}
          >
            {contentList[this.state.key]}
          </Card>
          <Card
            style={{ width: "100%" }}
            title="后端技术学习"
            extra={<a href="#">更多</a>}
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={key => {
              this.onTabChange(key, "key");
            }}
          >
            {contentList[this.state.key]}
          </Card>
        </div>
        <div className="Right">
          <Card title="个人介绍">
            <MyCard />
          </Card>
          <Card title="文章点击排行" extra={<a href="#">更多</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="热门标签" extra={<a href="#">更多</a>}>
            <HotTag />
          </Card>
          <div>
            
          </div>
        </div>
      </div>
    );
  }
}
