

document.addEventListener("DOMContentLoaded", function(){

const palos = ["♥", "♦", "♠", "♣"];
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let boton = document.getElementById("boton")

function cartaAleatoria(){

    let randomNumbers = Math.floor(Math.random() * valores.length)
    let randomSuits = Math.floor(Math.random() * palos.length)
    
    // console.log(valores[randomNumbers])
    // console.log(palos[randomSuits])
    
    let simboloArriba = document.getElementById("simboloArriba")
    let numero = document.getElementById("numero")
    let simboloAbajo = document.getElementById("simboloAbajo")
    let dibujo = document.getElementById("dibujo")
    
    
    numero.textContent = valores[randomNumbers]
    simboloArriba.textContent = palos[randomSuits]
    simboloAbajo.textContent = palos[randomSuits]
    
    
    if (palos[randomSuits] == "♠" || palos[randomSuits] == "♣" ){
        simboloArriba.style.color ="black"
        simboloAbajo.style.color ="black"
        numero.style.color = "black"
    } else {
        simboloArriba.style.color ="red"
        simboloAbajo.style.color ="red"
        numero.style.color = "red"
    }
    
    if (valores[randomNumbers] == "K" || valores[randomNumbers] == "Q" || valores[randomNumbers] == "J"){
        dibujo.setAttribute("src", "./rey.png")
        
    }else{
        dibujo.setAttribute("src", "")
      
    }
    }

boton.addEventListener("click", cartaAleatoria)
document.addEventListener("scroll", cartaAleatoria)

setTimeout(cartaAleatoria, 1000);
setInterval(cartaAleatoria, 5000)   


// setTimeout(() => {}, timeout);
// setInterval(() => {}, interval);


})


