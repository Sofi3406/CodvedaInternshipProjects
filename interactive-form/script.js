const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const successMsg = document.querySelector('.success');

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
}

function clearError(input) {
  const error = input.nextElementSibling;
  error.textContent = '';
}

function validateName() {
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    return false;
  }
  clearError(nameInput);
  return true;
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    showError(emailInput, 'Enter a valid email');
    return false;
  }
  clearError(emailInput);
  return true;
}

function validatePhone() {
  const phonePattern = /^09\d{8}$/;
  if (!phonePattern.test(phoneInput.value)) {
    showError(phoneInput, 'Enter a valid phone number');
    return false;
  }
  clearError(phoneInput);
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters');
    return false;
  }
  clearError(passwordInput);
  return true;
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const isValid =
    validateName() &
    validateEmail() &
    validatePhone() &
    validatePassword();

  if (isValid) {
    successMsg.textContent = 'Registration successful!';
    form.reset();
  }
});
