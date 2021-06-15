import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, ListGroup, ListGroupItem, Card } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";

function About() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <div>
                            <img src= "https://raw.githubusercontent.com/lauramparker/My-Portfolio/main/public/images/LMPheadshot.png" class="headshot" alt="Laura M. Parker headshot" ></img>
                        </div>
                        <div className='paragraph' style={{ width: '80%' }}>
                            <p> I am a mid-career professional based in Columbus, OH with broad experience in both large and small organizations.  I have deep experience as a leader and proven project manager in the learning and develpment industry, working across multiple disciplines (IT, sales & marketing, research, and product management).
                            Eight years of my professional experience were spent working with media and publishing corporations, with whom I held roles as a consultant for digital products, product manager, and VP of Solution Architects.
                            In addition, I guided relationships and product alignment between content develop teams and third-party software companies.
                            In the years that followed, I worked as a consultant for both product development and implementation within the learning and development industry, leveraging my experience with digital learning solutions.
                            This included short-term contracts with market research firms, and longer engagements with start-up projects and organizations.</p>
                            <p> More recently, I have invested in developing my technical skills in programming and analytics.  I have acquired new skills in fullstack web development and marketing analytics.
                            At this stage of life and career, I am interested in opportunities to grow my experience in technical roles, with hopes of leading an innovative product development team in the future.
                            Outside of work, I enjoy playing with my two young children, gardening, volunteering, and exploring our beautiful local and National Parks.</p>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card style={{ width: '75%' }}>
                            <Card.Header>
                                <small><strong>Please Contact Me:</strong></small>
                            </Card.Header>
                            <ListGroup variant='flush'>
                                <ListGroupItem><Link><small>lauramparker78@gmail.com</small></Link></ListGroupItem>
                                <ListGroupItem><small>(m) 386-747-8362</small></ListGroupItem>
                                <ListGroupItem><Link><small><a href>https://www.linkedin.com/in/laura-parker-5a3bbb198/</a></small></ Link></ListGroupItem>
                                <ListGroupItem><Link><small><a href>https://github.com/lauramparker</a></small></Link></ListGroupItem>
                                <ListGroupItem variant='light'><small><strong>Download My Resume</strong></small><br></br>
                                    <a href="./images/LMP-Resume.pdf" download>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle-fill" fill="#e98074" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                                        </svg>
                                    </a>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '75%' }}>
                            <Card.Header>
                                <small><strong>Skills:</strong></small>
                            </Card.Header>
                            <ListGroup variant='flush'>
                                <ListGroupItem><small>Technical:</small>
                                    <li>Javascript</li>
                                    <li>Node/Express</li>
                                    <li>MongoDB, SQL</li>
                                    <li>React, Angular, JQuery</li>
                                    <li>HTML/CSS, Bootstrap, Material-UI, UIKit </li>
                                    </ListGroupItem>
                                <ListGroupItem><small>Operational:</small>
                                    <li>Project Management</li>
                                    <li>Talent Management</li>
                                    <li>Messaging & Communication</li>
                                    <li>Budget Planning</li>
                                    </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>


                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default About;
