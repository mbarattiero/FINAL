//FUNCIONES//
/*
//DECLARARLA//
function miFuncion(){
    console.log("Uno");
    console.log("Dos");
}

//PARA QUE FUNCIONE DEBEMSO LLAMARLA-INVOCARLA//
miFuncion();

function retornar(){
    let a=2;
    let b=4;
    return a*b;
}
console.log(retornar());





//FUNCION CONTENIDA DENTRO DE VARIABLE//


//FUNCIONES DECLARADAS//

function retornarString(){
    console.log("Uno");
    console.log("Dos");
    return "La función devuelve un STRING de texto";
}

let devuelvevalor=retornarString();
console.log(devuelvevalor)



function saludar(nombre,edad){
    console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");

}

saludar ("Bel",38);



//FUNCIONES EXPRESADAS//
const funcionExpresada= function(){
    console.log("Hola, soy una función expresada");
}

funcionExpresada();


//FUNCIONES PARAMETROS Y ARGUMENTOS//
function saludar(parametro1,parametro2){
    console.log("Hola "+parametro1+" "+parametro2);
    }

    let parametro1="Chupitril";
    let parametro2="Barattiero";

    saludar (parametro1,parametro2);
    


    let resultado = 0;

    function sumar(numeroA,numeroB){
        resultado= numeroA+numeroB
    }

    function mostrar(mensaje){
        console.log(mensaje);
    }

    //otorgo valor especifico a los parametros en ESTA llamada a la funcion//
    sumar(6,3);
    mostrar (resultado);

    



    
    //SCOPE= VARIABLES GLOBALES Y LOCALES//

    let auto1= "Descapotable";
    var auto2="Camaro";
    const auto3="Ferrari";

    function pasear(){
        let otroAuto="Mercedes";
        console.log("Paseando en el "+otroAuto );
    }

    //console.log(otroAuto);

    pasear();



    let auto="Descapotable";
    function pasear(){
        var otroAuto="Mercedes";
       function lavar(){
           console.log("Enviar a lavar el "+otroAuto);
        }
        lavar()
        console.log("Paseando en el "+otroAuto);
    }

    pasear();
 
   

    let auto="Descapotable";
    function pasear(){
        let otroAuto="Mercedes";
        function lavar(){
            console.log("Enviar a lavar el "+otroAuto);

        }
        lavar();
        console.log("Paseando en el "+otroAuto);

    }

    pasear();
    

    //FUNCIONES ANONIMAS Y FLECHA//

    //ANONIMA-asegurarnos de mantener codigo ordenado y no ejecutemos la fncion antes ed declararla
    const multiplicarXdos= function(numero){
        console.log(numero*2)
    }

    multiplicarXdos(3)
    

    //FLECHA
    const multiplicarXdos=(numero)=>{
        console.log(numero*2)
    }

   
    const multiplicarXdos=numero=>{
        console.log(numero*2)
    }
         

    const multiplicarXdos=numero=>numero*2;
    
    const sumar=(numA,numB)=>numA+numB;

    const saludar=(nombre)=> {console.log ("Hola " + nombre)} */
const saludar = nombre => console.log("Hola " + nombre)

saludar("Bel")
