// reportes
document.addEventListener('DOMContentLoaded', () => {
  const btnVentas = document.getElementById('btnVentas');
  const btnConsultas = document.getElementById('btnConsultas');
  const btnClientes = document.getElementById('btnClientes');
  const submenu = document.getElementById('submenuOpciones');
  const btnGenerar = document.getElementById('btnGenerarReportes');
  const btnVolver = document.getElementById('btnVolverMenu');

  const botones = [btnVentas, btnConsultas, btnClientes];

  // Cuando se pulsa cualquier botón: marcar activo, mostrar submenu
  botones.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // limpiar activos
      botones.forEach(b => b.classList.remove('active'));
      // marcar este
      btn.classList.add('active');

      // mostrar submenu
      submenu.setAttribute('aria-hidden', 'false');

     
    });
  });

  // Generar (demo)
  btnGenerar.addEventListener('click', () => {
    const periodo = document.getElementById('periodo').value;

const btnGenerarReportes = document.getElementById('btnGenerarReportes');
const selectPeriodo = document.getElementById('periodo');

btnGenerarReportes.addEventListener('click', (e) => {
  e.preventDefault();

  // Si no hay  opcion elegida avisar
  if (!selectPeriodo || !selectPeriodo.value) {
    Swal.fire({
      icon: 'warning',
      title: 'Selecciona un período',
      text: 'Por favor elige un período antes de generar el reporte.'
    });
    return;
  }

  // Texto legible de la opción seleccionada
  const label = selectPeriodo.selectedOptions[0].text.trim();

  // Mostrar "loading"
  Swal.fire({
    title: 'Generando reportes',
    html: `Generando reportes de <strong>${label}</strong>...`,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    showConfirmButton: false,
    background: '#f7fbff',
    color: '#003f52'
  });


  setTimeout(() => {
    // Cerrar loading y mostrar éxito
    Swal.close();
    Swal.fire({
      icon: 'success',
      title: 'Listo',
      html: `Reportes generados para <strong>${label}</strong>.<br><small>(El PDF se mostrara aqui una vez generado)</small>.`,
      timer: 1800,
      showConfirmButton: false,
      background: '#fffef6',
      color: '#0b4b3a'
    });
  }, 1400); // ajustar tiempo
});

    submenu.setAttribute('aria-hidden','true');
    botones.forEach(b => b.classList.remove('active'));
  });
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