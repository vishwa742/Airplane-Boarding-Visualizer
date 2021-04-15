import React, { useState } from "react";
import "./seats.css";
import Image from "./download1.png";
import Test from "./test1.png";
import Plane from "./plane1.png";

const BOARD_SIZE = 11;
const rowSize = 3;
const colSize = 40;

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
  const onCellClick1 = () => {
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          console.log(j);
        }, 1000 * i);
      }
    }
  };

  //Updating Col Wise
  const onCellClick = () => {
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          console.log(j);
        }, 1000 * j);
      }
    }
  };

  // Updating Diagonally
  const onCellClick3 = () => {
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          setTimeout(() => {
            boardIndeces[i][j] = 1;
            setBoardIndeces([...boardIndeces]);
          }, 500 * i);
          console.log(j);
        }, 500 * j);
      }
    }
  };

  return (
    <>
      <span className="body">
        <button onClick={onCellClick}>Test</button>

        <div style={{ position: "relative" }}>
          <img src={Plane} width="1490px" height="740px" className="ima"></img>
          <div
            style={{
              position: "absolute",
              top: "175px",
              left: "0",
              zIndex: "5",
            }}
          >
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
                    >
                      <img
                        src={boardIndeces[rowIdx][cellIdx] === 0 ? Image : Test}
                        width="35.69px"
                        height="44.69px"
                      ></img>
                    </div>
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
                    >
                      <img
                        src={boardIndeces[rowIdx][cellIdx] === 0 ? Image : Test}
                        width="35.69px"
                        height="44.69px"
                      ></img>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

export default NewBoard;
