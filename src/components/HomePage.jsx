import React, { Component } from "react";
import ReactDOM from "react-dom";
import AudioPlayers from "./Audio/AudioPlayers.jsx";
import HomeImage from "../../src/components/HomeImage.jsx";
import ReactAudioPlayer from 'react-audio-player';



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

const wrapper = document.getElementById("create-home-page");
wrapper ? ReactDOM.render(<HomePage />, wrapper) : console.log('Failed to find create-home-page div');