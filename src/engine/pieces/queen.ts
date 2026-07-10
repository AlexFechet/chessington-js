import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";
import Bishop from "./bishop";
import Rook from "./rook";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves : Square[] = [];
        let currentPos = board.findPiece(this);

        availableMoves = [...Rook.getLateralMoves(currentPos), ...Bishop.getDiagonalMoves(currentPos)];
        return availableMoves;
    }
}
