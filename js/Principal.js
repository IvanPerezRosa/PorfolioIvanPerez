document.addEventListener("DOMContentLoaded", () => {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const confirmSendBtn = document.getElementById('confirmSendBtn');
    const contactForm = document.getElementById('contactForm');
    
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        alertPlaceholder.append(wrapper);
    };

    confirmSendBtn.addEventListener('click', () => {
        // Verificar si el formulario es válido
        if (!contactForm.checkValidity()) {
            contactForm.classList.add('was-validated');
            appendAlert('Por favor, completa todos los campos requeridos.', 'danger');
            return;
        }

        // Aquí iría la lógica para comprobar si el envío es correcto
        const envioCorrecto = true; // Cambia esto según tu lógica de verificación

        if (envioCorrecto) {
            appendAlert('¡Envío realizado correctamente!', 'success');
        } else {
            appendAlert('Hubo un error en el envío.', 'danger');
        }

        // Ocultar el modal después del envío
        const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
        modal.hide();
    });
});
