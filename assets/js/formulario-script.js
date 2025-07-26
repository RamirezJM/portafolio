document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');
    const submitButton = document.getElementById('btn-submit');

    // Selecciona los campos y sus spans de error
    const nombreInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const mensajeInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');

    // --- Validación en tiempo real (opcional, pero mejora UX) ---
    nombreInput.addEventListener('input', () => validateField(nombreInput, nameError, 5, 'El nombre debe tener al menos 5 caracteres.'));
    emailInput.addEventListener('input', () => validateEmail(emailInput, emailError));
    mensajeInput.addEventListener('input', () => validateField(mensajeInput, messageError, 10, 'El mensaje debe tener al menos 10 caracteres.'));

    function validateField(inputElement, errorSpan, minLength, errorMessage) {
        if (inputElement.validity.tooShort) {
            errorSpan.textContent = errorMessage;
            inputElement.classList.add('invalid'); // Agrega una clase para estilos visuales
        } else if (inputElement.validity.valueMissing) {
            errorSpan.textContent = 'Este campo es obligatorio.';
            inputElement.classList.add('invalid');
        } else {
            errorSpan.textContent = '';
            inputElement.classList.remove('invalid');
        }
    }

    function validateEmail(inputElement, errorSpan) {
        if (inputElement.validity.typeMismatch) {
            errorSpan.textContent = 'Por favor, introduce una dirección de correo válida.';
            inputElement.classList.add('invalid');
        } else if (inputElement.validity.valueMissing) {
            errorSpan.textContent = 'Este campo es obligatorio.';
            inputElement.classList.add('invalid');
        } else {
            errorSpan.textContent = '';
            inputElement.classList.remove('invalid');
        }
    }


    // --- Validación al intentar enviar el formulario ---
    form.addEventListener('submit', async (event) => {
        // Ejecuta la validación de todos los campos justo antes del envío
        validateField(nombreInput, nameError, 5, 'El nombre debe tener al menos 5 caracteres.');
        validateEmail(emailInput, emailError);
        validateField(mensajeInput, messageError, 10, 'El mensaje debe tener al menos 10 caracteres.');

        // Si el formulario no es válido, detén el envío
        if (!form.checkValidity()) { // checkValidity() se basa en los atributos HTML5
            event.preventDefault(); // Evita el envío AJAX si hay errores de validación HTML5
            statusMessage.textContent = 'Por favor, corrige los errores en el formulario.';
            statusMessage.style.color = 'red';
            // Opcional: enfocar el primer campo con error
            const firstInvalid = form.querySelector(':invalid');
            if (firstInvalid) {
                firstInvalid.focus();
            }
            return; // Detiene la ejecución del resto del handler
        }

        event.preventDefault(); // Evita el envío por defecto (si no fue detenido ya)

        statusMessage.textContent = 'Enviando...';
        submitButton.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                statusMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
                statusMessage.style.color = 'green';
                form.reset();
                // Opcional: limpiar mensajes de error individuales
                nameError.textContent = '';
                emailError.textContent = '';
                messageError.textContent = '';
                nombreInput.classList.remove('invalid');
                emailInput.classList.remove('invalid');
                mensajeInput.classList.remove('invalid');

            } else {
                const data = await response.json();
                let errorMessageText = 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.';
                if (data.errors) {
                    errorMessageText = 'Error: ' + data.errors.map(error => error.message).join(', ');
                }
                statusMessage.textContent = errorMessageText;
                statusMessage.style.color = 'red';
            }
        } catch (error) {
            console.error('Error de red o inesperado:', error);
            statusMessage.textContent = 'No se pudo conectar con el servidor. Revisa tu conexión a internet.';
            statusMessage.style.color = 'red';
        } finally {
            submitButton.disabled = false;
            setTimeout(() => {
                statusMessage.textContent = '';
                statusMessage.style.color = '';
            }, 7000);
        }
    });
});