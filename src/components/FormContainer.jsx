import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactAudioPlayer from 'react-audio-player';
import bach_lourree from "../../assets/audio/bach_louree_c_major_partitita.wav";
import lulus_back_in_town from "../../assets/audio/lulus_back_in_town.wav";

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
<div>
        <ReactAudioPlayer
        className="center"
        id="bach_lourree"
  src={bach_lourree}
  autoPlay={false}
  controls
  volume={.5}
/>
<ReactAudioPlayer
        className="center"
        id="lulus_back_in_town"
  src={lulus_back_in_town}
  autoPlay={false}
  controls
  volume={.5}
/>
</div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : console.log('cant find form');