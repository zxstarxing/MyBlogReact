import React, { Component } from "react";
import { Table, Button, message } from "antd";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import TodoRouter from "../../contants/TodoRouter";

@withRouter
@inject("todoStore")
@observer
class TodoList extends Component {
  removeTodo(key) {
    this.props.todoStore.Remove(key);
    message.info("删除代办事项成功");
  }
  editTodo(key) {
    this.props.history.push(TodoRouter.TODOEDIT, {
      query: {
        id: key
      }
    });
  }
  render() {
    const columns = [
      {
        title: "代办事项",
        dataIndex: "todoName",
        key: "todoName"
      },
      {
        title: "添加时间",
        dataIndex: "addTime",
        key: "addTime"
      },
      {
        title: "Action",
        key: "operation",
        render: ({ key }) => (
          <>
            <Button type="info" onClick={() => this.editTodo(key)}>
              编辑
            </Button>
            <Button type="danger" onClick={() => this.removeTodo(key)}>
              删除
            </Button>
          </>
        )
      }
    ];
    return (
      <Table
        columns={columns}
        dataSource={this.props.todoStore.List}
        width={{ width: "100%" }}
      />
    );
  }
}

export default TodoList;
