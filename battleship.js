"use strict"

let board = [];
let ships = [];
let alphabets;
let shipsOnHitId = [];
let targetHitLabel = '';
let targetMissLabel = '';

(function () {
    targetHitLabel = 'X';
    targetMissLabel = '/';
    alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let inputs = process.argv.slice(2);
    if(inputs.length === 0)
        printHelp();

    board = initializeBoard(10);
    ships = initializeShips();
    
    let inputCoords = parseInputs(inputs);

    openFire(inputCoords);
    printBoard();
    printShipsOnHit();

    return;
}())

function initializeBoard(boardSize) {
    let board = [];
    let row;
    for (let i = 0; i < boardSize; i++) {
        row = [];
        for (let j = 0; j < boardSize; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
}

function initializeShips() {
    let ships = [
        { id: 0, label: 'A', name: 'Aircraft carrier', size: 5 },
        { id: 1, label: 'B', name: 'Battleship', size: 4 },
        { id: 2, label: 'C', name: 'Cruiser', size: 3 },
        { id: 3, label: 'D', name: 'Destroyer', size: 2 },
    ]

    for (let i = 0; i < ships.length; i++) {
        ships[i]['coordinates'] = getShipRandomCoordinates(ships[i]);
        mapShipToBoard(ships[i]);
    }

    return ships;
}

function validateCoordinate(y, x) {
    if (y < 0 || x < 0 || y > board.length - 1 || x > board.length - 1)
        return false;

    return true;
}

function isCoordEmpty(y, x) {
    if (!validateCoordinate(y, x))
        return false;

    if (board[y][x] === ' ')
        return true;

    return false;
}

function getRandomCoordinate() {
    let y = getRandomInt(board.length);
    let x = getRandomInt(board.length);
    if (isCoordEmpty(y, x))
        return [y, x];
    else
        return getRandomCoordinate();
}

function mapShipToBoard(ship) {
    let coors = ship.coordinates;
    for (let j = 0; j < coors.length; j++) {
        let y = coors[j][0];
        let x = coors[j][1];
        board[y][x] = ship.label;
    }
    return;
}

function getShipRandomCoordinates(ship) {
    let headPosition = getRandomCoordinate();

    let directions = getArrayOfRandomNumber(4);
    while (directions.length > 0) {
        let coordinates = mapDirection(ship, headPosition, directions[0])
        if (coordinates.length === ship.size) {
            return coordinates;
        }
        else {
            directions.splice(0, 1);
        }
    }

    return getShipRandomCoordinates(ship);
}

//dir 0 to left
//dir 1 to upward
//dir 2 to right
//dir 3 to downward
function mapDirection(ship, headPosition, dir) {
    let i = headPosition[0];
    let j = headPosition[1];
    let coordinates;
    switch (dir) {
        case 0: {
            coordinates = [];
            for (let left = j; left >= j - ship.size + 1; left--) {
                if (isCoordEmpty(i, left))
                    coordinates.push([i, left]);
                else
                    coordinates = [];
            }
            break;
        }
        case 1: {
            coordinates = [];
            for (let up = i; up >= i - ship.size + 1; up--) {
                if (isCoordEmpty(up, j))
                    coordinates.push([up, j]);
                else
                    coordinates = [];
            }
            break;
        }
        case 2: {
            coordinates = [];
            for (let right = j; right < j + ship.size; right++) {
                if (isCoordEmpty(i, right))
                    coordinates.push([i, right]);
                else
                    coordinates = [];
            }
            break;
        }
        case 3: {
            coordinates = [];
            for (let down = i; down < i + ship.size; down++) {
                if (isCoordEmpty(down, j))
                    coordinates.push([down, j]);
                else
                    coordinates = [];
            }
            break;
        }
        default: {
            coordinates = [];
            break;
        }

    }

    return coordinates;
}

function getArrayOfRandomNumber(arrayLength) {
    let result = [];
    for (let i = 0; i < arrayLength; i++)
        result.push(i);

    let temp;
    let len = arrayLength;
    while (len) {
        let i = Math.floor(Math.random() * len--);
        temp = result[len];
        result[len] = result[i];
        result[i] = temp;
    }

    return result;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function parseInputs(inputs) {
    let result = []
    for (let i = 0; i < inputs.length; i < i++) {
        let coor = parseInput(inputs[i]);
        if (coor.length === 0)
            continue;
        result.push(coor);
    }
    return result;

}

function parseInput(str) {
    let result = [];

    if (str.length === 0)
        return result;

    let coor = str.toUpperCase().split('');

    let y = alphabets.indexOf(coor.splice(0, 1)[0]);
    let x = Number(coor.join('')) - 1;

    if (!validateCoordinate(y, x))
        return result;

    return [y, x];
}

function openFire(inputCoords) {
    let targetY, targetX;
    
    for (let i = 0; i < inputCoords.length; i++) {
        targetY = inputCoords[i][0];
        targetX = inputCoords[i][1];

        markCoordinates(targetY, targetX);

        onHit(targetY, targetX);
    }
    return;
}

function markCoordinates(y, x) {
    if (board[y][x] === ' ')
        board[y][x] = targetMissLabel;
    else
        board[y][x] = targetHitLabel;
    return;
}

function onHit(targetY, targetX) {
    for (let i = 0; i < ships.length; i++) {
        shipOnHit(ships[i], targetY, targetX);
    }
    return;
}

function shipOnHit(ship, targetY, targetX) {
    let shipY, shipX;
    for (let j = 0; j < ship.coordinates.length; j++) {
        shipY = ship.coordinates[j][0];
        shipX = ship.coordinates[j][1];

        if (shipY === targetY & shipX === targetX) {
            if (!shipsOnHitId.includes(ship.id))
                shipsOnHitId.push(ship.id);
        }
    }
}

function getShipByLabel(label) {
    for (let i = 0; i < ships.length; i++) {
        if (label === ships[i].label)
            return ships[i];
    }
    return null;
}

function printShipsOnHit() {
    for (let i = 0; i < shipsOnHitId.length; i++) {
        let shipId = shipsOnHitId[i];
        console.log(`${ships[shipId].name} is destroyed!`)
    }
}

function printBoard() {
    let result = [];
    let rows = formatBody();
    let lineLength = rows[0].length;
    result.push(formatColumnHeader('     ', ''))
    result.push(formatRowSeparator('   +', '+', '-', lineLength));
    for (let i = 0; i < rows.length - 1; i++) {
        result.push(rows[i]);
        result.push(formatRowSeparator('   |', '|', '-', lineLength));
    }
    result.push(rows[rows.length - 1]);
    result.push(formatRowSeparator('   +', '+', '-', lineLength));
    console.log(result.join('\n'));
}

function formatBody() {
    let result = [];
    let row;
    for (let i = 0; i < board.length; i++) {
        row = formatLine(i, board[i]);
        result.push(row);
    }
    return result;
}

function formatColumnHeader(pad, trail) {
    let column = [];
    for(let i = 1; i <= board.length; i++)
        column.push(i);
    return `${pad}${column.join(' | ')}${trail}`;
}

function formatLine(index, row) {
    return `${padNumber(alphabets[index], 2, ' ')} | ${row.join(' | ')} |`;
}

function formatRowSeparator(pad, trail, lineChar, length) {
    let separator = '';
    for (let i = 0; i < length - pad.length - trail.length; i++) {
        separator += lineChar;
    }
    return `${pad}${separator}${trail}`;
}

function padNumber(num, size, char) {
    let str = num.toString();
    let result = '';
    if (str.length < size) {
        for (let i = str.length; i < size; i++) {
            result += char;
        }
    }
    return result += str;
}

function printHelp() {
    console.log('Usage: node battleship.js [...target coordinates]');
    console.log('Destroy the battleships!');
    console.log('+==================================================+');
    console.log('In a board of 10x10, 4 battleships are positioned.');
    console.log('Input up to 10 coordinates to attack the battleships!');
    console.log('Input coordinates are in the range of A1 to J10.');
}