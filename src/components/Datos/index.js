import React from "react";
import { Container,Form,Row } from "react-bootstrap";
import "./styles.css";

const index=()=>{
    return(
        <div>
            <Container>
                <h3>Datos de contacto</h3>
                <Row>
                    <Form.Control className="mb-3" type="email" placeholder="Correo electrónico"/>
                    <Form.Control class="mb-3" type="number" placeholder="Teléfono celular"/>
                </Row>
            </Container>
        </div>
    );
};

export default index;