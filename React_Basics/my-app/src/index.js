import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Component for representing a tile in th tic tac toe board
class Square extends React.Component {

    render() {
      return (
        <button className="square">
          {this.props.value}                    
        </button>
      );
    }

  }

//Component representing the tic tac toe board, each board is made up of 9 squares
class Board extends React.Component {
    
    //Passing a property from a paretn board to a child square component
    renderSquare(i) {
      return <Square value = {i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
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
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);