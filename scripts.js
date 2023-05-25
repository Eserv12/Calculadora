// Función para agregar caracteres al display de la calculadora
function agregarAlDisplay(valor) {
    document.getElementById('display').value += valor;
}

  // Función para calcular el resultado de la operación
function calcularResultado() {
    const valorDisplay = document.getElementById('display').value;
    const resultado = eval(valorDisplay);
    document.getElementById('display').value = resultado;

}
// Función para borrar el ultimo caracter del display de la calculadora
function borrarUltimoCaracter() {
  const display = document.getElementById('display');
  const valorActual = display.value;
  const nuevoValor = valorActual.slice(0, -1);
  display.value = nuevoValor;
}
   // Función para limpiar el display de la calculadora
function limpiarDisplay() {
    document.getElementById('display').value = '';
}