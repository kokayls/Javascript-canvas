const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let cursor = new Cursor(0,0);
let draft = new DrawingManager();


//test area
    //let coordinates = new Vector2Register();
draft.registeredVectors
    //console.log(coordinates.vectors.length);
//test area end

function drawCanvas(){
    window.requestAnimationFrame(drawCanvas); 
    drawBackground('#262626');
    cursor.render();
    
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
    cursor.setPosition(canvas, event);
    cursor.render();
});

canvas.addEventListener('click', event =>
{
   
    //console.log(cursor);
    draft.registeredVectors.push(new Vector2(cursor.X, cursor.Y));
    //console.log("mouse clicked");
    
});

document.addEventListener('keypress', logKey);

function logKey(e){
    if(e.key == "l"){
        //draft.isDrawing= true;
        console.log("Line shortkey is pressed");
        //let line = new Line();
        // if(coordinates.vectors !== 'undefined'){
        //     coordinates.vectors.push(new Vector2(cursor.position.X, cursor.position.Y));
        //     console.log("coordinate pushed to register");
        // }
    }
    //console.log(e.key);
}

//console.log(paddingValue);
//console.log(typeof(paddingValue));

