let numeroUno = 1;
let stringUno = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

document.getElementById("day1").addEventListener('click', (event) => {
    event.preventDefault();
    alert("Presionar F12 para ver los resultados en la consola");
    // COMPARAR numeroUno y stringUno
    if (numeroUno == stringUno) {
      console.log('Las variables numeroUno y stringUno tienen el mismo valor, pero tipos diferentes');
    } else {
      console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
    }

    // COMPARAR numeroTreinta y stringTreinta
    if (numeroTreinta === stringTreinta) {
      console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
    } else {
      console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
    }

    // COMPARAR numeroDiez y stringDiez
    if (numeroDiez == stringDiez) {
      console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
    } else {
      console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
    }
});