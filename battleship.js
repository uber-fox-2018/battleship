// Your code here
const argv = process.argv.slice(2)
// console.log(argv[0]);
var shootX = Number(argv[0])
var shootY = Number(argv[1])


var ships = [
    {
        name : 'A',
        size : 5,
        direction : 'down',
        pos : []
        // pos : [[0,0],[0,1],[0,2],[0,3],[0,4]]

    },
    {
        name : 'B',
        size : 4,
        direction : 'up',
        pos : []
        // pos : [[3,1],[4,1],[5,1],[6,1]]
    },
    {
        name : 'C',
        size : 3,
        direction : 'right',
        pos : []
        // pos : [[1,7],[2,7],[3,7]]
    },
    {
        name : 'D',
        size : 2,
        direction : 'left',
        pos : []
        // pos : [[6,5],[6,6]]
    }

]

function createBoard(){
    var board = []
    
    for(var i = 0; i < 10; i++){
        var childArr = []
        for(var j = 0; j <= 10; j++){
            childArr.push('|  ')
        }
        board.push(childArr)
      
    }
    return board
   
}

function placeShip(){
    var board = createBoard()

    
    for(var i = 0; i < ships.length; i++){
            var cek = false
            while(cek === false){
                var posRandom = randomPos()
                cek = cekPos(board, posRandom, ships[i])
            }

            // console.log("==============>",ships[i]);
            for(var j = 0; j < ships[i].pos.length; j++){
                var koorX = ships[i].pos[j][0]
                var koorY = ships[i].pos[j][1]
                board[koorX][koorY] = `| ${ships[i].name}`
            }
            
            
        }
        
        return board
    
}

function cekPos(board,posRandom, ship) {

    var x = posRandom[0]
    var y = posRandom[1]
    var count = 0
    if(ship.direction === 'down'){
        for(var i = 0; i < ship.size; i++){
            if(board[x][y] === '|  '){
                ship.pos.push([x,y])
                x++
                count++
                if(x >= board.length){
                    ship.pos = []
                    return false
                }
            }
        }
        
        // console.log('A '+ship.pos);
        if(count === ship.size){
            count = 0
            return true
        }
        ship.pos = []
    }else if(ship.direction === 'up') {
        for(var i = 0; i < ship.size; i++){
            if(board[x][y] === '|  '){
                ship.pos.push([x,y])
                x--
                count++
                if(x < 0){
                    ship.pos = []
                    return false
                }
            }
        }
        // console.log('B '+ship.pos);
        if(count === ship.size){
            count = 0
            return true
        }
        ship.pos = []
    }else if(ship.direction === 'right') {
        for(var i = 0; i < ship.size; i++){
            if(board[x][y] === '|  '){
                ship.pos.push([x,y])
                y++
                count++
                if(y >= board.length){
                    ship.pos = []
                    return false
                }
            }
        }
        // console.log('C '+ship.pos);
        if(count === ship.size){
            count = 0
            return true
        }
        ship.pos = []
    }else if(ship.direction === 'left') {
        for(var i = 0; i < ship.size; i++){
            if(board[x][y] === '|  '){
                ship.pos.push([x,y])
                y--
                count++
                if(y < 0){
                    ship.pos = []
                    return false
                }
            }
        }

        // console.log('D '+ship.pos);
        if(count === ship.size){
            count = 0
            return true
        }
        ship.pos = []
    }

    return false
}


function randomPos(){
    var arr = []
    var posX = Math.floor(Math.random()*9)
    var posY = Math.floor(Math.random()*9)
    arr.push(posX)
    arr.push(posY)

    return arr
}

function shootsShip() {
    var board = placeShip()
    
    if(board[shootX][shootY] !== '|  '){
        board[shootX][shootY] = '|XX'
        console.log('you win !, you hit the ship');
    }else{
        console.log('try again bosku');
        
    }

    return board
}


function printBoard() {
    // var board = placeShip()
    var board = shootsShip()
    
    var border = `\n|---|---|---|---|---|---|---|---|---|---|\n`

    console.log('  A   B   C   D   E   F   G   H   I   J');
    console.log('+----------------------------------------+');
    console.log(board.join(border));
    console.log('  +---------------------------------------+');
}


printBoard();

