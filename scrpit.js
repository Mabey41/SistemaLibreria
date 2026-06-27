document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  if (!user || !pass || !role) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  Swal.fire({
  icon: 'success',
  title: 'Inicio de sesión exitoso',
  text: '¡Qué gusto tenerte de vuelta!',
  confirmButtonText: 'Continuar'
}).then(() => {
  window.location.href="Menu principal/menu.html";


});

});

