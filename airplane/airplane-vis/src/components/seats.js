import React, { useState } from "react";
import "./seats.css";
import Seat from "./onlySeat.png";
import PersonSeat from "./personSeat.png";
import PersonSeatO from "./personSeatOrange.png";
import Plane from "./plane1.png";
import Logo from "./logo.png";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";

const BOARD_SIZE = 11;
const rowSize = 3;
const colSize = 40;
let counter = 0;
let seen = [];

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
            //console.log("Row", j);
          }, 1000 * j);
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          //console.log("Row", j);
        }, 1000 * i);
      }
    }
  };

  //Updating Col Wise F2B
  const onCellClickCol = () => {
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          //console.log(j);
        }, 300 * j);
      }
    }
    // for (let l = 0; l < rowSize; l++) {
    //   for (let m = 0; m < colSize; m++) {
    //     boardIndeces[l][m] = 1;
    //     setBoardIndeces([...boardIndeces]);
    //   }
    // }
  };

  // Only Middle Col
  const onCellClickMid = () => {
    for (let i = rowSize - 2; i > 0; i--) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          boardIndeces[i][j] = 1;
          setBoardIndeces([...boardIndeces]);
          //console.log(j);
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
          //console.log(j);
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
          //console.log(j);
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
    let y = 0;

    while (y < 120) {
      let randRow = createRandom(0, rowSize);
      let randCol = createRandom(0, colSize);
      y++;
      let randCombined = String(randRow) + String(randCol);

      if (!(randCombined in seen)) {
        console.log("Seen", seen);

        seen.push(randCombined);
        setTimeout(() => {
          x++;
          console.log("Counter", counter);
          boardIndeces[randRow][randCol] = counter;
          setBoardIndeces([...boardIndeces]);
        }, 300 * randCol);
      }
    }
    counter++;
  };

  const onCellClickTopper2 = () => {
    let x = 0;
    var sum = 0;
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
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
      }
    }
  };

  // Updating Diagonally
  const onCellClickDia = () => {
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < colSize; j++) {
        setTimeout(() => {
          setTimeout(() => {
            boardIndeces[i][j] = 1;
            setBoardIndeces([...boardIndeces]);
          }, 300 * i);
          //console.log(j);
        }, 300 * j);
      }
    }
    setBoardIndeces(initArray);
  };

  return (
    <>
      <table
        style={{
          backgroundColor: "#000",
          display: "block",
          color: "#FFF",
        }}
      >
        <tbody>
          <tr>
            <td>
              <img src={Logo} width="50px"></img>
            </td>
            <td>
              <h3>Ticket Booker</h3>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Boarding Techniques</Navbar.Brand>
        <button className="button" onClick={onCellClickTopper}>
          Randomly Filled Column Wise{" "}
        </button>

        <button className="button" onClick={onCellClickCol}>
          Column Wise{" "}
        </button>

        <button className="button" onClick={onCellClickRow}>
          Row Wise{" "}
        </button>

        <button className="button" onClick={onCellClickTop}>
          Top Row First{" "}
        </button>

        <button className="button" onClick={onCellClickMid}>
          Mid Row First{" "}
        </button>

        <button className="button" onClick={onCellClickBot}>
          Bottom Row First
        </button>
      </Navbar>

      <span className="body">
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
                    <div key={cellIdx} style={{ marginTop: "5px" }}>
                      <img
                        src={
                          boardIndeces[rowIdx][cellIdx] === 0
                            ? Seat
                            : boardIndeces[rowIdx][cellIdx] > 1
                            ? PersonSeatO
                            : PersonSeat
                        }
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
                  {/* {rowIdx} */}

                  {row.map((cell, cellIdx) => (
                    <div key={cellIdx} style={{ marginTop: "5px" }}>
                      <img
                        src={
                          boardIndeces[rowIdx][cellIdx] === 0
                            ? Seat
                            : PersonSeat
                        }
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
