/**
 * Ciclo for of
 * recorremos un arreglo o cadena para sacar sus valores
 */

let frutas=["manzana","mandarina","piña","melocoton"];

for(const item of frutas){
    document.write("Fruta: " + item + "<br>");
}

/**
 * Ciclo for in
 * recorre arreglos y objetos para mostrar el indice de los valores
 */

let verduras = ["cebolla","pipan","chile","papa","ajo"];

for(const indice in verduras){
    document.write("Indice: " + indice + "<br>");
}

for(const indice in verduras){
    /**
    * verduras[indice] => sacamos el valor de cada elemento
    */
    document.write("Valor: " + verduras[indice] + "<br>");
    document.write("Indice: " + indice + "<br>");
}

let estudiante = {
    nombre: "Pepe Hernan",
    edad: 20,
    carnet: "PH2023",
    correo: "pepe@gmail.com"
}

for(const atributo in estudiante){
    document.write(atributo + ":" + estudiante[atributo] + "<br>");
    document.write(`key: ${atributo} value: ${estudiante[atributo]}`);
}
