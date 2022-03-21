
import { Close, Home, HowToVote, LinkedIn, MenuOpen, MenuOutlined, WhereToVote } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './HeadSub.css'
import { Dropdown } from 'react-bootstrap'



export default function HeaderSub(){
    const[dJobs, setDJobs] = useState(false)
    return(
        <div>
            <nav className="navba">
                <div className="navbar-container">
                    
                <Dropdown onMouseOver={()=>setDJobs(true)}
                onMouseLeave={()=>setDJobs(false)}>
                    <Dropdown.Toggle variant="success" style={{backgroundColor:'transparent',
                     borderBlockColor:'transparent', borderColor:'transparent'}} id="dropdown-basic">
                        Find Jobs
                    </Dropdown.Toggle>

                    <Dropdown.Menu 
                    show={dJobs}> 
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>

                    <Link to={"/"} className="navbar-logo-side">
                    Find Artisans
                    </Link>
                    <Link to={"/"} className="navbar-logo-side">
                    Get Ideas
                    </Link>

                    <Link to={"/jobs"} className="navbar-logo-side">
                    Resources
                    </Link>
                    




                </div>
            </nav>

        </div>
    )
}