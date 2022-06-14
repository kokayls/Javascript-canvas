class CursorPosition{
    constructor(_x, _y){
        this.X = _x;
        this.Y = _y;
    }

    //setCursorPosition();
    toString(){
        `The cursor position is ${this.X}, ${this.Y}`
    }
}