import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'
import Header from '../../Resources/Header/index'


export default class SignUp extends Component {
    render() {
        return (
            <>
            <Header />
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
                                Already registered <Link to="/login">log in?</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </>
        );
    }
}