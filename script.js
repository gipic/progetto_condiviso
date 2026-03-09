
let casellaNome = document.getElementById("nome");
let casellaCognome = document.getElementById("cognome");
let btnRegistra = document.getElementById("btnRegistra");

btnRegistra.addEventListener("click", function() {
    let nome = casellaNome.value;
    let cognome = casellaCognome.value;
    console.log(nome + " -- " + cognome);
})