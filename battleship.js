// Your code here
var argv = process.argv
var attack1 = argv[2]
var attack2 = argv[3]

var objShip = [
    {
        name: 'A', pos: [[0,0],[1,0]]
    },
    {
        name: 'B', pos: [[2,7],[3,7],[4,7]]
    },
    {
        name: 'C', pos: [[2,1],[3,1],[4,1],[5,1],[6,1]]
    },
    {
        name: 'D', pos: [[8,1],[8,2],[8,3],[8,4]]
    }
]


function shipBoard(){
let arrBoard = board()
    for(let i = 0; i<objShip.length; i++){
        for(let j = 0; j<objShip[i].pos.length;j++){
            let kordinat = objShip[i].pos[j][0]
            let kordinat2 = objShip[i].pos[j][1]
            arrBoard[kordinat][kordinat2] = objShip[i].name
        }
    }
    board(arrBoard)
    return arrBoard
}

function board() {
// console.log('    1   2   3   4   5   6   7   8   9   10  ')
// console.log('+------------------------------------------------------+')
let hasil = [];
    for(let i = 0; i< 10; i++){
        if(hasil[i] === undefined) {
            hasil.push([])
        }
        // console.log(hasil)
        for(let j = 0; j < 10 ; j++){
                hasil[i].push(' ')
                // console.log(hasil[i])
        }
    }
    return hasil
}

function attack(attack1,attack2){
    let allAttack = shipBoard()
    console.log(attack1);
    
    if(allAttack[attack1][attack2] !== ' '){
        allAttack[attack1][attack2] = 'X'
        console.log('duuuuuaaaarrrrr....');
        
    } else if (allAttack[attack1][attack2] === ' '){
        allAttack[attack1][attack2] = 'V'
        console.log('miss....');
        
    }
    return allAttack
}

console.log(shipBoard());
// console.log(board());
attack(attack1,attack2);

// console.log(line())



// function board(row,col){
//     let 

//     for (let i =0; i<){

//     }
// }

// console.log('  A   B   C   D   A   B   C   D  ')
// console.log('+-------------------------------+')
// console.log(printLine())
// console.log('+-------------------------------+')

// console.log(board());
