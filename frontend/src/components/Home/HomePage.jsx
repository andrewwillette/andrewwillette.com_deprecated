import React, { Component } from "react";
import HomeImage from "./HomeImage.jsx";

export default class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div id="home-page-card">
        <HomeImage></HomeImage>
        <p className="card-paragraph">
          I am a software and web developer currently employed at Cerner in Kansas City, Missouri, where I specialize in cloud-hosted security protocol services, both their backend implementations and frontend onboarding UIs. I like playing violin and host some recordings on my site here. Go Chiefs.
        </p>
    </div>
    );
  }
}
