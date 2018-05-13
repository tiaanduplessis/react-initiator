// @flow
import React from 'react';
import { render } from 'react-dom';
import logo from './assets/logo.svg';
import './App.css';

// declare var IN_DEV: boolean

const App = () => (
  <div className="app">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <h1 className="app-title">Welcome to React Initiator</h1>
    </header>
    {
      IN_DEV ? (
        <p className="app-intro">
      To get started, edit <code>src/App.jsx</code> and save to reload.
        </p>
      ) : (
        <p className="app-intro">This is a production build</p>
      )
    }

  </div>
);

const root = document.getElementById('app');

if (root) {
  render(<App />, root);
}

