import React, {Component} from 'react';

class Login extends Component {
    loginClickHandler = () => {
        this.props.history.push('/personal');
    }

    render() {
        return (
            <div className="container">
                <h1>Login to Going Beyond</h1>
    
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
    
                    <button type="submit" className="btn btn-primary" onClick={this.loginClickHandler}>Sign in</button>
                </form>
            </div>
        );
    }
} 

export default Login;