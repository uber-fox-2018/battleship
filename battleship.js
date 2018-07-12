// Your code here
const argv = process.argv.slice(2);
var coordX = argv[0];
var coordY = argv[1];

var ships = [
    {
    name:'Aircraft',
    size:5,
    symbol:'A',
    direction:'down',
    position:[],
    // position: [[0,0],[1,0],[2,0],[3,0],[4,0]]
}
,{
    name:'Battleship',
    size:4,
    symbol:'B',
    direction:'right',
    position:[],
    // position: [[1,6],[1,7],[1,8],[1,9]]
},{
    name:'Cruiser',
    size:3,
    symbol:'C',
    direction:'left',
    position:[],
    // position: [[7,1],[7,2],[7,3]]
},{
    name:'Destroyer',
    size:2,
    symbol:'D',
    direction:'up',
    position:[],
    // position: [[6,7],[7,7]]
}
]
// var randomX = Math.floor(Math.random()*5);
// var randomY = Math.floor(Math.random()*5);
var arrTemp = []


function generateBoard(){
    let result = [];
    for(let i = 0; i<10; i++){
        let row = []
        result.push(row)
        for(let j = 0; j<10; j++){
            row.push(' ')
        }
    }
    return result
}

// function random(){
//     let randomX = Math.floor(Math.random()*10);
//     let randomY = Math.floor(Math.random()*10);
//     let coordinate = [randomX,randomY];
//     return coordinate
// }

// function randomCheck(){
//     let randomCoord = Math.floor(Math.random()*10)
//     let board = generateBoard();
//     if(board[randomCoord][randomCoord] === " "){
        
//     }
// }

function position(size,direction,coordX,coordY){
    // debugger
    console.log('========> ');
    console.log(size);
    console.log(direction);
    console.log(coordX);
    console.log(coordY);
    // let randomCoord = Math.floor(Math.random()*10)
    let board = generateBoard()
    let coord = [] //coordS
    // if(board[coordX][coordY] === ' '){

        switch(direction){
            case 'down':
            for(let i = 0; i<= size; i++){
                console.log("MASUK FOR DOWN")
                if(board[coordX][coordY] === ' '){
                    let arr = [];
                    arr.push(coordX+i);
                    arr.push(coordY);
                    coord.push(arr);
                }
            }
            // console.log(coord);
            // console.log("=======================")
            break;

            case 'right':
            // let xRight = coordX;
            // let yRight = coordY;
            for(let i = 0; i<= size; i++){
                console.log("MASUK FOR RIGHT")
                if(board[coordX][coordY] === ' '){
                    let arr=[];
                    arr.push(coordX);
                    arr.push(coordY+i);
                    coord.push(arr);

                }
            }
            console.log(coord);
            console.log("=======================")
            break;

            case 'up':
            // let xUp = coordX;
            // let yUp = coordY;
            for(let i = 0; i<= size; i++){
                console.log("MASUK FOR UP")
                if(board[coordX][coordY] === ' '){
                    let arr = [];
                    arr.push(coordX-i);
                    arr.push(coordY);
                    coord.push(arr);
                }
            }
            console.log(coord);
            console.log("=======================")
            break

            case 'left':
            // let xLeft = coordX;
            // let yLeft = coordY;
            for(let i = 0; i<=size; i++){
                console.log("MASUK FOR LEFT")
                if(board[coordX][coordY] === ' '){
                    let arr = [];
                    arr.push(coordX);
                    arr.push(coordY-i);
                    coord.push(arr);

                }
            }
            console.log(coord);
            console.log("=======================")
            break;
        }
    // }
    return coord
}

function generateShip(){
    let board = generateBoard();
    for(let k = 0; k<ships.length; k++){
        let randomX = Math.floor(Math.random()*10);
        let randomY = Math.floor(Math.random()*10);

        ships[k].position = position(ships[k].size,ships[k].direction,randomX,randomY);
        // console.log(ships[k].position);
        for(let l = 0; l<ships[k].position.length;l++){
            let positionY = ships[k].position[l][0];
            let positionX = ships[k].position[l][1];
            if(positionY<10 && positionX<10){
                board[positionY][positionX] = ships[k].symbol;
            }
        }
    }
    return board
}

function targetDictionary(){
}

function finished(){

}


function startGame(argv1,argv2){
    let board = generateShip() 
    console.log(board)
    if(board[argv1][argv2] !== ' '){
        board[argv1][argv2] = 'X'
        console.log('You hit a ship')
    }else{
        board[argv1][argv2] = 'X'
        console.log('Miss')
    }
}

// console.log(generateBoard());
console.log(generateShip())
// console.log(randomCoordinate())
// startGame(coordX,coordY);



// / let xPosition = random();
            // let yPosition = random();

            // function checkClash() {
            //     if (mainBoard[xPosition][yPosition])
            // }

            // function randomize(size) {
            //     return Math.floor(Math.random() * 10);
            // }

            // function position (size, direction, xPosition, yPosition) {
            //     let fixPosition = [];
            //     switch (direction) {
            //         case 'down':
            //         for (let i = 0; i <= size; i++) {
            //             let arr = [];
            //             arr.push(xPosition + 1);
            //             arr.push(yPosition);
            //         }
            //         fixPosition.push(arr);
            //         break;
            //         default;
            //     }
            // }

