class Knight {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(){
        if(this._color == "black"){
            let blackKnight = document.createElement("img");
            blackKnight.src = "pngs/blackKnight.png";
            blackKnight.classList.add("pieces");
            return blackKnight;

        } else{
            let whiteKnight = document.createElement("img");
            whiteKnight.src = "pngs/whiteKnight.png";
            whiteKnight.classList.add("pieces");
            return whiteKnight;
        }
    }

    move() {

    }
}