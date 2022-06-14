const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');



//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let cursorPosition = new CursorPosition(0,0);


console.log(canvasWidth);
console.log(canvasHeight);


function draw(){
    window.requestAnimationFrame(draw); 
    //draw background
    ctx.fillStyle = '#262626';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    //draw rectangle
    ctx.fillStyle = 'rgba(50, 125, 200, 0.5)';
    ctx.fillRect(cursorPosition.X, cursorPosition.Y, 50, 50);


}

canvas.addEventListener('click', event =>
{
    let bound = canvas.getBoundingClientRect();
    let paddingValue = Number(window.getComputedStyle(canvas).getPropertyValue('padding').slice(0, -2));

    let mouseX = event.clientX - bound.left - canvas.clientLeft - paddingValue;
    let mouseY = event.clientY - bound.top - canvas.clientTop -paddingValue;

    cursorPosition.X = mouseX;
    cursorPosition.Y = mouseY;
    //context.fillRect(x, y, 16, 16);
});

//console.log(paddingValue);
//console.log(typeof(paddingValue));

