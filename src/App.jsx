import logo from './media/logo.jpg';
import './styles/App.css';
import bordercollie from './media/border-collie.jpg'
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
      <main>
      <section>
      <h1>Razas de perros</h1>
      <ul className="card-container">
      <Card imagen={siberiano} raza="Siberiano"/>
      <Card imagen={bordercollie} raza="Border-Collie" />"
        
      </ul>
      </section>
      <section> </section>
      </main>
      <footer> </footer>
    </div>
  );
}

function Card ({raza , imagen}) {
  return (
    <li className="bread-card background">
      <div className="contenedor-imagen">
        <img src={imagen} alt= {raza} />
      </div>
      <span className="bread-title"> {raza}
      </span>
    </li>
  )
}

export default App;


