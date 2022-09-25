import "./style.css";
import { FaTrash } from "react-icons/fa";

const Card = ({ listTransactions, deleteCard }) => {
  return listTransactions.map((element, index) => {
    return (
      <div key={index} className={element.type}>
        <h2 className="description">{element.description}</h2>
        <span className="type">{element.type}</span>
        <span className="value">${element.value}</span>
        <FaTrash
          onClick={(event) => {
            event.preventDefault();
            deleteCard(index);
          }}
        />
      </div>
    );
  });
};

export default Card;
