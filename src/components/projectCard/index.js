import React from "react";
import { Card } from "react-bootstrap";

function ProjectCard(props) {
    return (
        <Card className='project'>
            <Card.Title style={{alignSelf: 'center', margin: 'auto', textDecoration: 'bold'}}><h4>{props.title}</h4></Card.Title>
            <Card.Img className='img' variant="top" src={props.image}/>
            <Card.Body>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text>Technologies Used: {props.technologies}</Card.Text>
                <Card.Link href={props.repo} style={{position:'absolute', bottom: '10px'}}><p><u>GitHub Repository</u></p></Card.Link>
                <Card.Link href={props.deploy} style={{position:'absolute', right: '30px', bottom: '10px'}}><p><u>Deployed App</u></p></Card.Link>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;