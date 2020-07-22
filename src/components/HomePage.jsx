import React, { Component } from "react";
import ReactDOM from "react-dom";
import AudioPlayers from "./Audio/AudioPlayers.jsx";
import HomeImage from "../../src/components/HomeImage.jsx";

import "./HomePage.css"

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { } = this.state;
    return (
    <div id="home-page-card">
        <HomeImage></HomeImage>
        <div id="audio-home-page">
            <AudioPlayers />
        </div>
    </div>
    );
  }
}

const reactContext = document.getElementById("create-home-page");
reactContext ? ReactDOM.render(<HomePage />, reactContext) : console.log('Failed to find react context from html root.');
