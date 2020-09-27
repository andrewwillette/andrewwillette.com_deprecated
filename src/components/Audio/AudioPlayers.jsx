import React, { Component } from "react";

import AudioPlayer from "./AudioPlayer.jsx";

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
          <div className="col-md">
            <div>
            <AudioPlayer 
              soundcloudSource="https://soundcloud.com/user-434601011/bach-louree-c-major-partitita?show_teaser=false"
            ></AudioPlayer>
            </div>
          </div>
          <div className="col-md">
          <AudioPlayer
            soundcloudSource="https://soundcloud.com/user-434601011/somewhereovertherainbow?show_teaser=false"
          ></AudioPlayer>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md">
            <AudioPlayer
              soundcloudSource="https://soundcloud.com/user-434601011/not-this?show_teaser=false"
            ></AudioPlayer>
          </div>
          <div className="col-md">
            <AudioPlayer
              soundcloudSource="https://soundcloud.com/user-434601011/these-foolish-things?show_teaser=false"
            ></AudioPlayer>
          </div>
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
