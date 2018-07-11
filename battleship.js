let usedIndexes = [];

let ships = [
  {
    name: 'A',
    size: 5,
    // pos: [[2,3],[2,4],[2,5],[2,6],[2,7]]
  },
  {
    name: 'B',
    size: 4,
    // pos: [[2,9],[3,9],[4,9],[5,9]]
  },
  {
    name: 'C',
    size: 3,
    // pos: [[6,3],[7,3],[8,3]]
  },
  {
    name: 'D',
    size: 2,
    // pos: [[1,1],[1,2]]
  }
]

ships[0].pos = randomizePos (5, usedIndexes);

function randomizePos(size, usedIndexes){
  const Direction = ['up', 'down', 'left', 'right'];
  
  let indexDirection = Math.floor(Math.random() * Direction.length);
  let shipDirection = Direction[indexDirection];
  
  let indexRowHead = Math.floor(Math.random() * 10);
  let indexColHead = Math.floor(Math.random() * 10);
  let headPosition = [indexRowHead, indexColHead];

  let shipPosition = [headPosition];

  for (let i = 0; i < size - 1; i++){
    let indexIsUsed = false;
    if (shipDirection === 'up'){
      let newIndex = [indexRowHead - (i + 1), indexColHead];
      if (newIndex[0] >= 0){
        if (usedIndexes.length > 0){
          for (let i in usedIndexes){
            if (newIndex[0] === usedIndexes[i] || newIndex[1] === usedIndexes[i]){
              indexIsUsed = true;
            }
          }
        }
        if (indexIsUsed){
          return randomizePos(size, usedIndexes);
        } else {
          usedIndexes.push(newIndex[0]);
          usedIndexes.push(newIndex[1]);
          shipPosition.push(newIndex);
        }
      }
    } else if (shipDirection === 'down'){
      let newIndex = [indexRowHead + (i + 1), indexColHead];
      if (newIndex[0] <= 10){
        if (usedIndexes.length > 0){
          for (let i in usedIndexes){
            if (newIndex[0] === usedIndexes[i] || newIndex[1] === usedIndexes[i]){
              indexIsUsed = true;
            }
          }
        }
        if (indexIsUsed){
          return randomizePos(size, usedIndexes);
        } else {
          usedIndexes.push(newIndex[0]);
          usedIndexes.push(newIndex[1]);
          shipPosition.push(newIndex);
        }
      } 
    } else if (shipDirection === 'left'){
      let newIndex = [indexRowHead, indexColHead - (i + 1)];
      if (newIndex[1] >= 0){
        if (usedIndexes.length > 0){
          for (let i in usedIndexes){
            if (newIndex[0] === usedIndexes[i] || newIndex[1] === usedIndexes[i]){
              indexIsUsed = true;
            }
          }
        }
        if (indexIsUsed){
          return randomizePos(size, usedIndexes);
        } else {
          usedIndexes.push(newIndex[0]);
          usedIndexes.push(newIndex[1]);
          shipPosition.push(newIndex);
        }
      }
    } else if (shipDirection === 'right'){
      let newIndex = [indexRowHead, indexColHead + (i + 1)];
      if (newIndex[1] <= 10){
        if (usedIndexes.length > 0){
          for (let i in usedIndexes){
            if (newIndex[0] === usedIndexes[i] || newIndex[1] === usedIndexes[i]){
              indexIsUsed = true;
            }
          }
        }
        if (indexIsUsed){
          return randomizePos(size, usedIndexes);
        } else {
          usedIndexes.push(newIndex[0]);
          usedIndexes.push(newIndex[1]);
          shipPosition.push(newIndex);
        }
      }
    }
  }
  if (shipPosition.length != size){
    return randomizePos(size, usedIndexes);
  } else {
    for (let i in shipPosition){
      usedIndexes.push(shipPosition[i])
    }
    return shipPosition;
  }
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