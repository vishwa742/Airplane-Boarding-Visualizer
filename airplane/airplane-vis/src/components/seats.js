import React, { useState } from "react";
import "./seats.css";

const BOARD_SIZE = 11;
const rowSize = 3;
const colSize = 20;

const NewBoard = () => {
  const [board, setBoard] = useState(
    new Array(rowSize).fill(0).map((row) => new Array(colSize).fill(0))
  );

  const initArray = new Array(rowSize)
    .fill(0)
    .map((rand) => new Array(colSize).fill(0));

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
  const onCellClick = () => {
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
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
      <span className="body">
        <button onClick={onCellClick}>Test</button>
        <div className="dacols">
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
                ></div>
              ))}
            </div>
          ))}
        </div>
        <div className="space"></div>
        <div className="dacols">
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
                ></div>
              ))}
            </div>
          ))}
        </div>
      </span>
    </>
  );
};

export default NewBoard;
