import React, { Component } from "react";
import Config from "../../config/config";
import { Card, Input, Breadcrumb } from "antd";
import "./myarticle.css";
import ArticleList from "../../components/article/articleList";
const Search = Input.Search;
export default class MyArticle extends Component {
  render() {
    return (
      <div className="MyArticle" style={{ width: Config.mainWidth }}>
        <Card>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">前端技术</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">html</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Card>
        <Card>
          <Search
            placeholder="请输入要搜索的文章内容或者标题"
            enterButton="搜索"
            size="large"
            onSearch={value => console.log(value)}
          />
        </Card>
        <Card>
          <ArticleList />
        </Card>
      </div>
    );
  }
}
