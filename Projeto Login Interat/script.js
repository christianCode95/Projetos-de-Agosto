const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formMessage = document.getElementById('formMessage');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    validadeForm();
});
function validadeForm() {
    let isValid = true;
    if (nameInput.value.trim() === '') {
        displayError(nameError, 'Por favor, insira seu nome.'); 
        isValid = false;
    } else {
       clearError(nameError);   
    }
    if (emailInput.value.trim() === '') {
        displayError(emailError, 'Por favor, insira seu e-mail.');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        displayError(emailError, 'Por favor, insira um e-mail válido.');
        isValid = false;
    } else {
        clearError(emailError);
    }
    if (messageInput.value.trim() === '') {
        displayError(messageError, 'Por favor, insira sua mensagem.');
        isValid = false;
    } else {
        clearError(messageError);
    }
    if (isValid) {
        displayMessage('Formulário enviado com sucesso!', 'success');
        contactForm.reset();
    } else {
        displayMessage('Por favor, corrija os erros acima.', 'error');
    }
}
function displayError(element, message) {
    element.textContent = message;
}
function clearError(element) {
    element.textContent = '';
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function displayMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}