import React from "react";
import {Item} from "../../types";
import Cell from "../Cell/cell";

const PlayBoard: React.FC<{items: Item[]; onCellClick: (index: number) => void }> = ({ items, onCellClick }) => {
  return (
    <div className="board">
      {items.map((item, index) => (
        <Cell key={index} item={item} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default PlayBoard;