import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-white">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">About </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="portfolio.html">Portfolio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                        </li>
                    </ul>
                </div>



        </div>


    )
}