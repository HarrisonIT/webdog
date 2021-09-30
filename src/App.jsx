import logo from 'media/logo.jpg';
import 'styles/App.css';
import bordercollie from 'media/border-collie.jpg'
import siberiano from 'media/siberiano.jpg'
import Cardraza from 'components/Cardraza'


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
      <Cardraza imagen={siberiano} raza="Siberiano"/>
      <Cardraza imagen={bordercollie} raza="Border-Collie" />"
        
      </ul>
      </section>
      <section> </section>
      </main>
      <footer> </footer>
    </div>
  );
}

export default App;


