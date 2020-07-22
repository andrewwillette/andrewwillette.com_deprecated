import React, { Component } from "react";
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from "react-player"
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
  render() {
    return (
        <div className="audioPlayer">
            <h5>{this.props.songTitle}</h5>
          <ReactPlayer
            url = {this.props.soundcloudSource}
            width='90%'
            height='50%'
            className='react-player'
            config={{
              soundcloud: {
                options: { show_user:false, download:false, show_artwork:false }
              }
            }}
          />
        </div>
    );
  }
}
