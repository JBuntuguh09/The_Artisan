import React from "react";
import './job-cards.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import HomeCarousel from "../carousel/carousel.component";
import CustomButton from "../Resources/custom-button/custom-button.component";

export class JobCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: {}
        }

    }

    caroArray = [
        {
            title: "Plumbers",
            imageUrl:
                "https://media.istockphoto.com/photos/black-male-plumber-at-work-picture-id1348934184?b=1&k=20&m=1348934184&s=170667a&w=0&h=Y6_76kemqf4aSEPwM5xEw9pxbyEM9QMTMVouRiJM72M=",
            caption: "We have the best plumbers here",
            alt: "first slide"
        },
        {
            title: "Capenters",
            imageUrl:
                "https://media.istockphoto.com/photos/plumber-at-work-in-a-bathroom-plumbing-repair-service-assemble-and-picture-id918319088?b=1&k=20&m=918319088&s=170667a&w=0&h=-YgoN2GgVmYrEMFLz_qsb8LZvIWmjJHaKrIjKrTiQ2U=",
            caption: "We have the best Capenters here",
            alt: "second slide"
        },
        {
            title: "Brick Layer/Mason",
            imageUrl:
                "https://media.istockphoto.com/photos/construction-workers-building-concrete-block-wall-picture-id175205008?b=1&k=20&m=175205008&s=170667a&w=0&h=YCFU_mz9ZNG1z2fW-HGYhH3utfPVYNB4BIlqe18fODA=",
            caption: "We have the best masons/brick layers here",
            alt: "third slide"
        },
    ];

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((photos) => this.setState({ photos: photos[0] }));
    }
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

