import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./styles.css";
import Respuesta from "../Respuesta/Respuesta";

const Nombre = () => {
    const [values, setValues] = useState({
        name: "",
        secondName: "",
        lastName: "",
        lastName2: "",
        prueba: false
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: (value + " ") });
    };
    const { name, secondName, lastName, lastName2 } = values;
    const array = [values.name, values.secondName, values.lastName, values.lastName2];

    return (
        <div>
            <Container>
                <h3>¿Cuál es tu nombre?</h3>
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
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                value={name}
                                onChange={handleChange} />
                            <Form.Control
                                className="mb-3"
                                type="text"
                                placeholder="Segundo nombre"
                                name="secondName"
                                value={secondName}
                                onChange={handleChange} />
                            <Form.Control
                                className="mb-3"
                                type="text"
                                placeholder="Apellido paterno"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange} />
                            <Form.Control
                                className="mb-3"
                                type="text"
                                placeholder="Apellido materno"
                                name="lastName2"
                                value={lastName2}
                                onChange={handleChange} />
                        </Form>
                    </Col>
                </Row>
                <div>
                    <Respuesta info={array} item="nombreItem" />
                </div>
            </Container>
        </div>
    );
};

export default Nombre;