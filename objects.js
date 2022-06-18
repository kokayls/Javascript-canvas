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

