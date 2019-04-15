import React, { Component } from "react";
import { Card, Button, Table } from "antd";
import MenuApi from "../../../utils/api/menuapi";

const menuApi = new MenuApi();
export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuList: []
    };
  }
  componentDidMount() {
     menuApi.getList().then(data => {
       this.setState({ MenuList: data });
    });
  }
  handleAddTodo = () => {
    this.props.history.push("/admin/menu/add");
  };
  render() {
    let AddButton = (
      <Button type="primary" onClick={() => this.handleAddTodo()}>
        新增栏目
      </Button>
    );
    const columns = [
      {
        title: "编号",
        dataIndex: "Id",
        key: "Id"
      },
      {
        title: "名称",
        dataIndex: "Name",
        key: "Name"
      },
      {
        title: "描述",
        dataIndex: "Description",
        key: "Description"
      },
      {
        title: "创建时间",
        dataIndex: "CreateTime",
        key: "CreateTime"
      }
    ];
    console.log(this.state.MenuList);
    return (
      <>
        <Card extra={AddButton}>
          <Table columns={columns} rowKey="Guid" dataSource={this.state.MenuList} />
        </Card>
      </>
    );
  }
}
