class Vector2{
    constructor(_x, _y){
        this.X = _x;
        this.Y = _y;
    }

    //setCursorPosition();
    toString(){
        `The Vector coordinates are: ${this.X}, ${this.Y}`;
    }
}

class Cursor{
    constructor(_x, _y){
        this.position = new Vector2(_x, _y);
        this.color = "rgba(50, 125, 200, 0.5)";
    }

    draw(){
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

