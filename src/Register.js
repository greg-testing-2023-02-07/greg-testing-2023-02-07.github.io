import React from 'react';
import {register, login} from './auth.js';
import blake2b from 'blake2b';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountName: '',
            accountDisplayName: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        await register(this.state.accountName, this.state.accountDisplayName);
    }

    async handleLogin(event) {
        event.preventDefault();
        await login(this.state.loginAccountName);
    }

    render() {

        return (
            <div>
            <h2>Register</h2>
                <form id="register-form" onSubmit={async (e) => {this.handleSubmit(e)}}>
                <label>Account Name</label>
                <input
                 name="accountName"
                 type="text"
                 id="accountName"
                 value={this.state.accountName}
                 onChange={this.handleInputChange}
                />
                <label>Account Display Name</label>
                <input type="text" id="accountDisplayName"/>
                <input type="submit" id="register-button" value="Register"/>
            </form>

            <h2>Login</h2>
                <form id="register-form" onSubmit={async (e) => {this.handleLogin(e)}}>
                <label>Account Name</label>
                <input
                 name="loginAccountName"
                 type="text"
                 value={this.state.loginAccountName}
                 onChange={this.handleInputChange}
                />
                <input type="submit" id="login-button" value="Login"/>
            </form>
                <div class="flex">
                    <input type="text" onChange={this.handleInputChange}/>
                    <div>
                        <a href="">Register</a>
                        <span>/</span>
                        <a href="">Login</a>
                    </div>
                </div>
            </div>
        )
    }
}
