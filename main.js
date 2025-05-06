// Tu JavaScript va aquí



function agregarTarea() {
    
    //obtenemos el valor del campo tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //validamos que el valor no sea vacio
    if (nuevaTareaTexto === "") {
        alert("Porfavor, Ingrese una tarea");
        return;
    }

    //crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";


    //CREAR BOTON ELIMINAR
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = " Eliminar";
    botonEliminar.onclick = function(){nuevaTarea.remove();}

    //Agregar el boton de eliminar el elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto
    document.getElementById("nuevaTarea"). value = "";


}
