import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Register extends React.Component {
    render(){
        return(
        <div>
            <form action="register.php">
            <div className="container">
            <h1>Register</h1>
            <p>Create an account to memorize your scores in games.</p>
                <div>
                    <label for="pseudo"><b>Pseudo</b></label>
                    <input type="text" placeholder="Enter Pseudo" name="pseudo" id="pseudo" required/>
                </div>
                <div>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required/>
                </div>
                <div>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
                </div>
                <div>
                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                </div>
                <button type="submit" class="registerbtn">Register</button>
            </div>
            <div className="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
            </form>
        </div>
        )  
    }
}

export default Register;