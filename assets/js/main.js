const listaTareas = [
    { id: 1, mistareas: 'Tarea 1', terminado: false },
    { id: 2, mistareas: 'Tarea 2', terminado: true },
    { id: 3, mistareas: 'Tarea 3', terminado: false }
];

let id = 4;

const formulario = document.querySelector('#formulario');
const tarea = document.querySelector('#tarea');
const botonAgregar = document.querySelector('#agregar');
const tareas = document.querySelector('.tareas');
const totalElement = document.querySelector('#totalCount');
const completadasElement = document.querySelector('#completadasCount');

botonAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    const mistareas = tarea.value;
    const tareaNueva = { id, mistareas: mistareas, terminado: false };
    listaTareas.push(tareaNueva);
    id++; 
    tarea.value = "";
    mostrarLista();
}

tareas.addEventListener("click", (event) => {
    const target = event.target;
    
    if (target.classList.contains("completada") || target.classList.contains("eliminar")) {
        const taskId = target.getAttribute("data-id");
        
        if (target.classList.contains("completada")) {
            tareaLista(parseInt(taskId));
        } else if (target.classList.contains("eliminar")) {
            borrarTarea(parseInt(taskId));
        }
    }
});

function mostrarLista() {
    tareas.innerHTML = "";
    listaTareas.forEach((tareaxhacer) => {
        const tareaCompleta = tareaxhacer.terminado ? 'completa' : '';

        const tareaHTML = `
            <div class="item-tarea">
                <p class="${tareaCompleta}" data-id="${tareaxhacer.id}">${tareaxhacer.id}</p>
                <h3 class="${tareaCompleta}" data-id="${tareaxhacer.id}">${tareaxhacer.mistareas}</h3>
                <div class="botones">
                    <button class="eliminar" data-id="${tareaxhacer.id}">✘</button>
                    <button class="completada" data-id="${tareaxhacer.id}">✔</button>
                </div>
            </div>
        `;

        tareas.innerHTML += tareaHTML;

        const pElement = tareas.querySelector(`p[data-id="${tareaxhacer.id}"]`);
        const completadaButton = tareas.querySelector(`button.completada[data-id="${tareaxhacer.id}"]`);
        const eliminarButton = tareas.querySelector(`button.eliminar[data-id="${tareaxhacer.id}"]`);

        pElement.addEventListener('click', () => tareaLista(tareaxhacer.id));
        completadaButton.addEventListener('click', () => tareaLista(tareaxhacer.id));
        eliminarButton.addEventListener('click', () => borrarTarea(tareaxhacer.id));
    });
}

mostrarLista();

function borrarTarea(id) {
    const index = listaTareas.findIndex((t) => t.id === id);
    if (index !== -1) {
        listaTareas.splice(index, 1);
        mostrarLista();
        actualizarConteo();
    }
}

function tareaLista(id) {
    const tarea = listaTareas.find((t) => t.id === id);
    if (tarea) {
        tarea.terminado = !tarea.terminado;
        mostrarLista();
        actualizarConteo();
    }
}


function actualizarConteo() {
    totalElement.textContent = listaTareas.length;
    const completadas = listaTareas.filter((tarea) => tarea.terminado).length;
    completadasElement.textContent = completadas; 
actualizarConteo();
}