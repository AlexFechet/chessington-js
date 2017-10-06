import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import commonMoves from "../commonMoves";
import King from "./king";
import player from "../player";

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

            let newRow = currentPos.row + 1;
            let newCol = currentPos.col + 1;
            newSquare = Square.at(newRow, newCol);
            if(board.getPiece(newSquare) !== undefined &&  board.getPiece(Square.at(newRow, newCol))?.player !== this.player && !(board.getPiece(Square.at(newRow,newCol)) instanceof King)) {
                availableMoves.push(Square.at(newRow, newCol));
            }

            newCol = currentPos.col - 1;
            newSquare = Square.at(newRow, newCol);
            if(board.getPiece(newSquare) !== undefined &&  board.getPiece(Square.at(newRow, newCol))?.player !== this.player && !(board.getPiece(Square.at(newRow,newCol)) instanceof King)) {
                availableMoves.push(Square.at(newRow, newCol));
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
