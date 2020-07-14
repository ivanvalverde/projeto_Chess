class Rook {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(newId){
        if(this._color == "black"){
            let blackRook = document.createElement("img");
            blackRook.src = "pngs/blackRook.png";
            blackRook.id = `blackRook${newId}`;
            blackRook.classList.add("pieces");
            return blackRook;

        } else{
            let whiteRook = document.createElement("img");
            whiteRook.src = "pngs/whiteRook.png";
            whiteRook.id = `whiteRook${newId}`;
            whiteRook.classList.add("pieces");
            return whiteRook;
        }
    }

    move() {

    }
}