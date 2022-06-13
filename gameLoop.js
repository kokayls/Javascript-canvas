const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let x = 0
function draw(){

    
    console.log("hello");
    window.requestAnimationFrame(draw); 
    //draw background
    ctx.fillStyle = '#262626';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //draw rectangle
    ctx.fillStyle = 'rgba(50, 125, 200, 0.5)';
    ctx.fillRect(x, 30, 50, 50);

    x+=2; 

    
}
