import React, { Component } from "react";
import "./ResumeHeader.css";

export default class ResumeHeader extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <h3 className="resume-header">
        {this.props.value}
    </h3>
    );
  }
}