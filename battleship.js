// Your code here
let argv = process.argv
let attack_i = argv[2]
let attack_j = argv[3]

var board = []
var ships = [
    {
        name: 'A',
        direction: 'right',
        size: 2,
        position: [],
    },{
        name: 'B',
        direction: 'down',
        size: 3,
        position: [],
    }
    ,{
        name: 'C',
        direction: 'down',
        size: 4,
        position: []
    },{
        name: 'D',
        direction: 'right',
        size: 5,
        position: []
    }
]

function createBoard() {
    for (let i = 0; i < 10; i++) {
        let newArr = []
        for (let j = 0; j < 10; j++) {
            newArr.push(' ')
        }
       board.push(newArr) 
    }
    return board
}

function addShip() {
    let board = createBoard()
    // console.log(board);
    
    let ships = createPosition()
    // console.log(ships);
    
     for (let i = 0; i < ships.length; i++) {
        for (let j = 0; j < ships[i].position.length; j++) {
            let row = ships[i].position[j][0]
            let col = ships[i].position[j][1]
            board[row][col] = ships[i].name
        }
    }
   return board
}

function printBoard() {  
    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join(' | '));
        console.log('--|---|---|---|---|---|---|---|---|');  
    }
}

function createPosition() {
    for (let i = 0; i < ships.length; i++) {
        let randomRow = Math.floor(Math.random()*6)
        let randomCol = Math.floor(Math.random()*4)
        for (let j = 0; j < ships[i].size; j++) {
            let newArr = []
            for (let k = 0; k < 2; k++) {
                if (ships[i].direction === 'right') {
                    if (k === 0) {
                        newArr.push(randomRow) 
                    }else {
                        newArr.push(randomCol+=1)
                    }
                }else if (ships[i].direction === 'down') {
                    if (k === 0) {
                        newArr.push(randomRow +=1) 
                    }else {
                        newArr.push(randomCol)
                    }
                }
            }
            ships[i].position.push(newArr)
        }
    }
    return ships
}

function attack(attack_i,attack_j) {
    if (board[attack_i][attack_j] !== ' ') {
        board[attack_i][attack_j] = 'X' 
        console.log(`Gotcha!! Kapal tenggelam`);
    }else if (board[attack_i][attack_j] === ' ') {
        board[attack_i][attack_j] = '/' 
        console.log(`Oooppss Missed`);
        
    }
    return board
}

addShip()
attack(attack_i,attack_j)
printBoard()




function checkBoard(ships) {
    while (true) {
        for (let i = 0; i < ships[i].length; i++) {
            const element = array[i];
            
        }
    }
}
