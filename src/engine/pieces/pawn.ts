import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves : Square[] = [];
        const currentPos = board.findPiece(this);

        if(this.player == Player.WHITE && currentPos.row < 5) {
            let newSquare = Square.at(currentPos.row + 1, currentPos.col);

            if(board.getPiece(newSquare) === undefined) {
                availableMoves.push(newSquare);
                if(currentPos.row == 1) {
                    newSquare = Square.at(currentPos.row + 2, currentPos.col);
                    if(board.getPiece(newSquare) === undefined) {
                        availableMoves.push(newSquare);
                    }
                }
            }
        }

        if(this.player == Player.BLACK) {
            let newSquare = Square.at(currentPos.row - 1, currentPos.col);

            if(board.getPiece(newSquare) === undefined) {
                availableMoves.push(newSquare);
                if (currentPos.row == 6) {
                    newSquare = Square.at(currentPos.row - 2, currentPos.col);
                    if (board.getPiece(newSquare) === undefined) {
                        availableMoves.push(newSquare);
                    }
                }
            }
        }

        return availableMoves;
    }

}
