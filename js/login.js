document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

  // Validar usuario y contraseña
    if (user === "admin" && pass === "admin123") {
        // Guardar en localStorage
        localStorage.setItem("usuarioLogueado", user);

        mensaje.style.color = "green";
        mensaje.textContent = "✅ Login exitoso, bienvenido " + user;

    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "❌ Usuario o contraseña incorrectos";
    }
    console.log(user);
});

