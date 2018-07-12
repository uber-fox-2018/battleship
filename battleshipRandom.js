// Your code here
var argv = process.argv
var attack1 = argv[2]
var attack2 = argv[3]

var objShip = [
    {
        name: 'A', pos: [], size: 2, direction: 'down'
    },
    {
        name: 'B', pos: [], size: 3 , direction: 'left'
    },
    {
        name: 'C', pos: [], size: 5, direction: 'right'
    },
    {
        name: 'D', pos: [], size: 4, direction: 'up'
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
    randomDirection()
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

function randomDirection(){
    let arah = []

    for(let i = 0; i<objShip.length; i++){
        let kordinatX = Math.floor(Math.random()*5)
        let kordinatY = Math.floor(Math.random()*5)

        for(let j=0; j<objShip[i].size ; j++){
            
            let directRandom = objShip[i].direction[j]
            if(directRandom === 'down'){
                arah.push(kordinatY)
            }
            if(directRandom === 'up'){
                parah.push(kordinatY)
            }
            if(directRandom === 'right'){
                arah.push(kordinatX)
            }
            if(directRandom === 'left'){
                arah.push(kordinatX)
            }
        }

    }
    // if(direction === 'down') {
    // }
    return arah
}

function attack(attack1,attack2){
    let allAttack = shipBoard()
    console.log(attack1);
    
    if(allAttack[attack1][attack2] !== ' '){
        allAttack[attack1][attack2] = 'X'
        console.log('duuuuuaaaarrrrr....');
        
    } else if (allAttack[attack1][attack2] === ' '){
        allAttack[attack1][attack2] = '/'
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
