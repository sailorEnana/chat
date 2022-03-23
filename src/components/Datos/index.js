import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import "./styles.css";
import Respuesta from "../Respuesta/Index";

const Index = () => {
    const [values, setValues] = useState({
        email: "",
        cellphone: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const { email, cellphone } = values;
    const array = [values.email, values.cellphone];
    console.log(values);
    return (
        <div>
            <Container>
                <h3>Datos de contacto</h3>
                <Row>
                    <Form>
                        <Form.Control
                            className="mb-3"
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            value={email}
                            onChange={handleChange} />
                        <Form.Control
                            className="mb-3"
                            type="number"
                            placeholder="Teléfono celular"
                            name="cellphone"
                            value={cellphone}
                            onChange={handleChange} />
                    </Form>
                    <Respuesta info={array} />
                </Row>
            </Container>
        </div>
    );
};

export default Index;