import React, { Component } from "react";
import {
  Card,
  Button,
  Table,
  message,
  Popconfirm,
  Collapse,
  Form,
  Input,
  Radio,
  TreeSelect
} from "antd";
import MenuApi from "../../../utils/api/menuapi";
const Panel = Collapse.Panel;
const RadioGroup = Radio.Group;

const menuApi = new MenuApi();
export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuTreeSelect: [],
      MenuList: [],
      Condition: {
        IsStatus: -1,
        ParentGuid: ""
      }
    };
  }
  componentDidMount() {
    menuApi.getList().then(data => {
      this.setState({ MenuList: data });
    });

    menuApi.getTreeSelect().then(data => {
      data.unshift({
        key: "",
        value: "",
        title: "全部"
      });
      this.setState({ MenuTreeSelect: data });
    });
  }
  handleClickStatus = e => {
    this.setState({
      Condition: Object.assign({}, this.state.Condition, {
        IsStatus: e.target.value
      })
    });
  };
  handleTreeSelect = value => {
    this.setState({
      Condition: Object.assign({}, this.state.Condition, {
        ParentGuid: value
      })
    });
  };
  handleAddMenu = () => {
    this.props.history.push("/admin/menu/add");
  };
  handelEditMenu = guid => {};
  handleRemoveMenu = guid => {
    menuApi.removeMenu(guid).then(data => {
      if (data == "success") {
        message.success("栏目删除成功");
        this.setState({
          MenuList: this.state.MenuList.filter(item => item.Guid != guid)
        });
      }
    });
  };
  render() {
    let AddButton = (
      <Button type="primary" onClick={() => this.handleAddMenu()}>
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
      },
      {
        title: "操作",
        key: "operation",
        render: ({ Guid }) => (
          <>
            <Button type="info" onClick={() => this.handelEditMenu(Guid)}>
              编辑
            </Button>
            <Popconfirm
              placement="top"
              title="确定删除栏目？"
              onConfirm={() => this.handleRemoveMenu(Guid)}
              okText="是"
              cancelText="否"
            >
              <Button type="danger">删除</Button>
            </Popconfirm>
          </>
        )
      }
    ];
    return (
      <>
        <Collapse>
          <Panel header="查询" key="1">
            <Form layout="inline">
              <Form.Item label="栏目名称">
                <Input placeholder="栏目名称" />
              </Form.Item>
              <Form.Item label="父级栏目">
                <TreeSelect
                  dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                  treeData={this.state.MenuTreeSelect}
                  placeholder="请选择栏目"
                  treeDefaultExpandAll
                  value={this.state.Condition.ParentGuid}
                  onChange={this.handleTreeSelect.bind(this)}
                />
              </Form.Item>
              <Form.Item label="禁用/启用">
                <RadioGroup
                  value={this.state.Condition.IsStatus}
                  onChange={this.handleClickStatus.bind(this)}
                >
                  <Radio value={-1}>全部</Radio>
                  <Radio value={1}>启用</Radio>
                  <Radio value={0}>禁用</Radio>
                </RadioGroup>
              </Form.Item>
              <Form.Item>
                <Button type="primary">查询</Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
        <Card extra={AddButton}>
          <Table
            columns={columns}
            rowKey="Guid"
            dataSource={this.state.MenuList}
          />
        </Card>
      </>
    );
  }
}
