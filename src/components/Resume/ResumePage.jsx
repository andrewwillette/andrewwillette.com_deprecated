import React, { Component } from "react";

export default class ResumePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div id="resume-page">

        <h3 className="resume-header">
            Employment
        </h3>
        <ul>
            <li>
                Cerner 2017-2020
                <ul>
                    <li>
                        Software Engineer - Cloud Identity Access and Management (Cloud IAM)
                    </li>
                </ul>
            </li>
            <li>
                GOM Software International 2018-2020
                <ul>
                    <li>
                        Software Engineer - Agricultural Feeding Division
                    </li>
                </ul>
            </li>
            <li>
                Fiddling Technologies 2017-2020
                <ul>
                    <li>
                        President
                    </li>
                </ul>
            </li>
        </ul>

        <h3 className="resume-header">
            Technology
        </h3>
        <ul>
            <li>
                Java
                <ul>
                    <li>
                        Full Stack Apache Maven/Java Spring development for security token (OAuth, SAML) cloud services.
                    </li>
                    <li>
                        Extensive JUnit and Spock(groovy) testing experience on REST APIs and individual components.
                    </li>
                    <li>
                        SQL: Oracle DB Schema extension and modification for account management approval, including backend Hibernate changes
                    </li>
                </ul>
            </li>
            <li>
                Javascript
                <ul>
                    <li>
                        Member of team which designed/built a React Single-Page-Application for purposes of a single destination for all Cerner's identity providers/clients to login into a Single-Sign-On session.
                    </li>
                    <li>
                        Extensive testing experience in the npm environment (mocha, jest, chai, jasmine, enzyme).
                    </li>
                    <li>
                        Implemented front-end Typescript library for managing service calls in SSO login process, consumed by both Cloud IAM team and all Cerner web-based applications that want to integrate with our SSO solutions.
                    </li>
                </ul>
            </li>
            <li>
                AWS
                <ul>
                    <li>
                        Wrote/modified personalized terraform configurations for individual cloud deployments.
                    </li>
                    <li>
                        Deployed Jenkins into AWS with custom written groovy scripts to allow all slaves to be EC2 deployed.
                    </li>
                    <li>
                        Custom AMI's for all solutions managed via Chef.
                    </li>
                </ul>
            </li>
            <li>
                C#
                <ul>
                    <li>
                        Full stack .Net Core development for agricultural feeding customization.
                    </li>
                    <li>
                        Razor front end implementations with knockout.js for UI work.
                    </li>
                    <li>
                        Implemented Braintree online payment system for the application, collecting credit and debit cards.
                    </li>
                </ul>
            </li>
            <li>
                Python
                <ul>
                    <li>
                        Implemented algorithmic trading engine using data from alpaca library, with visualization using numpy and panda.
                    </li>
                    <li>
                        Personal website sits on top of flask / gunicorn backend.
                    </li>
                </ul>
            </li>
        </ul>

        <h3 className="resume-header">
            Education: University of Iowa, 2014 - 2018
        </h3>
        <ul>
            <li>
                Bachaelor of Arts Degree - Computer Science
            </li>
            <li>
                Bachaelor of Arts Degree - Violin Performance
            </li>
        </ul>
    </div>
    );
  }
}
