let ships = [
  {
    name: 'A',
    size: 5,
    pos: [[2,3],[2,4],[2,5],[2,6],[2,7]]
  },
  {
    name: 'B',
    size: 4,
    pos: [[2,9],[3,9],[4,9],[5,9]]
  },
  {
    name: 'C',
    size: 3,
    pos: [[6,3],[7,3],[8,3]]
  },
  {
    name: 'D',
    size: 2,
    pos: [[1,1],[1,2]]
  }
]

function randomizePos(size){
  const Index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Direction = ['up', 'down', 'left', 'right'];

  let indexDirection = Math.floor(Math.random() * Direction.length);
  let shipDirection = Direction[indexDirection]

  for (let i = 0; i < size; i++){
    
  }

  let indexShip 
  let indexHead = Math.ceil(Math.random() * Index.length)

  return firstIndex
}


function printBoard (){
  console.log('     A   B   C   D   E   F   G   H   I   J')
  console.log('   +---------------------------------------+')
  printLine(ships)
  console.log('   +---------------------------------------+')
}

function printLine (shipsObj){
  let board = [];
  let border = '\n   |---|---|---|---|---|---|---|---|---|---|\n'

  for (let i = 1; i <= 10; i++){
    let row = [];
    if (i < 10){
      row.push(` ${i} |`);    
    } else {
      row.push(`${i} |`);  
    }

    for (let j = 1; j <= 10; j++){
      for (let k in shipsObj){
        for (let l in shipsObj[k].pos){
        if (shipsObj[k].pos[l][0] === i && shipsObj[k].pos[l][1] === j ){
          row.push(` ${shipsObj[k].name} |`);
          j++;
        }
        }
      }
      row.push('   |');
    }
    board.push(row.join(''));
    debugger;
  }
  console.log(board.join(border))
}

// printBoard()