import React, { useState } from 'react'
import { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './login.styles.scss'
import Header from '../Resources/Header/header.component';
import { Link } from 'react-router-dom';
import fire from '../Config/fire';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate();
    function handleClick(val) {
        navigate(val);
    }

    async function loginTo() {
        if (email === "") {
            alert("Enter your Email")
        } else if (!email.includes("@")) {
            alert("Enter a properly formated email")
        } else if (password === "") {
            alert("Enter your password")
        } else {

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const userId = userCredential.user.uid;
                    localStorage.setItem("userId", userId)
                    localStorage.setItem("email", email)
                    // ...
                    signInWithEmailAndPassword(auth, "lonewolf.09@hotmail.com", "passwordzero24six")
                        .then((userCredential) => {
                            // Re Signed in 
                            localStorage.setItem("loggedin", "Yes")
                            handleClick("/jobs")


                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            alert(errorMessage)
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                });
        }
    }


    return (
        <>
            <Header />
            <div style={{ margin: "5em", }}>
                <Form className="form" >
                    <h2>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoComplete="true" type="email"
                            onChange={(event) => { setEmail(event.target.value) }}
                            placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoComplete="true" type="password"
                            onChange={(event) => { setPassword(event.target.value) }}
                            placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary"
                        type='submit'
                        onClick={(e) => {
                            e.preventDefault()
                            loginTo()
                        }}
                    >
                        Submit
                    </Button>
                    <p className="forgot-password text-right">
                        Not registered? <Link to="/register">Register here!</Link>
                    </p>
                </Form>
            </div>
        </>

    )

}

export default Login;