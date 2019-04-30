import React, { Component } from "react";
import {
  Row,
  Col,
  message,
  Card,
  Form,
  TreeSelect,
  Input,
  Radio,
  Button
} from "antd";
import Remarkable from "remarkable";
import "./articledetail.css";
const { TextArea } = Input;
const md = new Remarkable();
export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.mdContent = React.createRef();
    this.mdTextarea = React.createRef();
  }
  componentDidMount() {
    console.log(this.mdTextarea.current);
  }
  handleMarkdownChange() {
    
  }
  render() {
    return (
      <>
        <Form>
          <Form.Item label="文章标题">
            <Input placeholder="请输入文章标题" />
          </Form.Item>
          <Form.Item label="文章副标题">
            <Input placeholder="请输入文章副标题" />
          </Form.Item>
          <Form.Item label="文章内容">
            <div className="divMarkdown">
              <TextArea
                rows={12}
                className="left"
                onChange={() => this.handleMarkdownChange()}
              />
              <div className="right" />
            </div>
          </Form.Item>
        </Form>
      </>
    );
  }
}
