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