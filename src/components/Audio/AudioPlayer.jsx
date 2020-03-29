import React, { Component } from "react";
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
  }

  render() {
    return (
        <div className="audioPlayer">
            <h5>{this.props.songTitle}</h5>
          <ReactAudioPlayer
                  id="lulus_back_in_town"
            src={this.props.audioSource}
            autoPlay={false}
            controls
            volume={.5}
          />
        </div>
    );
  }
}
