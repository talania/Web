let snake = document.getElementById('snake');
let board = document.getElementById('board');
let apple = document.getElementById('apple');
let start = document.getElementById('start');
let PosX = 0;
let PosY = 0;

function moveSnake(elem) {
    if(!snake) rect = document.getElementById('snake');
    if(!board) board = document.getElementById('board');
    if(elem.keyCode == 40) {
        PosY += 10;
        rect.style.top = PosY + 'px';
        if(PosY == board.offsetHeight-20){
            PosY = 0;
            rect.style.top = PosY + 'px';
        }
    }
    if(elem.keyCode == 38) {
        PosY -= 10;
        rect.style.top = PosY + 'px';
        if(PosY < 0){
            PosY = board.offsetHeight-30;
            rect.style.top = PosY + 'px';
        }
    }
    if(elem.keyCode == 39) {
        PosX += 10;
        rect.style.left = PosX + 'px';
        if(PosX == board.offsetWidth-20){
            PosX = 0;
            rect.style.left = PosX + 'px';
        }
    }
    if(elem.keyCode == 37) {
        PosX -= 10;
        rect.style.left = PosX + 'px';
        if(PosX < 0){
            PosX = board.offsetWidth-30;
            rect.style.left = PosX + 'px';
        }
    }
}

document.addEventListener('keydown',moveSnake);

function appleCoordinates(){
    if(!apple) apple = document.getElementById('apple');
    let x = Math.floor(Math.random() * 45)*10;
    let y = Math.floor(Math.random() * 45)*10;
    console.log(x,y);
    apple.style.left = x +'px';
    apple.style.top = y +'px';
}
