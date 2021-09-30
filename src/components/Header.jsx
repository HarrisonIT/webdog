import logo from 'media/logo.jpg';

const Header = () => {
    return (
        <header>
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
        </header>
    )
}

export default Header