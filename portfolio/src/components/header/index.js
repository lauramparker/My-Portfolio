import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-white">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                to="/index"
                                className={window.location.pathname==="/index" ? "nav-link active" : "nav-link"}>About 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/portfolio"
                                className={window.location.pathname==="/portfolio" ? "nav-link active" : "nav-link"}>Portfolio
                            </Link>
                        </li>
                        <li classname="nav-item">
                            <Link 
                                to="/contact"
                                className={window.location.pathname==="/contact" ? "nav-link active" : "nav-link"}>Contact
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link classname="nav-link disabled" to="#" tabindex="-1" aria-disabled="true"></Link>
                        </li> */}
                    </ul>
                </div>



        </div>


    )
}