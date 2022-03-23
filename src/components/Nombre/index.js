import React from "react";
import {Container, Form, Row } from "react-bootstrap";
import "./styles.css";

const index = () => {
    return (
        <div>
            <Container>
                <h3>¿Cuál es tu nombre?</h3>
                <Row>
                    <Form.Control className="mb-3" type="text" placeholder="Nombre" />
                    <Form.Control className="mb-3" type="text" placeholder="Segundo nombre" />
                    <Form.Control className="mb-3" type="text" placeholder="Apellido paterno" />
                    <Form.Control className="mb-3" type="text" placeholder="Apellido materno" />
                </Row>
            </Container>
        </div>
    );
};

export default index;