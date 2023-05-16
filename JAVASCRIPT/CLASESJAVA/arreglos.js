/**
 * ciclo forEach: itera solo arreglos
 */

let notas_estudiantiles = [8.5,9,5,6.3,7,10,4.2,6.9];

/**
 * sacar cuantas personas tuvieron mas de 7
 * y cuantas personas tuvieron menos de 7
 */

let cont_pasaron = 0;
let cont_no_pasaron = 0;

notas_estudiantiles.forEach(nota => {
    if(nota >= 7){
        cont_pasaron++;
    }else{
        cont_no_pasaron
    }
});

document.write("Total de estudiantes que pasaron fueron: " + cont_pasaron + "<br>");
document.write("Total de estudiantes que reprobaron fueron: " + cont_no_pasaron);

let notas_estudiantil = [8.5,9,5,6.3,7,10,4.2,6.9,8.2,2.2,5];

/**
 * sacar cuantas personas tuvieron mas de 7
 * scar el numero que se pueden salvar si tiene mas de 5 a menor 
 * igual a 6.5
 * sacar cuantas personas tuvieron menos de 5
 */

let cont_pasar = 0;
let cont_no_pasar = 0;
let cont_posibles = 0;

notas_estudiantil.forEach(nota => {
    if(nota >= 7){
        cont_pasar++;
    }else if(nota >= 5 && nota <= 6.9){
        cont_posibles++;
    }else{
        cont_no_pasar++;
    }
});

document.write("Total de estudiantes que pasaron fueron " + cont_pasar + "<br>");
document.write("Total de estudiantes que pueden estar en recuperacion fueron " + cont_posibles + "<br>");
document.write("Total de estudiantes que reprobaron fueron " + cont_no_pasar);

/**
 * map() => itera elementos de un arreglo
 * - podemos retornar un nuevo arreglo
 * - podemos actualizar el arreglo
 * 
 * filter() => itera los elementos del arreglo y manda uno nuevo
 * en base a una condicion
 */

let array_students = [
    {
        nombre: "pepe hernan",
        edad: 20,
        correo: "pepe@gmail.com",
        direccion: "santa tecla"
    },
    {
        nombre: "maria huezo",
        edad: 17,
        correo: "maria@gmail.com",
        direccion: "santa tecla"
    },
    {
        nombre: "carolina chacon",
        edad: 23,
        correo: "carolina@gmail.com",
        direccion: "san salvador"
    },
    {
        nombre: "kevin jimenez",
        edad: 25,
        correo: "kevin@gmail.com",
        direccion: "tejutla"
    }
]
/**
 * 2 parametros => indice, valor
 */
array_students.map((value, index) => {
    document.write(value.nombre + "<br>");
    document.write(value.edad + "<br>");
})

document.write("<h1>Actualizando la edad</h1>")
array_students.map(item => {
    document.write(item.edad + 1 + "<br>");
})

console.table(array_students);

let new_array = array_students.map(item => {
    item.edad += 1;
    return item;
})
console.table(new_array);
console.log(new_array);

/** filtrado de datos */
document.write("<h1>Filtrado de datos</h1>")

/** filter => maneja una condicion */
let new_filter = array_students.filter(student = student.edad >= 20);
console.table(new_filter);

let new_filter_direction = array_students.filter(student => student.direccion == "san Salvador");
console.table(new_filter_direction);

/**
 * some() => devuelve true o false, si un elemento del arreglo cumple
 * con la condicion devuelve true
 * 
 * every()= devuelve true o false,todos los elementos del arreglo tiene que 
 * cumplir la condicion para que devuelva true
 */

let arreglo_animal = [
    {
        codigo: 1,
        nombre: "pancho",
        raza: "pastor aleman",
        edad: 5
    },
    {
        codigo: 2,
        nombre: "max",
        raza: "chao chao",
        edad: 3
    },
    {
        codigo: 3,
        nombre: "pelusa",
        raza: "angora",
        edad: 6
    },
    {
        codigo: 4,
        nombre: "oso",
        raza: "pitbull",
        edad: 2
    }
]

//verificar si todos los animales tienen mas de 4 años

let booleano = arreglo_animal.every((value) => value.edad >= 4);
document.write(booleano);//false

let booleano2 = arreglo_animal.every((item) <= 6);
document.write(booleano2);//true

//verificar si el animal existe en el arreglo en base a su codigo
let codigo = arreglo_animal.some((item) => item.codigo == 3);
document.write(codigo); //true

/** 
 * push() => agregar un elemento al final del arreglo
 * 
 * pop() => elimina el ultimo elemento del arreglo
 */

let datos = [25,100,250,true,"z","c"];
datos.push("d",36.2,false);
console.table(datos);

datos.pop();
console.table(datos);

let ultimo = datos.pop();
console.log(ultimo);
console.table(datos);

//splice() => eliminar el indice que uno quiere
