function setup() {
    var socket = io();
    var side = 20;
    var matrix = [];
    
   
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');

    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');

    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');

    let draCountElement = document.getElementById('draCount');
    let draLiveCountElement = document.getElementById('draLiveCount');

    let hoxCountElement = document.getElementById('hoxCount');
    let hoxLiveCountElement = document.getElementById('hoxLiveCount');

    let buldozerCountElement = document.getElementById('buldozerCount');
    let buldozerLiveCountElement = document.getElementById('buldozerLiveCount');

    let vakumCountElement = document.getElementById('vakumCount');
    let vakumLiveCountElement = document.getElementById('vakumLiveCount');
    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;

        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;

        predatorCountElement.innerText = data.predatorCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;

        draCountElement.innerText = data.draCounter;
        draLiveCountElement.innerText = data.draLiveCounter;

        hoxCountElement.innerText = data.hoxCounter;
        hoxLiveCountElement.innerText = data.hoxLiveCounter;

        buldozerCountElement.innerText = data.buldozerCounter;
        buldozerLiveCountElement.innerText = data.buldozerLiveCounter;

        vakumCountElement.innerText = data.vakumCounter;
        vakumLiveCountElement.innerText = data.vakumLiveCounter;
        
        createCanvas(matrix[0].length * side, matrix.length * side)
       
        background('#acacac');
      
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "summer"){
                        fill("green");
                    }else if (data.weather == "spring"){
                        fill(" #33ff33");
                    }
                    else if (data.weather == "autumn"){
                        fill("#a35c17");
                    }
                    else if (data.weather == "winter"){
                        fill("e0f7e0");
                    }
                } else if (matrix[i][j] == 2) {
                    if(data.weather == "summer"){
                    fill("yellow");
                    }else if (data.weather == "spring"){
                        fill(" #ffff80");
                    }
                    else if (data.weather == "autumn"){
                        fill("#ff8000");
                    }
                    else if (data.weather == "winter"){
                        fill("#ffffbf");
                    }           
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if(data.weather == "summer"){
                    fill('red');
                    }
                else if (data.weather == "spring"){
                    fill("#ff8566");
                }
                else if (data.weather == "autumn"){
                    fill("#d62900");
                }
                else if (data.weather == "winter"){
                    fill("#ffcccc");
                } 
                } else if (matrix[i][j] == 4) {
                    if(data.weather == "summer"){
                        fill('black');
                        }
                    else if (data.weather == "spring"){
                        fill("#330000");
                    }
                    else if (data.weather == "autumn"){
                        fill("#260000");
                    }
                    else if (data.weather == "winter"){
                        fill("#b2b2b2");
                    } 
                } else if (matrix[i][j] == 5) {
                    if(data.weather == "summer"){
                    fill('brown');
                    }
                    else if (data.weather == "spring"){
                        fill(" #660000");
                    }
                    else if (data.weather == "autumn"){
                        fill("#990000");
                    }
                    else if (data.weather == "winter"){
                        fill("#ad3333");
                    } 
                }else if (matrix[i][j] == 6) {
                    if(data.weather == "summer"){
                    fill('darkblue');
                    }
                    else if (data.weather == "spring"){
                        fill("#8080ff");
                    }
                    else if (data.weather == "autumn"){
                        fill("#80004c");
                    }
                    else if (data.weather == "winter"){
                        fill("#b2b2e0");
                    }
                }else if (matrix[i][j] == 7) {
                    if(data.weather == "summer"){
                    fill('royalblue');
                    }
                    else if (data.weather == "spring"){
                        fill("#4775d1");
                    }
                    else if (data.weather == "autumn"){
                        fill("#472185");
                    }
                    else if (data.weather == "winter"){
                        fill("#335cd6");
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}
