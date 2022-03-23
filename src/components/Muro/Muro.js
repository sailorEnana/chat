import React from 'react';
import Nombre from "../Nombre/Index";
import Nacimiento from "../Nacimiento/Index";
import Datos from "../Datos/Index";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsSuitHeart } from "react-icons/bs";
import "./style.css";

const Muro = () => {
    return (
        <div>
            <Row className="header m-auto p-auto">
                <Col sm={8}>
                    <h2>Titulo de formulario</h2>
                    <h5>En menos de 5 minutos</h5>
                </Col>
                <Col sm={4}>
                    <h1>
                        < BsSuitHeart className='icon m-auto p-auto' />
                    </h1>

                </Col>
            </Row>
            <Container>
                <Col sm={2}></Col>
                <Col sm={8} className=" mt-3 m-auto p-auto">
                    <Nombre />
                    <Nacimiento />
                    <Datos />
                </Col>
                <Col sm={2}></Col>
                <Row>
                    <Button className="prueba m-auto p-auto" size="lg">Iniciar</Button>
                </Row>
            </Container>

        </div>
    );
};
export default Muro; 