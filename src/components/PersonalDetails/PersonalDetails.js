import React, {Component} from 'react';

import classes from './PersonalDetails.module.css';

class PersonalDetails extends Component {
    nextClickHandler = () => {
        this.props.history.push('/eligibility');
    }

    render() {
        return (
            <div className="container">

            <div className={classes.FormStyle}>
            <h2>Personal Details</h2>
            
            <div className="form-group row">
            <label className="col-sm-3">Location</label>

            <div className="col-sm-9">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
            <label className="form-check-label" htmlFor="exampleRadios1">VIC</label>      
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
            <label className="form-check-label" htmlFor="exampleRadios1">NSW</label>
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
            <label className="form-check-label" htmlFor="exampleRadios1">QLD</label>
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
            <label className="form-check-label" htmlFor="exampleRadios1">SA</label>
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
            <label className="form-check-label" htmlFor="exampleRadios1">WA</label>
           </div>
           </div>

           <div className="form-group row">
           <label className="col-sm-3">
           CRN (Centerlink refrence number)</label>
           <div className="col-sm-9">
           <input type="text" className="form-control" name="name" />
            </div>
          </div>

          <div className="form-group row">
          <label className="col-sm-3">
           Medicare Card</label>
           <div className="col-sm-9">
           <input type="text" className="form-control" name="name" />
            </div>
          </div>

          <div className="form-group row"> 
          <label className="col-sm-3">
          Full Name</label>
          <div className="col-sm-9">
           <input type="text" className="form-control" name="name" />
            </div>
          </div>

          <div className="form-group row">
          <label className="col-sm-3">
             Comments</label>
             <div className="col-sm-9">
              <textarea value="" className="form-control" /></div>
            </div>
          
            <button type="submit" className="btn btn-primary" onClick={this.nextClickHandler}>Continue</button>

           </div>

           
           </div>
          
            
        );
    }
}

export default PersonalDetails;