import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import "./styles.css";
import Respuesta from "../Respuesta/Index";

const Index = () => {
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
    const array = [values.day, values.month, values.year];
    console.log(array);
    return (
        <div>
            <Container>
                <h3>¿Cuál es tu fecha de nacimiento?</h3>
                <Row>
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
                        onChange={handleChange}
                    />
                </Row>
                <Respuesta info={array} />
            </Container>
        </div>
    );
};

export default Index;