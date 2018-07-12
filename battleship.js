const argv = process.argv
const init = argv.slice(2)

function mapGenerator() {
    let res = []

    for (let i = 0; i < 10; i++) {
        subRes = []
        for (let j = 0; j < 10; j++) {
            subRes.push(' ')
        }
        res.push(subRes)
    }   
    return res
}

function randomNum(max,min) {
    let num = Math.round(Math.random()*(max - min)+min)
    return num
}

function mapWithEnemyGenerator() {

    let res = mapGenerator()
    let alpha = ['','D','C','B','A',]
    let enemyLength = 5

    for (let x = 0; x < 4;) {
        let enemyPos = [] // enemy positioon
        let navChecker = randomNum(2,1)

        for (let y = 0; y < 2; y++) { //generate enemy position
            enemyPos.push(randomNum(9-(enemyLength-1),1))
        }

        if ( navChecker === 1) {

            if (mapCheckerV(enemyPos[0],enemyPos[1],res,enemyLength)) {
                for (let k = 0; k < enemyLength; k++) {
                    res[enemyPos[0]][enemyPos[1]+k] =  alpha[enemyLength-1]
                }
                x++
                enemyLength--
            }

        } else {

            if (mapCheckerV(enemyPos[0],enemyPos[1],res,enemyLength)) {
                for (let k = 0; k < enemyLength; k++) {
                    res[enemyPos[0]+k][enemyPos[1]] = alpha[enemyLength-1]
                }
                x++
                enemyLength--
            }

        }
    }
    return res
}

function mapCheckerV(x,y,map,length) {
    res = true
    for (let i = 0; i < length+1;i++) {
        if ( map[x][y+i] !== ' ') {
            return false
        }
    }
    return res
}

function mapCheckerH(x,y,map,length) {
    res = true
    for (let i = 0; i < length+1;i++) {
        if ( map[x+i][y] !== ' ') {
            return false
        }
    }
    return res
}

function takeShot() {
    
    let map = mapWithEnemyGenerator()
    let navMap = 'ABCDEVGHIJ'
    let correct = 0
    let wrong = 0

    for (let i = 0; i < init.length; i++) {
        let selectedX = navMap.indexOf(init[i][0]) 
        let selectedY = init[i][1]
        if (map[selectedY][selectedX] === ' ') {
            map[selectedY][selectedX] = '/'
            wrong++
        } else {
            map[selectedY][selectedX] = 'X'
            correct++
        }
    }
    console.log(map)
    console.log('DIRECT HIT : ' + correct)
    console.log('MISS       : ' + wrong)
    return ''
}


function printResult() {
    let map = takeShot()
    let res = ''
    let printStock = [' | ','-|-','-']
    let x = 0
    let y = 0

    for (let i = 0; i < 21; i++) {
        
        if (i % 2 === 0) {
            for (let j = 0; j < 21;j++) {
                if (j % 2 === 0) {
                    res += printStock[0]
                } else {
                    res += map[x][0]
                    y++
                }   
            }       
        } else {
            for (let j = 0; j < 21;j++) {
                if (j % 2 === 0) {
                    res += printStock[1]
                } else {
                    res += printStock[2]
                }   
            }
        }
        x++
        y = 0
    }
    return res
}
console.log(takeShot())