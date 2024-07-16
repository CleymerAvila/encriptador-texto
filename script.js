// Declaraciones Variable Globales
let textoEncriptado;
let textoDesencriptado;
let estadoTexto;
let textoIngresado;
let tarjetaResultado = document.querySelector(".card_output");
let contenedorMensaje = document.querySelector(".container_mensaje");
let imagen = document.getElementById("imagen");
let titulo = document.getElementById("titulo_mensaje");
let resultado = document.getElementById("texto_mensaje");
let btnCopiar = document.getElementById("boton_copiar");



//Funcione Principales 

function encriptacion() {

    // Capturar dato de entrada
    textoIngresado = document.getElementById('ingreso_texto_campo').value;

    if (textoIngresado != null){

        cardResultSetting();

        disappearImage();

        settingTitle('Encriptado');

        printTextResult(textoIngresado);

        showCoppyButton();
    } 

    // Limpiar area texto
    limpiarCampoTexto();
}



// otras funciones
function encriptarTexto() {}

// atributos en la tarjetaResultado
function cardResultSetting(){

    // Codigo para el desplazamiento de la barra dentro de la tarjeta
    tarjetaResultado.style.display = "flex";
    tarjetaResultado.style.flex = "none";
    tarjetaResultado.style.flexDirection = "column";
    tarjetaResultado.style.alignItems = "center";
    tarjetaResultado.style.justifyContent = "space-between";
    tarjetaResultado.style.placeContent = "space-between";
    
    //Contenedor texto Resultado
    contenedorMensaje.style.display = "block";
    contenedorMensaje.style.overflowY  = "auto";
    //contenedorMensaje.styleoverflowx = "hidden";
    contenedorMensaje.style.flexGrow = "1";
    contenedorMensaje.style.height = "100%";
    contenedorMensaje.style.with = "90%";
    //contenedorMensaje.style.gap = "32px";
}

// Cambiar el titulo del resultado
function settingTitle(estadoTexto){
    titulo.innerHTML = `Mensaje ${estadoTexto}`
    titulo.style.fontSize = '1.875rem';
    titulo.style.color = "--color4";
    titulo.style.height = "100%";
}

// texto a imprimir de resultado
function printTextResult(texto){
    resultado.innerHTML = textoIngresado;
    resultado.style.fontSize= "1.5rem";
    resultado.style.textAlign = "left";
    resultado.style.width = "100%";
    resultado.style.height = "100%";
    resultado.style.alignItems = "center";
    resultado.style.overflowX = "auto";
    resultado.style.wordBreak = "break-word"; 
}

// Desaparecer imagen
function disappearImage(){
    imagen.style.display = "none";
}

// Boton Copiar
function showCoppyButton(){
    btnCopiar.style.display = "block";
    btnCopiar.style.with= "70%";
    btnCopiar.style.color= "--color2";
    btnCopiar.style.with = "100%";
}

function limpiarCampoTexto(){ document.querySelector("#ingreso_texto_campo").value = null;}