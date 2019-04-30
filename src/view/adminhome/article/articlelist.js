import React, { Component } from "react";
import { Card, Button, Table, message, Popconfirm } from "antd";

export default class ArticleList extends Component {
  constructor(props) {
    super(props)
  }
  handleAddArtcile() {
    this.props.history.push("/admin/article/add");
  }
  render() {
    let AddButton = (
      <Button type="primary" onClick={() => this.handleAddArtcile()}>
        新增文章
      </Button>
    );
    return (
      <>
        <Card extra={AddButton} />
      </>
    );
  }
}
