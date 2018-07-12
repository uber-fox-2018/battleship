// Your code here
const target = process.argv
const targetX = target[2]
const targetY = target[3]

var ships = [{
    name: 'A',
    size: 5,
    position: [[2,1],[3,1],[4,1],[5,1],[6,1]]
},
{
    name: 'B',
    size: 4,
    position: [[8,1],[8,2],[8,3],[8,4]]
},
{
    name: 'C',
    size: 3,
    position: [[3,7],[4,7],[5,7]]
},
{
    name: 'D',
    size: 2,
    position: [[0,0],[1,0]]
}]

var board = []

function printBoard() {
    console.log('     A   B   C   D   E   F   G   H   I   J')
    console.log('   +---------------------------------------+')
    for (let i = 0; i < 10; i++) {
        let miniboard = []
        for (let j = 0; j < 10; j++) {
            miniboard.push(' ')
        }
        board.push(miniboard)
    }
    console.log('   +---------------------------------------+');
}

function shipPlacement() {
    printBoard()
    for (let i in ships) {
        for (let j = 0; j < ships[i].position.length; j++) {
            var coordinateRow = ships[i].position[j][0]
            var coordinateColumn = ships[i].position[j][1]
            board[coordinateRow][coordinateColumn] = ships[i].name
        }
    }   
    return board
}

function hitTarget(targetX, targetY) {
   var boardShip = shipPlacement()
    console.log(`your target ==> ${targetX},${targetY}`)
    if (boardShip[targetX][targetY] !== ' ') {
        boardShip[targetX][targetY] = 'X'
        console.log(`kapal kena bosq`)
    } else {
        console.log(`lol gak kena`)
    }
    console.log(boardShip)
}

hitTarget(targetX, targetY)


