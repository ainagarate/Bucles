let num = (window.prompt("Escribe un número de 3 cifras"));
let suma=0;

for(let i =0; i<num.length; i++){

suma+= parseInt(num.substring(i,i+1));

}

console.log(suma);