let paper
let links
let countdown
let cuenta
let asistenciaInput
let asistenciaButton
document.addEventListener("DOMContentLoaded", function() {
  paper = document.getElementById("paper")
  countdown = document.getElementById("countdown")
  cuenta = document.getElementById("cuenta")
  links = document.querySelectorAll(".link")
  asistenciaInput = document.getElementById("asistenciaInput")
  asistenciaButton = document.getElementById("asistenciaButton")
  links.forEach((link) => {
    link.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
  })
  countdown.style.fontSize = `${Math.round(paper.offsetWidth * 0.035)}px`
  cuenta.style.fontSize = `${Math.round(paper.offsetWidth * 0.030)}px`
  asistenciaInput.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
  asistenciaButton.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
})
window.addEventListener("resize", function() {
  links.forEach((link) => {
    link.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
    countdown.style.fontSize = `${Math.round(paper.offsetWidth * 0.030)}px`
    cuenta.style.fontSize = `${Math.round(paper.offsetWidth * 0.030)}px`
    asistenciaInput.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
    asistenciaButton.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
  })
})
