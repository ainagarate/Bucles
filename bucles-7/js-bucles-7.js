

let suma = 0;
let num;

let sumanum=0;

do {

    num = parseInt(window.prompt("Escribe un número"));

    if (num < 0) {

        window.alert("Se ignorarán los valores negativos");
    } else {
        sumanum += num;

    }


} while (num !== 0);