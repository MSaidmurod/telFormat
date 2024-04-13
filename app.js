let uz = document.querySelector(".uz");
let ru = document.querySelector(".ru");
let by = document.querySelector(".by");
let tr = document.querySelector(".tr");
let tj = document.querySelector(".tj");
let tm = document.querySelector(".tm");
let az = document.querySelector(".az");
let af = document.querySelector(".af");
let input = document.querySelector("input");
let btnText = document.getElementById("btn");

function formatPhoneNumber(input) {
  let x = input.replace(/\D/g, "").match(/(\d{0,2})(\d{0,3})(\d{0,4})/);
  return !x[2] ? x[1] : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
}

uz.addEventListener("click", () => {
  btnText.textContent = "uz";
  input.value = "";
  input.removeEventListener("input", handleInput);
  input.addEventListener("input", handleInput);
});

ru.addEventListener("click", () => {
  btnText.textContent = "ru";
  input.value = "";
  input.removeEventListener("input", handleInput);
  input.addEventListener("input", handleInput);
});

by.addEventListener("click", () => {
  btnText.textContent = "by";
  input.value = "";
  input.removeEventListener("input", handleInput);
  input.addEventListener("input", handleInput);
});

tr.addEventListener("click", () => {
  btnText.textContent = "tr";
  input.value = "";
  input.removeEventListener("input", handleInput);
  input.addEventListener("input", handleInput);
});

tj.addEventListener("click", () => {
  btnText.textContent = "tj";
  input.value = "";
  input.removeEventListener("input", handleInput);
  input.addEventListener("input", handleInput);
});

tm.addEventListener("click", () => {
  btnText.textContent = "tm";
  input.value = "";
  input.removeEventListener("input", handleInput);
  input.addEventListener("input", handleInput);
});

az.addEventListener("click", () => {
  btnText.textContent = "az";
  input.value = "";
  input.removeEventListener("input", handleInput);
  input.addEventListener("input", handleInput);
});

af.addEventListener("click", () => {
  btnText.textContent = "af";
  input.value = "";
  input.removeEventListener("input", handleInput);
  input.addEventListener("input", handleInput);
});

function handleInput(event) {
  event.target.value = formatPhoneNumber(event.target.value);
}
