import Piece from './piece';
import Player from '../player';
import Board from '../board';
import commonMoves from "../commonMoves";


export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);
        return commonMoves.getLateralMoves(currentPos, board, this.player);
    }

}
