let fruits = [];
let vegetables = [];
let meats = [];

document.getElementById("day5").addEventListener("click", (event) => {
    event.preventDefault();
    shopping();
});

function shopping() {
    let goShopping = prompt('¿Deseas agregar un alimento a tu lista de compras? \n Debes responder con "si" o "no"');
    
    if(goShopping === "si") {
        shopByCategory();
        shopping();
    } else if(goShopping === "no") {
        if (!emptyLists()) {
            let deleteItem = prompt('¿Deseas eliminar un alimento de tu lista de compras? \n Debes responder con "si" o "no"');
            if(deleteItem === "si") {
                deleteItemFromList();
            }
        }
        showLists();
    } else {
        alert('Debes responder con "si" o "no"');
        shopping();
    }
}

function shopByCategory() {
    let category = prompt('¿Qué tipo de alimento deseas agregar a tu lista de compras? \n 1 - Frutas, 2 - Verduras, 3 - Carnes');
    let item = prompt('¿Qué alimento deseas agregar a tu lista de compras?');

    if(category === "1") {
        fruits.push(item);
    } else if(category === "2") {
        vegetables.push(item);
    } else if(category === "3") {
        meats.push(item);
    } else {
        alert('Debes responder con un número válido');
        shopByCategory();
    }
}

function deleteItemFromList() {
    showLists();
    let category = prompt('¿De qué categoría deseas eliminar un alimento de tu lista de compras? \n 1 - Frutas, 2 - Verduras, 3 - Carnes');
    let item = prompt('¿Qué alimento deseas eliminar de tu lista de compras?');

    if(category === "1") {
        fruits = fruits.filter(fruit => fruit !== item);
    } else if(category === "2") {
        vegetables = vegetables.filter(vegetable => vegetable !== item);
    } else if(category === "3") {
        meats = meats.filter(meat => meat !== item);
    } else {
        alert('Debes responder con un número válido');
    }
}

function showLists() {
    alert('Lista de compras:\nFrutas: ' + fruits.join(", ")
                            + '\nVerduras: ' + vegetables.join(", ")
                            + '\nCarnes: ' + meats.join(", "));
}

function emptyLists() {
    return fruits.length === 0 && vegetables.length === 0 && meats.length === 0;
}