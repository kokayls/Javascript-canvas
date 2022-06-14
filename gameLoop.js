const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');


//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let x = 0;
let y = 0;

console.log(canvasWidth);
console.log(canvasHeight);


function draw(){
    window.requestAnimationFrame(draw); 
    //draw background
    ctx.fillStyle = '#262626';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    //draw rectangle
    ctx.fillStyle = 'rgba(50, 125, 200, 0.5)';
    ctx.fillRect(x,y, 50, 50);

    //x++;
       
}

canvas.addEventListener('click', event =>
{
    let bound = canvas.getBoundingClientRect();
    let paddingValue = Number(window.getComputedStyle(canvas).getPropertyValue('padding').slice(0, -2));

    let mouseX = event.clientX - bound.left - canvas.clientLeft - paddingValue;
    let mouseY = event.clientY - bound.top - canvas.clientTop -paddingValue;

    x = mouseX;
    y = mouseY;
    //context.fillRect(x, y, 16, 16);
});

//console.log(paddingValue);
//console.log(typeof(paddingValue));

