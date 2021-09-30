function Cardraza ({raza , imagen}) {
    return (
      <li className="bread-card">
        <div className="contenedor-imagen">
          <img src={imagen} alt= {raza} />
        </div>
        <span className="bread-title"> {raza}
        </span>
      </li>
    )
  }

  export default Cardraza;