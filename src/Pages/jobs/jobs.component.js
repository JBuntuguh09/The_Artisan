import React from "react";
import './jobs.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBox } from "../../Components/Resources/search/search.component";
import { JobsFilter } from "../../Components/Resources/filter/filter.component";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Resources/Header/header.component";
import { JobCards } from "../../Components/job-cards/job-cards.component";

export class Jobs extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: "",
            filterArray: []
        };
    }

    

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ users: users }));

    }

    handleChange = e => {
        return this.setState({ searchField: e.target.value })
    }

    handleFilterChange = e => {
        if (e.target.checked) {
            document.getElementById('searchBox').disabled = true
            document.getElementById('searchBox').placeholder = 'Uncheck filter to use search'

            return this.setState(prevState => (
                prevState.filterArray.includes(e.target.value) ?
                    { filterArray: [...prevState.filterArray] }
                    :
                    { filterArray: [...prevState.filterArray, e.target.value] }
            ))
        } else {
            let currentState = this.state.filterArray
            let index = currentState.indexOf(e.target.value)
            currentState.splice(index, 1)

            return this.setState({ filterArray: currentState })
        }
    }

    getFilter = () => {
        const { users, searchField } = this.state;
        const searchedUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchField.toLowerCase()) || user.address.city.toLowerCase().includes(searchField.toLowerCase())
        );
        return searchedUsers
    }

    getFilteredList = () => {
        let filterUsers = []
        const { users, filterArray } = this.state

        for (let el of filterArray) {
            let found = users.filter((user) => user.name.toLowerCase().includes(el.toLowerCase()) || user.address.city.toLowerCase().includes(el.toLowerCase())
            )
            filterUsers = [...filterUsers, ...found]
        }
        return filterUsers
    }

    render() {
        let filteredUsers = this.getFilteredList().length !== 0 ? this.getFilteredList() : this.getFilter();
        filteredUsers = filteredUsers.filter((item, pos) => (filteredUsers.indexOf(item) === pos)).sort((a, b) => a.name.localeCompare(b.name))
        console.log(filteredUsers)
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <SearchBox filterUsers={this.getFilteredList()} handleChange={this.handleChange} placeholder="search jobs" />
                    </Row>
                    <Row>
                        <Col id="jobfilter" sm={3}>
                            <JobsFilter handleFilterChange={this.handleFilterChange} />
                        </Col>
                        <Col sm={7}>
                            <JobCards filteredUsers={filteredUsers} />
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }

}