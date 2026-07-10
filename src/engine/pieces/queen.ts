import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";
import Bishop from "./bishop";
import Rook from "./rook";
import commonMoves from "../commonMoves";
import player from "../player";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves : Square[] = [];
        let currentPos = board.findPiece(this);

        availableMoves = [...commonMoves.getLateralMoves(currentPos, board, this.player), ...commonMoves.getDiagonalMoves(currentPos, board, this.player)];
        return availableMoves;
    }
}
