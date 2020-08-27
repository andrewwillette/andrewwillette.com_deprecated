import React, { Component } from "react";
import ResumeDetail from "./ResumeDetail.jsx";
import ResumeHeader from "./ResumeHeader.jsx";

export default class ResumePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div id="resume-page">
        <ResumeHeader value="Employment History"></ResumeHeader>
        <ResumeDetail values={["Cerner 2017-2020", "GOM Software International 2018-2020"]}></ResumeDetail>

        <ResumeHeader value="Technology"></ResumeHeader>
        <ResumeDetail values={["Java", "Python", "C#", "OAuth 2.0", "SAML", 
            "Rest APIs", "AWS", "React", "Ubuntu/Rhel Linux Distros"]}></ResumeDetail>

        <ResumeHeader value="Education"></ResumeHeader>
        <ResumeDetail values={["University of Iowa Bachaelor's Degree Computer Science, Violin"]}></ResumeDetail>
    </div>
    );
  }
}
