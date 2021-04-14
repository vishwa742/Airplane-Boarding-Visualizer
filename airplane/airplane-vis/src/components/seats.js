import React, { useState } from "react";
import "./seats.css";

const BOARD_SIZE = 11;

const NewBoard = () => {
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );

  const [rowLoc, setRowLoc] = useState([]);
  const [colLoc, setColLoc] = useState([]);
  const [ivalue, setIvalue] = useState(2);

  const [combinedPos, setCombinedPos] = useState([]);
  const [tempPos, setTempPos] = useState("");
  const alpArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "z",
  ];

  const initArray = new Array(BOARD_SIZE)
    .fill(0)
    .map((row) => new Array(BOARD_SIZE).fill(0));

  const [boardIndeces, setBoardIndeces] = useState(initArray);

  const DEF_DELAY = 1000;

  const onCellClick = (rowIdx, cellIdx) => {
    // setIvalue(ivalue + 1);
    for (var i = 0; i <= rowIdx; i++) {
      for (var j = 0; j <= cellIdx; j++) {
        boardIndeces[i][j] = 1;
        setBoardIndeces([...boardIndeces]);
        console.log(boardIndeces);
      }
    }
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <div className="board">
            {board.map((row, rowIdx) => (
              <div key={rowIdx} className="row">
                {/* {alpArray[rowIdx]} */}

                {row.map((cell, cellIdx) => (
                  <div
                    key={cellIdx}
                    className={
                      boardIndeces[rowIdx][cellIdx] === 0
                        ? "inactive_class"
                        : "cell_Clicked"
                    }
                    onClick={() => onCellClick(rowIdx, cellIdx)}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBoard;
