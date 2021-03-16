import React from "react";
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
                    <Col>
                        <div className="media">
                            <img src="images/LMPheadshot.png" alt="Laura M. Parker headshot"></img>
                            
                        </div>
                    
                    </Col>
                    <Col>
                        <div className="media-body, ml-3, mr-3">
                        <p> I am a mid-career professional based in Columbus, OH with broad experience in both large and small organizations.  I have deep experience as a leader and proven project manager in the learning and develpment industry, working across multiple disciplines (IT, sales & marketing, research, and product management).   
                            Eight years of my professional expereince was gained working with media and publishing corporations, with whom I held roles as a consultant for digital products, product manager, and VP of Solution Architects.
                            In addition, I guided relationships and product alignment between content developers and software companies. 
                            In the years that followed, I worked as a consultant for both product development and implementation within the learning and development industry, leveraging my experience with digital learning solutions.  
                            This included short-term contracts with market research firms, and longer engagements with start-up projects and organizations.</p>
                        <p> In the last three years, I have invested in my own professional development and career transition.  During this transition, I have acquired new skills in fullstack web development and marketing analytics, in addition to launching a small business. 
                            At this stage of life and career, I am interested in opportunities to grow my experience as a full-stack developer, with hopes of leading an innovative product development team in the future.    
                            Outside of work, I enjoy playing with my two young children, gardening, playing tennis, and exploring our beautiful local and National Parks.</p>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default About;
