import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";
import Bishop from "./bishop";
import player from "../player";
import King from "./king";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentPos = board.findPiece(this);
        return Rook.getLateralMoves(currentPos, board, this.player);
    }

    public static getLateralMoves(currentPos: Square, board: Board, player: Player) {
        let availableMoves : Square[] = [];

        for(let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if(i != currentPos.row) {
                if(board.getPiece(Square.at(i, currentPos.col)) !== undefined) {
                    if (board.getPiece(Square.at(i, currentPos.col))?.player !== player && !(board.getPiece(Square.at(i, currentPos.col)) instanceof King)) {
                        availableMoves.push(Square.at(i, currentPos.col));
                    }
                    break;
                }
                availableMoves.push(Square.at(i, currentPos.col));
            }
            if(i != currentPos.col) {
                if(board.getPiece(Square.at(currentPos.row, i)) !== undefined) {
                    if (board.getPiece(Square.at(currentPos.row, i))?.player !== player && !(board.getPiece(Square.at(currentPos.row, i)) instanceof King)) {
                        availableMoves.push(Square.at(currentPos.row, i));
                    }
                    break;
                }
                availableMoves.push(Square.at(currentPos.row, i));
            }
        }
        return availableMoves;
    }

}
