const amigosInstragram = ["Lucía", "Carlos", "María", "Alexandra", "Pepe"]

console.log(amigosInstragram);
document.querySelector('button').innerHTML = `${amigosInstragram} `

//la manera más laboriosa de acceder a cada elemento del array sería así:
console.log(amigosInstragram[0]);//veré por consola a Lucía
console.log(amigosInstragram[1]);//veré por consola a Carlos
console.log(amigosInstragram[2]);//veré por consola a María


//Para hacerlo de mejor manera :
//1. debemos conocer la longitud del array:
console.log(amigosInstragram.length); //hay 5 elementos del array
console.log("-----------");

//2. Este ejemplo tiene pocos elementos y los podemos contar manualmente. Pero imaginemos que debemos saber la longitud de un array de miles de elementos... sería casi imposible. Al tener la longitud de los elementos del array si que podemos iterarlo o recorrer el array con un for.

//Un for() es una función que se compone de 3 partes: La 1º parte es el valor donde inicia, en la 2ª parte se indica cuantas veces quiero que se recorra el for, y la 3ª parte es para indicar en cuanto se va a incrementar.

for(let i=0; i<amigosInstragram.length; i++){
    //console.table(i)//va imprimiendo la posición dinamica
    console.log(amigosInstragram[i]);//se  ejecutará el array con los nombres de las pocisiones del array
}
