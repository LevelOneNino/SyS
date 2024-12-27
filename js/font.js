let paper
let links
let countdown
document.addEventListener("DOMContentLoaded", function() {
  paper = document.getElementById("paper")
  countdown = document.getElementById("countdown")
  links = document.querySelectorAll(".link")
  links.forEach((link) => {
    link.style.fontSize = `${Math.round(paper.offsetWidth * 0.020)}px`
  })
  countdown.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
})
window.addEventListener("resize", function() {
  links.forEach((link) => {
    link.style.fontSize = `${Math.round(paper.offsetWidth * 0.020)}px`
    countdown.style.fontSize = `${Math.round(paper.offsetWidth * 0.025)}px`
  })
})
