class Queen {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(){
        if(this._color == "black"){
            let blackQueen = document.createElement("img");
            blackQueen.src = "pngs/blackQueen.png";
            blackQueen.classList.add("pieces");
            return blackQueen;

        } else{
            let whiteQueen = document.createElement("img");
            whiteQueen.src = "pngs/whiteQueen.png";
            whiteQueen.classList.add("pieces");
            return whiteQueen;
        }
    }

    move() {

    }
}