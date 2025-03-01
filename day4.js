// let secretNumber = Math.floor(Math.random() * (max - min + 1) + mínimo);
let secretNumber = Math.floor(Math.random() * 10) + 1;
let tries = 3;
let guess = 0;

document.getElementById("day4").addEventListener('click', (event) => {
    // event.preventDefault();
    playGuessSecretNumber();
});

function playGuessSecretNumber() {
    while (tries > 0) {
        guess = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

        if (guess === secretNumber) {
           alert("¡Adivinaste! El número secreto es " + secretNumber);
           break;
        } else {
            tries--;
            alert("Número incorrecto. Te quedan " + tries + " intentos.");
        }
    }

    alert("El número secreto era " + secretNumber);
}