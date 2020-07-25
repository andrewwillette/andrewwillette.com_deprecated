import React, { Component } from "react";
import HomeImage from "./HomeImage.jsx";

import "./HomePage.css"

export default class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div id="home-page-card">
        <HomeImage></HomeImage>
        <p className="card-paragraph">
          I am a software and web developer currently employed by Cerner Corporation where I specialize in cloud-hosted security services on their Cloud Identity and Access Management team. I like playing violin and host some recordings on my site here.
        </p>
    </div>
    );
  }
}
