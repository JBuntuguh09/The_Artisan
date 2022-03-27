import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './register.styles.css'
import Header from '../Resources/Header/header.component'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {getDatabase, set, ref} from "firebase/database"
import  Dropdown  from "react-dropdown";
import "react-dropdown/style.css"
import PopUp from "../Config/PopUp";
import { Spinner } from "react-bootstrap";


export default function SignUp () {

    const [fname, setFname]=useState("")
    const [lname, setLname]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [userType, setUserType] = useState("")
    const [popupState, setPopupState] = useState(false)
    
    let navigate = useNavigate();
    function handleClick(val) {
      navigate(val);
    } 

    function getUsertype(){
        var type=[]
        type.push("I am a seeking an artisan")
        type.push("I am an artisan")

        return type
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
            setPopupState(true)
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
                    User_Id : userId,
                    UserType : userType==="I am an artisan"?"Artist":"User"
                }); 
                 localStorage.setItem("loggedin", "Yes")
                 localStorage.setItem("fname", fname+" "+lname)
                 if(userType==="I am an artisan"){
                    handleClick("/setup_profile")
                 }else{
                    handleClick("/jobs")
                 }
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                    setPopupState(false)
                });         
                
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            setPopupState(false)
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

                            <div className="form-group" style={{marginTop:"20px"}}>
                            <Dropdown options={getUsertype()} placeholder="Select User type" 
                            value={userType} onChange={(e)=>{setUserType(e.value)}}/>
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
                        <PopUp 
                        openPopUp={popupState}
                        children={<Spinner animation="border" variant="success" />}/>
                        
                    </div>
                </div>
            </div>
            </>
        );
    
}