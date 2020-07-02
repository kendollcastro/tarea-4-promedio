let ListaNumeros = [];
let contador = false; 

while (!contador){
    let NumerosUsuario = prompt('Ingrese los números del promedio y para terminar la lista digite un espacio');

   //Para omitir un string
    if (!isNaN(parseFloat(NumerosUsuario))){
        ListaNumeros.push(NumerosUsuario);
    } else{
        if(NumerosUsuario == ' '){
            contador = true;
            console.log('Su lista digita es como resultado:', ListaNumeros);

            //Para calcular el promedio
            let suma = 0;
            let CantidadNumeros = ListaNumeros.length;
            for(let i = 0; i < ListaNumeros.length; i++){
                suma = suma + ListaNumeros[i];
            } 
            let promedio = suma / CantidadNumeros;
            console.log(`EL promedio es:${promedio}`);
            //Ordenar el array
            ListaNumeros.sort((a, b) => a - b);

            //Reflejar el numero mayor & Reflejar el numero menor
            let NumMayor = Math.max.apply(null, ListaNumeros);
            let NumMenor = Math.min.apply(null, ListaNumeros);
            console.log('EL numero mayor es:', NumMayor);
            console.log('EL numero menor es:', NumMenor);

            //Para calcular la mediana
            let MedianaALta = Math.ceil((ListaNumeros.length -1)/2);
            let MedianaBaja = Math.floor((ListaNumeros.length -1)/2);
            let mediana = (ListaNumeros[MedianaBaja] + ListaNumeros[MedianaALta]);console.log('La Mediana del promedio que digitó es de:', mediana);
        }
    }
}