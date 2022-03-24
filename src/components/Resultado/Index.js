import React from "react";
import { Container, Row } from "react-bootstrap";

const Index = (props) => {

    //var test = sessionStorage.getItem("prueba");


    return (
        <div>
            <Container>
                <Row>
                    <p>{props.fechaItem}</p>
                    <p>{props.correoItem}</p>
                    <p>{props.telefonoItem}</p>
                    <p>{props.nombreItem}</p>
                </Row>
            </Container>


        </div>
    );
};
export default Index;