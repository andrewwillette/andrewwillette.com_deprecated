import React, { Component } from "react";
import AudioPlayers from "./AudioPlayers.jsx";

export default class AudioPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
      return (
        <div id="audio-home-page">
            <AudioPlayers />
        </div>
    );
  }
}
