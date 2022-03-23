import React from 'react';
import "./styles.css";
import Nombre from "../Nombre";
import Nacimiento from "../Nacimiento";
import Datos from "../Datos";
const index = () => {
    return (
        <div>
            <h1>soy index del muro</h1>
            <Nombre/>
            <Nacimiento/>
            <Datos/>
        </div>
    );
};

export default index;