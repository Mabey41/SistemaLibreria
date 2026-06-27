let saleCounter = 1;

function padNumber(num, length) {
  return num.toString().padStart(length, '0');
}

function updateSaleId() {
  const saleIdInput = document.getElementById('saleId');
  saleIdInput.value = '#' + padNumber(saleCounter, 3) + ' (Generado automáticamente)';
}

function updateDate() {
  const saleDateInput = document.getElementById('saleDate');
  const today = new Date();
  const formattedDate = today.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  saleDateInput.value = '(Automático) ' + formattedDate;
}

// Productos y precios
const products = {
  "El principito Antonie de Saint Exupéry": 45000,
  "Cien años de soledad Grabiel García Marquez": 35000,
  "Rayuela Julio Cortázar": 30000,
};

function updateTotal() {
  const productInput = document.getElementById('product').value;
  const quantity = parseInt(document.getElementById('quantity').value) || 1;
  const totalInput = document.getElementById('total');
  let price = 0;

  if (productInput in products) {
    price = products[productInput];
  } else {
    for (const key in products) {
      if (key.toLowerCase().includes(productInput.toLowerCase())) {
        price = products[key];
        break;
      }
    }
  }
if (price > 0) {
  const total = price * quantity;
  const formattedTotal = new Intl.NumberFormat('es-CO').format(total); // Separador de miles
  totalInput.value = '(Automático) $' + formattedTotal;
} else {
  totalInput.value = '(Automático)';
}
}

document.getElementById('product').addEventListener('input', updateTotal);
document.getElementById('quantity').addEventListener('change', updateTotal);

document.getElementById('salesForm').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!document.getElementById('clientName').value.trim()) {
  Swal.fire({
    icon: 'warning',
    title: 'Campo vacío',
    text: 'Por favor ingrese el nombre del cliente.',
    confirmButtonText: 'Aceptar'
  });
  return;
}

  if (!document.getElementById('product').value.trim()) {
    alert('Por favor seleccione un producto.');
    return;
  }

  const data = {
    saleId: document.getElementById('saleId').value,
    clientName: document.getElementById('clientName').value,
    saleDate: document.getElementById('saleDate').value,
    paymentMethod: document.getElementById('paymentMethod').value,
    product: document.getElementById('product').value,
    quantity: document.getElementById('quantity').value,
    total: document.getElementById('total').value,
  };

  Swal.fire({
  icon: 'success',
  title: 'Venta registrada',
  html: `
    <b>ID:</b> ${data.saleId}<br>
    <b>Cliente:</b> ${data.clientName}<br>
    <b>Producto:</b> ${data.product}<br>
    <b>Cantidad:</b> ${data.quantity}<br>
    <b>Total:</b> ${data.total}
  `,
  confirmButtonText: 'Aceptar'
});


  saleCounter++;
  updateSaleId();
  this.reset();
  updateDate();
  document.getElementById('total').value = '(Automático)';
});

document.querySelector('.cancelar a').addEventListener('click', () => {
  document.getElementById('salesForm').reset();
  updateSaleId();
  updateDate();
  document.getElementById('total').value = '(Automático)';
});

window.onload = function() {
  updateSaleId();
  updateDate();
};



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
