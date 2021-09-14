function tienda(){
let opcion = Number(prompt("                     -----Tienda-----                                                                                   Selecciona una opcion                                                                                                                                          1.-Papas --$ 10                                                                                                                                                 2.-Chetos --$8                                                                                                                                                 3.-Refresco --14                                                                                                                                    ¿Que producto gustaria elegir?"));

}
switch(opcion){
    case 1:
        Papas(10);
        break;

    case 2:
        Chetos(8);
        break;

    case 3:
        Refresco(14);
        break;

        default:
            alert("Por favor ingrese un producto de la lista ");
            break;
}


// Funciones para cada producto.


function Papas(){ //Papas
    let papas = 10 ;
    cantidad = Number(prompt("¿Cuantas bolsas de papas quiere?"));

    if(cantidad > 0){
        alert("LLevaria el total de: $ " + (papas * cantidad));
    }else{
        alert("Error... No se aceptan cantidades negativas");
        alert("Intentalo de Nuevo");
         
    }
    

}


function Chetos(){ //Chetos
    let chetos = 8;
    cantidad = Number(prompt("¿Cuantas bolsas de chetos quiere?"));

    if(cantidad > 0){
        alert("LLevaria el total de: $ " + (chetos * cantidad));
    }else{
        alert("Error... No se aceptan cantidades negativas");
        alert("Intentalo de Nuevo");
        
    }
}


function Refresco(){ //Refresco
    let Refresco = 14;
    cantidad = Number(prompt("¿Cuantos refrescos quiere?"));

    if(cantidad > 0){
        alert("LLevaria el total de: $ " + (Refresco * cantidad));
    }else{
        alert("Error... No se aceptan cantidades negativas");
        alert("Intentalo de Nuevo");
        
    }
}




let retorno = Number (prompt("¿Desea seleccionar algun otro producto?                                                  seleccione 1 o   2                                                                                                1.-si                                                    2.-no"));

switch(retorno){
    case 1:
        si();
        break;

    case 2:
        no();
        break;
}

function si() {
    if (si = 1) {
        return tienda();
    }
}

function no(){
    if (no = 2) {
        alert ("Gracias por su compra");
    }
   
}

