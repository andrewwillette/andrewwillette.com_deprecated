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
        <ul id="resume-employment">
            <li>
                Cerner <text>2017-2020</text>
                <ul>
                    <li>
                        Software Engineer - Cloud Identity and Access Management (Cloud IAM)
                    </li>
                </ul>
            </li>
            <li>
                GOM Software International <text>2018-2020</text>
                <ul>
                    <li>
                        Software Engineer - Agricultural Feeding Division
                    </li>
                </ul>
            </li>
            <li>
                Fiddling Technologies LLC <text>2017-2020</text>
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
                        Full Stack Apache Maven/Java Spring development for security token (OAuth1, OAuth2, SAML) cloud services
                    </li>
                    <li>
                        Extensive JUnit and Spock(groovy) testing on REST APIs and individual components
                    </li>
                    <li>
                        SQL: Oracle DB Schema extension and modification for System Account Management creation and maintenance
                    </li>
                    <li>
                        Apache Tomcat
                    </li>
                    <li>
                        Jakarta Server Pages(JSP) front ends
                    </li>
                </ul>
            </li>
            <li>
                Javascript
                <ul>
                    <li>
                        Worked in team which designed/implemented a React Single-Page-Application(SPA) for purposes of a single destination for all Cerner's identity providers/clients to login into a Single-Sign-On session
                    </li>
                    <li>
                        Extensive testing experience in the npm environment (mocha, jest, chai, jasmine, enzyme)
                    </li>
                    <li>
                        Implemented front-end Typescript library for managing service calls in SSO login process, consumed by both Cloud IAM team and all Cerner web-based applications that want to integrate with our SSO solutions
                    </li>
                </ul>
            </li>
            <li>
                AWS
                <ul>
                    <li>
                        Handle personalized Terraform configurations for individual cloud deployments
                    </li>
                    <li>
                        Deployed Jenkins master and slaves into AWS with custom jobs managed via Jenkins groovy APIs
                    </li>
                    <li>
                        Custom AMI's for all solutions managed via Packer/Chef
                    </li>
                    <li>
                        Strong familiarity with AWS billing practices
                    </li>
                </ul>
            </li>
            <li>
                C#
                <ul>
                    <li>
                        Full stack .NET Core development for agricultural feeding customization
                    </li>
                    <li>
                        Razor front end implementations with knockout.js
                    </li>
                    <li>
                        Implemented Braintree online payment system collecting credit and debit cards for scheduled payment processing
                    </li>
                    <li>
                        SQL Server Schema design and implementation for feeding application management (Rations, Ration Reports, Ration Ingredients, Consultants, Producers)
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
            <li>
                Miscellaneous
                <ul>
                    <li>
                        Linux (Rhel, Ubuntu)
                    </li>
                    <li>
                        Bash
                    </li>
                    <li>
                        IntelliJ Eclipse/Rider, Vim, Visual Studio
                    </li>
                    <li>
                        HIPPA
                    </li>
                    <li>
                        New Relic One
                    </li>
                    <li>
                        GraphQL
                    </li>
                    <li>
                        Wireshark
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
