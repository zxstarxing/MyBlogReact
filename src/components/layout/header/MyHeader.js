import React, { Component } from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { withRouter } from "react-router-dom";
import "./MyHeader.css";
import RouterVar from "../../../contants/Router";

@withRouter
class MyHeader extends Component {
  handleMenuClick({ key }) {
    this.props.history.push(key);
  }
  render() {
    return (
      <div className="MyHearder">
        <div className="MyBlog">张星的博客</div>
        <Menu
          mode="horizontal"
          theme="dark"
          onClick={this.handleMenuClick.bind(this)}
        >
          <Menu.Item key={RouterVar.HOME}>
            <Icon type="desktop" />
            首页
          </Menu.Item>
          <Menu.Item key={RouterVar.TIME}>
            <Icon type="desktop" />
            时间轴
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                前端技术
              </span>
            }
          >
            <MenuItemGroup title="前端基础">
              <Menu.Item key="/myarticle/html">html</Menu.Item>
              <Menu.Item key="/css">css</Menu.Item>
              <Menu.Item key="/javascript">javascript</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="React">
              <Menu.Item key="/react">React</Menu.Item>
              <Menu.Item key="/router4">Router4</Menu.Item>
              <Menu.Item key="/redux">Redux</Menu.Item>
              <Menu.Item key="/mobox">Mobox</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Vue">
              <Menu.Item key="/vue">Vue</Menu.Item>
              <Menu.Item key="/vuerouter">VueRouter</Menu.Item>
              <Menu.Item key="/vuex">Vuex</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                后端技术
              </span>
            }
          >
            <MenuItemGroup title=".NET">
              <Menu.Item key="/asp.net">Asp.net</Menu.Item>
              <Menu.Item key="/wpf">WPF</Menu.Item>
              <Menu.Item key="/winform">Winform</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="nodejs">
              <Menu.Item key="/express">Express</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="/assessment">
            <Icon type="desktop" />
            个人评价
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MyHeader;
