function acceder() {
  let input = document.getElementById("asistenciaInput")
  let codigo = input.value
  switch (codigo) {
    case "2dd072ae-cf9d":
      window.open("https://www.google.com")
      input.style.borderColor = "green"
      break;

    case "a97264d9-811a":
      window.open("https://www.youtube.com")
      input.style.borderColor = "green"
      break;

    default:
      input.style.borderColor = "red"
      break;
  }
}
