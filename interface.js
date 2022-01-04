document.addEventListener('DOMContentLoaded', ()=>{

let squares = document.querySelectorAll(".square");

squares.forEach((square)=>{

square.addEventListener('click', handleClick);

})


})

function handleClick(event) {

let square = event.target;
let position = square.id;


if(handleMove(position)){

setTimeout(() => {

//// Colocar qual o vencedor//

    alert("O jogo acabou!!! - o vencedor foi");

}, 10);



};
updateSquares();



}

function updateSquares(){


let squares = document.querySelectorAll(".square");

squares.forEach((square) => {

let position = square.id;

let symbol = board[position]

if(symbol != ''){

square.innerHTML = `<div class='${symbol}'></div>`

}

})


}