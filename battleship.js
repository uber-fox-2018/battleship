const input = process.argv.slice(2);

var ships = [
    {
        name: 'A',
        // size: 5,
        coordinates: [[5, 3], [5, 4], [5, 5], [5, 6], [5, 7]]
    },
    {
        name: 'B',
        // size: 4,
        coordinates: [[0, 2], [1, 2], [2, 2], [3, 2]]
    },
    {
        name: 'C',
        // size: 3,
        coordinates: [[9, 2], [9, 3], [9, 4]]
    },
    {
        name: 'D',
        // size: 2,
        coordinates: [[7, 7], [7, 8]]
    }
];



function printBoard() {
    const mainBoard = [];
    for (let i = 0; i < 10; i++) {
        if (mainBoard[i] === undefined) {
            mainBoard.push([]);
        }
        for (let j = 0; j < 10; j++) {
            mainBoard[i].push(' ');
        }
    }
    // console.log(mainBoard);

    // console.log('     A   B   C   D   E   F   G   H   I   J  ');
    // console.log('   +---------------------------------------+');
    // for (let i = 0; i < mainBoard.length; i++) {
    //     let printLine = '';
    //     if (i === mainBoard.length - 1) {
    //         printLine = `${i + 1} |`;
    //     } else {
    //         printLine = ` ${i + 1} |`;
    //     }
    //     for (let j = 0; j < mainBoard[i].length; j++) {
    //         printLine += ' ' + mainBoard[i][j] + ' |';
    //     }
    //     console.log(printLine);
    //     console.log('   |---|---|---|---|---|---|---|---|---|---|');

    // }
    // // console.log('   +---------------------------------------+');
    return mainBoard;
}

function printShips() {
    let shipsArr = printBoard();
    for (let i = 0; i < ships.length; i++) {
        for (let j = 0; j < ships[i].coordinates.length; j++) {
            for (let k = 0; k < ships[i].coordinates[j].length - 1; k++) {
                let firstCoordinate = ships[i].coordinates[j][k]
                let secondCoordinate = ships[i].coordinates[j][k+1]
                shipsArr[firstCoordinate][secondCoordinate] = ships[i].name;
            }
        }
    }
    return shipsArr;
}



// printBoard();
console.log(printShips());