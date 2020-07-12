class Pawn {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(newId){
        if(this._color == "black"){
            let blackPawn = document.createElement("img");
            blackPawn.src = "pngs/blackPawn.png";
            blackPawn.id = `blackPawn${newId}`;


            blackPawn.addEventListener("click",function(){

                if(whiteTurn == false){
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    console.log(number);
                    let walk = document.querySelector(`#square${number+8}`);
                    elementToMove = this;
                    blackPawn.parentNode.classList.remove("blackPawn");
                    walk.classList.add("moveTo");
                    classToAdd = "blackPawn";
                }
                
            })

            blackPawn.classList.add("pieces");
            return blackPawn;

        } else{
            let whitePawn = document.createElement("img");
            whitePawn.src = "pngs/whitePawn.png";
            whitePawn.id = `whitePawn${newId}`;


            whitePawn.addEventListener("click",function(){

                if(whiteTurn == true){
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    console.log(number);
                    let walk = document.querySelector(`#square${number-8}`);
                    elementToMove = this;
                    whitePawn.parentNode.classList.remove("whitePawn");
                    walk.classList.add("moveTo");
                    classToAdd = "whitePawn";
                }
                
            })
            whitePawn.classList.add("pieces");
            return whitePawn;
        }
    }

    onClick() {
        
    }

    move() {
        

    }
}