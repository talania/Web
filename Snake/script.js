/*Define Variables*/

let board = document.getElementById('board');
let apple = document.getElementById('apple');
let start = document.getElementById('start');
let gameOverWindow = document.getElementById('game-over-window');
let scoreResult = document.getElementById('score-result');
let levelResult = document.getElementById('level-result');
let spaceBar = document.getElementById('spacebar');
let PosX;
let PosY;
let snakeArray;
let direction;
let score;
let level;
let interval;
let indexInterval;

/*Reset function - previous values of variables*/

function reset() {
    PosX = 40;
    PosY = 0;
    snakeArray = [];
    direction = 'right';
    score = 0;
    level = 1;
    indexInterval = 100;
}

/* Create each box for snake*/

function createSnakeDiv(x,y) {
        let snakebody = document.createElement('div');
        snakebody.className = 'snake';
        board.appendChild(snakebody);
        snakebody.style.left = x + 'px';
        snakebody.style.top = y + 'px';
        if(snakeArray[0] == undefined){
            snakeArray[0] = snakebody;
        } else snakeArray.push(snakebody);
    };


/* Define keycodes for direction */

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
    if(e.keyCode == 32) {
        direction = 'pause';
    }
}) 

/*Define keycodes for arrow button direction */

up.addEventListener('click', function(e){
    if(direction != 'down') {
        direction = 'up';
    }
});
down.addEventListener('click', function(e){
    if(direction != 'up') {
        direction = 'down';
    }
    });
left.addEventListener('click', function(e){
    if(direction != 'right') {
        direction = 'left';
    }
});
right.addEventListener('click', function(e){
    if(direction != 'left') {
        direction = 'right';
    }
});
    
/* snake move function */

function moveSnake() {
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
        eatApple();
        gameOver();
        snakeArray.splice(0, 0, snakeArray.splice(length-1,1)[0]);
    };


    /* Function for eating apple and what should happen after this */

    function eatApple(){
        if(snakeArray[0].style.left == apple.style.left
        && snakeArray[0].style.top == apple.style.top) {
            apple.style.display = 'none';
            let x = PosX;
            let y = PosY;
            createSnakeDiv(x,y);
            generateAppleCoordinates();
            score++;
            level++;
            indexInterval = indexInterval - 10;
            gameInformation();
        }
    }

    /*Generate random coordinates for apple*/

    function generateAppleCoordinates(){
        let x = Math.floor(Math.random() * 45)*10;
        let y = Math.floor(Math.random() * 45)*10;
        apple.style.left = x +'px';
        apple.style.top = y +'px';
        apple.style.display = 'block';
    };

    /*Define value and text for score and level lables*/

    function gameInformation() {
        let scoreInfromation = document.getElementById('score-information');
        let levelInfromation = document.getElementById('level-information');
        scoreInfromation.innerText = 'Score: ' + score;
        levelInfromation.innerText = 'Level: ' + level;
    }
    
    /*Start game: create snake with 5 box and call functions*/

    function startGame() {
        reset();
        gameInformation();
        for(let i=0; i<5; i++)  {
            let X = (4-i)*10;
            let Y = 0;
            createSnakeDiv(X,Y);
        }
        generateAppleCoordinates();
        interval = setInterval(moveSnake,indexInterval);
        start.style.display = 'none';
        gameOverWindow.style.display = 'none';
        spaceBar.style.display = 'block';
        };

    
    /*Define what should happen when snake dies and when game is over*/
        
    function gameOver() {
        for(let i = 1; i<snakeArray.length-1; i++) {
            if(snakeArray[0].style.left == snakeArray[i].style.left &&
                snakeArray[0].style.top == snakeArray[i].style.top) {
                gameOverWindow.style.display = 'block';
                scoreResult.innerText = score;
                levelResult.innerText = level;
                clearInterval(interval);
                reset();
                let clearSnakeArray = document.querySelectorAll('.snake');
                for(let j = 0; j < clearSnakeArray.length; j++) {
                    clearSnakeArray[j].style.display = 'none';
                }
                apple.style.display = 'none';
                direction = 'right';
            }
        }
    }
