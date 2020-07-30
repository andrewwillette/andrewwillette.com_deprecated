import React, { Component } from "react";

import AudioPlayer from "./AudioPlayer.jsx";

import './AudioPlayers.css';

export default class AudioPlayers extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  getAudioComponent() {

    return (
      <React.Fragment>
        <div className="row">
          <AudioPlayer 
            soundcloudSource="https://soundcloud.com/user-434601011/bach-louree-c-major-partitita"
          ></AudioPlayer>
          <AudioPlayer
            soundcloudSource="https://soundcloud.com/user-434601011/somewhereovertherainbow"
          ></AudioPlayer>
        </div>
        
        <div className="row">
          <AudioPlayer
            soundcloudSource="https://soundcloud.com/user-434601011/not-this"
          ></AudioPlayer>
          <AudioPlayer
            soundcloudSource="https://soundcloud.com/user-434601011/these-foolish-things"
          ></AudioPlayer>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div id="audioPlayerWrapper">
              {this.getAudioComponent()}
      </div>
    );
  }
}
