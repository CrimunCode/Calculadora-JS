
//FUNCIÓN PARA AGREGAR LOS BOTONES PRESIONADOS EN LA PANTALLA
function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

//FUNCIÓN PARA BPRRAR LA PANTALLA
function borrar() {
    document.getElementById("pantalla").value = "";
}

//FUNCIÓN PARA CALCULAR
function calcular() {
    const valorPantalla = document.getElementById("pantalla").value;
    const resultado = eval(valorPantalla);
    document.getElementById("pantalla").value = resultado;
}