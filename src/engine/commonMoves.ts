import Piece from './pieces/piece';
import Player from './player';
import Board from './board';
import Square from "./square";
import GameSettings from "./gameSettings";
import Bishop from "./pieces/bishop";
import player from "./player";
import King from "./pieces/king";

export default class commonMoves {

    // it adds the move to the available moves
    // side effect introduced to the rock and bishop, it return true if it need to stop the flow in the for loop if
    // it captures another piece
    public static goodSquare(board: Board, player: Player, availableMoves : Square[] , newRow : number, newCol: number) : boolean {
        if (board.getPiece(Square.at(newRow, newCol)) !== undefined) {
            if (board.getPiece(Square.at(newRow, newCol))?.player !== player && !(board.getPiece(Square.at(newRow,newCol)) instanceof King)) {
                availableMoves.push(Square.at(newRow, newCol));
            }
            return true;
        }
        availableMoves.push(Square.at(newRow, newCol));
        return false;
    }

    public static getLateralMoves(currentPos: Square, board: Board, player: Player) {
        let availableMoves: Square[] = [];

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i != currentPos.row) {
                if (this.goodSquare(board, player, availableMoves, i, currentPos.col)) {
                    break;
                }
            }
            if (i != currentPos.col) {
                if (this.goodSquare(board, player, availableMoves, currentPos.row, i)) {
                    break;
                }
            }
        }
        return availableMoves;
    }

    private static diagonalPosition(currentPos: Square, board: Board, availableMoves: Square[], player : Player, movingFoward : number, movingBackwards: number) {
        for(let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            let newRow = currentPos.row + i * movingFoward;
            let newCol = currentPos.col + i * movingBackwards;
            if (Square.checkDimensions(newRow, newCol)) {
                if (this.goodSquare(board, player, availableMoves, newRow, newCol)) {
                    break;
                }
            }
        }
    }

    public static getDiagonalMoves(currentPos: Square, board: Board, player : Player) {
        let availableMoves : Square[] = [];

        this.diagonalPosition(currentPos, board, availableMoves, player ,1, 1);
        this.diagonalPosition(currentPos, board, availableMoves, player, 1, -1);
        this.diagonalPosition(currentPos, board, availableMoves, player, -1, 1);
        this.diagonalPosition(currentPos, board, availableMoves, player, -1, -1);

        return availableMoves;
    }
}