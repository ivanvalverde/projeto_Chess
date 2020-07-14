let chessBoard = {
    board: document.querySelector(".board"),
    squarePosition: 0,

    linesWhiteFirst: function(){
        for(let i=0;i<8;i++){
            let boardSquare = document.createElement("div");
            boardSquare.id = "square"+this.squarePosition;
            i%2==0?boardSquare.classList.add("white") : boardSquare.classList.add("black");

            boardSquare.addEventListener("click",function(){
                if(regExpMoveTo.test(boardSquare.classList)){
                    elementToMove.parentNode.removeChild(elementToMove);
                    boardSquare.appendChild(elementToMove);
                    boardSquare.classList.remove("moveTo");
                    boardSquare.classList.add(classToAdd);
                    parentToRemoveClass.classList.remove(classToRemove);
                    whiteTurn = !whiteTurn;
                    removeRedColorFromSquares();
                }
            })

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
                if(regExpMoveTo.test(boardSquare.classList)){
                    elementToMove.parentNode.removeChild(elementToMove);
                    boardSquare.appendChild(elementToMove);
                    boardSquare.classList.remove("moveTo");
                    boardSquare.classList.add(classToAdd);
                    parentToRemoveClass.classList.remove(classToRemove);
                    whiteTurn = !whiteTurn;
                    removeRedColorFromSquares();
                }
            })

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
        squareRook0.appendChild(bRook1.sprite());
        squareRook0.classList.add("blackRook");
        squareRook7.appendChild(bRook2.sprite());
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
        squareKnight57.appendChild(wKnight1.sprite());
        squareKnight57.classList.add("whiteKnight");
        squareKnight62.appendChild(wKnight2.sprite());
        squareKnight62.classList.add("whiteKnight");

        let wRook1 = new Rook("white");
        let wRook2 = new Rook("white");
        let squareRook56 = document.querySelector("#square56");
        let squareRook63 = document.querySelector("#square63");
        squareRook56.appendChild(wRook1.sprite());
        squareRook56.classList.add("whiteRook");
        squareRook63.appendChild(wRook2.sprite());
        squareRook63.classList.add("whiteRook");

        let wBishop1 = new Bishop("white");
        let wBishop2 = new Bishop("white");
        let squareBishop58 = document.querySelector("#square58");
        let squareBishop61 = document.querySelector("#square61");
        squareBishop58.appendChild(wBishop1.sprite());
        squareBishop58.classList.add("whiteBishop");
        squareBishop61.appendChild(wBishop2.sprite());
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

    }
}

chessBoard.creatingBoard();
chessBoard.puttingPieces();



