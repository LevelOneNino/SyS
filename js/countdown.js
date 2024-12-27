let dias
let horas
let minutos
let segundos

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

document.addEventListener("DOMContentLoaded", () => {

  dias = document.getElementById("dias")
  horas = document.getElementById("horas")
  minutos = document.getElementById("minutos")
  segundos = document.getElementById("segundos")

  let matrimonio = new Date("2025-02-15T00:00:00.000").getTime()
  intervalId = setInterval(() => {
    let now = new Date().getTime()
    let dist = matrimonio - now
    dias.innerText = Math.floor(dist / day)
    horas.innerText = Math.floor((dist % day) / hour)
    minutos.innerText = Math.floor((dist % hour) / minute)
    segundos.innerText = Math.floor((dist % minute) / second)
    if (dist < 0) {
      clearInterval(intervalId)
      dias.innerText = "00"
      horas.innerText = "00"
      minutos.innerText = "00"
      segundos.innerText = "00"
    }
  }, 10);
})
