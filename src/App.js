import React, { useState, Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';

import styled from '@emotion/styled';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 2rem auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {


  // useState para el Spinner
  const [cargando, setCargando] = useState(false);

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  const { cotizacion } = resumen;


  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setCargando={setCargando}
        />

        {cargando ? <Spinner /> :
          <Fragment>
            <Resumen
              resumen={resumen}
            />

            <Resultado
              cotizacion={cotizacion}
            />
          </Fragment>
        }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
