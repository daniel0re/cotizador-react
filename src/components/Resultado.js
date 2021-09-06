import React from 'react';
import styled from '@emotion/styled';
import PropTypes from "prop-types";

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`;


const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const Cotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({ cotizacion }) => {


    return (
        (cotizacion === 0)
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
            :
            (
                <ResultadoCotizacion>
                    <Cotizacion>El total a pagar es: S/. {cotizacion}</Cotizacion>
                </ResultadoCotizacion>
            )

    );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
export default Resultado;