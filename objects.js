const deafultStrokeStyle = "#ffffff";
class Vector2{
    constructor(_x, _y){
        this.X = _x;
        this.Y = _y;
    }

    //setCursorPosition();
    toString(){
        return`Point: [${this.X}, ${this.Y}]`;
    }
}

class Cursor{
    constructor(_x, _y){
        this.position = new Vector2(_x, _y);
        this.color = "rgba(50, 125, 200, 0.5)";
    }

    render(){
        // cross top
        ctx.beginPath();
        ctx.moveTo(this.position.X, this.position.Y - 3);
        ctx.lineTo(this.position.X, this.position.Y - 13);
        ctx.stroke();

        // cross bottom
        ctx.beginPath();
        ctx.moveTo(this.position.X, this.position.Y + 3);
        ctx.lineTo(this.position.X, this.position.Y + 13);
        ctx.stroke();

        // cross right
        ctx.beginPath();
        ctx.moveTo(this.position.X + 3, this.position.Y);
        ctx.lineTo(this.position.X +13, this.position.Y);
        ctx.stroke();

        // cross left
        ctx.beginPath();
        ctx.moveTo(this.position.X - 3, this.position.Y);
        ctx.lineTo(this.position.X - 13, this.position.Y);
        ctx.stroke();
    }
    setPosition(_canvas, _event){
    
    let bound = _canvas.getBoundingClientRect();
    let paddingValue = Number(window.getComputedStyle(canvas).getPropertyValue('padding').slice(0, -2));

    let mouseX = _event.clientX - bound.left - _canvas.clientLeft - paddingValue;
    let mouseY = _event.clientY - bound.top - _canvas.clientTop -paddingValue;

    this.position.X = mouseX;
    this.position.Y = mouseY;
    
    }
}

class Line{
    
    constructor(_pointA, _pointB){
        this.pointA = _pointA;
        this.pointB = _pointB;
        this.color = deafultStrokeStyle;
        this.length = Line.twoPointDistance(this._pointA, this._pointB);    
    }

    setColor(_color){
        this.color = _color;
    }
    setLength(){
        this.length = Line.twoPointDistance(this.pointA, this.pointB);
    }
    render(){
        drawLine(this.pointA, this.pointB, this.color);
        
    }
    toString(){
        return`Line: [${this.pointA.toString()}, ${pointB.toString()}]`;
    }
    static twoPointDistance(_pointA, _pointB){
        return Math.sqrt((Math.pow(pointB.X - pointA.X, 2) + (Math.pow(pointB.Y - pointA.Y, 2))));
     }

}

function drawLine(_pointA, _pointB, _color){
    //called with no color arguments
    if(typeof _color == "undefined") {
        drawTheLine();
    }
    ////called with color arguments
    else{
        ctx.strokeStyle = _color;
        drawTheLine();
        ctx.strokeStyle = deafultStrokeStyle;
        //console.log(`with color:${_color}`);
    }
    function drawTheLine(){
        ctx.beginPath();       // Start a new path
        ctx.moveTo(_pointA.X, _pointA.Y);    // Move the pen to ponint A
        ctx.lineTo(_pointB.X, _pointB.Y);  // Draw a line to point B
        ctx.stroke(); 
    }
}

class Rectangle{
    constructor(_pointA, _pointB){

        //array of line objects
        
        //  2---B
        //  |   |
        //  |   |
        //  A---4

        this.points = [
            _pointA, 
            new Vector2(_pointA.X, _pointB.Y), 
            _pointB, 
            new Vector2(_pointB.X, _pointA.Y)
        ];

        //  B---C
        //  |   |
        //  |   |
        //  A---D
        this.lines = [

        ];

        this.lengthX;
        this.lengthY;
        this.points;
        this.area; //in mm^2
        this.perimeter;
        this.color

        //setArea();
        //setPerimeter();
    }

    render(){
        //render object to canvas
    }

    setArea(){

    }

    setPerimeter(){

    }
    
    toString(){
        return `Rectangle`;
    }

    static hello(){
        console.log("hello from rectangle");
    }
}

