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
        //this.position = new Vector2(_x, _y);
        this.X= _x;
        this.Y = _y;
        this.color = "rgba(254, 254, 217, 0.8)";
        this.visible = true;
        
    }

    render(){
        if(this.visible){
            this.#drawCursor();
        }
        
    }
    setPosition(_canvas, _event){
    
    let bound = _canvas.getBoundingClientRect();
    let paddingValue = Number(window.getComputedStyle(canvas).getPropertyValue('padding').slice(0, -2));

    let mouseX = _event.clientX - bound.left - _canvas.clientLeft - paddingValue;
    let mouseY = _event.clientY - bound.top - _canvas.clientTop -paddingValue;

    this.X = mouseX;
    this.Y = mouseY;
    
    //console.log(`position is set to x:${this.X}, y:${this.Y}`);
    }

    // getPosition(){
    //     return this.position;
    // }

    toString(){
        return `Cursor position: Y:${this.position.X},Y:${this.position.Y}`;
    }
    #drawCursor() {

        ctx.strokeStyle = this.color;
        // cross top
        ctx.beginPath();
        ctx.moveTo(this.X, this.Y - 3);
        ctx.lineTo(this.X, this.Y - 13);
        ctx.stroke();

        // cross bottom
        ctx.beginPath();
        ctx.moveTo(this.X, this.Y + 3);
        ctx.lineTo(this.X, this.Y + 13);
        ctx.stroke();

        // cross right
        ctx.beginPath();
        ctx.moveTo(this.X + 3, this.Y);
        ctx.lineTo(this.X +13, this.Y);
        ctx.stroke();

        // cross left
        ctx.beginPath();
        ctx.moveTo(this.X - 3, this.Y);
        ctx.lineTo(this.X - 13, this.Y);
        ctx.stroke();

        ctx.strokeStyle = deafultStrokeStyle;
    }
}
class Vector2Register{
    constructor(){
        this.vectors = []
    }
    empty(){
        this.vectors = [];
    }
    toString(){
        return "Cursorregister";
    }
}
class Line{
    
    constructor(_pointA, _pointB, _color){
        this.pointA = _pointA;
        this.pointB = _pointB;
        this.color = _color;;
        this.length = Line.twoPointDistance(this.pointA, this.pointB);  
        //console.log(`line created with lenght ${this.length}`) ;
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
        return`Line: [${this.pointA.toString()}, ${this.pointB.toString()}, Length = ${this.length}]`;
    }
    static twoPointDistance(_pointA, _pointB){
        return Math.sqrt((Math.pow((_pointB.X - _pointA.X), 2) + (Math.pow((_pointB.Y - _pointA.Y), 2))));
    }

}
class PolyLine{
    constructor(_color){
        this.lines = [];
        this.open = true;
    }
    addLine(_line){
        this.lines.push(_line);
    }
    toString(){
        return "Polyline"
    }
}

class Rectangle{
    constructor(_pointA, _pointB, _color){

        this.color = _color;
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

        //  1---2
        //  |   |
        //  |   |
        //  0---3
        this.lines = [
            new Line(this.points[0],this.points[1], this.color),
            new Line(this.points[1],this.points[2], this.color),
            new Line(this.points[2],this.points[3], this.color),
            new Line(this.points[3],this.points[0], this.color)
        ];

    
        this.area = Rectangle.CalculateArea(this.lines[0], this.lines[1]); //in mm^2
       
        this.perimeter = Rectangle.CalculatePerimeter(this);
    

    
    }

    render(){
        for (const line of this.lines) {
            line.render();
        }
    }

    static CalculateArea(_line1, _line2){
        return _line1.length * _line2.length;
    }

    static CalculatePerimeter(_rectangle){
        let perimeter = 0;
        for (const line of _rectangle.lines) {
            perimeter += line.length;
        }
        return perimeter;
    }
    
    setColor(_color){
        this.color = _color;

        //set the lines color to match the recatnge's color
        for (const line of this.lines) {
            line.color = this.color;
        }
        //console.log(`color set to ${_color}. The objects color is ${this.color}`);
    }

    toString(){
        return "Rectangle"
    }


}

class DrawingManager{
    constructor(){
        this.isDrawing = false;
        this.toDraw;
        this.drawingObjects = [];
        this.registeredVectors = [];
    }
    
    addObject(_object){
        this.drawingObjects.pust(_object);
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

