import React, { Component } from "react";
import "./ResumeDetail.css";

export default class ResumeDetail extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

render() {
    return (
       <ul>
          {this.props.values.map( (detail, index) => ( <li key={index}>{detail} </li>) )}
       </ul>
    );
  }
}
