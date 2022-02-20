import React from "react";
import './jobCards.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

export const JobCards = ({ users }) => {

    return (
        <>
            {users.map(user => {
                return (<div className="text-dark">
                    <h4>{user.name}</h4>
                    <p>{user.address.city}</p>
                </div>)
            })}

        </>
    );
}

