
    function filtrarProductos() {
        const input = document.getElementById("searchInput");
        const filter = input.value.toLowerCase();
        const table = document.getElementById("productosTable");
        const tr = table.getElementsByTagName("tr");

        
        for (let i = 1; i < tr.length; i++) {
            tr[i].style.display = "none";
            const tdArray = tr[i].getElementsByTagName("td");
            for (let j = 0; j < tdArray.length; j++) {
                if (tdArray[j]) {
                    if (tdArray[j].innerText.toLowerCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                    }
                }
            }
        }
    }

function selectTab(event, tabName) {
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}


function mostrarFormulario(tipo) {
  document.querySelectorAll('.barra-opciones .opcion').forEach(btn => btn.classList.remove('activa'));
  event.target.classList.add('activa');
  
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
