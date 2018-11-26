import React, {Component} from 'react';


import classes from './Login.module.css';

class Login extends Component {
    loginClickHandler = () => {
        this.props.history.push('/personal');
    }

    render() {
        return (
            <div className="container">
                <div className={classes.CenterSpacing}>
                
                    <form className={classes.FormStyle}>
                        <div className="form-group row">
                            <label htmlFor="exampleInputEmail1" className="col-sm-3">Email address</label>
                            <div className="col-sm-9">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="exampleInputPassword1" className="col-sm-3">Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                        </div>
         
                            <div className={classes.ButtonSpace}>
                                <div className="col-sm-4">
                                    <button type="submit" className="btn btn-primary" onClick={this.loginClickHandler}>Guest login</button>
                                </div>
                                <div className="col-sm-4">
                                    <button type="submit" className="btn btn-primary" onClick={this.loginClickHandler}>Sign in</button>
                                </div>
                                <div className="col-sm-4">
                                    <button type="submit" className="btn btn-primary" onClick={this.loginClickHandler}>Register</button>
                                </div>
                            </div>
        
                        
                    </form>
                </div>
            </div>
        );
    }
} 

export default Login;