import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";
import Bishop from "./bishop";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentPos = board.findPiece(this);
        return Rook.getLateralMoves(currentPos, board);
    }

    public static getLateralMoves(currentPos: Square, board: Board) {
        let availableMoves : Square[] = [];

        for(let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if(i != currentPos.row) {
                if(board.getPiece(Square.at(i, currentPos.col)) !== undefined) {
                    break;
                }
                availableMoves.push(Square.at(i, currentPos.col));
            }
            if(i != currentPos.col) {
                if(board.getPiece(Square.at(currentPos.row, i)) !== undefined) {
                    break;
                }
                availableMoves.push(Square.at(currentPos.row, i));
            }
        }
        return availableMoves;
    }

}
