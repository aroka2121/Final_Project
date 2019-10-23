let Grass = require("./modules/Grass.js");
let GrassEater = require("./modules/GrassEater.js");
let Dra = require("./modules/dra.js");
let Predator = require("./modules/Predator.js");
let Hox = require("./modules/hox.js");
let Buldozer = require("./modules/buldozer.js");
let Vakum = require("./modules/vakum.js");
let random = require('./modules/random.js');

grassArr = [];
grassEaterArr = [];
predatorArr = [];
draArr = [];
hoxArr = [];
buldozerArr = [];
vakumArr = [];
matrix = [];

grassHashiv = 0;
grassEaterHashiv = 0;
predatorHashiv = 0;
draHashiv = 0;
hoxHashiv = 0;
buldozerHashiv = 0;
vakumHashiv = 0;

function matrixGenerator(matrixSize, grass, grassEater, predator,dra, hox, buldozer, vakum) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < predator; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < dra; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < hox; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < buldozer; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
    for (let i = 0; i < vakum; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 7;
    }
}
matrixGenerator(30, 10, 30, 5, 2, 8, 6, 1);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                predatorArr.push(predator);
                predatorHashiv++
            }
            else if (matrix[y][x] == 4) {
                var dra = new Dra(x, y);
                draArr.push(dra);
                draHashiv++
            }
            else if (matrix[y][x] == 5) {
                var hox = new Hox(x, y);
                hoxArr.push(hox);
                hoxHashiv++
            }
            else if (matrix[y][x] == 6) {
                var buldozer = new Buldozer(x, y);
                buldozerArr.push(buldozer);
                buldozerHashiv++
            }
            else if (matrix[y][x] == 7) {
                var vakum = new Vakum(x, y);
                vakumArr.push(vakum);
                vakumHashiv++
            }
        }
    }
}

creatingObjects();

let exanak = 0;


function game() {
    exanak++;
    if (exanak <= 10){
        weather = "summer"
    }
    else if (exanak <= 20){
        weather = "spring"
    }
    else if (exanak <= 30){
        weather = "autumn"
    }
    else if (exanak <= 40){
        weather = "winter"
    }
    else if (exanak > 50){
        exanak = 0
    }


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (predatorArr[0] !== undefined) {
        for (var i in predatorArr) {
            predatorArr[i].eat();
        }
    }
    if (draArr[0] !== undefined) {
        for (var i in draArr) {
            draArr[i].eat();
        }
    }
    if (hoxArr[0] !== undefined) {
        for (var i in hoxArr) {
           hoxArr[i].mul();
        }
    }
    if (buldozerArr[0] !== undefined) {
        for (var i in buldozerArr) {
           buldozerArr[i].eat();
        }
    }
    if (vakumArr[0] !== undefined) {
        for (var i in vakumArr) {
           vakumArr[i].mul();
        }
    }


    
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        grassEaterCounter: grassEaterHashiv,
        grassEaterLiveCounter: grassEaterHashiv,
        predatorCounter: predatorHashiv,
        predatorLiveCounter: predatorArr.length,
        draCounter: draHashiv,
        draLiveCounter: draHashiv,
        hoxCounter: hoxHashiv,
        hoxLiveCounter: hoxHashiv,
        buldozerCounter: buldozerHashiv,
        buldozerLiveCounter: buldozerHashiv,
        vakumCounter: vakumHashiv,
        vakumLiveCounter: vakumHashiv,
        weather: weather
    }

  
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)