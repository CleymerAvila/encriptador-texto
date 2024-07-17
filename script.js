// Declaraciones Variable Globales
let textoEncriptado;
let textoDesencriptado;
let estadoTexto;
let textoIngresado;
const tarjetaResultado = document.querySelector(".card_output");
const contenedorMensaje = document.querySelector(".container_mensaje");
const imagen = document.getElementById("imagen");
const titulo = document.getElementById("titulo_mensaje");
const resultado = document.getElementById("texto_mensaje");
const btnCopiar = document.getElementById("boton_copiar");
const clavesEncriptado = {
    'e': "enter",
    'i': "imes",
    'a': "ai",
    'o': "ober",
    'u': "ufat",
};
const clavesDesencriptado = {
    'enter': "e",
    "imes": "i",
    "ai": "a",  
    "ober": "o",
    "ufat": "u",
}
//Funcione Principales 

function encriptacion() {

    // Capturar dato de entrada
    textoIngresado = document.getElementById('ingreso_texto_campo').value;
    textoIngresado = textoIngresado.trim();

    if (textoIngresado != '') {

        if(!validarTexto(textoIngresado)) {
            alert("El texto Ingresado no es valido, revise nuevamente");
        } else {
            textoEncriptado = transformarTexto(textoIngresado, clavesEncriptado);
            cardResultSetting();
            disappearImage();
            settingTitle('Encriptado');
            
            //console.log(textoEncriptado);
            printTextResult(textoEncriptado);
            showCoppyButton();
        }

    } else {
        cardResultReset();
    }

    // Limpiar area texto
    limpiarCampoTexto();
}


function desencriptacion() {
    // Capturar dato de entrada
    textoIngresado = document.getElementById('ingreso_texto_campo').value;
    textoIngresado = textoIngresado.trim();

    if (textoIngresado != '') {

        if (!validarTexto(textoIngresado)){
            alert("El texto Ingresado no es valido, revise nuevamente");
        } else {
            textoDesencriptado = transformarTexto(textoIngresado, clavesDesencriptado);

            if (textoIngresado != textoDesencriptado){
                cardResultSetting();
                disappearImage();
                settingTitle('Desencriptado');
                
                //console.log(textoEncriptado);
                printTextResult(textoDesencriptado);
                showCoppyButton();
            } else {
                alert("El texto no se puede desencriptar ya que no esta encriptado");
            }
        }

    } else {
        cardResultReset();
    }

    // Limpiar area texto
    limpiarCampoTexto();
}

function transformarTexto(texto, reemplazos) {
    let textoTransformado = texto;
    
    for (let [original, reemplazo] of Object.entries(reemplazos)) {
      // Escapar caracteres especiales en la expresión regular
      const regex = new RegExp(original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      textoTransformado = textoTransformado.replace(regex, reemplazo);
    }
    
    return textoTransformado;
}

function copiarTexto() {
    // Obtén el texto del párrafo
    const parrafo = document.getElementById('texto_mensaje');
    const texto = parrafo.innerText;

    // Usa la API del Portapapeles para copiar el texto
    navigator.clipboard.writeText(texto).then(() => {
        cardResultReset();
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });

    console.log("se copió");
}


function validarTexto(texto){
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}
// otras funciones

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


function cardResultReset(){
    tarjetaResultado.style.display="block";
    tarjetaResultado.style.flex = "none";
    tarjetaResultado.style.alignItems="center";
    tarjetaResultado.style.justifyContent= "center";
    tarjetaResultado.style.placeContent= "center";
    
    contenedorMensaje.style.display = "flex";
    contenedorMensaje.style.flexDirection= "column";
    contenedorMensaje.style.justifyContent = "center";
    contenedorMensaje.style.alignItems = "center";
    contenedorMensaje.style.textAlign="center";

    showImage();
    titleReset();
    containerMensajeReset();
    textReset();
    hideCoppyButton();
    

}
// Cambiar el titulo del resultado
function settingTitle(estadoTexto){
    titulo.innerHTML = `Mensaje ${estadoTexto}`
    titulo.style.fontSize = '1.875rem';
    titulo.style.color = "--color4";
    titulo.style.height = "100%";
}

function titleReset(){
    titulo.innerHTML = "Ningún mensaje fue encontrado";
    titulo.style.fontSize= "36px";
    titulo.style.fontWeight = "700";
    titulo.style.marginTop = "1rem";
    titulo.style.fontFamily = "Inter";
    titulo.style.textAlign = "center";
    titulo.style.width = "100%";
    titulo.style.height= "100%";
}

function textReset(){
    resultado.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
    resultado.style.fontSize= "1rem";
    resultado.style.fontWeight = "400";
    resultado.style.fontFamily= "Inter";
    resultado.style.marginTop = "1rem";
    resultado.style.textAlign = "center";
    resultado.style.color = "--color3";
    resultado.style.width = "80%";
    resultado.style.height = "70%";
}

function containerMensajeReset(){
    contenedorMensaje.style.display = "flex";
    contenedorMensaje.style.flexDirection = "column";
    contenedorMensaje.style.alignItems = "center";
    contenedorMensaje.style.textAlign="center";
    contenedorMensaje.style.width= "100%";
}
// texto a imprimir de resultado
function printTextResult(texto){
    resultado.innerHTML = texto;
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

function showImage(){
    imagen.style.display="block";
}
// Boton Copiar
function showCoppyButton(){
    btnCopiar.style.display = "block";
    btnCopiar.style.with= "70%";
    btnCopiar.style.color= "--color2";
    btnCopiar.style.with = "100%";
}

function hideCoppyButton(){
    btnCopiar.style.display = "none";
}

function limpiarCampoTexto(){ document.querySelector("#ingreso_texto_campo").value = null;}