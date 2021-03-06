import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import GifPlayer from "react-gif-player";

function ProjectCard(props) {
    return (
        <Card className='project'>
            <Card.Title style={{ alignSelf: 'center', margin: 'auto', textDecoration: 'bold' }}><h4>{props.title}</h4></Card.Title>
            {/* <Card.Img className='img' variant="top"></Card.Img> */}
            <div className='gifs'>
                <GifPlayer style ={{ marginLeft: '-140px'}} gif={props.image} autoplay={true}></GifPlayer>
            </div>
            <Card.Body>
                <Card.Text>{props.description}</Card.Text>
                <Row>
                    <Col>
                        <div className='technologies'>
                            <ListGroup>{(props.technologies).map(item => {
                                return (
                                    <li key={item} style={{ fontSize: '12px' , marginLeft: '0px'}}>{item}</li>
                                )
                            }
                            )}
                            </ListGroup>
                        </div>
                    </Col>
                    <Col>
                        <Card.Link href={props.repo} style={{ fontSize: '12px', position: 'absolute', right: '25px' }}><button>GitHub Repository</button></Card.Link><br></br>
                        <Card.Link href={props.deploy} style={{ fontSize: '12px', position: 'absolute', right: '25px', marginTop: '20px'}}><button>Deployed App</button></Card.Link>
                    </Col>
                </Row>
            </Card.Body>


        </Card>
    );
}

export default ProjectCard;