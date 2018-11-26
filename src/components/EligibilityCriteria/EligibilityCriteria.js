import React, {Component} from 'react';

class EligibilityCriteria extends Component {
    nextClickHandler = () => {
        this.props.history.push('/energy-provider');
    }

    render() {
        return (
            <div className="container">

            <div className="FormStyle">

            <h2> Services Criteria</h2>
            <h3> Please select the correct option to the right result</h3>
            <div >
                <label className="col-sm-3">
                Utilities 
                </label>   
                <div className="col-sm-9">
                    <div className="form-check">
                    <input class="form-check-input" type="radio" name="utilities"  value="option1" ></input>
                    <label class="form-check-label" for="exampleRadios1">Energy</label>
                    </div>
                    <div className="form-check">
                    <input class="form-check-input" type="radio" name="utilities"  value="option2"></input>
                    <label class="form-check-label" for="exampleRadios1">Water</label>
                    </div>
                </div>
            </div>
            <div >
                <label className="col-sm-3">
                Health
                </label>   
                <div className="col-sm-9">
                    <div className="form-check">
                    <input class="form-check-input" type="radio" name="health" value="option1"></input>
                    <label class="form-check-label" htmlFor="health">BUPA</label>
                    </div>
                    <div className="form-check">
                    <input class="form-check-input" type="radio" name="health" value="option2"></input>
                    <label class="form-check-label" for="health">Medicare</label>
                    </div>
                </div>
            </div>
            <div >
                <label className="col-sm-3">
                Data Provider
                </label>   
                <div className="col-sm-9">
                    <div className="form-check">
                    <input class="form-check-input" type="radio" name="data" value="option1" ></input>
                    <label class="form-check-label" for="exampleRadios1">Telstra</label>
                    </div>
                    <div className="form-check">
                    <input class="form-check-input" type="radio" name="data" value="option2" ></input>
                    <label class="form-check-label" for="exampleRadios1">TPG</label>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary" onClick={this.nextClickHandler}>Continue</button>

            </div>

           </div>
        );
    }
    
} 

export default EligibilityCriteria;