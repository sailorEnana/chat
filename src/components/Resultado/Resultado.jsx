import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.css";

const Index = (props) => {

    return (
        <div>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8} className="resultado mt-4">
                    <p>{props.fechaItem}</p>
                    <p>{props.correoItem}</p>
                    <p>{props.telefonoItem}</p>
                    <p>{props.nombreItem}</p>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </div>
    );
};
export default Index;