import React from "react";
import { Cell } from "../../types";

const Cell: React.FC<Cell> = ({ item, onClick, gameOver }) => {
  const {hasItem, clicked} = item;
  const handleClick = () => {
    if (!clicked && !gameOver) {
      onClick();
    }
  };

  return (
    <div className={`cell ${clicked ? (hasItem ? 'hasItem' : 'notHasItem') : ''}`} onClick={handleClick} />
  );
};

export default Cell;