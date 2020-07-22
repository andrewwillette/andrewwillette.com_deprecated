import React, { Component } from "react";
import bach_lourree from "../../../assets/audio/bach_louree_c_major_partitita.wav";
import lulus_back_in_town from "../../../assets/audio/lulus_back_in_town.wav";
import somewhere_over_the_rainbow from "../../../assets/audio/somewhere_over_the_rainbow.wav";

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
            soundcloudSource="https://soundcloud.com/user-434601011/bach-louree-c-major-partitita?color=000000"
          ></AudioPlayer>
          <AudioPlayer
            soundcloudSource="https://soundcloud.com/user-434601011/somewhere-over-the-rainbow?color=000000"
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
