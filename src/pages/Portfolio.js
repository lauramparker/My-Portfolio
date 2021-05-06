import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import ProjectCard from "../components/projectCard";
import projects from "../projects.json";

function Portfolio() {
    return (
        <div>
            <Header></Header>
            <Container className="mt-3 px-5">
                <Row>
                    <Col sm-4>
                        <div className="grid">
                            {projects.map(project => {
                                return (
                                    <div className="grid-div">
                                    <ProjectCard
                                        title={project.title}
                                        image={project.image}
                                        description={project.description}
                                        repo={project.repo}
                                        deploy={project.deploy}
                                    />
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Portfolio;
