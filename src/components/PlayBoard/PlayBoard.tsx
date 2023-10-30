import React from "react";
import Cell from "../Cell/cell";
import { Board } from "../../types";

const PlayBoard: React.FC<Board> = ({ items, onCellClick, isGameOver }) => {
  return (
    <div className="board">
      {items.map((item, index) => (
        <Cell key={index} item={item} onClick={() => onCellClick(index)} gameOver={isGameOver} />
      ))}
    </div>
  );
};

export default PlayBoard;