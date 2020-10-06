let num;
let valor = window.prompt("Escribe P para ver los pares y I para ver los impares").toUpperCase();


while (valor !== "p" && valor !== "i") {
    valor = window.prompt("No es un valor correcto. Vuelve a elegir entre P o I").toLowerCase();


}

if (valor === "p") {
    num = 2;
} else if (valor === "i") {

    num = 1;
}

for (let i = 1; i < 51; i++) {

    console.log(num);
    num = num + 2;
}