let board = document.getElementById('board');
let apple = document.getElementById('apple');
let start = document.getElementById('start');
let PosX = 40;
let PosY = 0;
let snakeArray = [];
let direction = 'right';

function createSnakeDiv(x,y) {
        let snakebody = document.createElement('div');
        snakebody.className = 'snake';
        board.appendChild(snakebody);
        snakebody.style.left = x + 'px';
        snakebody.style.top = y + 'px';
        snakeArray.push(snakebody);
    };

document.addEventListener('keydown', function(e){
    if(e.keyCode == 37 && direction != 'right') {
        direction = 'left';
    }
    if(e.keyCode == 38 && direction != 'down') {
        direction = 'up';
    }
    if(e.keyCode == 39 && direction != 'left') {
        direction = 'right';
    }
    if(e.keyCode == 40 && direction != 'up') {
        direction = 'down';
    }
}) 
    
    
function moveSnake(direction) {
    let snake = snakeArray[snakeArray.length-1];
    switch(direction) {
        case 'down':
                PosY += 10;
                snake.style.top = PosY + 'px';
                snake.style.left = PosX + 'px';
                if(PosY == board.offsetHeight-20){
                    PosY = 0;
                    snake.style.top = PosY + 'px';
                    snake.style.left = PosX + 'px';
                }
                break;
            case 'up':
                PosY -= 10;
                snake.style.top = PosY + 'px';
                snake.style.left = PosX + 'px';
                if(PosY < 0){
                    PosY = board.offsetHeight-30;
                    snake.style.top = PosY + 'px';
                    snake.style.left = PosX + 'px';
                }
                break;
            case 'right':
                PosX += 10;
                snake.style.left = PosX + 'px';
                snake.style.top = PosY + 'px';
                if(PosX == board.offsetWidth-20){
                    PosX = 0;
                    snake.style.left = PosX + 'px';
                    snake.style.top = PosY + 'px';
                }
                break;
            case 'left':
                PosX -= 10;
                snake.style.left = PosX + 'px';
                snake.style.top = PosY + 'px';
                if(PosX < 0){
                    PosX = board.offsetWidth-30;
                    snake.style.left = PosX + 'px';
                    snake.style.top = PosY + 'px';
                }
                break;
        }
        snakeArray.splice(0, 0, snakeArray.splice(length-1,1)[0]);
    };

    function eatApple(){
        if(snakebody[0].getAttribute['PosX'] == apple.getAttribute['PosX'] 
        && snakebody[0].getAttribute['PosY'] == apple.getAttribute['PosY']) {
            apple.style.display = 'none';
            let x = snakebody[snakebody.length - 1].getAttribute['PosX'];
            let y = snakebody[snakebody.length - 1].getAttribute['PosY'];
            createSnakeDiv(x,y);
            generateAppleCoordinates();
            /* es sworad rogor unda ikos?
            count++;
            level++;
            interval++; */
        }
    }

    let interval = setInterval(moveSnake,300);

    function generateAppleCoordinates(){
        let x = Math.floor(Math.random() * 45)*10;
        let y = Math.floor(Math.random() * 45)*10;
        apple.style.left = x +'px';
        apple.style.top = y +'px';
        apple.style.display = 'block';
    };

    /*es ar ver mivxvdi rogor damewera*/

    function gameOver() {
        for(let i = 0; i<snakeArray.length-1; i++) {
            if(snakebody[0] == snakebody[i]) {
                alert('Game Over');
                clearInterval.interval();
                score = 0;
                level = 0;
            }
        }
    }

    /*function gameInformation() {
        let score = 0;
        let level = 0;
        let scoreInfromation = document.getElementById('scoreInformation');
        let levelInfromation = document.getElementById('levelInformation');
        scoreInfromation.innerText = `Score${score}`;
        levelInfromation.innerText = `Level${level}`;
    }*/
    
    
    function startGame() {
        /*gameInformation();*/
        for(let i=0; i<5; i++)  {
            let X = (4-i)*10;
            let Y = 0;
            createSnakeDiv(X,Y);
        }
        generateAppleCoordinates();
        document.addEventListener('keydown',moveSnake);
        };
    
