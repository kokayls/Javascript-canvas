const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');



//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let cursor = new Cursor(0,0);

//test area
let pointA = new Vector2(1,2);
let pointB = new Vector2(7,25);

console.log(pointA.toString());
console.log(pointB.toString());

let line = new Line(pointA, pointB);
console.log(line.toString());

//test area end

function drawCanvas(){
    window.requestAnimationFrame(drawCanvas); 
    drawBackground('#262626');
    cursor.render();
    line.render();

    //test area

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

