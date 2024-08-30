
//--creo un array con datos estaticos de la propiedad
var datosPropiedad = [
{tipo: "Casa", factor: 1.009},
{tipo: "P.H.", factor: 1.005},
{tipo: "Depto. Edificio", factor: 1.002},
{tipo: "Barrio Privado", factor: 1.019},
{tipo: "Oficina", factor: 1.039},
{tipo: "Local comercial", factor: 1.041},
{tipo: "Deposito Logistica", factor: 1.092},

];
  
//un array para datos de la ubicacion
var datosUbicacion = [
    {tipo: "CABA", factor: 1.013},
    {tipo: "Tandil", factor: 1.004},
    {tipo: "Costa Atlantica", factor: 1.029},
    {tipo: "Patagonia Argentina", factor: 1.000}
];

//funcion para meter datos de un array en el DOM (crea una etiqueta select con options)
function ingresar (array){
    //creo un elemento en el document
    var select = document.createElement("select");
    select.id = "seleccion";
    //lo meto en el body 
    let body = document.body.appendChild(select);
    //creo una variable options para guardar todos los option creados en el for
    let options = "";

    //recorro el array ingresado como parametro de la funcion
for(i=0; i<array.length; i++){
    const dato = array[i]; //en cada iteracion guardo un objeto dentro de dato
    let property = dato.tipo; //guardo en property el valor de la clave tipo del objeto dato
    let value = dato.factor; //guardo en value el valor de la clave factor del objeto dato
    //agrego dentro de options una etiqueta option por cada iteracion
    options += "<option id='propiedades' valor = " + value + " >" + property + "</option>"
}
//agrego dentro de la etiqueta select todos los option dentro de la variable options
select.innerHTML = options; 
}
//meto los datos de los arrays (datosPropiedad, datosUbicacion) en el DOM
ingresar(datosPropiedad);
ingresar(datosUbicacion);

//creo un input con sus respectivos argumentos para ingresar los datos de metro2

let input = document.createElement("input")
input.id = "metros2"
input.type = "number"; //los atributos de la etiqueta HTML se escriben con un punto
input.max = 400;
input.min = 20;
body = document.body.appendChild(input)
console.log(document);

//creo un boton

let boton = document.createElement("button");
boton.id = "enviar";
boton.innerText = "Cotizar"
body = document.body.appendChild(boton);


//para el valor que toma select que sea igual a propiedad.tipo mostrar propiedad.factor
//creo una funcion general
function recolectar (array){
    //guardo dentro de una variable el valor que toma el select
    let seleccionado = document.getElementById("seleccion");
        if (seleccionado.value !==""){
            for (const propiedad of array) {
                if(seleccionado.value === propiedad.tipo){
                    return propiedad.factor            
                }
            }
        }
}
//la utilizo para comparar con los datos de los arrays
let fmPropiedad = recolectar(datosPropiedad);
let fmUbicacion = recolectar(datosUbicacion);
//traigo el valor que toma el input de los metros cuadrados 
let metros2 = document.getElementById("metros2");
//costo por metro cuadrado valor estatico
var costom2 = 1.16;

//cuando hago clik en el boton cotizar
let clik = document.getElementById("enviar");
clik.onclick = function(){
//calculo la poliza
let poliza = ((fmPropiedad)*(fmUbicacion)*(metros2.value)*costom2);
let suPoliza = poliza.toFixed(2)
console.log("El costo aproximado de su poliza es:  $ " + suPoliza);

let mostrar = document.createElement("h2");
mostrar.innerText = ( `El valor de su poliza es:  $ ${suPoliza}` );
body = document.body.appendChild(mostrar);
}











