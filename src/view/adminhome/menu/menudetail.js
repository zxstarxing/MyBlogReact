import React, { Component } from "react";
import { message, Card, Form, TreeSelect, Input, Radio, Button } from "antd";
import MenuApi from "../../../utils/api/menuapi";
const menuApi = new MenuApi();
export default class MenuDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
      Guid: "",
      ParentGuid: "",
      Title: "",
      Description: "",
      IsStatus: "1"
    };
  }
  componentDidMount() {
    menuApi.getTreeSelect().then(data => {
      this.setState({ treeData: data });
    });
  }
  handleSaveClick() {
    if (!!this.state.Guid) {
    } else {
      menuApi.addMenu(this.state).then(data => {
        message.success("栏目添加成功");
        this.props.history.push({ pathname: "/admin/menu" });
      });
    }
  }
  handleTreeSelectChange(value) {
    if (!!value) {
      this.setState({ ParentGuid: value });
    }
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <Card title="添加栏目">
        <Form>
          <Form.Item label="父级栏目">
            <TreeSelect
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              treeData={this.state.treeData}
              placeholder="请选择栏目"
              treeDefaultExpandAll
              value={this.state.ParentGuid}
              onChange={this.handleTreeSelectChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="栏目标题">
            <Input
              placeholder="请输入栏目标题"
              name="Title"
              value={this.state.Title}
              onChange={this.handleInputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="栏目描述">
            <Input
              placeholder="请输入栏目描述"
              name="Description"
              value={this.state.Description}
              onChange={this.handleInputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="启用/禁用">
            <Radio.Group
              value={this.state.IsStatus}
            >
              <Radio.Button value="1">启用</Radio.Button>
              <Radio.Button value="0">禁用</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => this.handleSaveClick()}>
              保存
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
