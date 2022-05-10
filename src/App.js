import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';

function App() {

  const manejarClick = () => {
    console.log('Click');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar Contador');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampLogo} 
          alt='Logo de freeCodeCamp'
          />
      </div>
      <div className='contenedor-principal'>
        <Boton
          texto='Click' 
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar' 
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
