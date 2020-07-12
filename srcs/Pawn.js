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
                    removeRedColorFromSquares();
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    console.log(number);
                    if((number <= 15) && (number >= 8)){
                        for(let i=0; i < 2;i++){
                            let walk = document.querySelector(`#square${number+(8*(i+1))}`);
                            walk.classList.add("moveTo");
                        }
                    } else{
                        let walk = document.querySelector(`#square${number+8}`);
                        walk.classList.add("moveTo");
                    }
                    elementToMove = this;
                    blackPawn.parentNode.classList.remove("blackPawn");
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

                removeRedColorFromSquares();
                if(whiteTurn == true){
                    removeRedColorFromSquares();
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    console.log(number);
                    if((number <= 55) && (number >= 48)){
                        for(let i=0; i < 2;i++){
                            let walk = document.querySelector(`#square${number-(8*(i+1))}`);
                            walk.classList.add("moveTo");
                        }
                    } else{
                        let walk = document.querySelector(`#square${number-8}`);
                        walk.classList.add("moveTo");
                    }
                    elementToMove = this;
                    whitePawn.parentNode.classList.remove("whitePawn");
                    classToAdd = "whitePawn";
                }
                }
        
            );
            whitePawn.classList.add("pieces");
            return whitePawn;
        }
    }

    onClick() {
        
    }

    move() {
        

    }
}