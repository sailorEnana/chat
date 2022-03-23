import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import "./styles.css";

const index = () => {
    return (
        <div>
            <Container>
                <h3>¿Cuál es tu fecha de nacimiento?</h3>
                <Row>
                    <Form.Control className="mb-3" type="number" placeholder="Día"/>
                    <Form.Control className="mb-3" type="text" placeholder="Mes"/>
                    <Form.Control className="mb-3" type="number" placeholder="Año"/>
                </Row>
            </Container>
        </div>
    );
};

export default index;