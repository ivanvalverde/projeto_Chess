let whiteTurn = true;
let elementToMove;
let regExpMoveTo = new RegExp(`moveTo`);
let classToAdd;

function removeRedColorFromSquares(){
    let arrWhiteSquares = document.querySelectorAll(".white");
    let arrBlackSquares = document.querySelectorAll(".black");

    arrWhiteSquares.forEach((sqr)=>{sqr.classList.remove("moveTo")});
    arrBlackSquares.forEach((sqr)=>{sqr.classList.remove("moveTo")});
}