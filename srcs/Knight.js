class Knight {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(newId){
        if(this._color == "black"){
            let blackKnight = document.createElement("img");
            blackKnight.src = "pngs/blackKnight.png";
            blackKnight.id = `blackKnight${newId}`;

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
                            if((walk[i].getBoundingClientRect().x + 200 >= this.x) && (walk[i].getBoundingClientRect().x - 200 <= this.x)
                            && (walk[i].getBoundingClientRect().y + 200 >= this.y) && (walk[i].getBoundingClientRect().y - 200 <= this.y)){
                                walk[i].classList.add("moveTo");
                                elementToMove = this;
                            }
                        }
                        
                    }
                    parentToRemoveClass = this.parentNode;
                    classToAdd = "blackKnight";
                    classToRemove = "blackKnight";
                }

            })

            blackKnight.classList.add("pieces");
            return blackKnight;

        } else{
            let whiteKnight = document.createElement("img");
            whiteKnight.src = "pngs/whiteKnight.png";

            whiteKnight.addEventListener("click", function(){
                if(whiteTurn == true){

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
                            if((walk[i].getBoundingClientRect().x + 200 >= this.x) && (walk[i].getBoundingClientRect().x - 200 <= this.x)
                            && (walk[i].getBoundingClientRect().y + 200 >= this.y) && (walk[i].getBoundingClientRect().y - 200 <= this.y)){
                                walk[i].classList.add("moveTo");
                                elementToMove = this;
                            }
                        }
                        
                    }
                    parentToRemoveClass = this.parentNode;
                    classToAdd = "whiteKnight";
                    classToRemove = "whiteKnight";
                }
            })

            whiteKnight.classList.add("pieces");
            return whiteKnight;
        }
    }

    move() {

    }
}