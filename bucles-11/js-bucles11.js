let num;
let numInvertido = "";

do {

    num = window.prompt("Escribe un número");
    let x = num.length;


    while (x >= 0) {

        numInvertido += num.substring(x - 1, x);
        x--;
    }

    console.log(numInvertido);
    numInvertido = "";
} while (num !== 0);


