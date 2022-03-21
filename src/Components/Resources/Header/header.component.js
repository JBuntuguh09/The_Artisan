
import { Close, ClosedCaptionTwoTone, ContactSupport, Facebook, Home, HowToVote, LinkedIn, MenuOpen, MenuOutlined, Phone, Twitter, WhatsApp, WhereToVote } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
//import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
//import logo from '../Images/garrision.jpg'
import Button from 'react-bootstrap/Button'
import './header.styles.css'
import { getAuth, signOut } from "firebase/auth";




const Header = (props) => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [username, setUsername] = useState('')
    const [logState, setLogState] = useState(localStorage.getItem("loggedin"))

    const closeMobileMenu = (page) => {
        props.history.replace('/register')
        alert("klkl")
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])
    
    
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        //props.history.replace('/register')
        setLogState("No")
        localStorage.setItem("loggedin", "No")
    }).catch((error) => {
        // An error happened.
    });

    }



    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" >
                        {/* <img src = {logo} width="50" height="50" /> */}
                        THE ARTISAN
                    </Link>
                    <Link to={"/"} className="navbar-logo-side">
                    How it works
                    </Link>

                    <Link to={"/jobs"} className="navbar-logo-side">
                    Browse Jobs
                    </Link>
                    <div className="menu-icon" onClick={() => { setClick(!click) }}>
                        {click ? <Close style={{ color: 'white' }} /> : <MenuOutlined style={{ color: 'white' }} />}

                        {/* <FontAwesome
                            className='super-crazy-colors'
                            name={click?'times':'bars'}
                        
                           // spin
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        /> */}

                    </div>


                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            {logState==="Yes"?
                            <Link to='/login' onClick={(e)=>{e.preventDefault()
                                logout()
                                }} className='nav-links' >
                            <Home />
                            LOGOUT
                        </Link>:
                        <Link to='/login'  className='nav-links' >
                        <Home />
                        LOGIN
                        </Link>
                        }
                            
                        </li>

                        <li className='nav-item'>

                            <Link className='nav-links' to='/register' >
                                <HowToVote />
                                SIGN UP
                            </Link>
                        </li>
                        <Button variant="primary" style={{ margin: "20px" }} active>
                            POST A PROJECT
                        </Button>
                    </ul>


                </div>
            </nav>
        </>
    )
}

export default Header
