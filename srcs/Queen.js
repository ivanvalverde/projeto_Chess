class Queen {
    constructor(color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    sprite(){
        if(this._color == "black"){
            let blackQueen = document.createElement("img");
            blackQueen.src = "pngs/blackQueen.png";
            blackQueen.id = "blackQueen";
            let minPosBoardX = document.querySelector("#square0");
            let maxPosBoardX = document.querySelector("#square7");

            blackQueen.addEventListener("click",function(){

                if(whiteTurn == false){
                    removeRedColorFromSquares();
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    let lines = [[],[],[],[]];
                    let diagonals = [[],[],[],[]];

                    for(let i=0;i<7;i++){
                        diagonals[0].push(document.querySelector(`#square${(number-((i+1)*7))}`))
                        diagonals[1].push(document.querySelector(`#square${(number+((i+1)*7))}`))
                        diagonals[2].push(document.querySelector(`#square${(number-((i+1)*9))}`))
                        diagonals[3].push(document.querySelector(`#square${(number+((i+1)*9))}`))
                    }

                    for(let i=0;i<7;i++){
                        lines[0].push(document.querySelector(`#square${(number-((i+1)*8))}`))
                        lines[1].push(document.querySelector(`#square${(number+((i+1)*8))}`))
                        lines[2].push(document.querySelector(`#square${(number-((i+1)))}`))
                        lines[3].push(document.querySelector(`#square${(number+((i+1)))}`))
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

                    for (let i=0; i<lines.length;i++){
                        for(let j=0; j<lines[0].length;j++){
                            if(lines[i][j]==null){
                                break;
                            } else if((this.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                            (i==2) ){
                                break;

                            } else if((this.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                            (i==3)){
                                break;

                            }else if(lines[i][j].hasChildNodes()){

                                if((lines[i][j].childNodes[0].classList.contains("pieces")) && 
                                   (findingWhite.test(lines[i][j].childNodes[0].id))){

                                    lines[i][j].classList.add("moveTo");
                                    break;

                                } else{
                                    break;
                                }

                            } else{

                                lines[i][j].classList.add("moveTo");
                                elementToMove = this; 
                            } 
                        }
                    }

                    elementToMove = this;
                    parentToRemoveClass = this.parentNode;
                    classToAdd = "blackQueen";
                    classToRemove = "blackQueen";
                }
            });

            blackQueen.classList.add("pieces");
            return blackQueen;

        } else{
            let whiteQueen = document.createElement("img");
            whiteQueen.src = "pngs/whiteQueen.png";
            whiteQueen.id = "whiteQueen";
            let minPosBoardX = document.querySelector("#square0");
            let maxPosBoardX = document.querySelector("#square7");


            whiteQueen.addEventListener("click",function(){

            if(whiteTurn == true){
                removeRedColorFromSquares();
                let number = parseInt(this.parentNode.id.split("square")[1]);
                let lines = [[],[],[],[]];
                let diagonals = [[],[],[],[]];

                for(let i=0;i<7;i++){
                    diagonals[0].push(document.querySelector(`#square${(number-((i+1)*7))}`))
                    diagonals[1].push(document.querySelector(`#square${(number+((i+1)*7))}`))
                    diagonals[2].push(document.querySelector(`#square${(number-((i+1)*9))}`))
                    diagonals[3].push(document.querySelector(`#square${(number+((i+1)*9))}`))
                }

                for(let i=0;i<7;i++){
                    lines[0].push(document.querySelector(`#square${(number-((i+1)*8))}`))
                    lines[1].push(document.querySelector(`#square${(number+((i+1)*8))}`))
                    lines[2].push(document.querySelector(`#square${(number-((i+1)))}`))
                    lines[3].push(document.querySelector(`#square${(number+((i+1)))}`))
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

                for (let i=0; i<lines.length;i++){
                    for(let j=0; j<lines[0].length;j++){
                        if(lines[i][j]==null){
                            break;
                        } else if((this.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                        (i==2) ){
                            break;

                        } else if((this.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                        (i==3)){
                            break;

                        }else if(lines[i][j].hasChildNodes()){

                            if((lines[i][j].childNodes[0].classList.contains("pieces")) && 
                               (findingBlack.test(lines[i][j].childNodes[0].id))){

                                lines[i][j].classList.add("moveTo");
                                break;

                            } else{
                                break;
                            }

                        } else{

                            lines[i][j].classList.add("moveTo");
                            elementToMove = this; 
                        } 
                    }
                }

                elementToMove = this;
                parentToRemoveClass = this.parentNode;
                classToAdd = "whiteQueen";
                classToRemove = "whiteQueen";
            }
            
        });

        whiteQueen.classList.add("pieces");
        return whiteQueen;
        
    };

}
}