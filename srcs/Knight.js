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

            blackKnight.addEventListener("click", function(){

                if(whiteTurn == false){
                    removeRedColorFromSquares();
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    console.log(number);
                    let walk = [document.querySelector(`#square${number-17}`),
                                document.querySelector(`#square${number-15}`),
                                document.querySelector(`#square${number-10}`),
                                document.querySelector(`#square${number-6}`),
                                document.querySelector(`#square${number+6}`),
                                document.querySelector(`#square${number+10}`),
                                document.querySelector(`#square${number+15}`),
                                document.querySelector(`#square${number+17}`)
                                ];

                    for (let i=0; i<8;i++){
                        if(walk[i]==null){
                            continue;
                        } else{
                            walk[i].classList.add("moveTo");
                        elementToMove = this;
                        }
                        
                    }
                    blackKnight.parentNode.classList.remove("blackKnight");
                    classToAdd = "blackKnight";
                }

            })

            blackKnight.classList.add("pieces");
            return blackKnight;

        } else{
            let whiteKnight = document.createElement("img");
            whiteKnight.src = "pngs/whiteKnight.png";

            whiteKnight.addEventListener("click", function(){

            })

            whiteKnight.classList.add("pieces");
            return whiteKnight;
        }
    }

    move() {

    }
}