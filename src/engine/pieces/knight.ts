import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import commonMoves from "../commonMoves";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);
        let availableMoves : Square[] = [];

        let di: number[] = [2, 2, -2, -2, 1, 1, -1, -1];
        let dj: number[] = [1, -1, 1, -1, 2, -2, 2, -2];

        for(let k = 0; k < di.length; k++) {
            let newRow = currentPos.row + di[k];
            let newCol = currentPos.col + dj[k];

            if(Square.checkDimensions(newRow, newCol)) {
                commonMoves.goodSquare(board, this.player, availableMoves, newRow, newCol);
            }
        }

        return availableMoves;
    }
}
