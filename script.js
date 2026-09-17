console.log("Script detectado. Intentando acceder al DOM...");
const elemento = document.getElementById("contenido");

if (elemento) {
    console.log("exito. Texto encontrado: " + elemento.innerText);
} else {
    console.log("error");
}
