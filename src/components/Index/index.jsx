import logo from "../../assets/illustration.svg";
import Nome from "../Nome";
import "./style.css";
import "../../App.css";

const Index = ({ handlerIndex }) => {
  return (
    <div className="container-home">
      <div className="home">
        <Nome />
        <div className="home-info">
          <h1>Centralize o controle das suas finanças</h1>
          <span>de forma rápida e segura</span>
          <button className="btn" onClick={handlerIndex}>
            Iniciar
          </button>
        </div>
      </div>
      <figure>
        <img src={logo} className="App-logo" alt="logo" />
      </figure>
    </div>
  );
};

export default Index;
