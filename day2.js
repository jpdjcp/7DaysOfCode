let name = prompt("¿Cuál es tu nombre?");
let age = prompt("¿Cuántos años tienes?");
let language = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${name}, tienes ${age} años y ya estás aprendiendo ${language}!`);

// ejercicio opcional
ask();

function ask() {
    let answer = prompt(`¿Te gusta estudiar ${language}? Responde con el número 1 para SÍ o 2 para NO.`);

    if (answer == 1) {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    } else if (answer == 2) {
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    } else {
        alert("Debe ingresar 1 para SÍ o 2 para NO");
        ask();
    }
}