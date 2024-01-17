import { useState } from "react";
import Result from "./Result";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [winner, line] = calculateWinnerWithLine(squares);

  const [results, setResults] = useState({ X: 7, O: 1, D: 2 });

  function handleResult(result) {
    setTimeout(() => {
      setResults({ ...results, [result]: results[result] + 1 });
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    }, 1500);
  }

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
    handleResult(winner);
  } else if (!squares.some((square) => square === null)) {
    status = `Draw!`;
    handleResult("D");
  } else {
    status = `Turn: ${xIsNext ? "X" : "O"}`;

    if (!xIsNext) {
      const newSquares = [...squares];

      const index = suitableNextIndex(newSquares);

      if (index >= 0 && index <= 8) {
        newSquares[index] = "O";

        setTimeout(() => {
          setSquares(newSquares);
          setXIsNext(!xIsNext);
        }, 250);
      }
    }
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquares = [...squares];

    newSquares[i] = xIsNext ? "X" : "O";

    setSquares(newSquares);

    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="dark:bg-slate-800 bg-gray-100 rounded-lg px-8 pb-6 pt-2">
        <div className="text-center text-sky-700 font-bold text-2xl sm:text-4xl">
          {status}
        </div>
        <div className="grid grid-cols-3 pt-3 sm:pt-4">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            isSuccess={line.some((l) => l === 0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            isSuccess={line.some((l) => l === 1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            isSuccess={line.some((l) => l === 2)}
          />
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            isSuccess={line.some((l) => l === 3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            isSuccess={line.some((l) => l === 4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            isSuccess={line.some((l) => l === 5)}
          />
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            isSuccess={line.some((l) => l === 6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            isSuccess={line.some((l) => l === 7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            isSuccess={line.some((l) => l === 8)}
          />
        </div>
      </div>
      <div className="dark:bg-slate-800 bg-gray-100 rounded-lg px-8 pb-6 pt-2">
        <Result results={results} />
      </div>
    </>
  );
}

function suitableNextIndex(squares) {
  // First, check if there is an opportunity to win, and if so, return that index
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      const tempSquares = squares.slice();
      tempSquares[i] = "O";
      if (calculateWinner(tempSquares) === "O") {
        return i;
      }
    }
  }

  // If there is an opportunity to block the opponent from winning, return that index
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      const tempSquares = squares.slice();
      tempSquares[i] = "X";
      if (calculateWinner(tempSquares) === "X") {
        return i;
      }
    }
  }

  // If no winning or blocking move is found, return the random available empty index
  const emptyIndexes = [];

  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      emptyIndexes.push(i);
    }
  }

  return emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
}

function calculateWinner(squares) {
  const [winner] = calculateWinnerWithLine(squares);

  return winner;
}

function calculateWinnerWithLine(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], [a, b, c]];
    }
  }
  return [null, []];
}
