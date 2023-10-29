import React from "react";
import { Item } from "../../types";

const Cell: React.FC<{item:Item; onClick: () => void }> = ({ item, onClick }) => {
  const {hasItem, clicked} = item;
  const handleClick = () => {
    if (!clicked) {
      onClick();
    }
  };

  return (
    <div className={`cell ${clicked ? (hasItem ? 'hasItem' : 'notHasItem') : ''}`} onClick={handleClick} />
  );
};

export default Cell;