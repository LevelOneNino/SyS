function acceder() {
  let input = document.getElementById("asistenciaInput")
  let codigo = input.value
  switch (codigo) {
    case "011440486217":
      window.open("https://forms.gle/sJNXFbibifcveZow6")
      input.style.borderColor = "green"
      break;

    case "091354566426":
      window.open("https://forms.gle/D1nRd4stfLGJK9nT7")
      input.style.borderColor = "green"
      break;

    default:
      input.style.borderColor = "red"
      break;
  }
}
