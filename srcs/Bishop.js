class Bishop {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(newId){
        if(this._color == "black"){
            let blackBishop = document.createElement("img");
            blackBishop.src = "pngs/blackBishop.png";
            blackBishop.id = `blackBishop${newId}`;
            let minPosBoardX = document.querySelector("#square0");
            let maxPosBoardX = document.querySelector("#square7");

            blackBishop.addEventListener("click",function(){

                if(whiteTurn == false){
                    removeRedColorFromSquares();
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    let diagonals = [[],[],[],[]];
                    console.log(diagonals);

                    for(let i=0;i<7;i++){
                        diagonals[0].push(document.querySelector(`#square${(number-((i+1)*7))}`))
                        diagonals[1].push(document.querySelector(`#square${(number+((i+1)*7))}`))
                        diagonals[2].push(document.querySelector(`#square${(number-((i+1)*9))}`))
                        diagonals[3].push(document.querySelector(`#square${(number+((i+1)*9))}`))
                    }

                    for (let i=0; i<diagonals.length;i++){
                        for(let j=0; j<diagonals[0].length;j++){
                            if(diagonals[i][j]==null){
                                break;
                            } else if((this.parentNode.getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) &&
                            ((i==1) || (i==2))){
                                break;

                            } else if((this.parentNode.getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x) &&
                            ((i==0) || (i==3))){
                                break;

                            }else if(diagonals[i][j].hasChildNodes()){

                                if((diagonals[i][j].childNodes[0].classList.contains("pieces")) && 
                                   (findingWhite.test(diagonals[i][j].childNodes[0].id))){

                                    diagonals[i][j].classList.add("moveTo");
                                    break;

                                } else{
                                    break;
                                }

                            } else if((diagonals[i][j].getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) ||
                                      (diagonals[i][j].getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x)){

                                diagonals[i][j].classList.add("moveTo");
                                break;

                            } else{

                                diagonals[i][j].classList.add("moveTo");
                                elementToMove = this; 
                            } 
                        }
                    }

                    elementToMove = this;
                    parentToRemoveClass = this.parentNode;
                    classToAdd = "blackBishop";
                    classToRemove = "blackBishop";
                }
            });

            blackBishop.classList.add("pieces");
            return blackBishop;

        } else{
            let whiteBishop = document.createElement("img");
            whiteBishop.src = "pngs/whiteBishop.png";
            whiteBishop.id = `whiteBishop${newId}`;
            let minPosBoardX = document.querySelector("#square0");
            let maxPosBoardX = document.querySelector("#square7");


            whiteBishop.addEventListener("click",function(){

                if(whiteTurn == true){
                    removeRedColorFromSquares();
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    let diagonals = [[],[],[],[]];
                    console.log(diagonals);

                    for(let i=0;i<7;i++){
                        diagonals[0].push(document.querySelector(`#square${(number-((i+1)*7))}`))
                        diagonals[1].push(document.querySelector(`#square${(number+((i+1)*7))}`))
                        diagonals[2].push(document.querySelector(`#square${(number-((i+1)*9))}`))
                        diagonals[3].push(document.querySelector(`#square${(number+((i+1)*9))}`))
                    }

                    for (let i=0; i<diagonals.length;i++){
                        for(let j=0; j<diagonals[0].length;j++){
                            if(diagonals[i][j]==null){
                                break;
                            } else if((this.parentNode.getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) &&
                                     ((i==1) || (i==2))){
                                break;

                            } else if((this.parentNode.getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x) &&
                            ((i==0) || (i==3))){
                                break;

                            } else if(diagonals[i][j].hasChildNodes()){

                                if((diagonals[i][j].childNodes[0].classList.contains("pieces")) && 
                                   (findingBlack.test(diagonals[i][j].childNodes[0].id))){

                                    diagonals[i][j].classList.add("moveTo");
                                    break;

                                } else{
                                    break;
                                }

                            } else if((diagonals[i][j].getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) ||
                                      (diagonals[i][j].getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x)){

                                diagonals[i][j].classList.add("moveTo");
                                break;

                            } else{

                                diagonals[i][j].classList.add("moveTo");
                                elementToMove = this; 
                            } 
                        }
                    }

                    elementToMove = this;
                    parentToRemoveClass = this.parentNode;
                    classToAdd = "whiteBishop";
                    classToRemove = "whiteBishop";
                }
            });

            whiteBishop.classList.add("pieces");
            return whiteBishop;
        }
    }

    move() {

    }
}