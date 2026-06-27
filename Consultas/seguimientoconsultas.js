// Filtra la tabla por nombre de cliente o descripción
function filtrarTabla() {
  let input = document.getElementById('buscar').value.toLowerCase();
  let filas = document.querySelectorAll('#tabla-cuerpo tr');
  filas.forEach(fila => {
    let cliente = fila.cells[0].textContent.toLowerCase();
    let descripcion = fila.cells[1].textContent.toLowerCase();
    if (cliente.includes(input) || descripcion.includes(input)) {
      fila.style.display = '';
    } else {
      fila.style.display = 'none';
    }
  });
}

function abrirModalRespuesta(nombre, texto) {
  Swal.fire({
    title: `Respuesta a ${nombre}`,
    text: texto,
    icon: 'info',
    confirmButtonText: 'Aceptar'
  });
}



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
