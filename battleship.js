let papanGame ;
let enemy1;
let enemy2;
let enemy3;
let enemy4;
let allenemy;
let tembakanPlayer = process.argv.slice(2)

function buatPapan (){
    let generatePapan = []
    let baris = 'ABCDEFGHIJ'
    let kolom = '12345678910'

    for (let i=0 ; i < baris.length ; i++){
        papanKolom = []
        for (let j=1 ; j <= 10 ; j++){
            papanKolom.push(baris[i]+ j)
        }
        generatePapan.push(papanKolom)
    }
    papanGame = generatePapan
}

function musuh () {
     enemy1 = [papanGame[0][0],papanGame[1][0]]
     enemy2 = [papanGame[2][1],papanGame[3][1],papanGame[4][1],papanGame[5][1],papanGame[6][1]]
     enemy3 = [papanGame[8][1],papanGame[8][2],papanGame[8][3],papanGame[8][4]]
     enemy4 = [papanGame[2][7],papanGame[3][7],papanGame[4][7]]
     allenemy = [enemy1,enemy2,enemy3,enemy4]
    
}

function tembak (){
    buatPapan()
    musuh()
    let kondisi = 0
        //linear search untuk posisi pada papan game
        for (var i=0 ; i < papanGame.length ; i++){
            for (var j=0 ; j < papanGame[i].length ;j++){
               
                //linear search untuk cek tembakan player
                for (var k =0 ; k < tembakanPlayer.length ;k++){
                    if (papanGame[i][j] == tembakanPlayer[k]){

                        //linear search untuk tembakanplayer dengan musuh
                        for (var l=0 ; l < allenemy.length ; l++){
                            for (var m=0 ; m < allenemy[l].length ; m++){
                                if ( tembakanPlayer[k] == allenemy[l][m]  ){
                                    kondisi +=1
                                }                                
                            }
                        }                    
                        if (kondisi ==1){
                            papanGame[i][j] = 'X'
                            kondisi = 0
                        }
                        else if (kondisi !== 1){
                            papanGame[i][j] = '/'
                        }
                    }
                }
            }
        }
        console.log(papanGame)
}
tembak()