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
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 


console.groupEnd();

//Circulo

console.group("Circulo")


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