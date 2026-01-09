document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll('.feature');

  if (features.length > 0) {
    window.addEventListener('scroll', () => {
      features.forEach(feature => {
        const position = feature.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
          feature.style.opacity = '1';
          feature.style.transform = 'translateY(0)';
        }
      });
    });
  }
  const form = document.getElementById('registrationForm');

  if (form) {
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
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
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

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isValid =
        validateName() &&
        validateEmail() &&
        validatePhone() &&
        validatePassword();

      if (isValid) {
  successMsg.textContent = 'Registration successful!';

  // redirect after short delay
  setTimeout(() => {
    window.location.href = "../counter-app/index.html";
  }, 1000);

  form.reset();
}

    });
  }

  let count = 0;

  const countDisplay = document.getElementById('count');
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');
  const resetBtn = document.getElementById('reset');

  if (countDisplay && incrementBtn && decrementBtn && resetBtn) {
    incrementBtn.addEventListener('click', () => {
      count++;
      updateDisplay();
    });

    decrementBtn.addEventListener('click', () => {
      if (count > 0) {
        count--;
        updateDisplay();
      }
    });

    resetBtn.addEventListener('click', () => {
      count = 0;
      updateDisplay();
    });

    function updateDisplay() {
      countDisplay.textContent = count;
    }
  }

});
