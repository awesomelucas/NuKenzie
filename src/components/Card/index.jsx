import "./style.css";
import { FaTrash } from "react-icons/fa";

const Card = ({ listTransactions, deleteCard }) => {
  return listTransactions.map((element) => {
    return (
      <div key={element.id} className={element.type}>
        <h2 className="description">{element.description}</h2>
        <span className="type">{element.type}</span>
        <span className="value">${element.valor}</span>
        <FaTrash
          onClick={(event) => {
            event.preventDefault();
            deleteCard(element.id);
          }}
        />
      </div>
    );
  });
};

export default Card;
