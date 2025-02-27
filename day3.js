let specialization = 0;
let frontFramework = 0;
let backFramework = 0;
let fullstack = 0;
let technologies = [];
let technology = '';
let answerDay3 = 'ok';

document.getElementById("day3").addEventListener('click', (event) => {
    event.preventDefault();
    playGame();
});

function playGame() {
    specialization = prompt("¿En qué quiere especializarse? \n 1 - Frontend \n 2 - Backend");

    if (specialization == 1) {
        alert("Ha elegido Frontend");

        frontFramework = prompt("¿Qué framework de frontend le gustaría aprender? \n 1 - React \n 2 - Vue");

        if (frontFramework == 1) {
            alert("Ha elegido React");
        } else if (frontFramework == 2) {
            alert("Ha elegido Vue");
        } else {
            alert("Debe ingresar 1 para React o 2 para Vue");
            playGame();
            return;
        }

    } else if (specialization == 2) {
        alert("Ha elegido Backend");
        backFramework = prompt("¿Qué framework de backend le gustaría aprender? \n 1 - C# \n 2 - Java");

        if (backFramework == 1) {
            alert("Ha elegido C#");
        } else if (backFramework == 2) {
            alert("Ha elegido Java");
        } else {
            alert("Debe ingresar 1 para C# o 2 para Java");
            playGame();
            return;
        }

    } else {
        alert("Debe ingresar 1 para Frontend o 2 para Backend");
        playGame();
        return;
    }

    fullstack = prompt("¿Le gustaría aprender Fullstack? \n 1 - SÍ \n 2 - NO");

    if (fullstack == 1) {
        alert("Ha elegido Fullstack");
    } else if (fullstack == 2) {
        alert("Ha elegido NO aprender Fullstack");
    } else {    
        alert("Debe ingresar 1 para SÍ o 2 para NO");
        playGame();
        return;
    }

    while(answerDay3 == 'ok') {
        let technology = prompt("¿Qué otra tecnología le gustaría aprender?");
        technologies.push(technology);
        answerDay3 = prompt("¿Desea agregar otra tecnología? Responda 'ok' para continuar o 'no' para finalizar");
    }

    alert(`Ha elegido las siguientes tecnologías: ${technologies.join(', ')}`);

    alert("¡Gracias por jugar!");
}