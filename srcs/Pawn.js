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
                    let diagonalsAttack = [document.querySelector(`#square${(number+7)}`),
                                           document.querySelector(`#square${(number+9)}`)];
                    
                    for(let i=0; i<diagonalsAttack.length;i++){
                        if(diagonalsAttack[i].hasChildNodes()){

                        if((diagonalsAttack[i].childNodes[0].classList.contains("pieces")) && 
                            (findingWhite.test(diagonalsAttack[i].childNodes[0].id) && (diagonalsAttack[i].getBoundingClientRect().x -80 < this.parentNode.getBoundingClientRect().x) 
                            && diagonalsAttack[i].getBoundingClientRect().x +80 > this.parentNode.getBoundingClientRect().x)){

                            diagonalsAttack[i].classList.add("moveTo");

                        } else{
                            continue;
                            }
                        }
                    }
                    
                    if((number <= 15) && (number >= 8)){
                        for(let i=0; i < 2;i++){
                            
                            let walk = document.querySelector(`#square${number+(8*(i+1))}`);
                            walk.classList.add("moveTo");
                        }
                    } else{
                        let walk = document.querySelector(`#square${number+8}`);
                        if(!walk.hasChildNodes()){
                            walk.classList.add("moveTo");
                        }
                    }
                    elementToMove = this;
                    parentToRemoveClass = this.parentNode;
                    classToAdd = "blackPawn";
                    classToRemove = "blackPawn";
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
                    removeRedColorFromSquares();
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    let diagonalsAttack = [document.querySelector(`#square${(number-7)}`),
                                            document.querySelector(`#square${(number-9)}`)];
                    
                    for(let i=0; i<diagonalsAttack.length;i++){
                        if(diagonalsAttack[i].hasChildNodes()){

                        if((diagonalsAttack[i].childNodes[0].classList.contains("pieces")) && 
                            (findingBlack.test(diagonalsAttack[i].childNodes[0].id) && (diagonalsAttack[i].getBoundingClientRect().x -80 < this.parentNode.getBoundingClientRect().x) 
                            && diagonalsAttack[i].getBoundingClientRect().x +80 > this.parentNode.getBoundingClientRect().x)){

                            diagonalsAttack[i].classList.add("moveTo");

                        } else{
                            continue;
                            }
                        }
                    }
                    
                    if((number <= 55) && (number >= 48)){
                        for(let i=0; i < 2;i++){
                            
                            let walk = document.querySelector(`#square${number-(8*(i+1))}`);
                            walk.classList.add("moveTo");
                        }
                    } else{
                        let walk = document.querySelector(`#square${number-8}`);
                        if(!walk.hasChildNodes()){
                            walk.classList.add("moveTo");
                        }
                    }
                    elementToMove = this;
                    parentToRemoveClass = this.parentNode;
                    classToAdd = "whitePawn";
                    classToRemove = "whitePawn";
                }
                
             });
            whitePawn.classList.add("pieces");
            return whitePawn;
        }
    }
}