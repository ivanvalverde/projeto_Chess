class Rook {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(){
        if(this._color == "black"){
            let blackRook = document.createElement("img");
            blackRook.src = "pngs/blackRook.png";
            blackRook.classList.add("pieces");
            return blackRook;

        } else{
            let whiteRook = document.createElement("img");
            whiteRook.src = "pngs/whiteRook.png";
            whiteRook.classList.add("pieces");
            return whiteRook;
        }
    }

    move() {

    }
}