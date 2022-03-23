import React from "react";
import "./styles.css";
import { Row } from "react-bootstrap";

const index = (props) => {
    return (
        <div>
            <Row className="respuesta">
                <h5>soy respuesta</h5>
                <h4>{props.info}</h4>
            </Row>

        </div>
    );
};

export default index;