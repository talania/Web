let rect = document.getElementById('rect');
let board = document.getElementById('board');
let PosX = 0;
let PosY = 0;

function moveSnake(elem) {
    if(!rect) rect = document.getElementById('rect');
    if(!board) board = document.getElementById('board');
    if(elem.keyCode == 40) {
        PosY += 10;
        rect.style.top = PosY + 'px';
        if(PosY >= board.offsetHeight-20){
            PosY = 0-10;
            rect.style.top = PosY;
        }
    }
    if(elem.keyCode == 38) {
        PosY -= 10;
        rect.style.top = PosY + 'px';
        if(PosY >= 0){
            PosY = board.offsetHeight-20;
            rect.style.top = PosY;
        }
    }
    if(elem.keyCode == 39) {
        PosX += 10;
        rect.style.left = PosX + 'px';
        if(PosX >= board.offsetWidth-20){
            PosX = 0-10;
            rect.style.left = PosX;
        }
    }
    if(elem.keyCode == 37) {
        PosX -= 10;
        rect.style.left = PosX + 'px';
        if(PosX >= 0){
            PosX = board.offsetWidth-20;
            rect.style.left = PosX;
        }
    }
}

document.addEventListener('keydown',moveSnake);