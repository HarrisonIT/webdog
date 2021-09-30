import {Link} from "react-router-dom"

function Cardraza ({raza , imagen}) {
    return (
      <li className="bread-card">
        <Link to = "/Siberiano">
        <div className="contenedor-imagen">
          <img src={imagen} alt= {raza} />
        </div>
          </Link>
        <span className="bread-title"> {raza}
        </span>
      </li>
    )
  }

  export default Cardraza;