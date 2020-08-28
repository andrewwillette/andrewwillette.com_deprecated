import React, { Component } from "react";
import homeImage from "../../../assets/images/homepage_photo.jpg";

export default class HomeImage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { } = this.state;
    return (
<div id="homeImageWrapper">
        <img src={homeImage} alt="Photo of Violin Player" id="andrew_photo"></img>
</div>
    );
  }
}
