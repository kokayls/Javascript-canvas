const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let cursor = new Cursor(0,0);

//test area
let pointA = new Vector2(65,215);
let pointB = new Vector2(70,425);

let line = new Line(new Vector2(234,215), new Vector2(650,685), "green");


let rectangle = new Rectangle(pointA, pointB, "magenta");
console.log(rectangle.toString());
console.log(rectangle.area);
//rectangle.setColor("red");

//test area end

function drawCanvas(){
    window.requestAnimationFrame(drawCanvas); 
    drawBackground('#262626');
    cursor.render();
    
    //test area
    //rectangle.setColor("lime");
    rectangle.render();
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

window.addEventListener('mousemove', event =>
{
    cursor.setPosition(canvas, event);
    //cursor.draw();
    
});

document.addEventListener('keypress', logKey);

function logKey(e){
    console.log(e);
}

//console.log(paddingValue);
//console.log(typeof(paddingValue));

