class TicTacToe {
    constructor() {
        this.state = {
            arrTurn: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
            whoWinner : null,
            isDraw: false,
            whoGo: 'x'
        }
    }

    getCurrentPlayerSymbol() {
        return this.state.whoGo;
    }

    nextTurn(rowIndex, columnIndex) {
        // меняет state в конструкторе (изменить игрока, обновить хранилище меток и тд)
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
        this.isFinished();
    }

    isFinished() {
        // должен возвращать истину(TRUE), если игра завершена (например, есть победитель или это ничья) 
        let copyArrTurn = this.state.arrTurn;

        // есть ли победитель по горизонтали
        for (let row = 0; row < copyArrTurn.length; row++) {
            if (copyArrTurn[row][0] === copyArrTurn[row][1] && copyArrTurn[row][0] === copyArrTurn[row][2]) {
                this.state.whoWinner = copyArrTurn[row][0];
                return true;
            }
        }

        // есть ли победитель по вертикали
         for (let column = 0; column < copyArrTurn.length; column++) {
            if (copyArrTurn[0][column] === copyArrTurn[1][column] && copyArrTurn[0][column] === copyArrTurn[2][column]) {
                this.state.whoWinner = copyArrTurn[0][column];
                return true;
            }
        }

        // есть ли победитель по диагонали
        if (copyArrTurn[0][0] === copyArrTurn[1][1] && copyArrTurn[0][0] === copyArrTurn[2][2]) {
            this.state.whoWinner = copyArrTurn[0][0];
            return true;
        } 
        if (copyArrTurn[0][2] === copyArrTurn[1][1] && copyArrTurn[0][2] === copyArrTurn[2][0]) {
            this.state.whoWinner = copyArrTurn[0][2];
            return true;
        }

        this.noMoreTurns();
        return false;
    }

    getWinner() {
        // должен возвращать символ победителя (x или o) или null, если победителя еще нет
        return this.state.whoWinner;
    }

    noMoreTurns() {
        // должен возвращать истину(TRUE), если больше нет полей для размещения x или o
        let copyArrTurn = this.state.arrTurn.flat(1);

        for (let i = 0; i < copyArrTurn.length; i++) {
            if (copyArrTurn[i] === null) return false;
        }
        return this.state.isDraw = true;
    }

    isDraw() {
        return this.state.isDraw;
    }

    getFieldValue(rowIndex, colIndex) {
        // должен возвращать значение матрицы [строка] [столбец] (если есть) или ноль
        return this.state.arrTurn[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
