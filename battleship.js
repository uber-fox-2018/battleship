// var ships = [
//     {
//         name: 'Aircraft carrier',
//         size: 5,
//         coordinates: [[5,3], [5,4], [5,5], [5,6], [5,7]]
//     }, 
//     {
//         name: 'Battleship',
//         size: 4,
//         coordinates: [[2,0], [2,1], [2,2], [2,3]]
//     },
//     {
//         name: 'Cruiser',
//         size: 3,
//         coordinates: [[9,2], [9,3], [9,4]]
//     }, 
//     {
//         name: 'Destroyer',
//         size: 2,
//         coordinates: [[7,7], [7,8]]
//     }
// ];

var mainBoard = [];
for (let i = 0; i < 10; i++) {
    if (mainBoard[i] === undefined) {
        mainBoard.push([]);
    }
    for (let j = 0; j < 10; j++) {
        mainBoard[i].push('X');
    }
}

function printBoard() {
    console.log('     A   B   C   D   E   F   G   H   I   J  ');
    console.log('   +---------------------------------------+');
    for (let i = 0; i < mainBoard.length; i++) {
        let printLine = '';
        if (i === mainBoard.length - 1) {
            printLine = `${i+1} |`;
        } else {
            printLine = ` ${i+1} |`;
        }
        for (let j = 0; j < mainBoard[i].length; j++) {
            printLine += ' ' + mainBoard[i][j] + ' |';
        }
        console.log(printLine);
        console.log('   |---|---|---|---|---|---|---|---|---|---|');
        
    }
    console.log('   +---------------------------------------+');
}


printBoard();