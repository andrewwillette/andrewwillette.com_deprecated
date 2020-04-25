import React, { Component } from "react";
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
  render() {
    return (
        <div className="audioPlayer">
            <h5>{this.props.songTitle}</h5>
          <ReactAudioPlayer
            src={this.props.audioSource}
            autoPlay={false}
            controls
            volume={.5}
            onPlay={
              this.props.handlePlayClick
              }
          />
        </div>
    );
  }
}
