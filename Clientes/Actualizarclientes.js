document.getElementById('clientForm').addEventListener('submit', function(e) {
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Actualizado exitosamente',
        showConfirmButton: false,
        timer: 1500
    });
});
