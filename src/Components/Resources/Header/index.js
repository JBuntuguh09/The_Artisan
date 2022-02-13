
import { Close, ClosedCaptionTwoTone, ContactSupport, Facebook, Home, HowToVote, LinkedIn, MenuOpen, MenuOutlined, Phone, Twitter, WhatsApp, WhereToVote } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
//import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
//import logo from '../Images/garrision.jpg'
import Button from 'react-bootstrap/Button'
import './index.css'


const Header = (props)=>{
const [click, setClick] = useState(false)
const [button, setButton] = useState(true)
const [username, setUsername] = useState('')

const closeMobileMenu = (page)=>{
    props.history.replace('/register')
    alert("klkl")
}

const showButton = ()=>{
    if(window.innerWidth<=960){
        setButton(false)
    }else{
        setButton(true)
    }
}
useEffect(()=>{
    showButton()
}, [])
const logout=()=>{
    props.history.replace('/register')
     
}





window.addEventListener('resize', showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/startpage" className="navbar-logo" >
                        {/* <img src = {logo} width="50" height="50" /> */}
                         THE ARTISAN
                    </Link>
                    <div className="menu-icon"  onClick={()=>{setClick(!click)}}>
                        {click ?<Close style={{color:'white'}}/>:<MenuOutlined style={{color:'white'}}/>}
                        
                        {/* <FontAwesome
                            className='super-crazy-colors'
                            name={click?'times':'bars'}
                        
                           // spin
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        /> */}
                        
                        </div>
                  

                        <ul className={click ?'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <a href='' className='nav-links' >
                               <Home/>
                               LOGIN
                                </a>
                            </li>

                            <li className='nav-item'>
                                <a  className='nav-links' href='/register' >
                               <HowToVote/>
                               SIGN UP
                                </a>
                            </li>

                         

  

                            

<Button variant="primary" style={{margin:"20px"}} active>
    POST A PROJECT
  </Button>
                        </ul>
                        
                    
                </div>
            </nav>
        </>
    )

    
}



export default Header