import React, { Component } from "react";
import './index.css'
export default class SignUp extends Component {
    render() {
        return (
            <div style={{ marginTop: "40px" }}>
                <div className="outer">
                    <div className="inner">
                        <form>
                            <h3>Register</h3>

                            <div className="form-group">
                                <label style={{ marginTop: "10px" }}  >First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label style={{ marginTop: "10px" }}  >Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label style={{ marginTop: "10px" }} >Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label style={{ marginTop: "10px" }} >Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" style={{ marginTop: "15px" }} className="btn btn-dark btn-lg btn-block">Register</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="/login">log in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}