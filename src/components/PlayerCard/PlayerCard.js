import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={props.handleIncrement}/>
    </div>
  </div>
);

export default PlayerCard;