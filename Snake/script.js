let rect = document.getElementById('rect');
let left = 0;
let top = 0;

function moveSnake(elem) {
    if(elem.keyCode == 38) {
        top += 2;
        rect.style.top = top + 'px';
    }
    if(elem.keyCode == 40) {
        top -= 2;
        rect.style.top = top + 'px';
    }
    if(elem.keyCode == 37) {
        left += 2;
        rect.style.left = left + 'px';
    }
    if(elem.keyCode == 39) {
        left -= 2;
        rect.style.left = left + 'px';
    }
}

document.onkeydown = movesnake();