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
            let minPosBoardX = document.querySelector("#square0");
            let maxPosBoardX = document.querySelector("#square7");

            blackRook.addEventListener("click",function(){

                if(whiteTurn == false){
                    removeRedColorFromSquares();
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    let lines = [[],[],[],[]];

                    for(let i=0;i<7;i++){
                        lines[0].push(document.querySelector(`#square${(number-((i+1)*8))}`))
                        lines[1].push(document.querySelector(`#square${(number+((i+1)*8))}`))
                        lines[2].push(document.querySelector(`#square${(number-((i+1)))}`))
                        lines[3].push(document.querySelector(`#square${(number+((i+1)))}`))
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
                    classToAdd = "blackRook";
                    classToRemove = "blackRook";
                }
            });
            
            blackRook.classList.add("pieces");
            return blackRook;

        } else{
            let whiteRook = document.createElement("img");
            whiteRook.src = "pngs/whiteRook.png";
            whiteRook.id = `whiteRook${newId}`;

            whiteRook.addEventListener("click",function(){

                if(whiteTurn == true){
                    removeRedColorFromSquares();
                    let number = parseInt(this.parentNode.id.split("square")[1]);
                    let lines = [[],[],[],[]];

                    for(let i=0;i<7;i++){
                        lines[0].push(document.querySelector(`#square${(number-((i+1)*8))}`))
                        lines[1].push(document.querySelector(`#square${(number+((i+1)*8))}`))
                        lines[2].push(document.querySelector(`#square${(number-((i+1)))}`))
                        lines[3].push(document.querySelector(`#square${(number+((i+1)))}`))
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
                    classToAdd = "whiteRook";
                    classToRemove = "whiteRook";
                }
            });

            whiteRook.classList.add("pieces");
            return whiteRook;
        }
    }

    move() {

    }
}