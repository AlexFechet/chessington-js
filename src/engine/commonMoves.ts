import Piece from './pieces/piece';
import Player from './player';
import Board from './board';
import Square from "./square";
import GameSettings from "./gameSettings";
import Bishop from "./pieces/bishop";
import player from "./player";
import King from "./pieces/king";



export default class commonMoves {

    public static getLateralMoves(currentPos: Square, board: Board, player: Player) {
        let availableMoves: Square[] = [];

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i != currentPos.row) {
                if (board.getPiece(Square.at(i, currentPos.col)) !== undefined) {
                    if (board.getPiece(Square.at(i, currentPos.col))?.player !== player && !(board.getPiece(Square.at(i, currentPos.col)) instanceof King)) {
                        availableMoves.push(Square.at(i, currentPos.col));
                    }
                    break;
                }
                availableMoves.push(Square.at(i, currentPos.col));
            }
            if (i != currentPos.col) {
                if (board.getPiece(Square.at(currentPos.row, i)) !== undefined) {
                    if (board.getPiece(Square.at(currentPos.row, i))?.player !== player && !(board.getPiece(Square.at(currentPos.row, i)) instanceof King)) {
                        availableMoves.push(Square.at(currentPos.row, i));
                    }
                    break;
                }
                availableMoves.push(Square.at(currentPos.row, i));
            }
        }
        return availableMoves;
    }

    private static diagonalPosition(currentPos: Square, board: Board, availableMoves: Square[], movingFoward : number, movingBackwards: number) {
        for(let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            let newRow = currentPos.row + i * movingFoward;
            let newCol = currentPos.col + i * movingBackwards;
            if (Square.checkDimensions(newRow, newCol)) {
                if (board.getPiece(Square.at(newRow, newCol)) !== undefined) {
                    break;
                }
                availableMoves.push(Square.at(newRow, newCol));
            }
        }
    }

    public static getDiagonalMoves(currentPos: Square, board: Board) {
        let availableMoves : Square[] = [];

        this.diagonalPosition(currentPos, board, availableMoves, 1, 1);
        this.diagonalPosition(currentPos, board, availableMoves, -1, 1);
        this.diagonalPosition(currentPos, board, availableMoves, 1, -1);
        this.diagonalPosition(currentPos, board, availableMoves, -1, -1);

        return availableMoves;
    }
}