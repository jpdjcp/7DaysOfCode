let name;
let age;
let language;
let answer;

document.getElementById("day2").addEventListener('click', (event) => {
    event.preventDefault();
    askUserData();
    askIfLike();
});

function askUserData() {
    name = prompt("¿Cuál es tu nombre?");
    age = prompt("¿Cuántos años tienes?");
    language = prompt("¿Qué lenguaje de programación estás estudiando?");

    alert(`Hola ${name}, tienes ${age} años y ya estás aprendiendo ${language}!`);
}

function askIfLike() {
    answer = prompt(`¿Te gusta estudiar ${language}? Elija una opción: \n 1 - SÍ \n 2 - NO.`);

    if (answer == 1) {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    } else if (answer == 2) {
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    } else {
        alert("Debe ingresar 1 para SÍ o 2 para NO");
        askIfLike();
    }
}