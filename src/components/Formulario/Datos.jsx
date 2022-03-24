import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./styles.css";
import Respuesta from "../Respuesta/Respuesta";

const Datos = () => {
    const [values, setValues] = useState({
        email: "",
        cellphone: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const { email, cellphone } = values;
    const array = [values.email, " ", values.cellphone];
    console.log(values);
    return (
        <div>
            <Container>
                <h3>Datos de contacto</h3>
                <Row>
                    <Col sm={2}>
                        <img
                            src='https://i.pinimg.com/736x/98/f4/b8/98f4b8593aece42995ba8703ff171e7e.jpg'
                            className='rounded-circle mr-2 img-fluid'
                            alt='...'
                            style={{ maxWidth: '4rem' }} />
                    </Col>
                    <Col sm={10}>
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
                    </Col>

                    <Respuesta info={array} item="datosItem"/>
                </Row>
            </Container>
        </div>
    );
};

export default Datos;