import Piece from './pieces/piece';
import Player from './player';
import Board from './board';
import Square from "./square";
import GameSettings from "./gameSettings";
import Bishop from "./pieces/bishop";
import player from "./player";
import King from "./pieces/king";



export default class commonMoves {

    private static goodSquare(board: Board, player: Player, availableMoves : Square[] , newRow : number, newCol: number) : boolean {
        if (board.getPiece(Square.at(newRow, newCol)) !== undefined) {
            if (board.getPiece(Square.at(newRow, newCol))?.player !== player && !(board.getPiece(Square.at(newRow,newCol)) instanceof King)) {
                availableMoves.push(Square.at(newRow, newCol));
            }
            return true;
        }
        return false;
    }

    public static getLateralMoves(currentPos: Square, board: Board, player: Player) {
        let availableMoves: Square[] = [];

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i != currentPos.row) {
                if (this.goodSquare(board, player, availableMoves, i, currentPos.col)) {
                    break;
                }
                availableMoves.push(Square.at(i, currentPos.col));
            }
            if (i != currentPos.col) {
                if (this.goodSquare(board, player, availableMoves, currentPos.row, i)) {
                    break;
                }
                availableMoves.push(Square.at(currentPos.row, i));
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
                availableMoves.push(Square.at(newRow, newCol));
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