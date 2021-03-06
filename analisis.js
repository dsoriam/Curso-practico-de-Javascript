const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

////////////////////////////

const salariosColOrdenados = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//////////////////////////////

function esPar (numerito){
    if(numerito % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}

///////////////////////////////

function calcularMediaArismetrica (lista){
      
      const sumaLista = lista.reduce(
          function (valorAcumulado =0, nuevoElemento){
              return valorAcumulado + nuevoElemento;
          
      }
      );
  
      const promedioLista = sumaLista / lista.length;
      return promedioLista;
  };

  ///////////////////////////////

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
       const mediana = calcularMediaArismetrica([personitaMitad1,personitaMitad2]);
       return mediana;
    }
    else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

console.log(
    medianaSalarios(salariosColOrdenados)
);