import React, { Component } from "react";
import ReactPlayer from "react-player"

export default class AudioPlayer extends Component {
  render() {
    return (
        <div className="audioPlayer">
            <h5>{this.props.songTitle}</h5>
          <ReactPlayer
            url = {this.props.soundcloudSource}
            width='90%' // wish I didn't have to put styling here but doesn't work in css, hacky sheee with this soundcloud widget
            height='50%'
            className='react-player'
            config={{
              soundcloud: {
                options: { show_user:false, show_teaser:false, color:'000000' }
              }
            }}
          />
        </div>
    );
  }
}
