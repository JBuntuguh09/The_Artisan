import React from "react";
import './job-cards.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import HomeCarousel from "../carousel/carousel.component";
import CustomButton from "../Resources/custom-button/custom-button.component";
import { caroArray } from "../Resources/data";

export class JobCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: {
                "thumbnailUrl": "https://randomuser.me/api/portraits/med/men/67.jpg"
            }
        }

    }

    caroArray = caroArray

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/photos")
    //         .then((response) => response.json())
    //         .then((photos) => this.setState({ photos: photos[0] }));
    // }
    render() {
        // console.log(this.state.photos)
        return (
            <>
                {this.props.filteredUsers.map(user => {
                    return (
                        <Container key={user.id} className="text-dark job-card">
                            <Row>
                                <Col className='m-2' id="jobfilter" sm={1}>
                                    <img width='50' src={this.state.photos.thumbnailUrl} alt='profile pic' />
                                </Col>
                                <Col sm={7}>
                                    <h4>{user.name}</h4>
                                    <p><span>Loc: </span><span>{user.address.city}</span> | <span>{user.phone}</span></p>
                                </Col>
                                <Col className='m-0' sm={3}>
                                    <HomeCarousel caroArray={this.caroArray} />
                                </Col>
                                <p className='get-in-touch'><span><CustomButton>View</CustomButton></span> <span><CustomButton>Contact</CustomButton></span></p>
                            </Row>
                        </Container>
                    )
                })}
            </>
        );
    }
}

