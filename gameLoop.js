const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');


//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let x = 0;

console.log(canvasWidth);
console.log(canvasHeight);


function draw(){

    
    console.log("hello");
    window.requestAnimationFrame(draw); 
    //draw background
    ctx.fillStyle = '#262626';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    //draw rectangle
    ctx.fillStyle = 'rgba(50, 125, 200, 0.5)';
    ctx.fillRect(x, 30, 50, 50);

    x++;
    

    
}
