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

for (let i in ships){
  let head = randomizeIndex1()
  ships[i].pos = randomizePos (ships[i].size, usedIndexes, head);
}


function randomizeDir(){
  const Direction = ['up', 'down', 'left', 'right'];
  
  let indexDirection = Math.floor(Math.random() * Direction.length);
  return Direction[indexDirection];
}

function randomizeIndex1(){
  let indexRowHead = Math.floor(Math.random() * 10);
  let indexColHead = Math.floor(Math.random() * 10);

  if (usedIndexes.length > 0){
    for (let i in usedIndexes){
      if (usedIndexes[i][0] === indexRowHead && usedIndexes[i][1] === indexColHead){
        return randomizeIndex1()
      }
    }
  }

  usedIndexes.push([indexRowHead, indexColHead])
  return [indexRowHead, indexColHead];
}

function randomizePos(size, usedIndexes, index1){

  let shipDirection = randomizeDir();  
  let headPosition = index1
  let shipPosition = [];
  shipPosition.push(headPosition);

  for (let i = 0; i < size - 1; i++){

    if (shipDirection === 'up'){
      let newIndex = [headPosition[0] - (i + 1), headPosition[1]];
      if (newIndex[0] >= 1){
        for (let i in usedIndexes){
          if (newIndex[0] === usedIndexes[i][0] && newIndex[1] === usedIndexes[i][1]){
            return randomizePos(size, usedIndexes, headPosition);
          }
        }
        shipPosition.push(newIndex);
      } else {
        return randomizePos(size, usedIndexes, headPosition);
      }

    } else if (shipDirection === 'down'){
      let newIndex = [headPosition[0] + (i + 1), headPosition[1]];
      if (newIndex[0] <= 10){
        for (let i in usedIndexes){
          if (newIndex[0] === usedIndexes[i][0] && newIndex[1] === usedIndexes[i][1]){
            return randomizePos(size, usedIndexes, headPosition);
          }
        }
        shipPosition.push(newIndex);
      } else {
        return randomizePos(size, usedIndexes, headPosition);
      }

    } else if (shipDirection === 'left'){
      let newIndex = [headPosition[0], headPosition[1] - (i + 1)];
      if (newIndex[1] >= 1){
        for (let i in usedIndexes){
          if (newIndex[0] === usedIndexes[i][0] && newIndex[1] === usedIndexes[i][1]){
            return randomizePos(size, usedIndexes, headPosition);
          }
        }
        shipPosition.push(newIndex);
      } else {
        return randomizePos(size, usedIndexes, headPosition);
      }

    } else if (shipDirection === 'right'){
      let newIndex = [headPosition[0], headPosition[1] + (i + 1)];
      if (newIndex[1] <= 10){
        for (let i in usedIndexes){
          if (newIndex[0] === usedIndexes[i][0] && newIndex[1] === usedIndexes[i][1]){
            return randomizePos(size, usedIndexes, headPosition);
          }
        }
        shipPosition.push(newIndex);
      } else {
        return randomizePos(size, usedIndexes, headPosition);
      }
    }
  }
  
  if (shipPosition.length === size){
    for (let i = 1; i < shipPosition.length; i++){
      usedIndexes.push(shipPosition[i])
    }

    return shipPosition;
  } else {
    return randomizePos(size, usedIndexes, headPosition);
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

ships.forEach(ship=> {
  console.log(JSON.stringify(ship.pos))
})
printBoard()