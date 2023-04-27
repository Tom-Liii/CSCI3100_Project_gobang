function easyAI(boardStatus) {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1]
    ];
  
    const evaluateScore = (x, y, color) => {
      let score = 0;
  
      for (const direction of directions) {
        let count = 1;
        let empty = 0;
  
        for (let step = 1; step < 5; step++) {
          const newX = x + step * direction[0];
          const newY = y + step * direction[1];
          if (newX >= 0 && newY >= 0 && newX < 19 && newY < 19) {
            if (boardStatus[newX][newY] === color) {
              count++;
            } else if (boardStatus[newX][newY] === 0) {
              empty++;
              break;
            } else {
              break;
            }
          }
        }
  
        for (let step = 1; step < 5; step++) {
          const newX = x - step * direction[0];
          const newY = y - step * direction[1];
          if (newX >= 0 && newY >= 0 && newX < 19 && newY < 19) {
            if (boardStatus[newX][newY] === color) {
              count++;
            } else if (boardStatus[newX][newY] === 0) {
              empty++;
              break;
            } else {
              break;
            }
          }
        }
  
        if (count >= 5) {
          score += 10000;
        } else if (count === 4 && empty === 2) {
          score += 1000;
        } else if (count === 3 && empty === 2) {
          score += 100;
        } else if (count === 2 && empty === 2) {
          score += 10;
        } else if (count === 1 && empty === 2) {
          score += 1;
        }
      }
  
      return score;
    };
  
    let bestScore = -Infinity;
    let bestMove = [0, 0];
  
    for (let x = 0; x < 19; x++) {
      for (let y = 0; y < 19; y++) {
        if (boardStatus[x][y] === 0) {
          const currentScore =
            evaluateScore(x, y, -1) + evaluateScore(x, y, 1) * 0.5;
  
          if (currentScore > bestScore) {
            bestScore = currentScore;
            bestMove = [x, y];
          }
        }
      }
    }
  
    return bestMove;
  }
  


  function mediumAI(boardStatus) {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1]
    ];
  
    const evaluateScore = (x, y, color) => {
      let score = 0;
  
      for (const direction of directions) {
        let count = 1;
        let empty = 0;
  
        for (let step = 1; step < 5; step++) {
          const newX = x + step * direction[0];
          const newY = y + step * direction[1];
          if (newX >= 0 && newY >= 0 && newX < 19 && newY < 19) {
            if (boardStatus[newX][newY] === color) {
              count++;
            } else if (boardStatus[newX][newY] === 0) {
              empty++;
              break;
            } else {
              break;
            }
          }
        }
  
        for (let step = 1; step < 5; step++) {
          const newX = x - step * direction[0];
          const newY = y - step * direction[1];
          if (newX >= 0 && newY >= 0 && newX < 19 && newY < 19) {
            if (boardStatus[newX][newY] === color) {
              count++;
            } else if (boardStatus[newX][newY] === 0) {
              empty++;
              break;
            } else {
              break;
            }
          }
        }
  
        if (count >= 5) {
          score += 10000;
        } else if (count === 4 && empty === 2) {
          score += 1000;
        } else if (count === 3 && empty === 2) {
          score += 100;
        } else if (count === 2 && empty === 2) {
          score += 10;
        } else if (count === 1 && empty === 2) {
          score += 1;
        }
      }
  
      return score;
    };
  
    let bestScore = -Infinity;
    let bestMove = [0, 0];
  
    for (let x = 0; x < 19; x++) {
      for (let y = 0; y < 19; y++) {
        if (boardStatus[x][y] === 0) {
          const currentScore =
            evaluateScore(x, y, -1) * 1.5 + evaluateScore(x, y, 1);
  
          if (currentScore > bestScore) {
            bestScore = currentScore;
            bestMove = [x, y];
          }
        }
      }
    }
  
    return bestMove;
  }
  





  function expertAI(boardStatus, depth = 2) {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1]
    ];
  
    const evaluateScore = (x, y, color) => {
      let score = 0;
  
      for (const direction of directions) {
        let count = 1;
        let empty = 0;
  
        for (let step = 1; step < 5; step++) {
          const newX = x + step * direction[0];
          const newY = y + step * direction[1];
          if (newX >= 0 && newY >= 0 && newX < 19 && newY < 19) {
            if (boardStatus[newX][newY] === color) {
              count++;
            } else if (boardStatus[newX][newY] === 0) {
              empty++;
              break;
            } else {
              break;
            }
          }
        }
  
        for (let step = 1; step < 5; step++) {
          const newX = x - step * direction[0];
          const newY = y - step * direction[1];
          if (newX >= 0 && newY >= 0 && newX < 19 && newY < 19) {
            if (boardStatus[newX][newY] === color) {
              count++;
            } else if (boardStatus[newX][newY] === 0) {
              empty++;
              break;
            } else {
              break;
            }
          }
        }
  
        if (count >= 5) {
          score += 10000;
        } else if (count === 4 && empty === 2) {
          score += 1000;
        } else if (count === 3 && empty === 2) {
          score += 100;
        } else if (count === 2 && empty === 2) {
          score += 10;
        } else if (count === 1 && empty === 2) {
          score += 1;
        }
      }
  
      return score;
    };
  

    const minimax = (board, depth, alpha, beta, maximizingPlayer) => {
      if (depth === 0) {
        let score = 0;
        for (let x = 0; x < 19; x++) {
          for (let y = 0; y < 19; y++) {
            if (board[x][y] === 0) {
              score += evaluateScore(x, y, maximizingPlayer ? -1 : 1);
            }
          }
        }
        return score;
      }
  
      let bestScore = maximizingPlayer ? -Infinity : Infinity;
      let bestMove = null;
      for (let x = 0; x < 19; x++) {
        for (let y = 0; y < 19; y++) {
          if (board[x][y] === 0) {
            const newBoard = board.map(row => row.slice());
            newBoard[x][y] = maximizingPlayer ? -1 : 1;
  
            const moveScore = minimax(newBoard, depth - 1, alpha, beta, !maximizingPlayer);
  
            if (maximizingPlayer) {
              if (moveScore > bestScore) {
                bestScore = moveScore;
                bestMove = [x, y];
              }
              alpha = Math.max(alpha, bestScore);
            } else {
              if (moveScore < bestScore) {
                bestScore = moveScore;
                bestMove = [x, y];
              }
              beta = Math.min(beta, bestScore);
            }
  
            if (beta <= alpha) {
              break;
            }
          }
        }
      }
  
      return depth === 2 ? bestMove : bestScore;
    };
  
    const bestMove = minimax(boardStatus, depth, -Infinity, Infinity, true);
    console.log(bestMove);
    return bestMove;
  }