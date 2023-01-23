window.onscroll = function () {
  if (document.documentElement.scrollTop > 10) {
    document.querySelector(".go-top-container").classList.add("show")
  } else {
    document.querySelector(".go-top-container").classList.remove("show")
  }
}

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

let checkedButton = document.getElementById("check")

// Cerrar menu al hacer scroll

window.addEventListener("scroll", () => {
  if (checkedButton.checked) {
    checkedButton.checked = false
  }
})
