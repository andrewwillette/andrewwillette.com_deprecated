import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactAudioPlayer from 'react-audio-player';
import track1 from "../../assets/audio/bach_louree_c_major_partitita.wav";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
  }

  render() {
    const { } = this.state;
    return (

        <ReactAudioPlayer
        className="center"
        id="first-track"
  src={track1}
  autoPlay={false}
  controls
  volume={.5}
/>

    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : console.log('cant find form');