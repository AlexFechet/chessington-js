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
        return Bishop.getDiagonalMoves(board.findPiece(this));
    }

    public static getDiagonalMoves(currentPos: Square) {
        let availableMoves : Square[] = [];

        for(let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            let newRow = currentPos.row + i;
            let newCol = currentPos.col + i;
            if(Square.checkDimensions(newRow, newCol)) {
                availableMoves.push(Square.at(newRow, newCol));
            }

            newRow = currentPos.row - i;
            newCol = currentPos.col - i;
            if(Square.checkDimensions(newRow, newCol)) {
                availableMoves.push(Square.at(newRow, newCol));
            }

            newRow = currentPos.row + i;
            newCol = currentPos.row + currentPos.col - newRow;
            if(Square.checkDimensions(newRow, newCol)) {
                availableMoves.push(Square.at(newRow, newCol));
            }

            newRow = currentPos.row - i;
            newCol = currentPos.row + currentPos.col - newRow;
            if(Square.checkDimensions(newRow, newCol)) {
                availableMoves.push(Square.at(newRow, newCol));
            }
        }

        return availableMoves;
    }
}
