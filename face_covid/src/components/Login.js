import React, { Component } from 'react';
import url from '../Url';
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			logConf: false
		}
		this.user = {}
	}

	readValue(event, keyName) {
		this.user[keyName] = event.target.value;
	}

	hideLogMessage() {
		this.setState({ logConf: false });
	}

	loginUser() {
		fetch(url.BASE_URL + url.LOGIN_URL, {
			method: "POST",
			body: JSON.stringify(this.user),
			headers: { "Content-Type": "application/json" }
		})
			.then(response => response.json())
			.then(message => {
				if (message.code === 0) {
					this.setState({ logConf: true });
				}
				else {
					localStorage.setItem("authToken", message.token);
					localStorage.setItem("authStatus", "true");
					localStorage.setItem("userID", message.user._id);
					this.props.history.replace('/chat')

				}
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div className="container" style={{ marginTop: "100px" }}>
				<Navigation />
				<h2>Login or Register to Chat with Counsellors</h2>

				{
					this.state.logConf === true ? (
						<div style={{ marginTop: "20px" }} className="alert alert-danger" onClick={() => {
							this.hideLogMessage()
						}}>Wrong Username or Password</div>
					) : null
				}
				<div style={{ marginTop: "30px" }}>

					<div className="form-group">
						<input type="email" onKeyUp={(event) => { this.readValue(event, "email") }} className="form-control" placeholder="Email" />
					</div>

					<div className="form-group">
						<input type="password" onKeyUp={(event) => { this.readValue(event, "password") }} className="form-control" placeholder="Password" />
					</div>

					<div className="form-group">
						<button className="btn btn-primary" onClick={() => this.loginUser()}>Login</button>
						<Link to="/register" className="nav-link">New User? Register Now
						</Link>
					</div>
				</div>
			</div>
		)
	}
}
