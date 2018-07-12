/* STATIC BOARD IS COMPLETED */
//Try this in terminal: node battleship A0 B0 E7 C7 A7 A8 B5 E8
/* Expected Output:
D SINKS!
C is HIT!
C is HIT!
You missed! Try again!
You missed! Try again!
You missed! Try again!
You missed! Try again!
[ [ 'X', ' ', ' ', ' ', ' ', ' ', ' ', '/', '/', ' ' ],
  [ '!', ' ', ' ', ' ', ' ', '/', ' ', ' ', ' ', ' ' ],
  [ ' ', 'A', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', 'A', ' ', ' ', ' ', ' ', ' ', 'C', ' ', ' ' ],
  [ ' ', 'A', ' ', ' ', ' ', ' ', ' ', 'X', '/', ' ' ],
  [ ' ', 'A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', 'A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', 'B', 'B', 'B', 'B', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ]

*/
let gameBoard;
const shoots = process.argv.slice(2);
let missArr=shoots.slice(0);
let ships = [
  {
    name: 'A',
    size: 5,
    nyawa: 5,
    position : [[2,1],[3,1],[4,1],[5,1],[6,1]]
    // coor     : [[C,1],[D,1],[E,1],[F,1],[G,1]]
  },
  {
    name: 'B',
    size: 4,
    nyawa: 4,
    position: [[8,1],[8,2],[8,3],[8,4]]
    // coor    : [[I,1],[I,2],[I,3],[I,4]]
  },
  {
    name: 'C',
    size: 3,
    nyawa: 3,
    position : [[2,7],[3,7],[4,7]]
    //coor      : [[C,7],[D,7],[E,7]]
  },
  {
    name: 'D',
    size: 2,
    nyawa: 2,
    position: [[0,0],[1,0]]
    //coor     : [[A,0],[B,0]]
  }
]

if(shoots.length>10){
    console.log("Woaaaah....Maksimal 10 tembakan");
}

function shipPos(i,j){
    for(var ship of ships){
      // console.log(ship.position);
      for(var pos of ship.position){
       if(pos[0]===i && pos[1]===j){
         return ship.name;
       }
      }
    }
    return " ";
}
function generateBoard (){
    let board = []
    for (let i=0 ; i < 10 ; i++){
        let box = [];
        for (let j=0 ; j < 10 ; j++){
            box.push(shipPos(i,j));
        }
        board.push(box);
    }
    gameBoard = board;
}
const alpha = "ABCDEFGHIJ";

function tembak(){
  generateBoard();
  let shootArr =[];
  for(var shoot of shoots){
    var alphaIndex= alpha.indexOf(shoot[0]);//e.g. A
    var sisa = shoot[1]; // e.g. 0
    shootArr.push(alphaIndex+sisa); // [ '00', '10' ]
  }
  // console.log("Ini tembakan: " + shootArr);//[ '00', '10' ]
  for(var shoot of shootArr){
    for(var ship of ships){
        for(var pos of ship.position){
            // console.log(pos);
            if(pos[0]==shoot[0] && pos[1]==shoot[1]){
                missArr.shift();
                ship.nyawa--;
                if(ship.nyawa === 0){
                  sink(pos[0],pos[1]);
                    console.log(ship.name + " SINKS!");
                }else{
                  hit(pos[0],pos[1]);
                    console.log(ship.name + " is HIT!");
                }
                
            }
        }
        
    } 
  }

  var missed1;
  var missed2;
  for(var missed of missArr){
    missed1= alpha.indexOf(missed[0]);//e.g. A
    missed2 = missed[1]; // e.g. 0
    miss(missed1,missed2);
  }
  console.log(gameBoard);
}
tembak();

function hit(p0,p1){
  for(let i=0;i<gameBoard.length;i++){
    for(let j=0;j<gameBoard.length;j++){
      gameBoard[p0][p1]= "X";
    }
  }
  return gameBoard;
}
function sink(P1,P2){
  for(let i=0;i<gameBoard.length;i++){
    for(let j=0;j<gameBoard.length;j++){
      gameBoard[P1][P2]= "!";
    }
  }
  return gameBoard;
}

function miss(shot1,shot2){
  gameBoard[shot1][shot2]= "/";
  console.log("You missed! Try again!");
}



//RANDOMISE IS UNCOMPLETED
 /* ============================================================================================= */
// /* Randomise the position of ships */
// //Destroyer
// let vessels = [
//     {
//       name: 'Aircraft carrier',
//       code: 'A',
//       size: 5,
//       nyawa: 5,
//       pos:[]
//     },
//     {
//       name: 'Battleship',
//       code: 'B',
//       size: 4,
//       nyawa: 4,
//       pos:[]
//     },
//     {
//       name: 'Cruiser',
//       code: 'C',
//       size: 3,
//       nyawa: 3,
//       pos:[]
//     },
//     {
//       name: 'Destroyer',
//       code: 'D',
//       size: 2,
//       nyawa: 2,
//       pos:[]
//     }
//   ]
// var filledPos=[];

// function randomise(vessels){
//     for(var vessel of vessels){
//         let counter = Math.floor(Math.random()*2);//0-1 //penentu depan yg fix atau random. Klo 0, [depan fix, belakang random]
//         let angkaFixed = Math.floor(Math.random()*10); //0-9
//         let angkaRandom = Math.floor(Math.random()*10);
//         let box = [];
//             //e.g. [2,9]
//             //cek if angkaRandom + size <= 9, if yes, cek if dari head - tail belum terisi semua, if yes, push. if not, cek vertical.
//         if(!filledPos.length && (angkaRandom + vessel.size <= 9)){//filledPos = []
//             for(let i=0; i<vessel.size; i++){
//                     if(counter===0){ // horizontal ke kanan
//                         box.push(angkaFixed,angkaRandom);
//                         angkaRandom ++;
//                     }else{ //vertikal ke bawah
//                         box.push(angkaRandom,angkaFixed);
//                         angkaRandom ++;
//                     }
//                     vessel.pos.push(box);
//                     filledPos.push(box);
//                     box=[];
//             }
//         }else if(!filledPos.length && (angkaRandom + vessel.size>9)){
//             for(let i=0;i<vessel.size;i++){
//                 if(counter===0){ // horizontal ke kiri
//                     box.push(angkaFixed,angkaRandom);
//                     angkaRandom --;
//                 }else{ //vertikal ke atas
//                     box.push(angkaRandom,angkaFixed);
//                     angkaRandom --;
//                 }
//                 vessel.pos.push(box);
//                 filledPos.push(box);
//                 box=[];
//             }
//         }else if(filledPos.length){ //IF some positions have been filled THEN
//             if(angkaRandom + vessel.size <= 9){
//                 //check "filledPos" first
//                 if(counter===0){// mulai horizontal ke kanan
//                     var firstCoor = Number(String(angkaFixed) + String(angkaRandom));
//                     if(checkPos(vessel.size, firstCoor).length===0){//
//                         for(let i=0; i<vessel.size; i++){
//                             box.push(angkaFixed,angkaRandom);
//                             vessel.pos.push(box);
//                             filledPos.push(box);
//                             box=[];
//                             angkaRandom ++;
//                         }   
//                     }else{ //berarti ada posisi yg sama yang sudah terisi, coba horizontal ke kiri dulu
                        
//                     }
//                 }else{//counter===1, vertical ke bawah

//                 }       
//             }else(angkaRandom + vessel.size > 9){

//             }
//         }
        
//     }
//     console.log(JSON.stringify(vessels, null, 2)); //buat nampilin nested array di console
//     console.log(filledPos);
// }

// randomise(vessels);

// function checkPos(size, firstCoordinat){
//     var joinedFilledPos =[];
//     for(let pos of filledPos){
//       joinedFilledPos.push(Number(pos.join("")));
//     }
//     var arrCoor=[];
//     var countDown = size;
//     if(joinedFilledPos.includes(firstCoordinat)){
//       while(countDown>0){
//         arrCoor.push(firstCoordinat);
//         firstCoordinat++;
//         countDown--;
//       }
//     }
//     return arrCoor;
//   }
  

