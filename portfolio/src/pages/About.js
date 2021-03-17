import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col size="md-8">
                        <div className="media">
                            <img src="https://lauramparker.github.io/My-Portfolio/images/LMPheadshot.png"  alt="Laura M. Parker headshot" style = {{ width: "250-px", height: "350-px" }}></img>
                        </div>
                    
                    </Col>
                    <Col>
                        <div className="media-body, ml-3, mr-3">
                        <p> I am a mid-career professional based in Columbus, OH with broad experience in both large and small organizations.  I have deep experience as a leader and proven project manager in the learning and develpment industry, working across multiple disciplines (IT, sales & marketing, research, and product management).   
                            Eight years of my professional experience was gained working with media and publishing corporations, with whom I held roles as a consultant for digital products, product manager, and VP of Solution Architects.
                            In addition, I guided relationships and product alignment between content develop teams and third-party software companies. 
                            In the years that followed, I worked as a consultant for both product development and implementation within the learning and development industry, leveraging my experience with digital learning solutions.  
                            This included short-term contracts with market research firms, and longer engagements with start-up projects and organizations.</p>
                        <p> In the last three years, I have invested in my own professional development and career transition.  During this transition, I have acquired new skills in fullstack web development and marketing analytics, in addition to launching a small business. 
                            At this stage of life and career, I am interested in opportunities to grow my experience as a full-stack developer, with hopes of leading an innovative product development team in the future.    
                            Outside of work, I enjoy playing with my two young children, gardening, playing tennis, and exploring our beautiful local and National Parks.</p>

                            <div class="card float-right">
                                    <div class="card-header">
                                    <small><strong>Please Contact Me:</strong></small>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item"><Link><small>lauramparker78@gmail.com</small></Link></li>
                                      <li class="list-group-item"><small>(m) 386-747-8362</small></li>
                                      <li class="list-group-item"><Link><small><a href>www.linkedin.com/in/laura-p-5a3bbb198/</a></small></ Link></li>
                                      <li class="list-group-item"><Link><small><a href>https://github.com/lauramparker</a></small></Link></li>
                                      <li class= "list-group-item bg-light"><small><strong>Download My Resume</strong></small>
                                      <Link><a href="./images/LMP-Resume.pdf" download>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle-fill" fill="#e98074" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                              </svg>
                                          </a>
                                        </ Link>
                                      </li>
                                    </ul>
                                </div>

                        </div>
                    
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default About;
