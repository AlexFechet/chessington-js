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
        let currentPos = board.findPiece(this);

        if(this.player == Player.WHITE) {
            availableMoves.push(Square.at(currentPos.row + 1, currentPos.col));
        } else {
            availableMoves.push(Square.at(currentPos.row - 1, currentPos.col));
        }

        return availableMoves;
    }
}
