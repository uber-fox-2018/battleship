const input = process.argv.slice(2);

let announcePos = [];
let placement = [];

var ships = [
    {
        name: 'A',
        size: 5,
        coordinates: []
        // coordinates: [[5, 3], [5, 4], [5, 5], [5, 6], [5, 7]]
    },
    // {
    //     name: 'B',
    //     size: 4,
    //     coordinates: []
    //     // coordinates: [[0, 2], [1, 2], [2, 2], [3, 2]]
    // },
    // {
    //     name: 'C',
    //     size: 3,
    //     coordinates: []
    //     // coordinates: [[9, 2], [9, 3], [9, 4]]
    // },
    // {
    //     name: 'D',
    //     size: 2,
    //     coordinates: []
    //     // coordinates: [[7, 7], [7, 8]]
    // }
];

function generateBoard() {
    const mainBoard = [];
    for (let i = 0; i < 10; i++) {
        if (mainBoard[i] === undefined) {
            mainBoard.push([]);
        }
        for (let j = 0; j < 10; j++) {
            mainBoard[i].push(' ');
        }
    }
    return mainBoard;
}

function printBoard(mainBoard) {

    console.log('     A   B   C   D   E   F   G   H   I   J  ');
    console.log('   +---------------------------------------+');
    for (let i = 0; i < mainBoard.length; i++) {
        let printLine = '';
        if (i === mainBoard.length - 1) {
            printLine = `${i + 1} |`;
        } else {
            printLine = ` ${i + 1} |`;
        }
        for (let j = 0; j < mainBoard[i].length; j++) {
            printLine += ' ' + mainBoard[i][j] + ' |';
        }
        console.log(printLine);
        console.log('   |---|---|---|---|---|---|---|---|---|---|');

    }
    // console.log('   +---------------------------------------+');
    return mainBoard;
}

function printShips(ships) {
    let shipsArr = generateBoard();

    for (let i = 0; i < ships.length; i++) {
        // while(!checkClash) {

        // }
        ships[i].direction = randomDirection();
        ships[i].coordinates = position(ships[i].size, ships[i].direction, rowPos, colPos);

        for (let j = 0; j < ships[i].coordinates.length; j++) {
            let firstCoordinate = ships[i].coordinates[j][0]
            let secondCoordinate = ships[i].coordinates[j][1]
            shipsArr[firstCoordinate][secondCoordinate] = ships[i].name;
        }
    }
    printBoard(shipsArr);
    return shipsArr;
}

function randomDirection() {
    const direction = ['left', 'right', 'up', 'down'];
    let callDirection = Math.floor(Math.random() * direction.length);
    return direction[callDirection];
}


function randomize(size) {
    return Math.floor(Math.random() * 6);
}

let rowPos = randomize();
let colPos = randomize();

function position(size, direction, rowPos, colPos) {
    console.log('==> size', size);
    console.log("==>", direction);
    console.log('--> rowpos', rowPos);
    console.log('--> colpos', colPos);
    // let rowPos = Math.floor(Math.random() * 6);
    // let colPos = Math.floor(Math.random() * 6);
    let fixedPos = [];
    switch (direction) {
        case 'left':
            for (let i = 0; i < size; i++) {
                let arr = [];
                arr.push(rowPos);
                arr.push(colPos - i);
                fixedPos.push(arr);
            }
            console.log('left');

            break;

        case 'right':
            for (let i = 0; i < size; i++) {

                let arr = [];
                arr.push(rowPos);
                arr.push(colPos + i);
                fixedPos.push(arr);
            }
            console.log('right');
            break;

        case 'up':
            for (let i = 0; i < size; i++) {

                let arr = [];
                arr.push(rowPos - i);
                arr.push(colPos);
                fixedPos.push(arr);
            }
            console.log('up');
            break;

        case 'down':
            for (let i = 0; i < size; i++) {

                let arr = [];
                arr.push(rowPos + i);
                arr.push(colPos);
                fixedPos.push(arr);
            }
            console.log('down');
            break;

        default: break;
    }
    console.log('-->fixedcoor', fixedPos);
    return fixedPos;
}

function checkClash(mainBoard, rowPos, colPos) {
    if (mainBoard[rowPos][colPos] === ' ') {
        mainBoard.push(ships[i].name)
    } 
    // else {

    // }
    if (mainBoard[rowPos][colPos] > 0 && mainBoard[rowPos][colPos] < 10 ) {
        return true;
    } else {
        return false;
    }
}



// printBoard();
printShips(ships);