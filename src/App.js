import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import EligibilityCriteria from './components/EligibilityCriteria/EligibilityCriteria';
import EnergyProvider from './components/EnergyProvider/EnergyProvider';

import newLogo from './/assets/images/going-beyond.png';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="LoginHeader">
              <img src={newLogo} alt="Going Beyond" className="LoginImage" />
          </div>
          <Route path="/personal" component={PersonalDetails} />
          <Route path="/eligibility" component={EligibilityCriteria} /> 
          <Route path="/login" component={Login} />
          <Route path="/" exact component={EnergyProvider} /> 

        </div>
        </BrowserRouter>
    );
  }
}

export default App;
