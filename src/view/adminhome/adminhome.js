import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
import AdminRoutes from "../../routers/adminrouters";
import { withRouter } from "react-router-dom";

@withRouter
class AdminHome extends Component {
  state = {
    collapsed: false,
    MenuList: AdminRoutes.filter(item => item.isShow == true)
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  handleMenuClick({ key }) {
    this.props.history.push(key);
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            onClick={this.handleMenuClick.bind(this)}
          >
            {this.state.MenuList.map(item => (
              <Menu.Item key={item.path}>{item.name}</Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>{this.props.children}</Content>
          <Footer style={{ textAlign: "center" }}>
            MyBlog ©2019 Created by zhangxing
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default AdminHome;
