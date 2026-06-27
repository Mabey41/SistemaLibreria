// Activar efecto de selección de botón
const buttons = document.querySelectorAll('.menu-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

document.getElementById('clientes').onclick = function() {
    window.location.href = '../Clientes/Clientes.html';
};

document.getElementById('productos').onclick = function() {
    window.location.href = '../Productos/productos.html';
};

document.getElementById('ventas').onclick = function() {
    window.location.href = '../Ventas/ventas.html';
};

document.getElementById('reportes').onclick = function() {
    window.location.href = '../Reportes/reportes.html';
};

document.getElementById('consultas').onclick = function() {
    window.location.href = '../Consultas/consultas.html';
};

document.getElementById('transacciones').onclick = function() {
    window.location.href = '../Transacciones/transacciones.html';
};

