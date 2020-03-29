import React, { Component } from "react";
import ReactAudioPlayer from 'react-audio-player';
import bach_lourree from "../../../assets/audio/bach_louree_c_major_partitita.wav";
import lulus_back_in_town from "../../../assets/audio/lulus_back_in_town.wav";
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
          <AudioPlayer audioSource={bach_lourree}
            songTitle={"Bach Louree"}
          ></AudioPlayer>

          <AudioPlayer audioSource={lulus_back_in_town}
            songTitle={"Lulu's Back In Town"}
          ></AudioPlayer>
        </div>
      </React.Fragment>
      );
  }

  render() {
    const { } = this.state;
    return (
<div id="audioPlayerWrapper">

        {this.getAudioComponent()}
</div>
    );
  }
}
