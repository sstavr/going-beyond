import React, {Component} from 'react';

class EnergyProvider extends Component {
    state = {
        provider: 'AGL'
    }

    provideChangeHandler = (event) => {
        //console.log("Value: ", event.target.value);
        this.setState({provider: event.target.value});
    }

    render() {
        let updatedTable = null;

        if(this.state.provider) {
            const selectedProvider = this.state.provider;
            console.log("Selected: ", selectedProvider);
            switch(selectedProvider) {
                case "AGL" :
                    updatedTable = (
                        <table className="table table-striped">
                        <thead className="thead-light">
                        <tr>
                            <th>Organisation</th>
                            <th>Product</th>
                            <th>Discount</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Victorian State Government</td>
                            <td>Annual Electricity Concession</td>
                            <td>17.5%</td>
                            <td><a href=".">Proceed</a> </td>
                        </tr>
                        <tr>
                            <td>Coles</td>
                            <td>Discount card</td>
                            <td>5%</td>
                            <td><a href=".">Proceed</a></td>
                        </tr>
                        <tr>
                            <td>Officeworks</td>
                            <td>Discount card</td>
                            <td>4%</td>
                            <td><a href=".">Proceed</a></td>
                        </tr>
                        <tr>
                            <td>Rebel Sport</td>
                            <td>Discount card</td>
                            <td>10%</td>
                            <td><a href=".">Proceed</a></td>
                        </tr>
                        </tbody>
                    </table>
                    );
                    break;
                case "BUPA" :
                    updatedTable = (
                        <table className="table table-striped">
                        <thead className="thead-light">
                        <tr>
                            <th>Organisation</th>
                            <th>Product</th>
                            <th>Discount</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Victorian State Government</td>
                            <td>Annual Electricity Concession</td>
                            <td>17.5%</td>
                            <td><a href=".">Proceed</a> </td>
                        </tr>
                        <tr>
                            <td>Coles</td>
                            <td>Discount card</td>
                            <td>5%</td>
                            <td><a href=".">Proceed</a></td>
                        </tr>
                        </tbody>
                    </table>
                    );
                    break;
                case "TPG" :
                    updatedTable = (
                        <table className="table table-striped">
                        <thead className="thead-light">
                        <tr>
                            <th>Organisation</th>
                            <th>Product</th>
                            <th>Discount</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Victorian State Government</td>
                            <td>Annual Electricity Concession</td>
                            <td>17.5%</td>
                            <td><a href=".">Proceed</a> </td>
                        </tr>
                        <tr>
                            <td>Coles</td>
                            <td>Discount card</td>
                            <td>5%</td>
                            <td><a href=".">Proceed</a></td>
                        </tr>
                        </tbody>
                    </table>
                    );
                    break;
                case "REDENERGY" :
                    updatedTable = (
                        <table className="table table-striped">
                        <thead className="thead-light">
                        <tr>
                            <th>Organisation</th>
                            <th>Product</th>
                            <th>Discount</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Victorian State Government</td>
                            <td>Annual Electricity Concession</td>
                            <td>17.5%</td>
                            <td><a href=".">Proceed</a> </td>
                        </tr>
                        <tr>
                            <td>Coles</td>
                            <td>Discount card</td>
                            <td>5%</td>
                            <td>Proceed</td>
                        </tr>
                        </tbody>
                    </table>
                    );
                    break;
                default:
                    updatedTable = null;
            }
        }

        return (
            <div className="FormStyle">
            <h2>Energy Provider</h2>

            <div>
                <h3>Hey Stavros, how can we help?</h3>
                <div className="row">
                    <label className="col-sm-5"> Select your provider : </label>
                    <select className="col-sm-7" value={this.state.provider} onChange={(event) => this.provideChangeHandler(event)}>
                        <option value="">Select an option</option>
                        <option value="AGL">AGL</option>
                        <option value="BUPA">BUPA</option>
                        <option value="TPG">TPG</option>
                        <option value="REDENERGY">RED ENERGY</option>
                    </select>
                </div>
                {updatedTable}
                    
                </div>
            </div>  
            
        );
    }
} 

export default EnergyProvider;