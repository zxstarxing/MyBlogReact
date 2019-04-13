import React, { Component } from "react";
import {Tag} from 'antd';
export default class HotTag extends Component {
  render() {
    return (
      <div>
        <Tag color="magenta">React</Tag>
        <Tag color="red">Vue</Tag>
        <Tag color="volcano">Javascript</Tag>
      </div>
    );
  }
}
