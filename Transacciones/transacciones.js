const searchInput = document.getElementById('searchInput');
const table = document.getElementById('transactionsTable').getElementsByTagName('tbody')[0];

searchInput.addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const rows = table.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    let match = false;

    for (let j = 0; j < cells.length; j++) {
      if (cells[j].textContent.toLowerCase().includes(filter)) {
        match = true;
        break;
      }
    }

    rows[i].style.display = match ? '' : 'none';
  }
});

function volverAlMenu() {
  window.location.href = "../Menu principal/menu.html";
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
});