import NoCard from "../../assets/NoCard.svg";
import Card from "../Card";
import "./style.css";
const Lancamentos = ({ listTransactions, deleteCard }) => {
  return listTransactions.length !== 0 ? (
    <div className="card">
      <Card listTransactions={listTransactions} deleteCard={deleteCard} />
    </div>
  ) : (
    <>
    <h2>Você ainda não possui nenhum lançamento</h2>
    <img className="noCard" src={NoCard} alt="" />
    </>
  );
};

export default Lancamentos;
