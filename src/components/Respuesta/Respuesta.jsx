import React from "react";
import "./styles.css";
import { Row, Col } from "react-bootstrap";

const Index = (props) => {
    sessionStorage.setItem(props.item,JSON.stringify(props.info));
    return (
        <div>
            <Row>
                <Col sm={1}></Col>
                <Col sm={9} className="respuesta">
                    <h4>{props.info}</h4>
                </Col>
                <Col sm={2}>
                    <img
                        src='https://i0.wp.com/wokii.com/wp-content/uploads/2020/07/corgi-el-perro-2.jpg?resize=700%2C700&ssl=1'
                        className='rounded-circle mr-2 img-fluid'
                        alt='...'
                        style={{ maxWidth: '4rem' }} />
                </Col>
            </Row>
        </div>
    );
};

export default Index;