import React from "react";
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";
import Row from "../components/Row";
import Col from "../components/Col";
import ProjectCard from "../components/projectCard";
import projects from "../projects.json";

function Portfolio() {
    return (
        <div>
            <Header></Header>
            <Container className="mt-3 px-5">
                <Row>
                    <Col size = "320-px">
                        <ProjectCard
                        title={projects[0].title}
                        image={projects[0].image}
                        description={projects[0].description}
                        repo={projects[0].repo}
                        deploy={projects[0].deploy}
                        />

                        <ProjectCard
                        title={projects[1].title}
                        image={projects[1].image}
                        description={projects[1].description}
                        repo={projects[1].repo}
                        deploy={projects[1].deploy}
                        />

                        <ProjectCard
                        title={projects[2].title}
                        image={projects[2].image}
                        description={projects[2].description}
                        repo={projects[2].repo}
                        deploy={projects[2].deploy}
                        />

                        <ProjectCard
                        title={projects[3].title}
                        image={projects[3].image}
                        description={projects[3].description}
                        repo={projects[3].repo}
                        deploy={projects[3].deploy}
                        />

                        <ProjectCard
                        title={projects[4].title}
                        image={projects[4].image}
                        description={projects[4].description}
                        repo={projects[4].repo}
                        deploy={projects[4].deploy}
                        />

                        <ProjectCard
                        title={projects[0].title}
                        image={projects[0].image}
                        description={projects[0].description}
                        repo={projects[0].repo}
                        deploy={projects[0].deploy}
                        />
                    </Col>
                </Row>       
            </Container>
            <Footer></Footer>
        </div>
      );
}

export default Portfolio;
