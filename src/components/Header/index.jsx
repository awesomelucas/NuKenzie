import Nome from "../Nome";
import "./style.css"

const Header = ({logout}) =>{
    return (
        <header>
            <nav>
                <Nome/>
                <button onClick={logout}>Inicio</button>
                <div className="hamburg">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    )
}

export default Header