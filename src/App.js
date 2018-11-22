import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import EligibilityCriteria from './components/EligibilityCriteria/EligibilityCriteria';
import EnergyProvider from './components/EnergyProvider/EnergyProvider';

import logoHeader from './assets/images/landscape.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            Going Beyond
          </header>

          <Route path="/personal" component={PersonalDetails} />
          <Route path="/eligibility" component={EligibilityCriteria} />
          <Route path="/energy-provider" component={EnergyProvider} />
          <Route path="/" exact component={Login} />

        </div>
        </BrowserRouter>
    );
  }
}

export default App;
