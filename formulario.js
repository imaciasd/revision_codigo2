var formulario = document.querySelector(".formulario");

formulario.onsubmit = function(e) {
  e.preventDefault();

  var nombre = formulario.elements.name;
  var edad = formulario.elements.age;
  var nacionalidad = formulario.elements.nationality;

  var nombreValor = nombre.value;
  var edadValor = edad.value;

  var nacionalidades = nacionalidad.selectedIndex;
  var nacionalidadValor = nacionalidad.options[nacionalidades].value;
  console.log(nombreValor, edadValor);
  console.log(nacionalidadValor);

  if (nombreValor.length === 0) {
    nombre.classList.add("error");
  }
  if (edadValor < 18 || edadValor > 120) {
    edad.classList.add("error");
  }

  if (nombreValor.length > 0 && (edadValor >= 18 && edadValor <= 120)) {
    agregarInvitado(nombreValor, edadValor, nacionalidadValor);
  }
};

var lista = document.getElementById("lista-de-invitados");

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanDescripcion = document.createElement("span");
    var inputValor = document.createElement("input");
    var espacio = document.createElement("br");
    spanDescripcion.textContent = descripcion + ": ";
    inputValor.value = valor;
    elementoLista.appendChild(spanDescripcion);
    elementoLista.appendChild(inputValor);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    elementoLista.remove();
  };
}