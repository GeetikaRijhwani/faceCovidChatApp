import React, { Component } from 'react';
import url from '../Url';
import { Link } from "react-router-dom";

export default class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            regConf: false
        }
        this.user = {}
        this.fields = {}
    }

    readValue(event, keyName) {
        this.user[keyName] = event.target.value;
        this.fields[keyName] = event.target;
    }

    hideRegMessage() {
        this.setState({regConf: false});
    }

    registerUser() {
        fetch(url.BASE_URL + url.REGISTRATION_URL, {
            method: "POST",
            body: JSON.stringify(this.user),
            headers: {"Content-Type": "application/json"}
        })
            .then(response => response.json())
            .then(message => {
                console.log(message);
                console.log(this.user);
                this.user = {};

                this.setState({ regConf: true });
                
                this.fields.name.value = "";
                this.fields.email.value = "";
                this.fields.password.value = "";
            })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
        <div className="container" style={{marginTop:"50px"}}>
                <h2>Register</h2>
                
                {
                    this.state.regConf === true ? (
                        <div style={{ marginTop: "20px" }} className="alert alert-success" onClick={() =>
                        {
                            this.hideRegMessage()
                        }}>User Registered!</div>
                    ): null
                }
            <div style={{ marginTop: "30px" }}>
                <div className="form-group">
                    <input type="text" onKeyUp={(event)=>{this.readValue(event, "name")}} className="form-control" placeholder="Name" />
                </div>

                <div className="form-group">
                    <input type="email" onKeyUp={(event)=>{this.readValue(event, "email")}} className="form-control" placeholder="Email" />
                </div>
                
                <div className="form-group">
                        <select onChange={(event) => { this.readValue(event, "role") }} className="form-control">
                            <option value="">--Register As--</option>
                            <option value="normalUser">Normal User</option>
                            <option value="counsellor">Counsellor</option>
                        </select>
                </div>

                <div className="form-group">
                    <input type="password" onKeyUp={(event)=>{this.readValue(event, "password")}} className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                        <button className="btn btn-primary" onClick={() => this.registerUser()}>Register</button>
                        <Link to="/login" className="nav-link">
              Existing User? Login here
            </Link>
                </div>
            </div>
        </div>
        )
    }
}
