const ship = [
  {
    name: "A",
    size: 5,
    direction: "down",
    pos: [[1, 3], [1, 4], [1, 5], [1, 6], [1, 7]]
  },
  {
    name: "B",
    size: 4,
    direction: "right",
    pos: [[3, 9], [4, 9], [5, 9], [6, 9]]
  },
  {
    name: "C",
    size: 3,
    direction: "left",
    pos: [[6, 3], [7, 3], [8, 3]]
  },
  {
    name: "D",
    size: 2,
    direction: "up",
    pos: [[3, 1], [3, 2]]
  }
];

function gameBoard() {
  const height = 10;
  let mainBoard = [];

  for (let i = 0; i < height; i++) {
    var isiBoard = [];
    for (let j = 0; j < height; j++) {
      isiBoard.push("");
    }
    mainBoard.push(isiBoard);
  }
  return mainBoard;
}

function generateShips() {
  const board = gameBoard();

  for (let i = 0; i < ship.length; i++) {
    for (let j = 0; j < ship[i].pos.length; j++) {
      var coorX = ship[i].pos[j][0];
      var coorY = ship[i].pos[j][1];
      if (board[coorX][coorY] === "") {
        board[coorX][coorY] = ship[i].name;
      }
    }
  }
  return board;
}

/* tembaKKapal release 0 (static)
function tembakKapal(titikCoordinat) {
  const kumpulanTitikTembak = titikCoordinat;
  let kumpulanTitikTembakArr = [];
  for (let i = 0; i < kumpulanTitikTembak.length; i++) {
    var titikCoordinatSplit = kumpulanTitikTembak[i].split("");
    kumpulanTitikTembakArr.push(titikCoordinatSplit);
  }

  const boardGame = generateShips();

  for (let i = 0; i < kumpulanTitikTembakArr.length; i++) {
    var titikCoordinatX = kumpulanTitikTembakArr[i][0]
    var titikCoordinatY = kumpulanTitikTembakArr[i][1]
    if (boardGame[titikCoordinatX][titikCoordinatY] != '') {
      boardGame[titikCoordinatX][titikCoordinatY] = '<B**M>'
    } else {
      boardGame[titikCoordinatX][titikCoordinatY] = '/'
    }
  }

  console.log(boardGame)
} */

function randomCoordinat() {
  return Math.floor(Math.random() * 9);
}

function shipDirection () {
  var coorX = randomCoordinat()
  var coorY = randomCoordinat()
  const board = gameBoard()  
  
  for (let i = 0; i < ship.length; i++) {
    switch (ship[i].direction) {
      case 'down': 
        coorX = randomCoordinat()
        coorY = randomCoordinat()
        if (board[coorX][coorY] === '' && board[coorX][coorY] != undefined) {
          if (board.length <= 10 && board[i].length <= 10) {
            for (let j = 0; j < ship[i].size; j++) {
              board[coorX + j][coorY] = ship[i].name
            }
          }
        } else {
          coorX = randomCoordinat()
          coorY = randomCoordinat()
        }
      break
      case 'right': 
        coorX = randomCoordinat()
        coorY = randomCoordinat()
        if (board[coorX][coorY] === '' && board[coorX][coorY] != undefined) {
          for (let j = 0; j < ship[i].size; j++) {
            board[coorX][coorY + j] = ship[i].name
          }
        } else {
          coorX = randomCoordinat()
          coorY = randomCoordinat()
        }
      break
      case 'left': 
        coorX = randomCoordinat()
        coorY = randomCoordinat()
        if (board[coorX][coorY] === '' && board[coorX][coorY] != undefined) {
          for (let j = 0; j < ship[i].size; j++) {
            board[coorX][coorY-j] = ship[i].name
          }
        } else {
          coorX = randomCoordinat()
          coorY = randomCoordinat()
        }
      break
      case 'up': 
        coorX = randomCoordinat()
        coorY = randomCoordinat()
        if (board[coorX][coorY] === '' && board[coorX][coorY] != undefined) {
          for (let j = 0; j < ship[i].size; j++) {
            board[coorX-j][coorY] = ship[i].name
          }
        } else {
          coorX = randomCoordinat()
          coorY = randomCoordinat()
        }
      break
    }
  }
  // console.log(board)
  return board
}
// shipDirection()

function tembakKapal(titikCoordinat) {
  const kumpulanTitikTembak = titikCoordinat;
  let kumpulanTitikTembakArr = [];
  for (let i = 0; i < kumpulanTitikTembak.length; i++) {
    var titikCoordinatSplit = kumpulanTitikTembak[i].split("");
    kumpulanTitikTembakArr.push(titikCoordinatSplit);
  }

  const boardGame = shipDirection();

  for (let i = 0; i < kumpulanTitikTembakArr.length; i++) {
    var titikCoordinatX = kumpulanTitikTembakArr[i][0]
    var titikCoordinatY = kumpulanTitikTembakArr[i][1]
    if (boardGame[titikCoordinatX][titikCoordinatY] != '') {
      boardGame[titikCoordinatX][titikCoordinatY] = '*'
    } else {
      boardGame[titikCoordinatX][titikCoordinatY] = '/'
    }
  }

  console.log(boardGame)
}

tembakKapal([`${randomCoordinat()}${randomCoordinat()}`, `${randomCoordinat()}${randomCoordinat()}`]);
