import logo from './media/logo.jpg';
import './styles/App.css';
import bordercollie from './media/border-collie.jpg'
import buscar from './media/buscar.png'
import siberiano from './media/siberiano.jpg'


function App() {
  return (
    <div className="App">
      <header></header>
      <ul className="navbar">
        <li>
          <img src={logo} alt="Logo" className="logo" />
        </li>
        <li>
          <button className="button mainbutton">
            Nuevo post
          </button>
        </li>
        <li>
          <div className="buscar">
            <input placeholder="Buscar raza" />
            <i className="fab fa-searchengin"></i>
          </div>
        </li>
        <li>
          <button className="button mainbutton">
            Registro
          </button>
        </li>
        <li>
          <button className="button secundarybutton">
            Iniciar sesion
          </button>
        </li>
      </ul>
      <main></main>
      <section></section>
      <h1>Razas de perros</h1>
      <ul className="card-container">
        <li className="bread-card">
          <div className="contenedor-imagen">
            <img src={siberiano} alt="Raza Siberiano" />
          </div>
          <span className="bread-title">
            Siberiano
          </span>
        </li>

        <li className="bread-card">
          <div className="contenedor-imagen">
            <img src={bordercollie} alt="Raza Border Collie" />
          </div>
          <span className="bread-title">
            Border Collie
          </span>
        </li>
      </ul>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default App;
