
const form = document.getElementById('clientForm');

// Evento único de envío
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Captura de datos (solo demostrativa)
  const data = {
    nombres: form.nombres.value.trim(),
    apellidos: form.apellidos.value.trim(),
    documento: form.documento.value,
    noDocumento: form.noDocumento.value.trim(),
    telefono: form.telefono.value.trim(),
    fechaRegistro: form.fechaRegistro.value
  };

  // Mostrar alerta de éxito con SweetAlert
  Swal.fire({
    icon: 'success',
    title: '¡Guardado exitosamente!',
    text: 'El cliente se ha registrado correctamente.',
    confirmButtonColor: '#ff6347',
    timer: 2500,
    showConfirmButton: false
  });

  // Reiniciar formulario
  form.reset();
  form.documento.selectedIndex = 0;
});




// Mostrar u ocultar el menú lateral
document.querySelector(".menu-icon").addEventListener("click", function() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");

const menuIcon = document.querySelector(".menu-icon");

document.addEventListener("click", function(event) {
  // Si el clic NO es en el menú ni en el ícono, cerramos el sidebar
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove("active");
  }
});

// Esto mantiene la funcionalidad del clic en el ícono
menuIcon.addEventListener("click", function(event) {
  sidebar.classList.toggle("active");
  event.stopPropagation(); // Evita que el clic también cierre inmediatamente el menú
});





})