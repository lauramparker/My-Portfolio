import React, { useState } from "react";
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";
import Row from "../components/Row";
import Col from "../components/Col";

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        console.log("name is " + name);
        console.log("email is " + email);
        console.log("message is " + message);
    };

    return (
        <div>
            <Header />
             <form onSubmit={handleSubmit}>
            <Container className = "mt-3">
                <Row>
                    <Col>
                    <h4 className="ml-2">Contact</h4>
                    </Col>
                </Row>
            <Row className="form-group px-3">
                <Col>
                    <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={event => setName(event.target.value)}
                    />
                </Col>
            </Row>
            <Row className="form-group px-3">
                <Col>
                    <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={event => setEmail(event.target.value)}
                    />
                </Col>
            </Row>
            <Row className="form-group px-3">
                <Col>
                    <input
                    className="form-control"
                    type="text"
                    placeholder="Message"
                    name="message"
                    onChange={event => setMessage(event.target.value)}
                    />
                </Col>
            </Row>
                    <button className="btn btn-secondary" type="submit">
                    Submit
                    </button>
            </Container>
            </form>
            <Footer />
        </div>

    )
}

export default Contact;
