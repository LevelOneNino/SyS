let paper
let links
document.addEventListener("DOMContentLoaded", function() {
  paper = document.getElementById("paper")
  links = document.querySelectorAll(".link")
  links.forEach((link) => {
    let fontSize = Math.round(paper.offsetWidth * 0.04)
    link.style.fontSize = `${fontSize}px`
  })
})
window.addEventListener("resize", function() {
  links.forEach((link) => {
    let fontSize = Math.round(paper.offsetWidth * 0.04)
    link.style.fontSize = `${fontSize}px`
  })
})
