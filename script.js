console.log("Script detectado.");
const elemento = document.getElementById("contenido");

llamarA();


if (elemento) {
    console.log("exito. Texto encontrado: " + elemento.innerText);
} else {
    console.log("error");
}


