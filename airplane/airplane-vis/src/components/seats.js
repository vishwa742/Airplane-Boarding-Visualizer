import React, { useState } from "react";
import "./seats.css";

const BOARD_SIZE = 11;
const rowSize = 12;
const colSize = 9;

const NewBoard = () => {
  const [board, setBoard] = useState(
    new Array(rowSize).fill(0).map((row) => new Array(colSize).fill(0))
  );

  const initArray = new Array(rowSize)
    .fill(0)
    .map((colSize) => new Array(BOARD_SIZE).fill(0));

  const [boardIndeces, setBoardIndeces] = useState(initArray);

  const DEF_DELAY = 1000;

  //Updating Row wise
  //   const onCellClick = (rowIdx, cellIdx) => {
  //     for (let i = 0; i <= rowIdx; i++) {
  //       for (let j = 0; j <= cellIdx; j++) {
  //         setTimeout(() => {
  //           boardIndeces[i][j] = 1;
  //           setBoardIndeces([...boardIndeces]);
  //           console.log(j);
  //         }, 1000 * i);
  //       }
  //     }
  //   };

  //Updating Row Wise
  //   const onCellClick = (rowIdx, cellIdx) => {
  //     for (let i = 0; i <= rowIdx; i++) {
  //       for (let j = 0; j <= cellIdx; j++) {
  //         setTimeout(() => {
  //           boardIndeces[i][j] = 1;
  //           setBoardIndeces([...boardIndeces]);
  //           console.log(j);
  //         }, 1000 * j);
  //       }
  //     }
  //   };

  // Updating Diagonally
  const onCellClick = (rowIdx, cellIdx) => {
    for (let i = 0; i <= rowIdx; i++) {
      for (let j = 0; j <= cellIdx; j++) {
        setTimeout(() => {
          setTimeout(() => {
            boardIndeces[i][j] = 1;
            setBoardIndeces([...boardIndeces]);
          }, 1000 * i);
          console.log(j);
        }, 1000 * j);
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
