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

  const createRandom = (min, rowSize) => {
    const diff = rowSize - min;
    const random = Math.random();
    return Math.floor(random * diff + min);
  };

  //Updating Row wise
  const onCellClickRow = () => {
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          setTimeout(() => {
            //  boardIndeces[i][j] = 1;
            //  setBoardIndeces([...boardIndeces]);
            console.log("Row", j);
          }, 1000 * j);
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          console.log("Row", j);
        }, 1000 * i);
      }
    }
    setBoardIndeces(initArray);
  };

  //Updating Col Wise F2B
  const onCellClickCol = () => {
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          console.log(j);
        }, 300 * j);
      }
    }
    setBoardIndeces(initArray);
  };

  // Only Middle Col
  const onCellClickMid = () => {
    for (let i = rowSize - 2; i > 0; i--) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          console.log(j);
        }, 300 * j);
      }
    }
    setBoardIndeces(...initArray);
  };

  // Top Row
  const onCellClickTop = () => {
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          console.log(j);
        }, 300 * j);
      }
    }
    setBoardIndeces(...initArray);
  };

  // Bottom Row
  const onCellClickBot = () => {
    for (let i = 2; i < 3; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          console.log(j);
        }, 300 * j);
      }
    }
    setBoardIndeces(initArray);
  };

  // Random Row wise
  // Use different Color Person for Second Iteration
  // Set boardIndices to 2 or 3 or 4 etc
  const onCellClickTopper = () => {
    let sumArray = 120;
    let x = 0;
    var sum = 0;
    while (x < 120) {
      let randRow = createRandom(0, rowSize);
      let randCol = createRandom(0, colSize);
      setTimeout(() => {
        boardIndeces[randRow][randCol] = 1;
        setBoardIndeces([...boardIndeces]);
      }, 300 * randCol);
      x++;
      console.log(randRow);
      // console.log(randCol);
      //console.log(x);
    }
  };

  // Try random seat allocation i - rowLen
  // j to col len
  //run until full

  // Updating Diagonally
  const onCellClickDia = () => {
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          setTimeout(() => {
            boardIndeces[i][j] = 1;
            setBoardIndeces([...boardIndeces]);
          }, 300 * i);
          console.log(j);
        }, 300 * j);
      }
    }
    setBoardIndeces(initArray);
  };

  return (
    <>
      <span className="body">
        <button className="button" onClick={onCellClickTopper}>
          Col{" "}
        </button>
        <button className="button" onClick={onCellClickRow}>
          Row{" "}
        </button>
        <button className="button" onClick={onCellClickTop}>
          Top{" "}
        </button>
        <button className="button" onClick={onCellClickMid}>
          Mid{" "}
        </button>
        <button className="button" onClick={onCellClickBot}>
          Bot
        </button>

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
                  {/* {rowIdx} */}

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
