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

  /**
   * Pass into all audio players on this page to insure when they are "played", other audio is paused.
   * 
   * @param event - event returned from react-audio-player onPlay handler, contains audio src which is being played 
   */
  handlePlayClick(event) {
    var audioPlayersAudio = document.querySelectorAll('.audioPlayer audio');
    for (var i = 0; i < audioPlayersAudio.length; i++) { 
      if(audioPlayersAudio[i].src != event.target.src) {
        audioPlayersAudio[i].pause();
      }
    } 
  }

  getAudioComponent() {

    return (
      <React.Fragment>
        <div className="row">
          <AudioPlayer 
            audioSource={bach_lourree}
            songTitle={"Bach Louree"}
            handlePlayClick={this.handlePlayClick}
          ></AudioPlayer>

          <AudioPlayer
            class="audioPlayer"
            audioSource={lulus_back_in_town}
            songTitle={"Lulu's Back In Town"}
            handlePlayClick={this.handlePlayClick}
          ></AudioPlayer>
        </div>

        <div className="row">
        <AudioPlayer 
            class="audioPlayer"
            audioSource={somewhere_over_the_rainbow}
            songTitle={"Somewhere Over The Rainbow"}
            handlePlayClick={this.handlePlayClick}
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
