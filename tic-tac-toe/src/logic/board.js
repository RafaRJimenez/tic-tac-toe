import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // if there is no winner 
    return null
  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
  }