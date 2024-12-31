function acceder() {
  let input = document.getElementById("asistenciaInput")
  let codigo = input.value
  switch (codigo) {
    case "2dd072ae-cf9d":
      window.open("https://forms.gle/sJNXFbibifcveZow6")
      input.style.borderColor = "green"
      break;

    case "a97264d9-811a":
      window.open("https://forms.gle/D1nRd4stfLGJK9nT7")
      input.style.borderColor = "green"
      break;

    default:
      input.style.borderColor = "red"
      break;
  }
}
