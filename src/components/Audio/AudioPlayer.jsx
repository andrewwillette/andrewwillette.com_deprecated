import React, { Component } from "react";
import ReactPlayer from "react-player/lazy/players/SoundCloud"

export default class AudioPlayer extends Component {
  render() {
    return (
        <div className="audioPlayer">
            <h5>{this.props.songTitle}</h5>
          <ReactPlayer
            url = {this.props.soundcloudSource}
            className='react-player'
            config={{
              soundcloud: {
                // should work according to docs https://github.com/CookPete/react-player but it's borked. I shove the data in url as query param lmao ??
                // options: { show_user:'false' }
              }
            }}
          />
        </div>
    );
  }
}
