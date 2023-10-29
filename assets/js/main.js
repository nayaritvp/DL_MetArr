const listaTareas = [];
let id = 1;

const formulario = document.querySelector('#formulario')
const tarea = document.querySelector('#tarea');
const botonAgregar = document.querySelector('#agregar');
const tareas = document.querySelector('.tareas');

botonAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    const mistareas = tarea.value;
    console.log(mistareas); 

    const tareaNueva = { id, mistareas: mistareas, terminado: false };
    listaTareas.push(tareaNueva);
    id++; 
    tarea.value = "";

    console.log(tareaNueva); 
    console.log(listaTareas); 
}

