import { useState } from "react";
import Board from "./Board";

const Game = () => {
    // Set empty array "history" to keep track of history
    const [history, setHistory] = useState([Array(9).fill(null)]);

    // Set variable "currentMove" to count the move
    const [currentMove, setCurrentMove] = useState(0);

    // Set variable "xIsNext" to see next player (even -> X's turn :odd -> O)
    const xIsNext = currentMove % 2 === 0;

    // Get current move's state and store it in history[currentMove]
    const currentSquares =history[currentMove];

    // Restart-button or History-button
    const moves = history.map((squares, move)=>{
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return(
        <li key={move}>
          <button onClick={()=>jumpTo(move)}>{description}</button>
        </li>
      );
    });

    // Function
    // (nextSquares) come from <Board/> function handleClick *//
    function handlePlay(nextSquares) {
      //
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
    //****where did (nextMove) come from? */
    function jumpTo(nextMove){
      setCurrentMove(nextMove);
    }

  // RETURN
  return (
    <div>
      <div className="game">
        <div className="container">
          <div className="game-board">
            {/* Render Board Component よくわからない*/}
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;




// Normal function

// export default function Game() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares =history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(nextMove){
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((squares, move)=>{
//     let description;
//     if (move > 0) {
//       description = 'Go to move #' + move;
//     } else {
//       description = 'Go to game start';
//     }
//     return(
//       <li key={move}>
//         <button onClick={()=>jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="container">
//         <div className="game-board">
//           <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
//         </div>
//         <div className="game-info">
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     </div>
//   );
// }
