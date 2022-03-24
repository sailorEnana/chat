import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./styles.css";
import Respuesta from "../Respuesta/Respuesta";

const Nacimiento = () => {
    const [values, setValues] = useState({
        day: "",
        month: "",
        year: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const { day, month, year } = values;
    const array = [values.day, " ", values.month, " ", values.year];

    return (
        <div>
            <Container>
                <h3>¿Cuál es tu fecha de nacimiento?</h3>
                <Row>
                    <Col sm={2}>
                        <img
                            src='https://i.pinimg.com/736x/98/f4/b8/98f4b8593aece42995ba8703ff171e7e.jpg'
                            className='rounded-circle mr-2'
                            alt='...'
                            style={{ maxWidth: '4rem' }} />
                    </Col>
                    <Col sm={10}>
                        <Form>
                            <Form.Control
                                className="mb-3"
                                type="number"
                                placeholder="Día"
                                name="day"
                                value={day}
                                onChange={handleChange} />
                            <Form.Control
                                className="mb-3"
                                type="text"
                                placeholder="Nombre"
                                name="month"
                                value={month}
                                onChange={handleChange} />
                            <Form.Control
                                className="mb-3"
                                type="number"
                                placeholder="Año"
                                name="year"
                                value={year}
                                onChange={handleChange} />
                        </Form>
                    </Col>
                </Row>
                <Respuesta info={array} item="nacimientoItem" />
            </Container>
        </div>
    );
};

export default Nacimiento;