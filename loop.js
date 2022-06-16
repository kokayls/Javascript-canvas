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
//let pointC = new Vector2(123, 675);
//let pointD = new Vector2(23,215);

;

//console.log(line1.length)
//console.log(line2.length)
//console.log(line3.length) 
//console.log(line4.length)
let rectangle = new Rectangle(pointA, pointB);
console.log(rectangle.toString());

//test area end

function drawCanvas(){
    window.requestAnimationFrame(drawCanvas); 
    drawBackground('#262626');
    cursor.render();
    
    //test area
    //rectangle.render();
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

