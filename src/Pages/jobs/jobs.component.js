import React from "react";
import './jobs.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBox } from "../../Components/Resources/search";
import { JobsFilter } from "../../Components/Resources/filter";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Resources/Header";
import { JobCards } from "../../Components/job-cards/job-cards.component";

export class Jobs extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ users: users }));
    }

    handleChange = e => {
        console.log(this.state.searchField)
        return e => this.setState({ searchField: e.target.value })
    }

    getFilter = () => {
        const { users, searchField } = this.state;
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchField.toLowerCase()) || user.address.city.toLowerCase().includes(searchField.toLowerCase()) 
        );
        return filteredUsers
    }

    render() {
        const filteredUsers = this.getFilter()
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <SearchBox users={filteredUsers} handleChange={this.handleChange} placeholder="search jobs" />
                    </Row>
                    <Row>
                        <Col id="jobfilter" sm={3}><JobsFilter handleChange={this.handleChange} /></Col>
                        <Col sm={7}><JobCards users={filteredUsers}/></Col>
                    </Row>
                </Container>

            </div>
        );
    }

}