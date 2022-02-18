import React from 'react'
import { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    render() {
        return (
            <div style={{ margin: "5em", }}>
                <Form style={{ width: "35%", margin: "auto", borderRadius: "10px", padding: '60px', background: "white" }}>
                    <h2>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p className="forgot-password text-right">
                                Not registered? <a href="/register">Register here!</a>
                            </p>
                </Form>

            </div>
        )
    }

}

export default Login;