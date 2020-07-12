class Bishop {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(){
        if(this._color == "black"){
            let blackBishop = document.createElement("img");
            blackBishop.src = "pngs/blackBishop.png";
            blackBishop.classList.add("pieces");
            return blackBishop;

        } else{
            let whiteBishop = document.createElement("img");
            whiteBishop.src = "pngs/whiteBishop.png";
            whiteBishop.classList.add("pieces");
            return whiteBishop;
        }
    }

    move() {

    }
}