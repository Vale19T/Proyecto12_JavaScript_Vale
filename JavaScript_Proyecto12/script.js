//Se hace el querySelector ubicando el contenedor principal del html, con un evenListener para el click en cualquiera de las barras
document.querySelector(".menuBarra").addEventListener("click", animacionMenu);

//Llamar una funcion especial, en donde el evenListener esta pendiente del clcik trayendo una solucion
let barra1 = document.querySelector(".fila1");
let barra2 = document.querySelector(".fila2");
let barra3 = document.querySelector(".fila3");

//Crear y llamar la funcion del evenListener "animacionMenu"
//Activar los estilos
function animacionMenu() {
    //Al llamar el toogle queda en ON, sino esta en OFF
    barra1.classList.toggle("fila1Animacion");
    barra3.classList.toggle("fila3Animacion");
    barra2.classList.toggle("fila2Animacion");
}