import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './register.styles.css'
import Header from '../Resources/Header/index'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {getDatabase, set, ref} from "firebase/database"


export default function SignUp () {

    const [fname, setFname]=useState("")
    const [lname, setLname]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    
    let navigate = useNavigate();
    function handleClick(val) {
      navigate(val);
    } 

     async function  register(){

        if(fname===""){
            alert("Enter your First Name")
        }else if(lname===""){
            alert("Enter your Last Name")
        }else if(email===""){
            alert("Enter your Email")
        }else if(!email.includes("@")){
            alert("Enter a properly formated email")
        }else if(password===""){
            alert("Enter your password")
        }else if(password.length<=6){
            alert("Your password should be more than 6 characters")
        }else{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const userId = userCredential.user.uid;
            localStorage.setItem("userId", userId)
            localStorage.setItem("email", email)
           

            signInWithEmailAndPassword(auth, "lonewolf.09@hotmail.com", "passwordzero24six")
                .then((userCredential) => {
                    // Re Signed in 
                    const db = getDatabase();
                set(ref(db, 'Users/' + userId), {
                    First_Name: fname,
                    Last_Name : lname,
                    email: email,
                    password : password,
                    User_Id : userId
                }); 
                 
                handleClick("/jobs")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                });         
                
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
          });
        }
    }

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
                                <input type="text" className="form-control" 
                                onChange={(event)=>{
                                    setFname(event.target.value)
                                }}
                                 placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label style={{ marginTop: "10px" }}  >Last name</label>
                                <input type="text" className="form-control" 
                                onChange={(event)=>{
                                    setLname(event.target.value)
                                }}
                                 placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label style={{ marginTop: "10px" }} >Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" 
                                onChange={(event)=>{
                                    setEmail(event.target.value)
                                }}
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ marginTop: "10px" }} >Password</label>
                                <input type="password"
                                onChange={(event)=>{
                                    setPassword(event.target.value)
                                }}
                                className="form-control" placeholder="Enter password" />
                            </div>

                            <button 
                            onClick={(e)=>{
                                e.preventDefault()
                                register()
                            }}
                            style={{ marginTop: "15px" }} className="btn btn-dark btn-lg btn-block">Register</button>
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