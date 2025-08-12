let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; // Se crea una caja vacía del array
let numeroMaximo = 10;

console.log(numeroSecreto);

// Creación de una función genérica
// Lo que se encuentra dentro del parentesis se le llama PARÁMETRO (en la siguiente función de definiendo dos)
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
  // Como buena práctica siempre devolveer el return
}

// Declaramos la función & en html la ejecutamos (la estamos llamada)
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  // 'typeof', nos va permitir el tipo de dato/valor que nos va a retornar

  // Condición Boolean (true o false)
  if (numeroDeUsuario === numeroSecreto) {
    // El triple igual(===) lo debemos usar cuando ambos valores son del mismo tipo de valor, y brindarle así al doble validación de la condición
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    ); // ${intentos === 1 ? 'vez' : 'veces'}` ---> Traducción: Si  'intentos' es igual a 1, el signo ternario ('?'), se traduce a if (si); y el signo de (':') complementario, es decir otra forma de decir 'else'. Va a comparar. Terminaría siendo que si los intentos es igual a 1 será = 'vez' y si aumenta de uno será 'veces'.
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // El ususario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor.");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor.");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
  /* 
  Forma larga:
  let valorCaja = document.querySelector('#valorUsuario')
  valorCaja.value = ''
  */
}

function condicionesIniciales() {
  // Llama a la función, se lee de arriba hacia abajo
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  // Generar número aleatorio; se trae una nueva invocación
  numeroSecreto = generarNumeroSecreto();
  // Inicializar el número de intentos
  intentos = 1;
}

function generarNumeroSecreto() {
  // Math.random() ---> Retorna un número decimal
  // Luego, se llama al método ' Math.floor ' para que nos retorne/brinde solo el número decimal
  // Finalizamos con el ' +1 ' ---> Para ir de 1 a 10
  // Nota: Se multiplica x le número máximo a desear llegar
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  // Si ya sortemos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles')
  } else {
    // Si el número generado esta incluido en la lista (hacemos una condición si no pues otra)=
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function reiniciarJuego() {
  // Limpiar la caja, es decir, llamamos a la función ya hecha
  limpiarCaja();
  // Indicar mensaje de intervalo de números
  // Generar número aleatorio; se trae una nueva invocación
  // Inicializar el número de intentos
  condicionesIniciales();
  // Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
