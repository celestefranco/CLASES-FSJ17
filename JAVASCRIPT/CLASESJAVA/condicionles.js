/** 
 * if-else-if-else if else-switch
 * operador ternario
 */

//verificando si la persona es mayor de edad

let edad = prompt("Ingrese su edad"); //con el prompt solicitamos datos desde el navegador

if(edad >= 18){
    //imprimiento un mensaje en html
    document.write("Sos mayor de edad");
}else{
    document.write("Sos menor de edad :)");
}

//operador ternario => manera mas optimizada para trabajar el if else

//verificar si el numero esta en el rango entre 50 y 150
let numero = prompt("ingresa un numero");
//if = ? si la condicion la cumple mandamos un cierto de codigo
document.write(numero >=50 && numero<= 150 ? "estas en el rango" : "no estas en el rango");

if(numero >=50 && numero<= 150 ){
    document.write("estas en el rango");
}else{
    document.write("no estas en el rango)");  
}

//estructura de if-else if-else (multiples de condiciones)
let forma_pago = prompt("Ingrese la forma de pago");

if(forma_pago == "Tarjeta de Credito"){
    document.write("Pepe me esta pagando con tarjeta de credito");
}else if(forma_pago == "Bitcoin"){
    document.write("Pepe me esta pagando con tarjeta de bitcoin");
}else if(forma_pago == "Paypal"){
    document.write("Pepe me esta pagando con tarjeta de paypal");
}else {
    document.write("Pepe me esta pagando en efectivo");
}

//estructura switch
let estacion_anio = prompt("¿Que estacion del año te gusta mas?");
switch(estacion_anio){
    case "invierno":
        document.write("Te gusta el invierno");
        break; //si el caso se cumple se sale del switch para no evaluar los demas casos
    case "primavera":
        document.write("Te gusta el primavera");
        break;   
    case "otoño":
        document.write("Te gusta el otoño");
        break; 
    case "verano":
        document.write("Te gusta el verano");
        break; 
    default:
        document.write("Ingrese una estacion del año");
}