class TicTacToe {
    constructor() {
        this.state = {
            arrTurn: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
            whoWinner : null,
            whoGo: 'x'
        }
    }

    getCurrentPlayerSymbol() {
        return this.state.whoGo;
    }

    nextTurn(rowIndex, columnIndex) {
        let whoGo;

        if (this.state.arrTurn[rowIndex][columnIndex] !== null) return;
        if (this.state.whoGo === 'x') {
            whoGo = 'x';
            this.state.whoGo = 'o';
        } else {
            whoGo = 'o';
            this.state.whoGo = 'x';
        }

        this.state.arrTurn[rowIndex][columnIndex] = whoGo;
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
        let copyArrTurn = this.state.arrTurn;

        // есть ли победитель по горизонтали
        for (let row = 0; row < copyArrTurn.length; row++) {
            if (copyArrTurn[row][0] !== null && copyArrTurn[row][0] === copyArrTurn[row][1] && copyArrTurn[row][0] === copyArrTurn[row][2]) {
                return copyArrTurn[row][0];
            }
        }

        // есть ли победитель по вертикали
         for (let column = 0; column < copyArrTurn.length; column++) {
            if (copyArrTurn[0][column] !== null && copyArrTurn[0][column] === copyArrTurn[1][column] && copyArrTurn[0][column] === copyArrTurn[2][column]) {
                return copyArrTurn[0][column];
            }
        }

        // есть ли победитель по диагонали
        if (copyArrTurn[0][0] !== null && copyArrTurn[0][0] === copyArrTurn[1][1] && copyArrTurn[0][0] === copyArrTurn[2][2]) {
            return copyArrTurn[0][0];
        }
        if (copyArrTurn[0][2] !== null && copyArrTurn[0][2] === copyArrTurn[1][1] && copyArrTurn[0][2] === copyArrTurn[2][0]) {
            return copyArrTurn[0][2];
        }
        return null;
    }

    noMoreTurns() {
        let copyArrTurn = this.state.arrTurn.flat(1);

        for (let i = 0; i < copyArrTurn.length; i++) {
            if (copyArrTurn[i] === null) return false;
        }
        return true;
    }

    isDraw() {
        return this.getWinner() === null && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.state.arrTurn[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
