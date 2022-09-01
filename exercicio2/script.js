const arrayNumero = [3,4,8,10,11]
const arrayString = ["bola","banana","carro", "abacaxi"]
const arrayMista = ["bicicleta",5,false]
//Imprima a quantidade de itens de cada array (utilize um console.log() 
//para cada impressão);
console.log (arrayNumero.length)
console.log (arrayString.length)
console.log (arrayMista.length)
//Imprima o primeiro item do primeiro array, o segundo item do segundo array, 
//e o terceiro item do terceiro array;
console.log (arrayNumero[0])
console.log (arrayString[1])
console.log (arrayMista[2])
//Imprima uma informação booleana verdadeira sobre a inclusão de um item do primeiro array, e uma informação 
//booleana falsa sobre a inclusão de um item ao terceiro array. 
//Isto é, um includes() verdadeiro, e outro falso.
console.log (`${arrayNumero.includes(8)}`)
console.log (`${arrayMista.includes("moto")}`)