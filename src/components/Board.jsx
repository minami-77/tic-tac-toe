import Square from "./Square";
import { calculateWinner } from "../utils/calculation";

// Receive props from GameComponent as a parameter */
const Board = ({xIsNext, squares, onPlay}) => {
  // Set variable winner and put the calculation result in it
  const winner = calculateWinner(squares);
  // Set variable status and display next player or stop game if someone wins
  let status;
  if (winner) {
    status = "Winner:" + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  //Function
  function handleClick(i) {
    // Prevent player's move if square already marked or someone already wins
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // **why need to copy(slice) squares?
    const nextSquares = squares.slice();
    // set nextSquare's value (X or O) in turn
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // **what is onPlay
    onPlay(nextSquares);
  }

  // RETURN
  return (
    <div>
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          {/*what's squares[0]*/}
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    </div>
  );
};

export default Board;
