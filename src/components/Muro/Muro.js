import React, { useState } from 'react';
import Nombre from "../Nombre/Index";
import Nacimiento from "../Nacimiento/Index";
import Datos from "../Datos/Index";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsSuitHeart } from "react-icons/bs";
import "./style.css";
import Resultado from "../Resultado/Index";

const Muro = (props) => {
    const [showResults, setShowResults] = React.useState(false)
    const [nombre, setNombre] = React.useState("");
    const [correo, setCorreo] = React.useState([]);
    const [fecha, setFecha] = React.useState([]);
    const [telefono, setTelfono] = React.useState([]);
    const onClick = () => {
        setShowResults(true);
        let nombreItems = JSON.parse(sessionStorage.getItem("nombreItem"));
        setNombre(LlenarString("Nombre: ", nombreItems));
        let fechaItems = JSON.parse(sessionStorage.getItem("nacimientoItem"));
        setFecha(LlenarString("Fecha de nacimiento: ", fechaItems))
        let datosItems = JSON.parse(sessionStorage.getItem("datosItem"));
        setCorreo("Email: " + datosItems[0]);
        setTelfono("Telefono: " + datosItems[2]);
    }

    function LlenarString(dato, arreglo) {
        console.log(typeof arreglo);
        arreglo.forEach(element => {
            dato += (" " + element);
        });
        return dato;
    }

    return (
        <div>

            <Container>
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
                <Col sm={2}></Col>
                <Col sm={8} className=" mt-3 m-auto p-auto">
                    <Nombre />
                    <Nacimiento />
                    <Datos />
                </Col>
                <Col sm={2}></Col>
                <Row>
                    <Button className="prueba m-auto p-auto mt-4" size="lg" onClick={onClick}>Iniciar</Button>
                    {showResults ?
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={8}><Resultado className="pt-4" nombreItem={nombre} fechaItem={fecha} correoItem={correo} telefonoItem={telefono} /></Col>
                            <Col sm={2}></Col>
                        </Row>
                        : null}
                </Row>
            </Container>
        </div>
    );
};
export default Muro; 