// Función para mostrar alerta personalizada
function mostrarAlerta() {
  alert("¡Hola! Esta es una alerta personalizada.");
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Validación nombre
  if (name.value.trim() === "") {
    name.classList.add("is-invalid");
    isValid = false;
  } else {
    name.classList.remove("is-invalid");
  }

  // Validación email
  if (!email.value.includes("@") || email.value.trim() === "") {
    email.classList.add("is-invalid");
    isValid = false;
  } else {
    email.classList.remove("is-invalid");
  }

  // Validación mensaje
  if (message.value.trim() === "") {
    message.classList.add("is-invalid");
    isValid = false;
  } else {
    message.classList.remove("is-invalid");
  }

  if (isValid) {
    alert("Formulario enviado con éxito. ¡Gracias por contactarnos!");
    this.reset();
  }
});