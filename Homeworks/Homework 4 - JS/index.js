const form = document.querySelector('#reg-form');
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,10}$/;
const postalCodeRegex = /^\d{4}$|^\d{5}-\d{4}$/;

const validateForm = async (event) => {
    event.preventDefault();

    let errorMessageElements = document.querySelectorAll('.error');
    errorMessageElements.forEach((errorElement) => errorElement.textContent = '');

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const postalCode = document.querySelector('#postal-code').value;

    let hasErrors = false;

    if (!password.match(passwordRegex)) {
        document.querySelector('#password-error').textContent = "Паролата трябва да съдържа глави малки букви и цифри и да е между 6 и 10 символа.";
        hasErrors = true;
    }

    if (postalCode && !postalCode.match(postalCodeRegex)) {
        document.querySelector('#postal-code-error').textContent = "Пощенският код трябва да е във формат 1111 или 11111-1111.";
        hasErrors = true;
    }

    if (hasErrors) return;

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const usernameExists = users.some(user => user.username === username);
    if (usernameExists) {
        document.querySelector('#username-error').textContent = "Потребителското име вече съществува.";
        return;
    }

    document.querySelector('#success').textContent = "Успешна регистрация!";
    form.style.display = 'none';
};

form.addEventListener('submit', validateForm);
