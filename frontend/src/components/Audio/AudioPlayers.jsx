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
                  <AudioPlayer
                      soundcloudSource="https://soundcloud.com/user-434601011/billy-on-the-lowground?show_teaser=false"
                  />
              </div>
              <div className="col-md">
                  <AudioPlayer
                      soundcloudSource="https://soundcloud.com/user-434601011/leave-it?show_teaser=false"
                  />
              </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div>
            <AudioPlayer
                soundcloudSource="https://soundcloud.com/user-434601011/bach-louree-c-major-partitita?show_teaser=false"
            />
            </div>
          </div>
          <div className="col-md">
          <AudioPlayer
              soundcloudSource="https://soundcloud.com/user-434601011/somewhereovertherainbow?show_teaser=false"
          />
          </div>
        </div>
        
        <div className="row">
          <div className="col-md">
            <AudioPlayer
                soundcloudSource="https://soundcloud.com/user-434601011/there-will-never-be-another-you-take3?show_teaser=false"
            />
          </div>
          <div className="col-md">
            <AudioPlayer
                soundcloudSource="https://soundcloud.com/user-434601011/capri?show_teaser=false"
            />
          </div>
        </div>
        <div className="row">
            <div className="col-md">
                <AudioPlayer
                    soundcloudSource="https://soundcloud.com/user-434601011/these-foolish-things?show_teaser=false"
                />
            </div>
            <div className="col-md">
                <AudioPlayer
                    soundcloudSource="https://soundcloud.com/user-434601011/dont-do-me-like-that?show_teaser=false"
                />
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
