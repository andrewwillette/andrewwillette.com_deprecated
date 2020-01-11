import React, { Component } from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "react-h5-audio-player";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <AudioPlayer
    autoPlay
    src="../../../../assets/audio/b3_2v3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
      </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : console.log('cant find form');