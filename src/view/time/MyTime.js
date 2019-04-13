import React, { Component } from "react";
import "./MyTime.css";
import { Divider, Timeline, Card } from "antd";
import Config from "../../config/config";

export default class MyTime extends Component {
  render() {
    return (
      <div className="MyTime" style={{ width: Config.mainWidth }}>
        <Divider>我的计划</Divider>
        <Card style={{ width: Config.mainWidth - 60 }}>
          <Timeline>
            <Timeline.Item color="green">
              Create a services site 2015-09-01
            </Timeline.Item>
            <Timeline.Item color="green">
              Create a services site 2015-09-01
            </Timeline.Item>
            <Timeline.Item color="red">
              <p>Solve initial network problems 1</p>
              <p>Solve initial network problems 2</p>
              <p>Solve initial network problems 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    );
  }
}
