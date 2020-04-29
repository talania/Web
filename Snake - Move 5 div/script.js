let board = document.getElementById('board');
let apple = document.getElementById('apple');
let start = document.getElementById('start');
let PosX = 40;
let PosY = 0;

let snakeArray = [];

for(let i=0; i<5; i++)  {
    let X = (4-i)*10;
    let Y = 0;
    createSnakeDiv(X,Y);
}

function createSnakeDiv(x,y) {
    let snakebody = document.createElement('div');
    snakebody.className = 'snake';
    board.appendChild(snakebody);
    snakebody.style.left = x + 'px';
    snakebody.style.top = y + 'px';
    snakeArray.push(snakebody);
}

function moveSnake(elem) {
    let snake = snakeArray[snakeArray.length-1];
    if(elem.keyCode == 40) {
        PosY += 10;
        snake.style.top = PosY + 'px';
        snake.style.left = PosX + 'px';
        if(PosY == board.offsetHeight-20){
            PosY = 0;
            snake.style.top = PosY + 'px';
            snake.style.left = PosX + 'px';
        }
    }
    if(elem.keyCode == 38) {
        PosY -= 10;
        snake.style.top = PosY + 'px';
        snake.style.left = PosX + 'px';
        if(PosY < 0){
            PosY = board.offsetHeight-30;
            snake.style.top = PosY + 'px';
            snake.style.left = PosX + 'px';
        }
    }
    if(elem.keyCode == 39) {
        PosX += 10;
        snake.style.left = PosX + 'px';
        snake.style.top = PosY + 'px';
        if(PosX == board.offsetWidth-20){
            PosX = 0;
            snake.style.left = PosX + 'px';
            snake.style.top = PosY + 'px';
        }
    }
    if(elem.keyCode == 37) {
        PosX -= 10;
        snake.style.left = PosX + 'px';
        snake.style.top = PosY + 'px';
        if(PosX < 0){
            PosX = board.offsetWidth-30;
            snake.style.left = PosX + 'px';
            snake.style.top = PosY + 'px';
        }
    }
    snakeArray.splice(0, 0, snakeArray.splice(length-1,1)[0]);
}

document.addEventListener('keydown',moveSnake);

function appleCoordinates(){
    let x = Math.floor(Math.random() * 45)*10;
    let y = Math.floor(Math.random() * 45)*10;
    apple.style.left = x +'px';
    apple.style.top = y +'px';
    apple.style.display = 'block';
}

