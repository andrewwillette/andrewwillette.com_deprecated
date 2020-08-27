import React, { Component } from "react";
import HomePage from "./Home/HomePage.jsx";
import AudioPage from "./Audio/AudioPage.jsx";
import ResumePage from "./Resume/ResumePage.jsx";
import ErrorPage from "./Errors/ErrorPage.jsx"
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

export default function App() {

  return( 
    <div id="app-page">
        <h1>
          <Link to="/">Andrew Willette</Link>
        </h1>
        <ul className="navbar">
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'>
              <HomePage></HomePage>
          </Route>
          <Route path='/music'>
              <AudioPage></AudioPage>
          </Route>
          <Route path='/resume'>
              <ResumePage></ResumePage>
          </Route>
          <Route>
              <ErrorPage></ErrorPage>
          </Route>
        </Switch>
    </div>
    );
}
