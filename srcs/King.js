class King {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(){
        if(this._color == "black"){
            let blackKing = document.createElement("img");
            blackKing.src = "pngs/blackKing.png";
            blackKing.classList.add("pieces");
            return blackKing;

        } else{
            let whiteKing = document.createElement("img");
            whiteKing.src = "pngs/whiteKing.png";
            whiteKing.classList.add("pieces");
            return whiteKing;
        }
    }

    move() {

    }
}