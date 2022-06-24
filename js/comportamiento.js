function correcto(){
    document.getElementById("imagenPokemon").src = "../img/pcolor.jpg"
    document.getElementById("MensajeA").style.visibility="visible"
    document.getElementById("MensajeA").innerText="Felicitaciones, has seleccionado la opción correcta"
    document.getElementById("inicial").style.color= "yellow";
    document.getElementById("MensajeB").style.visibility="hidden"
}
function incorrecto(){
    document.getElementById("imagenPokemon").src = "../img/pcolor.jpg"
    document.getElementById("MensajeB").style.visibility="visible"
    document.getElementById("MensajeB").innerText="Pokémon incorrecto, la respuesta es: excadrill"
    document.getElementById("inicial").style.color= "red"; 
    document.getElementById("MensajeA").style.visibility="hidden"
}
function reiniciar(){
    document.getElementById("imagenPokemon").src="../img/pnegro.jpg"
    document.getElementById("MensajeA").innerText=""
    document.getElementById("MensajeB").innerText=""
    document.getElementById("inicial").style.color= "black";
    document.getElementById("MensajeB").style.visibility="hidden"
    document.getElementById("MensajeA").style.visibility="hidden"
    
}