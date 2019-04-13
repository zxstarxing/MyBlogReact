import React, { Component } from "react";
import "./App.css";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
import "./App.css";
import { withRouter } from "react-router-dom";
import MyHeader from "./components/layout/header/MyHeader";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Header
            style={{
              height: "80px",
              width: "100ww",
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch"
            }}
          >
            <MyHeader />
          </Header>
          <Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch"
            }}
          >
            {this.props.children}
          </Content>
          <Footer style={{ background: "black", height: "200px" }}>123</Footer>
        </Layout>
      </>
    );
  }
}
export default withRouter(App);
