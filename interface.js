document.addEventListener('DOMContentLoaded',()=>{

let quadrados = document.querySelectorAll(".quadrado");

quadrados.forEach((quadrado)=>{

quadrado.addEventListener('click', handleClick);



})


})

function handleClick(event) {




let quadrado = event.target;

let postion = quadrado.id;

handleMovr(position);
updateSquares();

}


function updateSquares(){

    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado)=>{
    
let postion = quadrado.id;

 let simbolo = tabuleiro[postion]
    
 if(symbol !=''){

quadrado.innerHTML = `<div class='${simbolo}'></div>`

 }



    })


}