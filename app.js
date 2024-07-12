// Declaraciones Variable Globales
let textoEncriptado;
let textoDesencriptado;
let estadoTexto;

let contenedorOutput = document.querySelector(".container_output");
let tarjetaResultado = document.querySelector(".card_output");
let contenedorMensaje = document.querySelector(".container_mensaje");
let imagen = document.getElementById("imagen");
let titulo = document.getElementById("titulo_mensaje");
let resultado = document.getElementById("texto_mensaje");
let btnCopiar = document.getElementById("boton_copiar");



//Funcione Principales 

function encriptacion() {


    let textoIngresado;

    // Capturar dato de entrada
    textoIngresado = document.getElementById('ingreso_texto_campo').value;

    if (textoIngresado != null){

        estadoTexto = 'Encriptado';

        // Atributos del container en el output
        
        //contenedorOutput = document.querySelector(".container_output");
        contenedorOutput.style.display = "flex";
        contenedorOutput.style.flexDirection = "column";
        contenedorOutput.style.justifyContent  = "flex-start";
        contenedorOutput.style.alignContent = "flex-start";
        contenedorOutput.style.alignItems = "flex-start";
        contenedorOutput.style.height = "100%";
        contenedorOutput.style.width = "30%";
        contenedorOutput.style.marginBottom = "40px"
        contenedorOutput.style.paddingBotton = "160px";

        // atributos en la tarjetaResultado
        //targetaResultado =  document.querySelector(".card_output");
        tarjetaResultado.style.display = "flex";
        tarjetaResultado.style.flex = "none";
        tarjetaResultado.style.flexDirection = "column";
        tarjetaResultado.style.alignItems = "center";
        tarjetaResultado.style.justifyContent = "space-between";
        tarjetaResultado.style.placeContent = "space-between";
        tarjetaResultado.style.alignContent = "center";
        tarjetaResultado.style.width = "400px";
        tarjetaResultado.style.maxWith = "400px"
        tarjetaResultado.style.maxHeight = "790px";
        tarjetaResultado.style.minWith = "400px"
        tarjetaResultado.style.minHeight = "790px"
        tarjetaResultado.style.height = "80%";
        tarjetaResultado.style.padding = "32px";

        //Contenedor texto Resultado
        //contenedorMensaje = document.querySelector(".container_mensaje");
        contenedorMensaje.style.display = "block";
        contenedorMensaje.style.overflowY  = "auto";
        contenedorMensaje.styleoverflowx = "hidden";
        contenedorMensaje.style.flexGrow = "1";
        contenedorMensaje.style.height = "90%";
        contenedorMensaje.style.with = "100%";
        contenedorMensaje.style.gap = "32px";
        /*containerMensaje.style.marginTop = "20px";
        containerMensaje.style.marginBottom = "20px";*/

        /*let containerBotonCopiar = document.querySelector("#container_boton_copiar");
        containerBotonCopiar.style.height = "5%"*/


        // Desaparecer imagen
        imagen.style.display = "none";

        // Cambiar el titulo del resultado
        titulo.innerHTML = `Mensaje ${estadoTexto}`
        titulo.style.fontSize = '1.875rem';
        titulo.style.color = "--color4";
        titulo.style.height = "5%";

        // texto a imprimir en la carta resultado
        resultado.innerHTML = textoIngresado;
        resultado.style.fontSize= "1.5rem";
        resultado.style.textAlign = "left";
        resultado.style.width = "100%";
        resultado.style.height = "90%";
        resultado.style.alignItems = "center";
        resultado.style.overflowX = "auto";
        resultado.style.wordBreak = "break-word" 


        // Boton Copiar
        btnCopiar.style.display = "block";
        btnCopiar.style.with= "70%";
        btnCopiar.style.color= "--color2";
        btnCopiar.style.with = "100%"

    } 

    

    // Limpiar area texto
    limpiarCampoTexto();
}

// otras funciones
function encriptarTexto() {}


function limpiarCampoTexto(){ document.querySelector("#ingreso_texto_campo").value = null;}