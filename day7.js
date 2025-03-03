let num1 = 0;
let num2 = 0;
let result = 0;
let operation = '';

day7.addEventListener('click', (event) => {
    calculator();
});

function calculator() {
    selectOperation();
    if (operation === '5') {
        alert('Hasta la próxima');
        return;
    }
    num1 = prompt('Calculadora:\nIngrese un número');
    num2 = prompt('Calculadora:\nIngrese otro número');
    calculate();
}

function selectOperation() {
    while (operation < '1' || operation > '5') {
        operation = prompt('Calculadora:\nSeleccione una operación:\n1 - Suma\n2 - Resta\n3 - Multiplicación\n4 - División\n5 - Salir');
    }
}

function calculate() {
    if(operation === '1') {
        add();
    } else if(operation === '2') {
        subtract();
    } else if(operation === '3') {
        multiply();
    } else {
        divide();
    }
    alert('El resultado de la operación es: ' + result);
}

function add() {
    result = parseInt(num1) + parseInt(num2);
}

function subtract() {
    result = parseInt(num1) - parseInt(num2);
}

function multiply() {
    result = parseInt(num1) * parseInt(num2);
}

function divide() {
    result = parseInt(num1) / parseInt(num2);
} 