import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Component for representing a tile in th tic tac toe board
class Square extends React.Component {

    //Rendering for the square, on click the value of the square changes
    render() {
      return (
        <button 
            className="square" 
            onClick={
                () => this.props.onClick()
            }
        >
            {this.props.value}                    
        </button>
      );
    }

  }

//Component representing the tic tac toe board, each board is made up of 9 squares
class Board extends React.Component {

    //Constructor for the board, this basically constructs an array of 9 squares
    constructor(props){
        super(props);
        this.state = {
            //Setting the state to an array of squares and a boolean to determine the next player
            squares: Array(9).fill(null),
            //When turn is true, then it is X's turn
            turn: true,
        };
    }
    
    //Passing a property from a paretn board to a child square component
    renderSquare(i) {
        return (
            <Square 
                value = {this.state.squares[i]} 
                //Calling the onClick function of the Square class
                onClick = {() => this.handleClick(i)}
            />
        );
    }

    //Creating the handleClick method
    handleClick(i) {
        //Creating a duplicate of the squares array 
        const squares = this.state.squares.slice();

        //If someone has already one the game or if a tile has already been taken (non-null)
        if(calculateWinner(squares) || squares[i]) {
            return;
        }

        //Setting the value of it to "X" or "O" depending on the turn 
        squares[i] = this.state.turn ? "X" : "O";
        this.setState({
            //Resetting the value of squares (updated)
            squares: squares,
            //Changing the value of turn to the opposite
            xIsNext: !this.state.turn,
        });
    }
  
    render() {
        //Checking to see if someone won or not
        const winner = calculateWinner(this.state.squares);
        let status;

        //Changing the status dependending on whether someone won or not
        if (winner) {
            status = 'Winner: ' + winner;
        } 
        else {
            status = 'Next player: ' + (this.state.turn ? 'X' : 'O');
        }
  
        return (
            <div>

                <div className="status">{status}</div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}

//Helper function to determine the winner of the game
function calculateWinner(squares) {
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
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);