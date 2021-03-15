import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
        <div className="media ml-4">
            <span className="border border-secondary">
                <img className = "align-self-start" width="350px" height="350px" src="./images/Bucket List.png" alt="Bucket List All Reviews preview"></img>
            </span>
            <div className="media-body ml-3 mr-3">
                <h5 className="mt-0"><strong>{props.title}</strong></h5>
                <p>{props.description}</p>
                <p><small>The project repository can be found here: <a href="url">{props.repo}</a></small></p>
                <p><small>The deployed project can be found here: <a href="url">{props.deploy}</a></small></p>
            </div>
        </div>
    );
}

export default ProjectCard;