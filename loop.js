const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');



//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let cursor = new Cursor(0,0);

function drawCanvas(){
    window.requestAnimationFrame(drawCanvas); 
    drawBackground('#262626');
    cursor.draw();

    //draw rectangle
    //ctx.fillStyle = 'rgba(50, 125, 200, 0.5)';
    //ctx.fillRect(cursor.position.X, cursor.position.Y, 50, 50);


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

