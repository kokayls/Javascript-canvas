const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let cursor = new Cursor(0,0);

//test area
let pointA = new Vector2(65,212);
let pointB = new Vector2(762,413);


let line = new Line(pointA, pointB);
line.setColor('lime');

//test area end

function drawCanvas(){
    window.requestAnimationFrame(drawCanvas); 
    drawBackground('#262626');
    cursor.render();
    
    //test area
    line.render();
    //test area end
}

/* canvas.addEventListener('click', event =>
{
    cursor.setPosition(canvas, event);
    
}); */

canvas.addEventListener('mousemove', event =>
{
    cursor.setPosition(canvas, event);
    //cursor.draw();
    
});

//console.log(paddingValue);
//console.log(typeof(paddingValue));

