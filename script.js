let icone = document.querySelector(".icone");
let ul = document.querySelector(".navbar-wrepper-hide");

icone.addEventListener("click", () => {
  ul.classList.toggle("showData");
});

let iconehidden = document.querySelector(".icone");
let ulhidden = document.querySelector(".navbar-wrepper-hide.relative");

iconehidden.addEventListener("click", () => {
  ulhidden.classList.toggle("showData");
});
