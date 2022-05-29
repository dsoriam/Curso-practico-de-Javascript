//Cuadrado

console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//console.log("los lados del cuadrado miden: " + lado + " cm");
//console.log("el perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("el area  del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//Triangulo

console.group("Triangulo")

function perimetroTriangulo (lado1 , lado2, base,){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base) ;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 


console.groupEnd();

//Circulo

console.group("Circulo");


const PI = Math.PI;
function diametroCirculo (radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    diametro * PI;
} 


function areaCirculo(radio){
    return (radio * radio) * PI;
}

function alturaIsosceles (lado1, lado2, base){
    if (lado1 == lado2 && lado1 != base)
    {
        const altura = Math.sqrt(Math.pow(lado1, 2) - ((Math.pow(base, 2))/4) );
        return altura
    }
    else{
        return "No es isosceles"
    }
}


console.groupEnd();


//Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

//TRIANGULO

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputlado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("inputlado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("inputbase");
    const base = input3.value;
    
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {

    const input3 = document.getElementById("inputbase");
    const base = input3.value;

    const input4 = document.getElementById("inputaltura");
    const altura = input4.value;
    
    const area = areaTriangulo(base, altura);
    alert(area);
}


function calcularAlturaIsosceles (){

    const input1 = document.getElementById("inputlado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("inputlado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("inputbase");
    const base = input3.value;

    const AltIsoceles = alturaIsosceles(lado1, lado2, base);
    alert(AltIsoceles);
}


//DESCUENTO DE PRODUCTO

function descuentoTotal (precio, descuento){
    
    if (precio > 0 && descuento >= 0)
    {
        const total = (precio*(100 - descuento)) / 100;
        return total;
    }
    else
    {
        return "El precio y el descuento debe ser mayor a 0";
    }
}






function calcularDescuento(){

    const coupons = [
        "promo1",
        "amigo",
        "cliente",
    ];

    const input1 = document.getElementById("InputPrecio");
    const precio = input1.value;

    const input2 = document.getElementById("InputDescuento");
    const descuento = input2.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const cupon = inputCoupon.value;

    let descuentot;

    switch(cupon) {
        case coupons[0]: // "promo1"
          descuentot = parseInt(descuento)  + parseInt(15);
        break;
        case coupons[1]: // "amigo"
          descuentot = parseInt(descuento)  + parseInt(25) ;
        break;
        case coupons[2]: // "cliente"
          descuentot = parseInt(descuento)  + parseInt(30);
        break;
      }

      if (!coupons.includes(cupon))
         {
        alert("El cupón " + cupon + "no es válido");
         }

    const desc = descuentoTotal(precio, descuentot);

    const resultado = document.getElementById("resultadoP");
    resultado.innerText = "El precio con descuento es: " + desc;
}


//multiplicar sin usar el asterisco
function multiplicar (a, b){
 
    

    if (a> 0 || b > 0) 
    {
        a = Math.abs(a);
        for (var x= 1; x <Math.abs(b); x+a)
        {
             a += a;
            //alert (a);
        }
    }
    alert(a);
}



//Promedio



function calcularMediaArismetrica (lista){
    
  /*   let sumaLista = 0;
    
    for(let i = 0; i< lista.length; i++){
        sumaLista = sumaLista + lista[i];
    } */
    
    const sumaLista = lista.reduce(
        function (valorAcumulado =0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        
    }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};


const lista1 =[
    100,
    200,
    300,
    40000000
];


const mitadLista1 = parseInt(lista1.length /2);

function esPar(numerito){
    if(numerito % 2 === 0 ){
        return true;
    }
    else{
        return false;
    }
}

let mediana;
if (esPar(lista1.length)){
    const elemento1=lista1[mitadLista1-1];
    const elemento2=lista1[mitadLista1];
    const promedioElemento1y2=calcularMediaArismetrica([elemento1,elemento2]);
    mediana=promedioElemento1y2;
    }
    else{
        mediana = (lista1 [mitadLista1]);
    };






