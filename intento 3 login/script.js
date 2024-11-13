let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;
    const formTitle = document.getElementById('formTitle');
    const submitButton = document.querySelector('button[type="submit"]');
    const toggleText = document.getElementById('toggleForm');
    const nameField = document.getElementById('nameField');
    const authForm = document.getElementById('authForm');

    if (isLogin) {
        formTitle.textContent = 'Iniciar Sesión';
        submitButton.textContent = 'Iniciar Sesión';
        toggleText.innerHTML = '¿No tienes una cuenta? <a href="#" onclick="toggleForm()">Regístrate</a>';
        nameField.style.display = 'none';
        authForm.action = 'auth.php';
    } else {
        formTitle.textContent = 'Registrarse';
        submitButton.textContent = 'Registrarse';
        toggleText.innerHTML = '¿Ya tienes una cuenta? <a href="#" onclick="toggleForm()">Inicia sesión</a>';
        nameField.style.display = 'block';
        authForm.action = 'register.php';
    }
}

document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
        if (data.success) {
            document.getElementById('message').style.color = 'green';
        } else {
            document.getElementById('message').style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Ha ocurrido un error. Por favor, intenta de nuevo.';
        document.getElementById('message').style.color = 'red';
    });
});


// script.js
function toggleForm() {
    const formTitle = document.getElementById('formTitle');
    const nameField = document.getElementById('nameField');
    const submitButton = document.getElementById('submitButton');
    const formType = document.getElementById('formType');
    const toggleText = document.getElementById('toggleForm');

    if (formType.value === 'login') {
        // Cambiar a Registro
        formTitle.innerText = 'Registro';
        nameField.style.display = 'block';
        submitButton.innerText = 'Registrarse';
        formType.value = 'register';
        toggleText.innerHTML = '¿Ya tienes una cuenta? <a href="#" onclick="toggleForm()">Iniciar Sesión</a>';
    } else {
        // Cambiar a Inicio de Sesión
        formTitle.innerText = 'Iniciar Sesión';
        nameField.style.display = 'none';
        submitButton.innerText = 'Iniciar Sesión';
        formType.value = 'login';
        toggleText.innerHTML = '¿No tienes una cuenta? <a href="#" onclick="toggleForm()">Regístrate</a>';
    }
}

// script.js
function toggleForm() {
    const formTitle = document.getElementById('formTitle');
    const nameField = document.getElementById('nameField');
    const submitButton = document.getElementById('submitButton');
    const formType = document.getElementById('formType');
    const toggleText = document.getElementById('toggleForm');

    if (formType.value === 'login') {
        // Cambiar a Registro
        formTitle.innerText = 'Registro';
        nameField.style.display = 'block';
        submitButton.innerText = 'Registrarse';
        formType.value = 'register';
        toggleText.innerHTML = '¿Ya tienes una cuenta? <a href="#" onclick="toggleForm()">Iniciar Sesión</a>';
    } else {
        // Cambiar a Inicio de Sesión
        formTitle.innerText = 'Iniciar Sesión';
        nameField.style.display = 'none';
        submitButton.innerText = 'Iniciar Sesión';
        formType.value = 'login';
        toggleText.innerHTML = '¿No tienes una cuenta? <a href="#" onclick="toggleForm()">Regístrate</a>';
    }
}

function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm.style.display === 'none') {
        // Mostrar formulario de login y ocultar registro
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        // Mostrar formulario de registro y ocultar login
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}
