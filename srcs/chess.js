let chessBoard = {
    board: document.querySelector(".board"),
    squarePosition: 0,

    linesWhiteFirst: function(){
        for(let i=0;i<8;i++){
            let boardSquare = document.createElement("div");
            boardSquare.id = "square"+this.squarePosition;
            i%2==0?boardSquare.classList.add("white") : boardSquare.classList.add("black");

            boardSquare.addEventListener("click",function(){
                if((this.hasChildNodes()) && (this.classList.contains("moveTo"))){
                    let lastClass = this.classList[1];
                    this.classList.remove(lastClass);
                    this.removeChild(this.childNodes[0]);
                }
                if(regExpMoveTo.test(boardSquare.classList)){
                    elementToMove.parentNode.removeChild(elementToMove);
                    boardSquare.appendChild(elementToMove);
                    boardSquare.classList.remove("moveTo");
                    boardSquare.classList.add(classToAdd);
                    parentToRemoveClass.classList.remove(classToRemove);
                    whiteTurn = !whiteTurn;
                    removeRedColorFromSquares();
                }
            });

            this.board.appendChild(boardSquare);
            this.squarePosition++;
        }
    },

    linesBlackFirst: function(){
        for(let i=0;i<8;i++){
            let boardSquare = document.createElement("div");
            boardSquare.id = "square"+this.squarePosition;
            i%2==0?boardSquare.classList.add("black") : boardSquare.classList.add("white");

            boardSquare.addEventListener("click",function(){
                if((this.hasChildNodes()) && (this.classList.contains("moveTo"))){
                    let lastClass = this.classList[1];
                    this.classList.remove(lastClass);
                    this.removeChild(this.childNodes[0]);
                }
                if(regExpMoveTo.test(boardSquare.classList)){
                    elementToMove.parentNode.removeChild(elementToMove);
                    boardSquare.appendChild(elementToMove);
                    boardSquare.classList.remove("moveTo");
                    boardSquare.classList.add(classToAdd);
                    parentToRemoveClass.classList.remove(classToRemove);
                    whiteTurn = !whiteTurn;
                    removeRedColorFromSquares();
                }
            });

            this.board.appendChild(boardSquare);
            this.squarePosition++;
        }
    },

    creatingBoard: function(){
        
        for(let i=0;i<4;i++){
            this.linesWhiteFirst();
            this.linesBlackFirst();
        }
    },

    puttingPieces: function(){

        //Inserting black pieces into the chess board

        let bKnight1 = new Knight("black");
        let bKnight2 = new Knight("black");
        let squareKnight1 = document.querySelector("#square1");
        let squareKnight6 = document.querySelector("#square6");
        squareKnight1.appendChild(bKnight1.sprite(1));
        squareKnight1.classList.add("blackKnight");
        squareKnight6.appendChild(bKnight2.sprite(2));
        squareKnight6.classList.add("blackKnight");

        let bRook1 = new Rook("black");
        let bRook2 = new Rook("black");
        let squareRook0 = document.querySelector("#square0");
        let squareRook7 = document.querySelector("#square7");
        squareRook0.appendChild(bRook1.sprite(1));
        squareRook0.classList.add("blackRook");
        squareRook7.appendChild(bRook2.sprite(2));
        squareRook7.classList.add("blackRook");

        let bBishop1 = new Bishop("black");
        let bBishop2 = new Bishop("black");
        let squareBishop2 = document.querySelector("#square2");
        let squareBishop5 = document.querySelector("#square5");
        squareBishop2.appendChild(bBishop1.sprite(1));
        squareBishop2.classList.add("blackBishop");
        squareBishop5.appendChild(bBishop2.sprite(2));
        squareBishop5.classList.add("blackBishop");

        let bQueen = new Queen("black");
        let squareQueen3 = document.querySelector("#square3");
        squareQueen3.appendChild(bQueen.sprite());
        squareQueen3.classList.add("blackQueen");

        let bKing = new King("black");
        let squareKing4 = document.querySelector("#square4");
        squareKing4.appendChild(bKing.sprite());
        squareKing4.classList.add("blackKing");

        for(let i=8; i< 16;i++){
            let squarePawns = document.querySelector("#square" + i)
            let bPawn = new Pawn("black");
            squarePawns.classList.add("blackPawn");
            squarePawns.appendChild(bPawn.sprite(i-7));
        }


        //Inserting white pieces into the chess board
        

        let wKnight1 = new Knight("white");
        let wKnight2 = new Knight("white");
        let squareKnight57 = document.querySelector("#square57");
        let squareKnight62 = document.querySelector("#square62");
        squareKnight57.appendChild(wKnight1.sprite(1));
        squareKnight57.classList.add("whiteKnight");
        squareKnight62.appendChild(wKnight2.sprite(2));
        squareKnight62.classList.add("whiteKnight");

        let wRook1 = new Rook("white");
        let wRook2 = new Rook("white");
        let squareRook56 = document.querySelector("#square56");
        let squareRook63 = document.querySelector("#square63");
        squareRook56.appendChild(wRook1.sprite(1));
        squareRook56.classList.add("whiteRook");
        squareRook63.appendChild(wRook2.sprite(2));
        squareRook63.classList.add("whiteRook");

        let wBishop1 = new Bishop("white");
        let wBishop2 = new Bishop("white");
        let squareBishop58 = document.querySelector("#square58");
        let squareBishop61 = document.querySelector("#square61");
        squareBishop58.appendChild(wBishop1.sprite(1));
        squareBishop58.classList.add("whiteBishop");
        squareBishop61.appendChild(wBishop2.sprite(2));
        squareBishop61.classList.add("whiteBishop");

        let wQueen = new Queen("white");
        let squareQueen59 = document.querySelector("#square59");
        squareQueen59.appendChild(wQueen.sprite());
        squareQueen59.classList.add("whiteQueen");

        let wKing = new King("white");
        let squareKing60 = document.querySelector("#square60");
        squareKing60.appendChild(wKing.sprite());
        squareKing60.classList.add("whiteKing");

        for(let i=48; i< 56;i++){
            let squarePawns = document.querySelector("#square" + i)
            let wPawn = new Pawn("white");
            squarePawns.classList.add("whitePawn");
            squarePawns.appendChild(wPawn.sprite(i-47));
        }

    },

    blackSight: function(){

        let blackSight = [];
        let minPosBoardX = document.querySelector("#square0");
        let maxPosBoardX = document.querySelector("#square7");
        
        //Adding queen sight
        
        let blackQueenSight = document.querySelector("#blackQueen");
        let number = parseInt(blackQueenSight.parentNode.id.split("square")[1]);
        let linesQueen = [[],[],[],[]];
        let diagonalsQueen = [[],[],[],[]];

        for(let i=0;i<7;i++){
            diagonalsQueen[0].push(document.querySelector(`#square${(number-((i+1)*7))}`))
            diagonalsQueen[1].push(document.querySelector(`#square${(number+((i+1)*7))}`))
            diagonalsQueen[2].push(document.querySelector(`#square${(number-((i+1)*9))}`))
            diagonalsQueen[3].push(document.querySelector(`#square${(number+((i+1)*9))}`))
        }

        for(let i=0;i<7;i++){
            linesQueen[0].push(document.querySelector(`#square${(number-((i+1)*8))}`))
            linesQueen[1].push(document.querySelector(`#square${(number+((i+1)*8))}`))
            linesQueen[2].push(document.querySelector(`#square${(number-((i+1)))}`))
            linesQueen[3].push(document.querySelector(`#square${(number+((i+1)))}`))
        }

        for (let i=0; i<diagonalsQueen.length;i++){
            for(let j=0; j<diagonalsQueen[0].length;j++){
                if(diagonalsQueen[i][j]==null){
                    break;
                } else if((blackQueenSight.parentNode.getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) &&
                ((i==1) || (i==2))){
                    break;

                } else if((blackQueenSight.parentNode.getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x) &&
                ((i==0) || (i==3))){
                    break;

                }else if(diagonalsQueen[i][j].hasChildNodes()){

                    if(diagonalsQueen[i][j].childNodes[0].classList.contains("pieces")){

                        blackSight.push(diagonalsQueen[i][j]);
                        break;

                    } else{
                        break;
                    }

                } else if((diagonalsQueen[i][j].getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) ||
                            (diagonalsQueen[i][j].getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x)){

                        blackSight.push(diagonalsQueen[i][j]);
                    break;

                } else{

                    blackSight.push(diagonalsQueen[i][j]); 
                } 
            }
        }

        for (let i=0; i<linesQueen.length;i++){
            for(let j=0; j<linesQueen[0].length;j++){
                if(linesQueen[i][j]==null){
                    break;
                } else if((blackQueenSight.parentNode.getBoundingClientRect().y != linesQueen[i][j].getBoundingClientRect().y) &&
                (i==2) ){
                    break;

                } else if((blackQueenSight.parentNode.getBoundingClientRect().y != linesQueen[i][j].getBoundingClientRect().y) &&
                (i==3)){
                    break;

                }else if(linesQueen[i][j].hasChildNodes()){

                    if(linesQueen[i][j].childNodes[0].classList.contains("pieces")){

                            blackSight.push(linesQueen[i][j]);
                        break;

                    } else{
                        break;
                    }

                } else{

                    blackSight.push(linesQueen[i][j])
                } 
            }
        }

        //Finishing queen sight

        //Adding bishop sight

        for(let a=1; a<3;a++){

            let blackBishopSight = document.querySelector(`#blackBishop${a}`)
            let number = parseInt(blackBishopSight.parentNode.id.split("square")[1]);
            let diagonals = [[],[],[],[]];

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
                    } else if((blackBishopSight.parentNode.getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) &&
                    ((i==1) || (i==2))){
                        break;

                    } else if((blackBishopSight.parentNode.getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x) &&
                    ((i==0) || (i==3))){
                        break;

                    }else if(diagonals[i][j].hasChildNodes()){

                        if(diagonals[i][j].childNodes[0].classList.contains("pieces")){

                            blackSight.push(diagonals[i][j]);
                            break;

                        } else{
                            break;
                        }

                    } else if((diagonals[i][j].getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) ||
                                (diagonals[i][j].getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x)){

                            blackSight.push(diagonals[i][j]);
                            break;

                    } else{

                        blackSight.push(diagonals[i][j]);
                    } 
                }
            }
        }

        //Finishing bishop sight

        //Adding rook sight
        for(let a=1; a<3;a++){
            let blackRookSight = document.querySelector(`#blackRook${a}`)
            let number = parseInt(blackRookSight.parentNode.id.split("square")[1]);
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
                        } else if((blackRookSight.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                        (i==2) ){
                            break;

                        } else if((blackRookSight.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                        (i==3)){
                            break;

                        }else if(lines[i][j].hasChildNodes()){

                            if(lines[i][j].childNodes[0].classList.contains("pieces")){

                                blackSight.push(lines[i][j]);
                                break;

                            } else{
                                break;
                            }

                        } else{

                            blackSight.push(lines[i][j]); 
                        } 
                    }
                }
        }

        //Finishing rook sight

        //Adding knight sight

        for(let a=1; a<3;a++){

            let blackKnightSight = document.querySelector(`#blackKnight${a}`)
            let number = parseInt(blackKnightSight.parentNode.id.split("square")[1]);
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
                    if((walk[i].getBoundingClientRect().x + 200 >= blackKnightSight.x) && (walk[i].getBoundingClientRect().x - 200 <= blackKnightSight.x)
                    && (walk[i].getBoundingClientRect().y + 200 >= blackKnightSight.y) && (walk[i].getBoundingClientRect().y - 200 <= blackKnightSight.y)){
                        
                        blackSight.push(walk[i]);
                    }
                
                }
            }
        }

        //Finishing knight sight

        //Adding king sight

        let blackKingSight = document.querySelector("#blackKing")
        let numberSqr = parseInt(blackKingSight.parentNode.id.split("square")[1]);
        let lines = [[],[],[],[]];
        let diagonals = [[],[],[],[]];

        for(let i=0;i<1;i++){
            diagonals[0].push(document.querySelector(`#square${(numberSqr-((i+1)*7))}`))
            diagonals[1].push(document.querySelector(`#square${(numberSqr+((i+1)*7))}`))
            diagonals[2].push(document.querySelector(`#square${(numberSqr-((i+1)*9))}`))
            diagonals[3].push(document.querySelector(`#square${(numberSqr+((i+1)*9))}`))
        }

        for(let i=0;i<1;i++){
            lines[0].push(document.querySelector(`#square${(numberSqr-((i+1)*8))}`))
            lines[1].push(document.querySelector(`#square${(numberSqr+((i+1)*8))}`))
            lines[2].push(document.querySelector(`#square${(numberSqr-((i+1)))}`))
            lines[3].push(document.querySelector(`#square${(numberSqr+((i+1)))}`))
        }

        for (let i=0; i<diagonals.length;i++){
            for(let j=0; j<diagonals[0].length;j++){
                if(diagonals[i][j]==null){
                    break;
                } else if((blackKingSight.parentNode.getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) &&
                ((i==1) || (i==2))){
                    break;

                } else if((blackKingSight.parentNode.getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x) &&
                ((i==0) || (i==3))){
                    break;

                }else if(diagonals[i][j].hasChildNodes()){

                    if(diagonals[i][j].childNodes[0].classList.contains("pieces")){

                        blackSight.push(diagonals[i][j]);
                        break;

                    } else{
                        break;
                    }

                } else if((diagonals[i][j].getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) ||
                            (diagonals[i][j].getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x)){

                    blackSight.push(diagonals[i][j]);
                    break;

                } else{

                    blackSight.push(diagonals[i][j]); 
                } 
            }
        }

        for (let i=0; i<lines.length;i++){
            for(let j=0; j<lines[0].length;j++){
                if(lines[i][j]==null){
                    break;
                } else if((blackKingSight.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                (i==2) ){
                    break;

                } else if((blackKingSight.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                (i==3)){
                    break;

                }else if(lines[i][j].hasChildNodes()){

                    if(lines[i][j].childNodes[0].classList.contains("pieces")){

                            blackSight.push(lines[i][j]);
                        break;

                    } else{
                        break;
                    }

                } else{

                    blackSight.push(lines[i][j]);
                } 
            }
        }

        //Adding pawn sight

        for(let a=1; a<9;a++){

            let blackPawnSight = document.querySelector(`#blackPawn${a}`)
            let number = parseInt(blackPawnSight.parentNode.id.split("square")[1]);
            let diagonalsAttack = [document.querySelector(`#square${(number+7)}`),
                                    document.querySelector(`#square${(number+9)}`)];
            
            for(let i=0; i<diagonalsAttack.length;i++){
                if((diagonalsAttack[i].getBoundingClientRect().x -80 < blackPawnSight.parentNode.getBoundingClientRect().x) 
                && (diagonalsAttack[i].getBoundingClientRect().x +80 > blackPawnSight.parentNode.getBoundingClientRect().x)){
                blackSight.push(diagonalsAttack[i]);
                }
            }

        }

        //Finishing pawn sight

        return blackSight;

    },



    whiteSight: function(){

        let whiteSight = [];
        let minPosBoardX = document.querySelector("#square0");
        let maxPosBoardX = document.querySelector("#square7");
        
        //Adding queen sight
        
        let whiteQueenSight = document.querySelector("#whiteQueen");
        let number = parseInt(whiteQueenSight.parentNode.id.split("square")[1]);
        let linesQueen = [[],[],[],[]];
        let diagonalsQueen = [[],[],[],[]];

        for(let i=0;i<7;i++){
            diagonalsQueen[0].push(document.querySelector(`#square${(number-((i+1)*7))}`))
            diagonalsQueen[1].push(document.querySelector(`#square${(number+((i+1)*7))}`))
            diagonalsQueen[2].push(document.querySelector(`#square${(number-((i+1)*9))}`))
            diagonalsQueen[3].push(document.querySelector(`#square${(number+((i+1)*9))}`))
        }

        for(let i=0;i<7;i++){
            linesQueen[0].push(document.querySelector(`#square${(number-((i+1)*8))}`))
            linesQueen[1].push(document.querySelector(`#square${(number+((i+1)*8))}`))
            linesQueen[2].push(document.querySelector(`#square${(number-((i+1)))}`))
            linesQueen[3].push(document.querySelector(`#square${(number+((i+1)))}`))
        }

        for (let i=0; i<diagonalsQueen.length;i++){
            for(let j=0; j<diagonalsQueen[0].length;j++){
                if(diagonalsQueen[i][j]==null){
                    break;
                } else if((whiteQueenSight.parentNode.getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) &&
                ((i==1) || (i==2))){
                    break;

                } else if((whiteQueenSight.parentNode.getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x) &&
                ((i==0) || (i==3))){
                    break;

                }else if(diagonalsQueen[i][j].hasChildNodes()){

                    if(diagonalsQueen[i][j].childNodes[0].classList.contains("pieces")){

                        whiteSight.push(diagonalsQueen[i][j]);
                        break;

                    } else{
                        break;
                    }

                } else if((diagonalsQueen[i][j].getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) ||
                            (diagonalsQueen[i][j].getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x)){

                        whiteSight.push(diagonalsQueen[i][j]);
                    break;

                } else{

                    whiteSight.push(diagonalsQueen[i][j]); 
                } 
            }
        }

        for (let i=0; i<linesQueen.length;i++){
            for(let j=0; j<linesQueen[0].length;j++){
                if(linesQueen[i][j]==null){
                    break;
                } else if((whiteQueenSight.parentNode.getBoundingClientRect().y != linesQueen[i][j].getBoundingClientRect().y) &&
                (i==2) ){
                    break;

                } else if((whiteQueenSight.parentNode.getBoundingClientRect().y != linesQueen[i][j].getBoundingClientRect().y) &&
                (i==3)){
                    break;

                }else if(linesQueen[i][j].hasChildNodes()){

                    if(linesQueen[i][j].childNodes[0].classList.contains("pieces")){

                        whiteSight.push(linesQueen[i][j]);
                        break;

                    } else{
                        break;
                    }

                } else{

                    whiteSight.push(linesQueen[i][j])
                } 
            }
        }

        //Finishing queen sight

        //Adding bishop sight

        for(let a=1; a<3;a++){

            let whiteBishopSight = document.querySelector(`#whiteBishop${a}`)
            let number = parseInt(whiteBishopSight.parentNode.id.split("square")[1]);
            let diagonals = [[],[],[],[]];

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
                    } else if((whiteBishopSight.parentNode.getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) &&
                    ((i==1) || (i==2))){
                        break;

                    } else if((whiteBishopSight.parentNode.getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x) &&
                    ((i==0) || (i==3))){
                        break;

                    }else if(diagonals[i][j].hasChildNodes()){

                        if(diagonals[i][j].childNodes[0].classList.contains("pieces")){

                            whiteSight.push(diagonals[i][j]);
                            break;

                        } else{
                            break;
                        }

                    } else if((diagonals[i][j].getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) ||
                                (diagonals[i][j].getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x)){

                            whiteSight.push(diagonals[i][j]);
                            break;

                    } else{

                        whiteSight.push(diagonals[i][j]);
                    } 
                }
            }
        }

        //Finishing bishop sight

        //Adding rook sight
        for(let a=1; a<3;a++){
            let whiteRookSight = document.querySelector(`#whiteRook${a}`)
            let number = parseInt(whiteRookSight.parentNode.id.split("square")[1]);
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
                        } else if((whiteRookSight.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                        (i==2) ){
                            break;

                        } else if((whiteRookSight.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                        (i==3)){
                            break;

                        }else if(lines[i][j].hasChildNodes()){

                            if(lines[i][j].childNodes[0].classList.contains("pieces")){

                                whiteSight.push(lines[i][j]);
                                break;

                            } else{
                                break;
                            }

                        } else{

                            whiteSight.push(lines[i][j]); 
                        } 
                    }
                }
        }

        //Finishing rook sight

        //Adding knight sight

        for(let a=1; a<3;a++){

            let whiteKnightSight = document.querySelector(`#whiteKnight${a}`)
            let number = parseInt(whiteKnightSight.parentNode.id.split("square")[1]);
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
                    if((walk[i].getBoundingClientRect().x + 200 >= whiteKnightSight.x) && (walk[i].getBoundingClientRect().x - 200 <= whiteKnightSight.x)
                    && (walk[i].getBoundingClientRect().y + 200 >= whiteKnightSight.y) && (walk[i].getBoundingClientRect().y - 200 <= whiteKnightSight.y)){
                        
                        whiteSight.push(walk[i]);
                    }
                
                }
            }
        }

        //Finishing knight sight

        //Adding king sight

        let whiteKingSight = document.querySelector("#whiteKing")
        let numberSqr = parseInt(whiteKingSight.parentNode.id.split("square")[1]);
        let lines = [[],[],[],[]];
        let diagonals = [[],[],[],[]];

        for(let i=0;i<1;i++){
            diagonals[0].push(document.querySelector(`#square${(numberSqr-((i+1)*7))}`))
            diagonals[1].push(document.querySelector(`#square${(numberSqr+((i+1)*7))}`))
            diagonals[2].push(document.querySelector(`#square${(numberSqr-((i+1)*9))}`))
            diagonals[3].push(document.querySelector(`#square${(numberSqr+((i+1)*9))}`))
        }

        for(let i=0;i<1;i++){
            lines[0].push(document.querySelector(`#square${(numberSqr-((i+1)*8))}`))
            lines[1].push(document.querySelector(`#square${(numberSqr+((i+1)*8))}`))
            lines[2].push(document.querySelector(`#square${(numberSqr-((i+1)))}`))
            lines[3].push(document.querySelector(`#square${(numberSqr+((i+1)))}`))
        }

        for (let i=0; i<diagonals.length;i++){
            for(let j=0; j<diagonals[0].length;j++){
                if(diagonals[i][j]==null){
                    break;
                } else if((whiteKingSight.parentNode.getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) &&
                ((i==1) || (i==2))){
                    break;

                } else if((whiteKingSight.parentNode.getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x) &&
                ((i==0) || (i==3))){
                    break;

                }else if(diagonals[i][j].hasChildNodes()){

                    if(diagonals[i][j].childNodes[0].classList.contains("pieces")){

                        whiteSight.push(diagonals[i][j]);
                        break;

                    } else{
                        break;
                    }

                } else if((diagonals[i][j].getBoundingClientRect().x == minPosBoardX.getBoundingClientRect().x) ||
                            (diagonals[i][j].getBoundingClientRect().x == maxPosBoardX.getBoundingClientRect().x)){

                    whiteSight.push(diagonals[i][j]);
                    break;

                } else{

                    whiteSight.push(diagonals[i][j]); 
                } 
            }
        }

        for (let i=0; i<lines.length;i++){
            for(let j=0; j<lines[0].length;j++){
                if(lines[i][j]==null){
                    break;
                } else if((whiteKingSight.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                (i==2) ){
                    break;

                } else if((whiteKingSight.parentNode.getBoundingClientRect().y != lines[i][j].getBoundingClientRect().y) &&
                (i==3)){
                    break;

                }else if(lines[i][j].hasChildNodes()){

                    if(lines[i][j].childNodes[0].classList.contains("pieces")){

                        whiteSight.push(lines[i][j]);
                        break;

                    } else{
                        break;
                    }

                } else{

                    whiteSight.push(lines[i][j]);
                } 
            }
        }

        //Adding pawn sight

        for(let a=1; a<9;a++){

            let whitePawnSight = document.querySelector(`#whitePawn${a}`)
            let number = parseInt(whitePawnSight.parentNode.id.split("square")[1]);
            let diagonalsAttack = [document.querySelector(`#square${(number-7)}`),
                                    document.querySelector(`#square${(number-9)}`)];
            
            for(let i=0; i<diagonalsAttack.length;i++){
                
                if((diagonalsAttack[i].getBoundingClientRect().x -80 < whitePawnSight.parentNode.getBoundingClientRect().x) 
                && (diagonalsAttack[i].getBoundingClientRect().x +80 > whitePawnSight.parentNode.getBoundingClientRect().x)){
                whiteSight.push(diagonalsAttack[i]);
                }
            }

        }

        //Finishing pawn sight

        return whiteSight;

    }
}

chessBoard.creatingBoard();
chessBoard.puttingPieces();



