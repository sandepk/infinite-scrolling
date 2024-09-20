import PropTypes from "prop-types";

import "./Card.css";
const Card = ({ itemData }) => {
  return (
    <div className="cardContainer">
      <div>
        <span className="title">{itemData?.title}</span>
      </div>
    </div>
  );
};
Card.propTypes = {
  itemData: PropTypes.object,
};


export default Card;
