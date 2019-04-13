import React, { Component } from "react";
import { Form, Button, Card, DatePicker, Input } from "antd";
import TodoRouter from "../../contants/TodoRouter";
import moment from "moment";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      todo: "",
      time: new Date()
    };
  }
  componentDidMount() {
    if (!!this.props.location.state) {
      let { todoStore } = this.props;
      let { query } = this.props.location.state;
      if (!!query) {
        let { id } = query;
        let todoEntity = todoStore.GetTodo(id);
        if (!!todoEntity) {
          this.setState({
            key: todoEntity.key,
            todo: todoEntity.todoName,
            time: todoEntity.addTime
          });
        }
      }
    }
  }
  handleAddTodo = () => {
    this.props.todoStore.Add(this.state);
    this.props.history.push(TodoRouter.TODO);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleOkDatePicker(date, dateString) {
    this.setState({ time: dateString });
  }
  render() {
    return (
      <Card title="添加待办事项">
        <Form>
          <Form.Item>
            <Input
              placeholder="输入代办事项"
              value={this.state.todo}
              name="todo"
              onChange={this.handleChange.bind(this)}
            />
          </Form.Item>
          <Form.Item>
            <DatePicker
              showTime
              placeholder="选择时间"
              value={moment(this.state.time, "YYYY/MM/DD HH:mm:SS")}
              onChange={this.handleOkDatePicker.bind(this)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => this.handleAddTodo()}>
              新增代办事项
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
export default TodoForm;
