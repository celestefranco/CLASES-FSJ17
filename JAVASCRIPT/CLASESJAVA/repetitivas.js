/**
 * ciclo repetitivos: inicio (contador), condicionante (limite del ciclo), incremento/decremento
 */

//utilizando for

//empezar del 1 hasta el 20
for(let i=1; i<=20; i++){
    //1=1+1=2
    //2=2+1=3
    //i++ equivale i=i+1

    //el + hace referencia a que estamos concatenando
    // 5 + 2 = 52
    document.write("secuencia de numero:" + i + "<br>");
}

//trabajando con cadenas
let mensaje = "Hola Mundo!";
console.log(mensaje.length); //11

for(let j=0; j < mensaje.length; j++){
    document.write(mensaje[j] + "<br>");
    //mensaje[0]=> H
    //mensaje[1]=> 0
    /**
     * ...
     * //mensaje[10]=> !
     */
}

let arreglo= ["celular", "audifonos", "camara","mouse"];
console.log(arreglo.length); //4
for(let k=arreglo.length -1; k >= 0; k--){
    //k-- es equivalente k = k + 1
    document.write(arreglo[k] + " * ");
}

//ciclo while
let l = 50; //contador
while(l >= 30){    
   // l--; // l = l -1 // 50 - 1 = 49
    document.write("Numero Decrementado: " + l + "<br>");
    l--;
}

let arreglo_sum = [8,52,10,25];
//suma del arreglo con while

let m = 0;
let suma = 0;
while (m < arreglo_sum.length){
    /**
     * suma = 0 + 8 = 8
     * suma = 8 + 52 = 60
     * suma = 60 + 10 = 70
     * suma = 70 + 25 = 95
     */
    //suma = suma + arreglo_sum[m];
    suma += arreglo_sum[m];
    m++;
}

document.write("La suma del arreglo es:  " + suma);

/**
 * Do While
 */

let count = 23;

do{
    document.write("Contador  " + count);
    count++; //23 + 1 = 24
}while(count < 20);

