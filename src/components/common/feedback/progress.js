import React, { Component } from "react";

export default class Progress extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    };
  }
  render() {
    return (
      <>
        <Progress percent={this.state.percent} />
      </>
    );
  }
}
