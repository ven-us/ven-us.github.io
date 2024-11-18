function registrer.html() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let gender = document.getElementById("gender").value;

    // Guarda los datos en localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userName", `${firstName} ${lastName}`);
    alert("Usuario registrado con éxito");

    // Redirige a la página de inicio de sesión
    window.location.href = "login.html";
}

function login.html() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Valida credenciales
    if (email === localStorage.getItem("userEmail") && password === localStorage.getItem("userPassword")) {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html";
    } else {
        alert("Credenciales incorrectas");
    }
}


