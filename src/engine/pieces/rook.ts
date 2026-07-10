import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let availableMoves : Square[] = [];
        let currentPos = board.findPiece(this);

        for(let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if(i != currentPos.row) {
                availableMoves.push(Square.at(i, currentPos.col));
            }
            if(i != currentPos.col) {
                availableMoves.push(Square.at(currentPos.row, i));
            }
        }

        return availableMoves;
    }
}
