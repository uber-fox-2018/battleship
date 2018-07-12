// Your code here
function generateShips() {
    let ships = [
      {
        name: 'A',
        size: 5,
        pos: [[2,0],[2,1],[2,2],[2,3],[2,4]]
      },
      {
        name: 'B',
        size: 4,
        pos: [[3,4],[3,3],[3,2],[3,1]]
      },
      {
        name: 'C',
        size: 3,
        pos: [[6,5],[6,6],[6,7]]
      },
      {
        name: 'D',
        size: 2,
        pos: [[9,2],[9,3]]
      }
    ]
    return ships
  }
  
  function randomPos() {
    return Math.floor(Math.random()*10)
  }
  
  console.log(randomPos());
  
  function generateBoard(num) {
    let mainBoard = []
    for (let i = 0; i < num; i++) {
      let subBoard = []
      for (let j = 0; j < num; j++) {
        subBoard.push(' ')
      }
      mainBoard.push(subBoard)
    }
    return mainBoard
  }
  
  function addShips() {
    let ships = generateShips()
    let board = generateBoard(10)
    for(let i = 0; i < ships.length; i++) {
      for(let j = 0; j < ships[i].pos.length; j++) {
        let x = ships[i].pos[j][0]
        let y = ships[i].pos[j][1]
        board[x][y] = ships[i].name
      }
    }
    return board
  }
  
  // console.log(generateBoard(10));
  // console.log(addShips());
  
  const argv = process.argv
  const tembak = argv.slice(2)
  const tembakX = tembak[0].slice(0,1) // B
  const tembakY = tembak[0].slice(1) // 3
  console.log('x:',tembakX,'y:',tembakY);
  
  function convertTembak(tembakX, tembakY) {
    let tembakArr = []
    let alphabet = 'ABCDEFGHIJ'
    let number = [0,1,2,3,4,5,6,7,8,9]
    let indexAlpha = alphabet.indexOf(tembakX)
    tembakArr.push(number[indexAlpha], +tembakY)
    return tembakArr
  }
  
  console.log(convertTembak(tembakX, tembakY)); // finish convert tembak
  
  
  function tembakGan(tembakX, tembakY) {
    let coorTembak = convertTembak(tembakX, tembakY) // array[1, 1]
    let boardShips = addShips()
    let ships = generateShips() // arr of object
    if (boardShips[coorTembak[0]][coorTembak[1]] !== ' ' && boardShips[coorTembak[0]][coorTembak[1]] !== undefined) {
      console.log(`kamu berhasil nembak kapal ${boardShips[coorTembak[0]][coorTembak[1]]}`);
      
      boardShips[coorTembak[0]][coorTembak[1]] = 'X'
    } else if(boardShips[coorTembak[0]][coorTembak[1]] === ' '){
      console.log('Kamu tidak dapat kapal lur :(');
    } else if (coorTembak[0] > 10 || coorTembak[1] > 10) {
      console.log('Lapangan permainan anda hanya 10 X 10 Lur :(');
      
    }
    // let counter = 1
    // boardShips.forEach( row => {
    //     // console.log(row.join('_'))
    //     if(counter === 10) {
    //       console.log(`${counter}|${row.join('|')}`)
    //     } else {
    //       console.log(`${counter} |${row.join('|')}`)
    //       console.log(`  |---|---|---|---|---|---|---|---|---|---|`);
          
    //     }
    //     counter++
    // })
    return boardShips
  }
  
  console.log(tembakGan(tembakX, tembakY));