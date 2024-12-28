let paper
let links
let countdown
let cuenta
document.addEventListener("DOMContentLoaded", function() {
  paper = document.getElementById("paper")
  countdown = document.getElementById("countdown")
  cuenta = document.getElementById("cuenta")
  links = document.querySelectorAll(".link")
  links.forEach((link) => {
    link.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
  })
  countdown.style.fontSize = `${Math.round(paper.offsetWidth * 0.035)}px`
  cuenta.style.fontSize = `${Math.round(paper.offsetWidth * 0.030)}px`
})
window.addEventListener("resize", function() {
  links.forEach((link) => {
    link.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
    countdown.style.fontSize = `${Math.round(paper.offsetWidth * 0.030)}px`
  })
})
