const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');
let buttonLine = document.getElementById('_lineButton');
buttonLine.isDrawing = false;
console.log(buttonLine);
console.log(canvas);

//setup canvas size
canvas.width = 1000;
canvas.height = 700;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

//let cursor = new Cursor(0,0);
let drawManager = new DrawingManager();



//test area
let line = new Line(new Vector2(20, 90),new Vector2(567, 700), "lime");
//test area end

function drawCanvas(){
    window.requestAnimationFrame(drawCanvas); 
    drawBackground('#262626');
    //cursor.render();
    drawManager.update();
    
    //test area
    //rectangle.setColor("lime");
    //test area end
}

/* canvas.addEventListener('click', event =>
{
    cursor.setPosition(canvas, event);
    
}); */

canvas.addEventListener('mousemove', event =>
{
    drawManager.cursor.setPosition(canvas, event);
    drawManager.cursor.render();
});

canvas.addEventListener('click', event =>
{
   
    //console.log(cursor);
    //drawManager.registeredVectors.push(new Vector2(cursor.X, cursor.Y));
    //console.log("mouse clicked");
    
});

document.addEventListener('keypress', logKey);
buttonLine.addEventListener('click', ()=>{
    //buttonLine.isDrawing = true;
    buttonPress();

})

function logKey(e){
    
        
        drawManager.setToUpdate(e.key);
        //drawManager.update();
        //console.log("Line shortkey is pressed");
        //let line = new Line();
        // if(coordinates.vectors !== 'undefined'){
        //     coordinates.vectors.push(new Vector2(cursor.position.X, cursor.position.Y));
        //     console.log("coordinate pushed to register");
        // }
    
    //console.log(e.key);
}
function buttonPress(){
    console.log("button pressed");
}
//console.log(paddingValue);
//console.log(typeof(paddingValue));

