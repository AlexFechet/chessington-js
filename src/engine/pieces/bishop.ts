import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentPos = board.findPiece(this);
        return Bishop.getDiagonalMoves(board.findPiece(this), board);
    }

    public static getDiagonalMoves(currentPos: Square, board: Board) {
        let availableMoves : Square[] = [];

        for(let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            let newRow = currentPos.row + i;
            let newCol = currentPos.col + i;
            if (Square.checkDimensions(newRow, newCol)) {
                if (board.getPiece(Square.at(newRow, newCol)) !== undefined) {
                    break;
                }
                availableMoves.push(Square.at(newRow, newCol));
            }
        }

        for(let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            let newRow = currentPos.row - i;
            let newCol = currentPos.col - i;
            if (Square.checkDimensions(newRow, newCol)) {
                if (board.getPiece(Square.at(newRow, newCol)) !== undefined) {
                    break;
                }
                availableMoves.push(Square.at(newRow, newCol));
            }
        }

        for(let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            let newRow = currentPos.row + i;
            let newCol = currentPos.row + currentPos.col - newRow;
            if (Square.checkDimensions(newRow, newCol)) {
                if (board.getPiece(Square.at(newRow, newCol)) !== undefined) {
                    break;
                }
                availableMoves.push(Square.at(newRow, newCol));
            }
        }

        for(let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            let newRow = currentPos.row - i;
            let newCol = currentPos.row + currentPos.col - newRow;
            if(Square.checkDimensions(newRow, newCol)) {
                if(board.getPiece(Square.at(newRow, newCol)) !== undefined) {
                    break;
                }
                availableMoves.push(Square.at(newRow, newCol));
            }
        }

        return availableMoves;
    }
}
