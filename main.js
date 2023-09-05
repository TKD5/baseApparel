const button = document.getElementById('button');
const error = document.getElementById('error');
const errorImage = document.getElementById('js-error-image');

button.addEventListener('click', function() {
    const emailInput = document.querySelector('input[name="email"]');
    const isEmailValid = emailInput.checkValidity();
    
    if (isEmailValid === false) {
        error.classList.remove('hidden');
        errorImage.classList.remove('hidden');
    }
})