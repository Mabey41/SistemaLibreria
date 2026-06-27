// Fecha automática
function formatoFechaHoy() {
  const hoy = new Date();
  const año = hoy.getFullYear();
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const dia = String(hoy.getDate()).padStart(2, "0");
  return `${año}-${mes}-${dia}`;
}
document.getElementById('fecha').value = formatoFechaHoy();

// Guardar consulta
document.getElementById('guardar').addEventListener('click', () => {
    const cliente = document.getElementById('cliente').value.trim();
    const consulta = document.getElementById('consulta').value.trim();
    const fecha = document.getElementById('fecha').value;
    const estado = document.getElementById('estado').value;

    if (!cliente) {
        Swal.fire('Por favor ingrese el nombre del cliente.');
        return;
    }
    if (!consulta) {
        Swal.fire('Por favor ingrese la descripción de la consulta.');
        return;
    }
    if (!fecha) {
        Swal.fire('Por favor seleccione una fecha.');
        return;
    }
    if (!estado) {
        Swal.fire('Por favor seleccione el estado.');
        return;
    }

    // Mostrar "Consulta guardada" y limpiar el formulario después
    Swal.fire({
        icon: 'success',
        title: 'Consulta guardada',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        document.getElementById('cliente').value = '';
        document.getElementById('consulta').value = '';
        document.getElementById('fecha').value = formatoFechaHoy();
        document.getElementById('estado').value = '';
    });
});

// Cancelar: limpia el formulario
document.getElementById('cancelar').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cliente').value = '';
    document.getElementById('consulta').value = '';
    document.getElementById('fecha').value = formatoFechaHoy();
    document.getElementById('estado').value = '';
});



// Mostrar u ocultar el menú lateral
document.querySelector(".menu-icon").addEventListener("click", function() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");

const menuIcon = document.querySelector(".menu-icon");

document.addEventListener("click", function(event) {
  // Si el clic nO es en el menú ni en el ícono se cierra
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove("active");
  }
});

// funcionalidad del clic en el ícono
menuIcon.addEventListener("click", function(event) {
  sidebar.classList.toggle("active");
  event.stopPropagation(); 
});

})
