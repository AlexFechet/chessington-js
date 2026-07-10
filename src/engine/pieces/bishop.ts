import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";
import commonMoves from "../commonMoves";
import player from "../player";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentPos = board.findPiece(this);
        return commonMoves.getDiagonalMoves(board.findPiece(this), board, this.player);
    }


}
